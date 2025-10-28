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
} from "@/components/ui/sidebar";
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
  // 4. Obtenha a função para controlar o sidebar
  return (
    <SidebarProvider>
      <Sidebar>
        <SidebarContent>
          <SidebarHeader className="flex items-center justify-between">
            <div className="logo  flex gap-2 items-center w-full">
              <div className="bg-blue-600 p-3 font-bold rounded-2xl">
                <Box color="white" />
              </div>{" "}
              StockERP
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
      </Sidebar>
    </SidebarProvider>
  );
}
