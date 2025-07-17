'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './css/SideBar.module.css'

interface AdminHeaderProps{
  isSideBarActive:boolean,
  toggleSideBar:()=>void
}

const SideBar = ({toggleSideBar,isSideBarActive}:AdminHeaderProps) => {
  
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  const toggleMenu = (menu: string) => {
    setActiveMenu(activeMenu === menu ? null : menu);
  };



  return (
    
    <>
  {(!isSideBarActive) && (<>
    <div className={styles["overlay"]}>

    </div>
  </>)}

<div className={`${styles['sidebar-container']} ${isSideBarActive ? styles['close'] : ''} ${styles["slide-enter"]}`}>
      <div className={styles['sidebar-top']}>
        <div className={styles['sidebar-header']}>
          <div className={styles['sidebar-title']}>
            <Image src="/layout/admin/black-logo.png" alt="Logo" width={32} height={32} />
            <h3>Flores Mx</h3>
          </div>

              <Image
                    onClick={() => {
                      toggleSideBar()
                    }}
                    alt="x icon"
                    width={25}
                    height={25}
                    src="/admin/x.png"
                  />

        </div>

        <div className={styles['sidebar-options']}>
          <Link onClick={()=>{
            if((!isSideBarActive) && (window.innerWidth < 750)){
              toggleSideBar()
            }
          }} href="/panel-de-control/estadisticas" className={styles['sidebar-link']}>
            <Image src="/layout/admin/panel.png" alt="Panel Icon" width={24} height={24} />
            <p>Panel</p>
          </Link>

          <div className={styles['option-menu']}>
            <div
              className={`${styles['option-menu-title']} ${
                activeMenu === 'productos' ? `${styles['active']} ${styles['option-menu-selected']}` : ''
              }`}
              onClick={() => toggleMenu('productos')}
              >
              <div className={styles['title-right']}>
                <Image src="/layout/admin/tag.png" alt="Productos Icon" width={24} height={24} />
                <p>Productos</p>
              </div>
              <Image
                className={styles['toggle-icon']}
                src="/layout/admin/forward.png"
                alt="Toggle Icon"
                width={18}
                height={18}
                />
            </div>

            <div className={`${styles['content']} ${activeMenu === 'productos' ? styles['show'] : ''}`}>
              <Link onClick={()=>{
            if((!isSideBarActive) && (window.innerWidth < 750)){
              toggleSideBar()
            }
          }} href="/panel-de-control/productos" className={styles['sidebar-link']}>
                <Image src="/layout/admin/circle.png" alt="Lista Icon" width={12} height={12} />
                <p>Lista</p>
              </Link>

              <Link onClick={()=>{
            if((!isSideBarActive) && (window.innerWidth < 750)){
              toggleSideBar()
            }
          }} href="/panel-de-control/anadir-producto" className={styles['sidebar-link']}>
                <Image src="/layout/admin/circle.png" alt="Añadir Producto Icon" width={12} height={12} />
                <p>Añadir</p>
              </Link>
            </div>
          </div>

          <Link onClick={()=>{
            if((!isSideBarActive) && (window.innerWidth < 750)){
              toggleSideBar()
            }
          }} href="/panel-de-control/ventas" className={styles['sidebar-link']}>
            <Image src="/layout/admin/delivery.png" alt="Ventas Icon" width={24} height={24} />
            <p>Ventas</p>
          </Link>

          <Link onClick={()=>{
            if((!isSideBarActive) && (window.innerWidth < 750)){
              toggleSideBar()
            }
          }} href="/panel-de-control/categorias" className={styles['sidebar-link']}>
            <Image src="/layout/admin/category.png" alt="Categorias Icon" width={24} height={24} />
            <p>Categorias</p>
          </Link>
        </div>
      </div>

      <div className={styles['sidebar-footer']}>
      <Link onClick={()=>{
            if((!isSideBarActive) && (window.innerWidth < 750)){
              toggleSideBar()
            }
          }} href="/" className={styles['sidebar-link']}>
          <Image src="/admin/shop.png" alt="icono de tienda" width={24} height={24} />
          <p>Ir a la tienda</p>
        </Link>
        
        
        <Link onClick={()=>{
            if((!isSideBarActive) && (window.innerWidth < 750)){
              toggleSideBar()
            }
          }} href="/panel-de-control/cuenta" className={styles['sidebar-link']}>
          <Image src="/layout/admin/config.png" alt="Cuenta Icon" width={24} height={24} />
          <p>Cuenta</p>
        </Link>



        <Link onClick={()=>{
            if((!isSideBarActive) && (window.innerWidth < 750)){
              toggleSideBar()
            }
          }} href="/panel-de-control/preguntas" className={styles['sidebar-link']}>
          <Image src="/layout/admin/sign-out.png" alt="Cerrar sesión Icon" width={24} height={24} />
          <p>Cerrar sesión</p>
        </Link>
      </div>
    </div>
                </>
  );
};

export default SideBar;
