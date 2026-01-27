import { Container, Paper } from "@mantine/core";

export default function InnerPaper ({children}: Readonly<{children: React.ReactNode;}>){
    return(
        <Paper bd="1px solid var(--mantine-color-primary-8)"  
        bdrs={"md"} 
        shadow="sm" 
        bg="var(--mantine-color-primary-1)" 
        c="var(--mantine-color-dark-1)"
        p="sm"
        className="element hidden"
        >
            {children}
        </Paper>
    )
}