import { useMemo } from "react";
import { useLocation } from "@tanstack/react-router";
import { Separator } from "@radix-ui/react-separator";
import { SidebarTrigger } from "./ui/sidebar";
import HomeIcon from "@/assets/icons/home.svg?react";
import { navData } from "@/lib/constants";
import { CircleAlert } from "lucide-react";
import { SearchBar } from "./search-bar";
import { NotificationsDropdown } from "./notifications-dropdown";
import { UserDropdown } from "./user-dropdown";

export function Header() {
  const { pathname } = useLocation();

  const currentBaseRoute = useMemo(() => {
    if (pathname === "/")
      return {
        title: "Dashboard",
        icon: HomeIcon,
      };

    const { title, icon } = navData.main.find((item) =>
      pathname.startsWith(item.url),
    ) || { icon: CircleAlert, title: "Not Found" };
    return { title, icon };
  }, [pathname]);

  return (
    <header className="border-sidebar-ring bg-card sticky top-0 z-50 h-12 border-b">
      <div className="flex h-full items-center gap-2 px-4 lg:px-5">
        <SidebarTrigger className="-ml-1 lg:hidden" />
        <Separator orientation="vertical" className="mr-2 h-4 lg:hidden" />
        <div className="flex w-full items-center justify-between">
          <div className="flex items-center gap-3 text-xs font-medium text-[#001735]">
            <currentBaseRoute.icon />
            {currentBaseRoute.title}
          </div>

          <div className="flex items-center gap-4">
            <SearchBar />
            <NotificationsDropdown notifications={[]} />
            <UserDropdown />
          </div>
        </div>
      </div>
    </header>
  );
}
