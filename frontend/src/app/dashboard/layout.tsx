import Navbar from "./components/navbar";
import ResponsiveDrawer from "./components/sidebar";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex">
      <ResponsiveDrawer />
      <div className="flex flex-col w-full">
        <Navbar />
        <div className="w-full">{children}</div>
      </div>
    </div>
  );
}
