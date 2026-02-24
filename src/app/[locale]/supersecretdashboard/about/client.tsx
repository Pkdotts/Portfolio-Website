"use client";

import { useState} from "react";

import { Text, Group, Paper, Table, TableThead, TableTr, TableTd, TableTh, Button, Tabs, TabsList, TabsTab, TabsPanel, Divider, Input, Textarea, NumberInput, TableTbody, ActionIcon, Modal, Container, Tooltip } from "@mantine/core";
import { Education, Hobby, WorkExperience } from "@/generated/prisma/client";
import { useDisclosure } from "@mantine/hooks";
import { SkillTypeWithSkills } from "@/entities/types";
import { createSkill, deleteSkill, updateSkill } from "@/app/api/controllers/skillController";
import { createExperience, deleteExperience, updateExperience } from "@/app/api/controllers/experienceController";
import { createEducation, deleteEducation, updateEducation } from "@/app/api/controllers/educationController";
import { createHobby, deleteHobby, updateHobby } from "@/app/api/controllers/hobbyController";
import TableRowButtons from "@/components/ui/dashboard/tablerowbuttons";
import { IconPlus } from "@tabler/icons-react";
import { DashboardModal, ModalActions } from "@/components/ui/dashboard/dashboardmodal";
import DashBar from "@/components/ui/dashboard/dashbar";
import { DashboardTable } from "@/components/ui/dashboard/dashboardtable";


function SkillsTable({
  skills,
  openEditModal,
  openDeleteModal,
  openCreateModal
}: {
  skills: SkillTypeWithSkills[];
  openEditModal: (item: SelectedItem) => void;
  openDeleteModal: (item: SelectedItem) => void;
  openCreateModal: (skillType: string) => void;
}){

  return(
    <DashboardTable>
      <TableThead>
        <TableTr>
          <TableTh colSpan={1}>Type</TableTh>
          <TableTh colSpan={1}>Name EN</TableTh>
          <TableTh colSpan={1}>Name FR</TableTh>
        </TableTr>
      </TableThead>
        {skills.map((t) => (
          <TableTbody key={t.name_en}>
            <TableTr>
              <TableTd>
              <Text>
                {t.name_en}
              </Text>
              </TableTd>
              <TableTd/>
              <TableTd/>
              <TableTd align="right">
                <Tooltip label="Add skill">
                  <ActionIcon
                    size="sm"
                    variant="subtle"
                    onClick={() =>
                      openCreateModal(t.name_en)
                    }
                  >
                    <IconPlus />
                  </ActionIcon>
                </Tooltip>
              </TableTd>
            </TableTr>
            
            {t.Skill.map((s) => (
              <TableTr key={s.skillId}>
                <TableTd />
                <TableTd>{s.name_en}</TableTd>
                <TableTd>{s.name_fr}</TableTd>

                <TableRowButtons
                  id={s.skillId}
                  openEditModal={() =>
                    openEditModal({ type: "skill", data: s })
                  }
                  openDeleteModal={() =>
                    openDeleteModal({ type: "skill", data: s })
                  }
                />
              </TableTr>
            ))}
            
          </TableTbody>
      ))}
    </DashboardTable>
  )
}

