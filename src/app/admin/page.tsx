import { AdminHero } from "@/components/admin/AdminHero";
import { AdminStats } from "@/components/admin/AdminStats";
import { AdminSalesChart } from "@/components/admin/AdminSalesChart";
import { AdminConversion } from "@/components/admin/AdminConversion";
import { AdminOrders } from "@/components/admin/AdminOrders";
import { AdminLowStock } from "@/components/admin/AdminLowStock";
import { AdminMessages } from "@/components/admin/AdminMessages";
import { AdminQuickProductForm } from "@/components/admin/AdminQuickProductForm";

export default function AdminPage() {
  return (
    <>
      <AdminHero />

      <AdminStats />

      <section className="grid gap-6 xl:grid-cols-[1.6fr_1fr]">
        <AdminSalesChart />
        <AdminConversion />
      </section>

      <section className="grid gap-6 xl:grid-cols-[1.6fr_1fr]">
        <AdminOrders />
        <AdminLowStock />
      </section>

      <section className="grid gap-6 xl:grid-cols-[1fr_1fr]">
        <AdminMessages />
        <AdminQuickProductForm />
      </section>
    </>
  );
}
