import { useTransition } from "react";
import { Button, Group, Text } from "@mantine/core";
import { useLocale } from "next-intl";
import { useSearchParams } from "next/navigation";
import { usePathname, useRouter } from "@/i18n/navigation";

const locales = [
  { locale: "en", alt: "English", label: "EN" },
  { locale: "fr", alt: "Français", label: "FR" },
];

export function LocaleSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentLocale = useLocale();
  const [isPending, startTransition] = useTransition();

  const handleToggle = async () => {
    const nextLocale = currentLocale === "en" ? "fr" : "en";


    startTransition(() => {
      router.replace(
          {
            pathname: pathname as any,
            query: Object.fromEntries(searchParams?.entries() || [])
          },
          { locale: nextLocale }
      );
    });
  };

  const current =
      locales.find((item) => item.locale === currentLocale) || locales[0];

  return (
      <Button
          onClick={handleToggle}
          disabled={isPending}
          variant="white"
          radius="xl"
          px="xs"
          aria-label="Switch language"
      >
        <Group gap={4}>
          <Text size="lg" fw={600}>
            {current.label}
          </Text>
        </Group>
      </Button>
  );
}