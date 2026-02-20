"use client";
import { updateTranslation } from "@/app/api/controllers/translationsController";
import DashBar from "@/components/ui/dashboard/dashbar";
import { DashboardTable } from "@/components/ui/dashboard/dashboardtable";
import { Translation } from "@/generated/prisma/client";
import { Button, Container, Divider, Flex, Group, Input, Paper, Stack, TableTbody, TableTd, TableTh, TableThead, TableTr, Text, Textarea } from "@mantine/core";
import { useResizeObserver } from "@mantine/hooks";
import { useMemo } from "react";

function TranslationTable({
  translations, 
}: {
  translations: Translation[], 
}){
  return(
    <DashboardTable>
        <TableThead>
          <TableTr>
          <TableTh colSpan={1}>Key</TableTh>
          <TableTh colSpan={1}>English</TableTh>
          <TableTh colSpan={1}>French</TableTh>
        </TableTr>
        </TableThead>
        <TableTbody>
        {translations.map((t) => (
          <TranslationRow t={t} key={t.key}/>
        ))}
        </TableTbody>
    </DashboardTable>
  )
}

function TranslationRow({
    t
}: {
    t: Translation
}){
    const [ref1, rect1] = useResizeObserver();
    const [ref2, rect2] = useResizeObserver();

    const height: string = useMemo(() =>
        Math.max(rect1.height, rect2.height).toString(), 
    
    [rect1, rect2]
    );
    

    return(
        <TableTr id={t.key.toString()}>
            <TableTd style={{ verticalAlign: "top" }}>
                <input type="hidden" name="key" value={t.key}/>
                {t.key}
            </TableTd>
            <TableTd style={{ verticalAlign: "top" }}>
                <Textarea ref={ref1} name="en" placeholder="English" defaultValue={t.en} variant="unstyled" required autosize />
            </TableTd>
            <TableTd style={{ verticalAlign: "top" }}>
                <Textarea ref={ref2} name="fr" placeholder="French" defaultValue={t.fr} variant="unstyled" autosize h="100%" w="100%"/>
            </TableTd>
            <TableTd/>
        </TableTr>
    )

}


export default function HomeDashboard({
    translations,
    }: {
    translations: Translation[],
}){
    return(
        <Container w="100%" p="xs" size="md">
            <Paper bdrs="md">
                <DashBar/>
                <Divider/>
                <form action={updateTranslation}>
                    <TranslationTable translations={translations}/>
                    <Group justify="flex-end" p="md">
                        <Button type="submit">Update</Button>
                    </Group>
                </form>
            </Paper>
        </Container>
    );
    
}