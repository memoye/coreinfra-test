import { AppSidebar } from "./app-sidebar";
import { Header } from "./header";
import { SidebarInset, SidebarProvider } from "./ui/sidebar";

export function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <Header />
        <div className="flex flex-1 flex-col gap-4 p-4 pt-2">{children}</div>
      </SidebarInset>
    </SidebarProvider>
  );
}
