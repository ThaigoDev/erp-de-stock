import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarGroupContent,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarHeader,
  SidebarProvider,
  SidebarFooter,

} from "@/components/ui/sidebar";
import { DropDownLogout } from "@/components/DropDownLogout/DropDownLogout";
import {
  LayoutDashboard,
  Box,
  Tag,
  Users,
  ArrowLeftRight,
  BarChart3,
  Settings,
  PanelLeftClose, // 2. Importe um ícone para fechar
} from "lucide-react";
import { Button } from "@/components/ui/button"; // 3. Importe o componente Button

const items = [
  { title: "Dashboard", url: "/dashboard", icon: LayoutDashboard },
  { title: "Produtos", url: "/products", icon: Box },
  { title: "Categorias", url: "#", icon: Tag },
  { title: "Forncedores", url: "#", icon: Users },
  { title: "Movimentações", url: "#", icon: ArrowLeftRight },
  { title: "Relatórios", url: "#", icon: BarChart3 },
  { title: "Configurações", url: "#", icon: Settings },
];

export default function SidebarMain() {
  return (
    <SidebarProvider>
      <Sidebar>
        <SidebarContent>
          <SidebarHeader className="flex items-center justify-between">
            <div className="logo  flex gap-2 items-center w-full">
              <div className="bg-blue-600 p-3 font-bold rounded-2xl">
                <Box color="white" />
              </div>{" "}
              <div>
              <p className="font-bold">StockERP</p>
              <small>ERP de Estoque</small>
              </div>
            </div>
          </SidebarHeader>
          <SidebarGroup>
            <SidebarGroupLabel>Application</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <a href={item.url}>
                        <item.icon />
                        <span>{item.title}</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
        <SidebarFooter className="p-4">
            <div className="account-options flex items-center justify-center gap-3 ">
                <div className="account-picture mb-2 rounded-3xl w-10 h-10 bg-[#155DFC] flex items-center justify-center font-bold text-white">
                  TH
                </div>
                <div className = "account-infos flex flex-col ">
                  <p className="font-bold text-sm">duartedigitalwork</p>
                  <small className="role "> Adminstrador</small>

                </div>
                <DropDownLogout/>
            </div>
        </SidebarFooter>
      </Sidebar>
    </SidebarProvider>
  );
}
