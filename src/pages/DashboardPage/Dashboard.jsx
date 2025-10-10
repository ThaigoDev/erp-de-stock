import SidebarMain from "@/components/SidebarMain/SidebarMain";
import "./Dashboard.css";
export default function Dashboard() {
  return ( 
   
    <section className="main-dashboard">
      <SidebarMain />
      <section className="main-dashboard-area">
        <div className="chart-total-products">
          <h2 className="label-of-card">Total Products</h2>
          <h1 className="value-of-card">1,234</h1>
          <p>produtos ativos no sistema</p>
        </div>
      </section>
    </section>
  );
}
