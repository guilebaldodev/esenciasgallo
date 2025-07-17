'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation'
interface AdminHeaderProps{
  isSideBarActive:boolean,
  toggleSideBar:()=>void
}

const AdminHeader = ({isSideBarActive,toggleSideBar}:AdminHeaderProps) => {
  const router = useRouter()

  return (
    <nav className="admin-nav">
      <Image onClick={()=>{
        toggleSideBar()
      }} src="/layout/admin/hamburger.png" alt="Menu Icon" width={24} height={24} />

      <div className="admin-nav-right">
        <Image  src="/layout/admin/full-screen.png" alt="Full Screen Icon" width={24} height={24} />
        <Image src="/layout/admin/dark-theme.png" alt="Dark Theme Icon" width={24} height={24} />

        <div className="admin-circle">
          <Image onClick={()=>{
            router.push("/panel-de-control/cuenta")
          }} src="/layout/admin/user.png" alt="User Icon" width={24} height={24} />
        </div>
      </div>
    </nav>
  );
};

export default AdminHeader;