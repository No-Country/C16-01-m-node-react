import Navbar from "./components/navbar";
import ResponsiveDrawer from "./components/demo";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={""}>
      <Navbar />
      <ResponsiveDrawer />
      {children}
    </div>
  );
}
