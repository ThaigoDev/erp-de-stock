import SidebarMain from "@/components/SidebarMain/SidebarMain";
import { Box, AlertTriangle,DollarSign, Users } from "lucide-react";
import "./Dashboard.css";
import CardDashboard from "@/components/CardDashboard/CardDashboard";
import CardDashboardAlert from "@/components/CardDashboardAlert/CardDashboardAlert";
import CardDashboardRegular from "@/components/CardDashboardRegular/CardDashboardRegular";
export default function Dashboard() {
  return (

    <section className="main-dashboard">
      <SidebarMain />
      <section className="main-dashboard-area">
        <div className="cards-area">
         <CardDashboard label={"Total de Produtos"} value={1.234} description={"produtos ativos no sistema"} icon={<Box size={20} color="#607DE6"/>}/>
         <CardDashboardAlert label={"Estoque Baixo"} value={34} description={"produtos abaixo do mínimo"} icon={<AlertTriangle size={20} color="#F59F11"/>}/>
         <CardDashboardRegular label={"Valor Total"} value={"R$ 69.980,00"} description={"valor total do estoque"} icon={<DollarSign size={20} color="#65D68F"/>}/>
         <CardDashboardRegular label={"Fornecedores"} value={1} description={"fornecedores cadastrados"} icon={<Users size={20} color="#65D68F"/>}/>
        </div>

      </section>
    </section>
  );
}
