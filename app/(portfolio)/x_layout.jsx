import { Slot } from "expo-router";
import { ProjectProvider } from "./projectcontext";

export default function PortfolioLayout(){
    return (
         <ProjectProvider><Slot/></ProjectProvider>
    )
}