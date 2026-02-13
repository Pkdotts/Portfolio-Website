"use client";

import { act, useState} from "react";
import Sidebar from "@/components/ui/dashboard/sidebar";

import { Text, Stack, Title, Group, Paper, Table, TableThead, TableTr, TableTd, TableTh,  Grid, GridCol, Button, Tabs, TabsList, TabsTab, TabsPanel, Divider, Drawer,  Input, Textarea, NumberInput, TableTbody, ActionIcon } from "@mantine/core";
import { Education, Hobby, WorkExperience } from "@/generated/prisma/client";
import { useDisclosure } from "@mantine/hooks";
import { SkillTypeWithSkills } from "@/entities/types";
import { createSkill, deleteSkill } from "@/app/api/skills/skillController";
import { createExperience } from "@/app/api/experience/experienceController";
import { createEducation } from "@/app/api/education/educationController";
import { createHobby } from "@/app/api/hobbies/hobbyController";
import TableRowButtons from "@/components/ui/dashboard/tablerowbuttons";
import { IconPlus } from "@tabler/icons-react";

function AboutTable({children}: Readonly<{children: React.ReactNode;}>){
  return(
    <Table highlightOnHover mah="80vh">
      {children}
    </Table>  
  )
}

function SkillsTable({skills}: {skills: SkillTypeWithSkills[]}){

  const [opened, { open, close }] = useDisclosure(false);
  const [type, setType] = useState<string>("");

  return(
    <AboutTable>
      <TableThead>
        <TableTr>
          <TableTh colSpan={1}>Type</TableTh>
          <TableTh colSpan={1}>Name EN</TableTh>
          <TableTh colSpan={1}>Name FR</TableTh>
        </TableTr>
      </TableThead>
        {skills.map((t) => (
          <TableTbody>
            <TableTr>
              <TableTd>
              <Text>
                {t.name_en}
              </Text>
              </TableTd>
              <TableTd/>
              <TableTd/>
              <TableTd align="right">
                <ActionIcon variant="subtle" onClick={() => {open(); setType(t.name_en); }}>
                  <IconPlus/>
                </ActionIcon>
              </TableTd>
            </TableTr>
            {t.Skill.map((s) => (
              
              <TableTr>
                <TableTd/>
                <TableTd>
                  {s.name_en}
                </TableTd>
                <TableTd>
                  {s.name_fr}
                </TableTd>
                <TableRowButtons id={s.skillId} del={deleteSkill}/>
              </TableTr>
            ))}
          
          </TableTbody>
      ))}
      <Drawer opened={opened} onClose={close} title="Drawer" position="right" >
        <form action={(f) => createSkill(f, type)} className="space-y-6">
          <Stack>
            <div>
              <label htmlFor="name_en" className="block text-lg mb-2">
                Name EN
              </label>
              <Input
                type="text"
                id="name_en"
                name="name_en"
                placeholder="English skill name."
              />
            </div>
            <div>
              <label htmlFor="name_fr" className="block text-lg mb-2">
                Name FR
              </label>
              <Input
                id="name_fr"
                name="name_fr"
                placeholder="French skill name."
              />
            </div>
            <Button type="submit" onClick={close}>
              Create Skill
            </Button>
          </Stack>
        </form>
      </Drawer>
    </AboutTable>
  )
}



function ExperienceTable({experience}: {experience: WorkExperience[]}){
  return(
    <AboutTable>
        <TableThead>
          <TableTr>
          <TableTh colSpan={1}>Position</TableTh>
          <TableTh colSpan={1}>Company</TableTh>
          <TableTh colSpan={1}>Description</TableTh>
          <TableTh colSpan={1}>Start Date</TableTh>
          <TableTh colSpan={1}>End Date</TableTh>
        </TableTr>
        </TableThead>
        <TableTbody>
        {experience.map((e) => (
          <TableTr id={e.workId.toString()} key={e.workId}>
            <TableTd >
              {e.position}
            </TableTd>
            <TableTd >
              {e.company}
            </TableTd>
            <TableTd >
              {e.description}
            </TableTd>
            <TableTd >
              {e.startDate}
            </TableTd>
            <TableTd >
              {e.endDate}
            </TableTd>
          </TableTr>
        ))}
      </TableTbody>
    </AboutTable>
  )
}

function EducationTable({education}: {education: Education[]}){
  return(
    <AboutTable>
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
          </TableTr>
        ))}
        </TableTbody>
    </AboutTable>
  )
}

function HobbiesTable({hobbies}: {hobbies: Hobby[]}){
  return(
    <AboutTable>
        <TableThead>
          <TableTr>
          <TableTh colSpan={1}>Name EN</TableTh>
          <TableTh colSpan={1}>Name FR</TableTh>
        </TableTr>
        </TableThead>
        <TableTbody>
        {hobbies.map((h) => (
          <TableTr id={h.hobbyId.toString()}>
            <TableTd >
              {h.name_en}
            </TableTd>
            <TableTd >
              {h.name_fr}
            </TableTd>
          </TableTr>
        ))}
      </TableTbody>
    </AboutTable>
  )
}

interface DrawerProps{
  opened: boolean,
  close: () => void,
  children?: React.ReactNode,
}

