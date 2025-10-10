import SidebarMain from "@/components/SidebarMain/SidebarMain";
 import { Box } from "lucide-react";
import "./Dashboard.css";
export default function Dashboard() {
  return ( 
   
    <section className="main-dashboard">
      <SidebarMain />
      <section className="main-dashboard-area">
        <div className="chart-total-products">
          <div className="title-of-card"> 
           <h2 className="label-of-card">Total Products</h2> 
           <span><Box size={20} color="#607DE6"/></span>
          </div>  
         
          <h1 className="value-of-card">1,234</h1>
          <p>produtos ativos no sistema</p>
        </div>
      </section>
    </section>
  );
}
