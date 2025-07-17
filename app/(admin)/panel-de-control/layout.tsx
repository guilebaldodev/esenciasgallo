'use client'
import AdminHeader from "@/app/ui/AdminHeader";
import SideBar from "@/app/ui/SideBar";
import { useEffect, useState } from "react";


export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {



  const [isSideBarActive, setIsSideBarActive] = useState(true);

  useEffect(() => {
    setIsSideBarActive(!(window.innerWidth >= 900));
  }, []);




  const changeSideBar=()=>{
    setIsSideBarActive(!isSideBarActive)
  }

  return (
        
        <>
            <div className="layout">

                <SideBar toggleSideBar={changeSideBar} isSideBarActive={isSideBarActive} ></SideBar>
                <div className="dashboard-content">
                <AdminHeader toggleSideBar={changeSideBar} isSideBarActive={isSideBarActive}></AdminHeader>
                {children}
                </div>
            </div>
        </>    
);
}
