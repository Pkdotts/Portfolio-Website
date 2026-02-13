import { ActionIcon, Group, TableTd } from "@mantine/core";
import { IconPencil, IconTrash } from "@tabler/icons-react";

interface TableRowProps{
    id: number | string, 
    edit?(): void, 
    del(id: number | string): Promise<void>,
}

export default function TableRowButtons({id, edit, del}:TableRowProps){

    return(
        <TableTd pos="absolute" right="1rem" align="right">

            <Group >
                {edit && 
                    <ActionIcon size="sm" variant="subtle" onClick={edit}>
                        <IconPencil/>
                    </ActionIcon>
                }
                    <ActionIcon size="sm" variant="subtle" onClick={() => {del(id) }}>
                        <IconTrash />
                    </ActionIcon>
            </Group>
        </TableTd>
    )
}