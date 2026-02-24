'use client';

import * as Icons from '@tabler/icons-react';
import { IconProps } from '@tabler/icons-react';
import { FC, useMemo, useState } from 'react';
import {
  Popover,
  ActionIcon,
  SimpleGrid,
  TextInput,
  Stack,
  Button,
} from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';

const allBrandIcons = Object.keys(Icons).filter((key) =>
  key.startsWith('IconBrand')
);

type Props = {
  value: string;
  onChange: (iconName: string) => void;
};

export default function IconSelector({ value, onChange }: Props) {
  const [search, setSearch] = useState('');
  const [limit, setLimit] = useState(20);

  const filteredIcons = useMemo(() => {
    const lower = search.toLowerCase();

    return allBrandIcons
      .filter((name) => name.toLowerCase().includes(lower))
      .slice(0, limit);
  }, [search, limit]);

  const SelectedIcon =
    Icons[value as keyof typeof Icons] as FC<IconProps> | undefined;

  return (
    <Popover width={340} position="bottom" shadow="md">
      <Popover.Target>
        <ActionIcon variant="default" size="lg">
          {SelectedIcon ? <SelectedIcon size={20} /> : '?'}
        </ActionIcon>
      </Popover.Target>

      <Popover.Dropdown>
        <Stack gap="xs">
          <TextInput
            placeholder="Search icon..."
            value={search}
            onChange={(e) => {
              setSearch(e.currentTarget.value);
              setLimit(20); // reset pagination when searching
            }}
            leftSection={<IconSearch size={16} />}
          />

          <SimpleGrid cols={6} spacing="xs">
            {filteredIcons.map((iconName) => {
              const Icon =
                Icons[iconName as keyof typeof Icons] as FC<IconProps>;

              return (
                <ActionIcon
                  key={iconName}
                  variant={value === iconName ? 'filled' : 'subtle'}
                  onClick={() => onChange(iconName)}
                >
                  <Icon size={18} />
                </ActionIcon>
              );
            })}
          </SimpleGrid>

          {allBrandIcons.filter((name) =>
            name.toLowerCase().includes(search.toLowerCase())
          ).length > limit && (
            <Button
              variant="subtle"
              size="xs"
              onClick={() => setLimit((prev) => prev + 20)}
            >
              Load more
            </Button>
          )}
        </Stack>
      </Popover.Dropdown>
    </Popover>
  );
}