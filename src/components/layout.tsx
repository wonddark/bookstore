import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar.tsx";
import { Outlet } from "react-router-dom";
import SearchForm from "@/features/search-form/search-form.tsx";
import AppSidebar from "@/components/app-sidebar.tsx";
import { Toaster } from "sonner";
import ScrollToTop from "@/components/scroll-to-top.tsx";

export default function Layout() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="w-full">
        <div className="flex items-center gap-3 py-3 border-b-4 px-3 lg:px-5 sticky top-0 bg-white z-50">
          <SidebarTrigger />
          <SearchForm />
        </div>
        <Outlet />
      </main>
      <Toaster />
      <ScrollToTop />
    </SidebarProvider>
  );
}
