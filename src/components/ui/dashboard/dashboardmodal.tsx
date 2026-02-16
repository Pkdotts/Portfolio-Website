import { Button, MantineSize, Modal, Stack, Title } from "@mantine/core";

export interface ModalProps<T> {
  opened: boolean;
  close: () => void;
  action: ModalActions;
  title: string;
  size?: number | MantineSize | (string & {}) | undefined;
  item?: T | null;
  itemName: string | undefined;
  itemId: any;
  itemIdName: string;
  createAction: (formData: FormData) => void;
  updateAction: (formData: FormData) => void;
  deleteAction: (id: any) => void;
  children: React.ReactNode;
}

export function DashboardModal<T>({
  opened,
  close,
  action,
  title,
  size = "lg",
  itemName,
  itemId,
  itemIdName,
  createAction,
  updateAction,
  deleteAction,
  children
}: ModalProps<T>) {

  const formAction = 
  action === ModalActions.create ? createAction : 
  action === ModalActions.edit ? updateAction : deleteAction;

  return (
    <Modal title={title} opened={opened} onClose={close} size={size} >
      {(action === ModalActions.delete) ? 
      <Stack>
        Do you reaaaaally wanna delete this?
        <Title size="xl">
          {itemName}
        </Title>
        <Button type="submit" onClick={() => {
          deleteAction(itemId);
          close();
        }}>
            Delete
        </Button> 
      </Stack> :
      <form name="form" action={formAction}>
        <Stack>
          {children}
          <input type="hidden" name={itemIdName} value={itemId}/>
          <Button type="submit" onClick={close}>
            {action === ModalActions.create ? "Create" : action === ModalActions.edit ? "Update" : "Delete"}
          </Button>
        </Stack>
      </form>
      }
    </Modal>
  );
}

export enum ModalActions{
  "create", "edit", "delete"
}