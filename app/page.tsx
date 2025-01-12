'use client'
import Sidebar from "@/components/sidebar";
import SkillTestPage from "./SkillTest/page";
import { StateProvider } from "@/Context/StateProvider";
import { initialState } from "@/Context/initalState";
import reducer from "@/Context/reducer";
import Header from "@/components/header";

export default function Home() {

  

  return (
   
       <StateProvider initialState={initialState} reducer={reducer}>
       <Header/>
      <div className="flex min-w-[100vw] ">
          <Sidebar/>
          <SkillTestPage/> 
      </div>
    </StateProvider>
    
  );
}
