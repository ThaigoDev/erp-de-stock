import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupLabel,SidebarMenu,SidebarGroupContent,SidebarMenuItem,SidebarMenuButton, SidebarProvider, SidebarHeader} from '@/components/ui/sidebar' 
import { LayoutDashboard,Box,Tag,Users,ArrowLeftRight,BarChart3,Settings} from 'lucide-react'

const items = [
  {
    title: "Dashboard",
    url: "#",
    icon: LayoutDashboard,
  },
  {
    title: "Produtos",
    url: "#",
    icon: Box,
  },
  {
    title: "Categorias",
    url: "#",
    icon: Tag,
  },
  {
    title: "Forncedores",
    url: "#",
    icon: Users,
  },
  {
    title: "Movimentações",
    url: "#",
    icon: ArrowLeftRight,
  },
  {
    title: "Relatórios",
    url: "#",
    icon: BarChart3,
  },
  {
    title: "Configurações",
    url: "#",
    icon: Settings,
  },
]
export default function SidebarMain() {
  return (
       <SidebarProvider  style={{
    "--sidebar-width": "20rem",
    "--sidebar-width-mobile": "20rem",
  }}
>
 <Sidebar>
      <SidebarContent>
        <SidebarHeader>
          <div className="logo">
              logo
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
  )
}