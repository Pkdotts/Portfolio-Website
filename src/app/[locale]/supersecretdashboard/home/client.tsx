"use client";
import { updateTranslation } from "@/app/api/controllers/translationsController";
import DashBar from "@/components/ui/dashboard/dashbar";
import { DashboardTable } from "@/components/ui/dashboard/dashboardtable";
import { DropzoneButton, FileType } from "@/components/ui/dashboard/dropzonebutton";
import FileUpload from "@/components/ui/dashboard/pdfUpload";
import { Translation } from "@/generated/prisma/client";
import { Button, Container, Divider, FileButton, Flex, Group, Input, Paper, Stack, TableTbody, TableTd, TableTh, TableThead, TableTr, Text, Textarea } from "@mantine/core";
import { useResizeObserver } from "@mantine/hooks";
import { useMemo, useState } from "react";

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
                <Textarea ref={ref1} name="en" placeholder="English" defaultValue={t.en} required autosize />
            </TableTd>
            <TableTd style={{ verticalAlign: "top" }}>
                <Textarea ref={ref2} name="fr" placeholder="French" defaultValue={t.fr} autosize h="100%" w="100%"/>
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
    const resumeEnUrl = "https://tyygdwvbspeearfdnijp.supabase.co/storage/v1/object/public/Resume/Andy%20Bao%20Le%20-%20CV_EN.pdf";
    const resumeFrUrl = "https://tyygdwvbspeearfdnijp.supabase.co/storage/v1/object/public/Resume/Andy%20Bao%20Le%20-%20CV_FR.pdf";
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
                <Divider/>
                <div>
                    <Container>
                        <Group grow style={{verticalAlign: "top"}}>
                            <div>
                                <Text>English</Text>
                                <FileUpload 
                                    allowedTypes={["application/pdf"]} 
                                    fileName="Andy Bao Le - CV_EN.pdf"
                                    bucket="Resume"
                                    publicUrl={resumeEnUrl}
                                />
                                <Group justify="center" >
                                    
                                </Group>
                            </div>
                            <div>
                                <Text>French</Text>
                                <FileUpload 
                                    allowedTypes={["application/pdf"]} 
                                    fileName="Andy Bao Le - CV_FR.pdf"
                                    bucket="Resume"
                                    publicUrl={resumeFrUrl}
                                />
                            </div>
                        </Group>
                    </Container>
                </div>
            </Paper>
        </Container>
    );
    
}