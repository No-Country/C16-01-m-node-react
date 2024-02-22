import Navbar from "./components/navbar";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={""}>
      <Navbar />
      {children}
    </div>
  );
}
