import Image from "next/image";
import Link from "next/link";
import Menu from "../../components/Menu";
import NavBar from "../../components/NavBar";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    
      <div className="h-screen flex">
        {/* left */}
        <div className="w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%] p-4 " >
          <Link href="/" className="flex item center justify center lg:justify-start gap-2">
          <Image src="/logo.jpg" alt="image" width={32} height={32} className="rounded-full" />
           <span className="hidden lg:block" >School[Name]</span>
          </Link>
          <Menu />
        </div>
        {/* right */}
        <div className="w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%] bg-[#F7F8FA] overflow-scroll flex flex-col"> 
          <NavBar />
        {children}
        </div>
      </div>
   
  );
}
