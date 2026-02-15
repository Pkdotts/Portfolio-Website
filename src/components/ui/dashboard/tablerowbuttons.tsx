import { ActionIcon, Group, TableTd, Tooltip } from "@mantine/core";
import { IconPencil, IconTrash } from "@tabler/icons-react";

interface TableRowProps{
    id: number | string, 
    openEditModal: (e: any) => void,
    openDeleteModal: (e: any) => void,
}

export default function TableRowButtons({id, openEditModal, openDeleteModal}:TableRowProps){

    return(
        <TableTd pos="relative" align="right">
            <Group justify="flex-end">
                {openEditModal && 
                    <Tooltip label="Edit">
                        <ActionIcon size="sm" variant="subtle" onClick={openEditModal}>
                            <IconPencil/>
                        </ActionIcon>
                    </Tooltip>
                }
                    <Tooltip label="Delete">
                        <ActionIcon size="sm" variant="subtle" onClick={openDeleteModal}>
                            <IconTrash />
                        </ActionIcon>
                    </Tooltip>
            </Group>
        </TableTd>
    )
}