import { Table } from "@mantine/core";

export function DashboardTable({children}: Readonly<{children: React.ReactNode;}>){
  return(
    <Table highlightOnHover mah="80vh">
      {children}
    </Table>  
  )
}