function ExperienceTable({
  experience,
  openEditModal,
  openDeleteModal
}: {
  experience: WorkExperience[],
  openEditModal: (item: SelectedItem) => void
  openDeleteModal: (item: SelectedItem) => void
}){
  return(
    <DashboardTable>
        <TableThead>
          <TableTr>
          <TableTh colSpan={1}>Position EN</TableTh>
          <TableTh colSpan={1}>Position FR</TableTh>
          <TableTh colSpan={1}>Company</TableTh>
          <TableTh colSpan={1}>Description EN</TableTh>
          <TableTh colSpan={1}>Description FR</TableTh>
          <TableTh colSpan={1}>Start Date</TableTh>
          <TableTh colSpan={1}>End Date</TableTh>
          <TableTh/>
        </TableTr>
        </TableThead>
        <TableTbody>
        {experience.map((e) => (
          <TableTr id={e.workId.toString()} key={e.workId}>
            <TableTd >
              {e.position_en}
            </TableTd>
            <TableTd >
              {e.position_fr}
            </TableTd>
            <TableTd >
              {e.company}
            </TableTd>
            <TableTd >
              {e.description_en}
            </TableTd>
            <TableTd >
              {e.description_fr}
            </TableTd>
            <TableTd >
              {e.startDate}
            </TableTd>
            <TableTd >
              {e.endDate}
            </TableTd>
            <TableTd/>
            <TableRowButtons 
              id={e.workId} 
              openEditModal={() => openEditModal({type:"experience", data: e})} 
              openDeleteModal={() => openDeleteModal({type:"experience", data: e})}
            />
          </TableTr>
        ))}
      </TableTbody>
    </DashboardTable>
  )
}

function EducationTable({
  education, 
  openEditModal,
  openDeleteModal
}: {
  education: Education[], 
  openEditModal: (item: SelectedItem) => void,
  openDeleteModal: (item: SelectedItem) => void
}){
  return(
    <DashboardTable>
        <TableThead>
          <TableTr>
          <TableTh colSpan={1}>Diploma</TableTh>
          <TableTh colSpan={1}>School</TableTh>
          <TableTh colSpan={1}>Start Year</TableTh>
          <TableTh colSpan={1}>End Year</TableTh>
        </TableTr>
        </TableThead>
        <TableTbody>
        {education.map((e) => (
          <TableTr id={e.educationId.toString()} key={e.educationId}>
            <TableTd >
              {e.diploma}
            </TableTd>
            <TableTd >
              {e.school}
            </TableTd>
            <TableTd >
              {e.startYear}
            </TableTd>
            <TableTd >
              {e.endYear}
            </TableTd>
            <TableTd/>
            <TableRowButtons 
              id={e.educationId} 
              openEditModal={() => openEditModal({type:"education", data: e})} 
              openDeleteModal={() => openDeleteModal({type:"education", data: e})}
            />
          </TableTr>
        ))}
        </TableTbody>
    </DashboardTable>
  )
}

function HobbiesTable({
  hobbies, 
  openEditModal,
  openDeleteModal
}: {
  hobbies: Hobby[], 
  openEditModal: (item: SelectedItem) => void,
  openDeleteModal: (item: SelectedItem) => void
}
){
  return(
    <DashboardTable>
        <TableThead>
          <TableTr>
          <TableTh colSpan={1}>Name EN</TableTh>
          <TableTh colSpan={1}>Name FR</TableTh>
        </TableTr>
        </TableThead>
        <TableTbody>
        {hobbies.map((h) => (
          <TableTr id={h.hobbyId.toString()} key={h.hobbyId}>
            <TableTd >
              {h.name_en}
            </TableTd>
            <TableTd >
              {h.name_fr}
            </TableTd>
            <TableTd/>
            <TableRowButtons 
              id={h.hobbyId} 
              openEditModal={() => openEditModal({type:"hobby", data: h})} 
              openDeleteModal={() => openDeleteModal({type:"hobby", data: h})}
            />
          </TableTr>
        ))}
      </TableTbody>
    </DashboardTable>
  )
}

type SelectedItem =
  | { type: "experience"; data: WorkExperience }
  | { type: "education"; data: Education }
  | { type: "hobby"; data: Hobby }
  | { type: "skill"; data: { skillId: number; name_en: string; name_fr: string | null; skillType: string } }
  | null;

