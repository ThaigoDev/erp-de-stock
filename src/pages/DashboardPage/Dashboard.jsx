import SidebarMain from "@/components/SidebarMain/SidebarMain";
import { Box } from "lucide-react";
import "./Dashboard.css";
import CardDashboard from "@/components/CardDashboard/CardDashboard";
export default function Dashboard() {
  return ( 
   
    <section className="main-dashboard">
      <SidebarMain />
      <section className="main-dashboard-area">
       <CardDashboard label={"All Products"} value={1.234} description={"produtos ativos no sistema"} icon={<Box size={20} color="#607DE6"/>}/>
      </section>
    </section>
  );
}
