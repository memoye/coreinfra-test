import HomeIcon from "@/assets/icons/home.svg?react";
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Link, useLocation } from "@tanstack/react-router";

export function NavMain({
  items,
  title,
}: {
  title: string;
  icon?: React.FunctionComponent;
  items: {
    title: string;
    url?: string;
    icon?: React.FunctionComponent;
  }[];
}) {
  const { pathname } = useLocation();

  return (
    <SidebarGroup>
      <SidebarMenuItem>
        <SidebarMenuButton
          data-active={pathname === "/"}
          asChild
          className="data-[active=true]:bg-sidebar-primary data-[active=true]:text-sidebar-primary-foreground data-[active=true]:border-sidebar-border mb-2 px-3 py-2.5 text-xs"
        >
          <Link to="/">
            <HomeIcon />
            <span>Dashboard</span>
          </Link>
        </SidebarMenuButton>
      </SidebarMenuItem>

      <SidebarGroupLabel className="text-sidebar-accent text-[0.53125rem] font-medium">
        {title}
      </SidebarGroupLabel>
      <SidebarMenu>
        {items.map((item) => (
          <SidebarMenuItem>
            <SidebarMenuButton
              data-active={pathname.startsWith(item.url!)}
              asChild
              className="data-[active=true]:bg-sidebar-primary data-[active=true]:text-sidebar-primary-foreground data-[active=true]:border-sidebar-border px-3 py-2.5 text-xs"
            >
              <Link to={item.url}>
                {item?.icon && <item.icon />}
                <span>{item.title}</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
}