export default function AboutDashboard({
  skillTypes, 
  experience,
  education,
  hobbies
  }: {
  skillTypes: ({
    Skill: {
        name_en: string;
        name_fr: string | null;
        skillType: string;
        skillId: number;
    }[];
  } & {
      name_en: string;
      name_fr: string | null;
  })[],
  experience: WorkExperience[],
  education: Education[],
  hobbies: Hobby[]
  }) {
    const [opened, { open, close }] = useDisclosure(false);
    const [activeTab, setActiveTab] = useState<string | null>('skills');
    const [selectedSkillType, setSelectedSkillType] = useState<string | null>(null);
    const [selectedItem, setSelectedItem] = useState<SelectedItem>(null);
    const [modalAction, setModalAction] = useState<ModalActions>(ModalActions.create);

    const skillItem =
      selectedItem?.type === "skill"
        ? selectedItem.data
        : null;

    const experienceItem =
      selectedItem?.type === "experience"
        ? selectedItem.data
        : null;

    const educationItem =
      selectedItem?.type === "education"
        ? selectedItem.data
        : null;

    const hobbyItem =
      selectedItem?.type === "hobby"
        ? selectedItem.data
        : null;

    function openEditModal(item: SelectedItem) {
      setSelectedSkillType(null);
      setSelectedItem(item);
      setModalAction(ModalActions.edit);
      open();
    }

    function openCreateModal(){
      setSelectedItem(null);
      setModalAction(ModalActions.create);
      open();
    }

    function openCreateSkillModal(skill: string){
      setSelectedSkillType(skill);
      openCreateModal();
    }

    function openDeleteModal(item: SelectedItem){
      setSelectedSkillType(null);
      setSelectedItem(item)
      setModalAction(ModalActions.delete);
      open();
    }


    return (
      <>
        <Container w="100%" p="xs" size="md">
          <Paper bdrs="md">
            <DashBar/>
            <Group p="xs" justify="flex-start">
                <Button size="sm" onClick={openCreateModal} disabled={activeTab === "skills"} leftSection={<IconPlus/>}>
                  Add 
                </Button>
              </Group>
            <Divider/>
            <Tabs defaultValue="skills" 
              value={activeTab}
              onChange={setActiveTab}
            >
              <TabsList justify="center" grow>
                <TabsTab value="skills">
                  Skills
                </TabsTab>
                <TabsTab value="hobbies" >
                  Hobbies
                </TabsTab>
                <TabsTab value="experience" >
                  Experience
                </TabsTab>
                <TabsTab value="education" >
                  Education
                </TabsTab>
              </TabsList>
              <TabsPanel value="skills">
                <SkillsTable 
                  skills={skillTypes}
                  openCreateModal={openCreateSkillModal}
                  openEditModal={openEditModal}
                  openDeleteModal={openDeleteModal}
                />
              </TabsPanel>
              <TabsPanel value="hobbies">
                <HobbiesTable 
                  hobbies={hobbies} 
                  openEditModal={openEditModal}
                  openDeleteModal={openDeleteModal}
                />
              </TabsPanel>
              <TabsPanel value="experience">
                <ExperienceTable 
                  experience={experience}
                  openEditModal={openEditModal}
                  openDeleteModal={openDeleteModal}
                />
              </TabsPanel>
              <TabsPanel value="education">
                <EducationTable 
                  education={education} 
                  openEditModal={openEditModal}
                  openDeleteModal={openDeleteModal}
                />
              </TabsPanel>
            </Tabs>
          </Paper>
        </Container>
      {
          activeTab === "experience" ? 
          <DashboardModal<WorkExperience>
            opened={opened}
            close={close}
            action={modalAction}
            title="Experience"
            item={experienceItem}
            itemName={experienceItem?.position_en + " - " + experienceItem?.company}
            itemId={experienceItem?.workId}
            itemIdName="workId"
            createAction={createExperience}
            updateAction={updateExperience}
            deleteAction={deleteExperience}
          >
            <div>
              <Text>Position</Text>
              <Group grow>
                <Input name="positionEn" placeholder="Your position in english" defaultValue={experienceItem?.position_en} required/>
                <Input name="positionFr" placeholder="Your position in French" defaultValue={experienceItem?.position_fr ?? undefined}/>
              </Group>
            </div>
            <div>
              <Text>Company</Text>
              <Input name="company" placeholder="The place you worked at" defaultValue={experienceItem?.company} required/>
            </div>
            <div>
              <Text>Descriptions</Text>
              <Group grow>
                  <Textarea name="descriptionEn" placeholder="A brief synopsis in english" defaultValue={experienceItem?.description_en} required/>
                  <Textarea name="descriptionFr" placeholder="A brief synopsis in french" defaultValue={experienceItem?.description_fr ?? undefined}/>
              </Group>
              </div>
            <Group grow>
              <div>
                <Text>Start Date</Text>
                <NumberInput name="startDate" placeholder="Start Date" defaultValue={experienceItem?.startDate} required/>
              </div>
              <div>
                <Text>End Date</Text>
                <NumberInput name="endDate" placeholder="(Leave EMPTY if same as start year)" defaultValue={experienceItem?.endDate ?? undefined}/>
              </div>
            </Group>
          </DashboardModal> 
          
          : activeTab === "education" ? 
          
          <DashboardModal<Education>
            opened={opened}
            close={close}
            action={modalAction}
            title="Education"
            item={educationItem}
            itemName={educationItem?.school}
            itemId={educationItem?.educationId}
            itemIdName="educationId"
            createAction={createEducation}
            updateAction={updateEducation}
            deleteAction={deleteEducation}
          >
            <div>
              <Text>Diploma</Text>
              <Input name="diploma" placeholder="Your diploma, please" defaultValue={educationItem?.diploma} required/>
            </div>
            <div>
              <Text>School</Text>
              <Input name="school" placeholder="You school, please" defaultValue={educationItem?.school} required/>
            </div>
            <Group grow>
              <div>
                <Text>Start Year</Text>
                <NumberInput name="startYear" placeholder="Start Year" defaultValue={educationItem?.startYear} required/>
              </div>
              <div>
                <Text>End Year</Text>
                <NumberInput name="endYear" placeholder="(Leave EMPTY if same as start year)" defaultValue={educationItem?.endYear ?? undefined}/>
              </div>
            </Group>
          </DashboardModal> 
          
          : activeTab === "hobbies" ?
          
          <DashboardModal<Hobby>
            opened={opened}
            close={close}
            action={modalAction}
            title="Hobby"
            item={hobbyItem}
            itemName={hobbyItem?.name_en}
            itemId={hobbyItem?.hobbyId}
            itemIdName="hobbyId"
            createAction={createHobby}
            updateAction={updateHobby}
            deleteAction={deleteHobby}
          >
            <div>
              <Text>English Hobby Name</Text>
              <Input name="name_en" placeholder="Your hobby name, please" defaultValue={hobbyItem?.name_en ?? ''} required/>
            </div>
            <div>
              <Text>French Hobby Name</Text>
              <Input name="name_fr" placeholder="(Leave EMPTY if same as english)" defaultValue={hobbyItem?.name_fr ?? ''}/>
            </div>

          </DashboardModal> 
        : activeTab === "skills" && (

        <DashboardModal
          opened={opened}
          close={close}
          action={modalAction}
          title="Skill"
          item={skillItem}
          itemName={skillItem?.name_en}
          itemId={skillItem?.skillId}
          itemIdName="skillId"
          createAction={(formData) =>
            createSkill(formData, selectedSkillType ?? skillItem?.skillType ?? "Others")
          }
          updateAction={updateSkill}
          deleteAction={deleteSkill}
        >
          <div>
            <Text>English Skill Name</Text>
            <Input name="name_en" placeholder="Your skill name, please" defaultValue={skillItem?.name_en} required/>
          </div>
          <div>
            <Text>French Skill Name</Text>
            <Input name="name_fr" placeholder="(Leave EMPTY if same as english)" defaultValue={skillItem?.name_fr ?? undefined} />
          </div>
        </DashboardModal>
      )}
    </>
  );
}
