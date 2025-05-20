import { NavMain } from "@/components/nav-main";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";
import LogoutIcon from "@/assets/icons/logout.svg?react";
import { navData as data } from "@/lib/constants";
import { Link } from "@tanstack/react-router";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader className="mt-6 mb-4">
        <Link to="/">
          <img
            src="/logos/lapo.png"
            className="object-contain"
            width={138}
            height={45}
          />
        </Link>
      </SidebarHeader>

      <SidebarContent>
        <NavMain title="MAIN MENU" items={data.main} />
        <SidebarGroup>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton className="hover:border-sidebar-border hover:text-primary-foreground border border-transparent text-xs hover:border hover:bg-transparent">
                <LogoutIcon />
                <span>Logout</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        <SidebarMenu className="pt-4 pb-8">
          <SidebarMenuItem className="group-data-[collapsible=icon]:hidden">
            <SidebarGroupLabel className="text-sidebar-accent text-[0.53125rem] font-medium">
              POWERED BY
            </SidebarGroupLabel>
            <img
              src="/logos/cardinfra.png"
              className="ml-1 shrink-0 object-contain"
              width={93}
              height={42}
            />
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
