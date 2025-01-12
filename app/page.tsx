
import Sidebar from "@/components/sidebar";
import SkillTestPage from "./SkillTest/page";

export default function Home() {
  return (
    <div className="flex  w-screen ">
      <Sidebar/>
     <SkillTestPage/> 
    </div>
    
  );
}
