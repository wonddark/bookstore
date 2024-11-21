import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar.tsx";
import { Outlet } from "react-router-dom";
import SearchForm from "@/features/search-form/search-form.tsx";
import AppSidebar from "@/components/app-sidebar.tsx";
import { Toaster } from "sonner";

export default function Layout() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="w-full">
        <div className="flex py-3 border-b-4">
          <SidebarTrigger />
          <SearchForm />
        </div>
        <Outlet />
      </main>
      <Toaster />
    </SidebarProvider>
  );
}
