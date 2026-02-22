import { AdminSidebar } from "@/components/admin/AdminSidebar";

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-[100%] bg-bgPrimary relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 -right-32 h-80 w-80 rounded-full bg-accentPrimary/20 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-accentSecondary/15 blur-3xl" />
      </div>

      <div className="relative px-4 xl:px-[5vw] py-10">
        <div className="mt-2 grid gap-6 lg:grid-cols-[260px_1fr]">
          <AdminSidebar />
          <main className="space-y-6">{children}</main>
        </div>
      </div>
    </div>
  );
}