function DashboardDrawer({opened, close, children}: DrawerProps){
  return(
    <Drawer opened={opened} onClose={close} title="Drawer" position="right">
      {children}
    </Drawer>
  )
}

function WorkExperienceDrawer({opened, close}: DrawerProps){
  return(
    <DashboardDrawer opened={opened} close={close}>
      <form action={createExperience} className="space-y-6">
        <Stack>
          <div>
            <label htmlFor="position" className="block text-lg mb-2">
              Position
            </label>
            <Input
              type="text"
              id="position"
              name="position"
              placeholder="Position"
            />
          </div>
          <div>
            <label htmlFor="company" className="block text-lg mb-2">
              Company
            </label>
            <Input
              type="text"
              id="company"
              name="company"
              placeholder="Company"
            />
          </div>
          <div>
            <label htmlFor="description" className="block text-lg mb-2">
              Description
            </label>
            <Textarea
              id="description"
              name="description"
              placeholder="Description"
            />
          </div>
          <div>
            <label htmlFor="startDate" className="block text-lg mb-2">
              Start Date
            </label>
            <NumberInput
              id="startDate"
              name="startDate"
              placeholder="Start Date"
            />
          </div>
          <div>
            <label htmlFor="endDate" className="block text-lg mb-2">
              End Date
            </label>
            <NumberInput
              id="endDate"
              name="endDate"
              placeholder="End Date"
            />
          </div>
          <Button type="submit" onClick={close}>
            Create Experience
          </Button>
        </Stack>
      </form>
    </DashboardDrawer>
  )
}

function EducationDrawer({opened, close}: DrawerProps){
  return(
    <DashboardDrawer opened={opened} close={close}>
      <form action={createEducation} className="space-y-6">
        <Stack>
          <div>
            <label htmlFor="diploma" className="block text-lg mb-2">
              Diploma
            </label>
            <Input
              type="text"
              id="diploma"
              name="diploma"
              placeholder="diploma"
            />
          </div>
          <div>
            <label htmlFor="school" className="block text-lg mb-2">
              School
            </label>
            <Input
              type="text"
              id="school"
              name="school"
              placeholder="school"
            />
          </div>
          <div>
            <label htmlFor="startYear" className="block text-lg mb-2">
              Start Year
            </label>
            <NumberInput
              id="startYear"
              name="startYear"
              placeholder="Start Year"
            />
          </div>
          <div>
            <label htmlFor="endYear" className="block text-lg mb-2">
              End Year
            </label>
            <NumberInput
              id="endYear"
              name="endYear"
              placeholder="End Year"
            />
          </div>
          <Button type="submit" onClick={close}>
            Create Education
          </Button>
        </Stack>
      </form>
    </DashboardDrawer>
  )
}

function HobbiesDrawer({opened, close}: DrawerProps){
  return(
    <DashboardDrawer opened={opened} close={close}>
      <form action={createHobby} className="space-y-6">
        <Stack>
          <div>
            <Text>
              Name EN
            </Text>
            <Input
              type="text"
              id="name_en"
              name="name_en"
              placeholder="Name EN"
            />
          </div>
          <div>
            <Text>
              Name FR
            </Text>
            <Input
              type="text"
              id="name_fr"
              name="name_fr"
              placeholder="Name FR"
            />
          </div>
          <Button type="submit" onClick={close}>
            Create Hobby
          </Button>
        </Stack>
      </form>
    </DashboardDrawer>
  )
}


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
      return (
        <>
          <Grid>
            <GridCol span={3}>
              <Sidebar/>
            </GridCol>
            <GridCol span={9}>
              <Stack w="100%" p="xs">
                <Paper bdrs="md">
                  
                  <Divider/>
                  <Tabs defaultValue="skills" 
                    value={activeTab}
                    onChange={setActiveTab}
                  >
                    <TabsList justify="center" grow>
                      <TabsTab value="skills">
                        Skills
                      </TabsTab>
                      <TabsTab value="experience" >
                        Experience
                      </TabsTab>
                      <TabsTab value="education" >
                        Education
                      </TabsTab>
                      <TabsTab value="hobbies" >
                        Hobbies
                      </TabsTab>
                    </TabsList>
                    <Group p="xs">
                      <Button size="xs" onClick={open} disabled={activeTab === "skills"}>
                        Insert 
                      </Button>
                    </Group>
                    <TabsPanel value="skills">
                      <SkillsTable skills={skillTypes}/>
                    </TabsPanel>
                    <TabsPanel value="experience">
                      <ExperienceTable experience={experience}/>
                      
                      
                    </TabsPanel>
                    <TabsPanel value="education">
                      <EducationTable education={education}/>
                    </TabsPanel>
                    <TabsPanel value="hobbies">
                      <HobbiesTable hobbies={hobbies}/>
                    </TabsPanel>
                  </Tabs>
                </Paper>
              </Stack>
            </GridCol>
            
          </Grid>
          {
            activeTab === "experience" ? <WorkExperienceDrawer opened={opened} close={close}/> :
            activeTab === "education" ? <EducationDrawer opened={opened} close={close}/> :
            activeTab === "hobbies" && <HobbiesDrawer opened={opened} close={close}/> 
          }
          </>
    );
}
