'use client'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../admin.module.css' // Importar los estilos como un módulo CSS
import { perfumeCategories } from '@/consts'
import { useState } from 'react'
import CategoryModal from '@/app/ui/CategoryModal'


const AdminCategories = () => {
  const [isCategoryActive, setisCategoryActive] = useState(false);
  return (
    <>


    {isCategoryActive && 
    <CategoryModal closeModal={()=>{setisCategoryActive(false)}}></CategoryModal>}
      <div className={styles['admin-products-container']}>
        <div className={styles['admin-products-titles']}>
          <div className={styles['admin-title-id']}>
            <Image
              src="/layout/admin/category.png"
              alt="category icon"
              width={25}
              height={25}
            />
            <h3>Categorias</h3>
          </div>

          <div className={styles['admin-route']}>
            <Image
              src="/admin/home-icon.png"
              alt="home icon"
              width={20}
              height={20}
            />
            <p> / Categorias</p>
          </div>
        </div>

        <div className={styles['admin-table-container']}>
          <div className={styles['admin-table-header']}>
            <div className={styles['admin-table-left']}>
              <button onClick={()=>{
                setisCategoryActive(true)
              }}>
                <Image
                  src="/admin/add-icon.svg"
                  alt="add icon"
                  width={20}
                  height={20}
                />
                Agregar
              </button>
            </div>

            <div className={styles['admin-table-right']}>
              <Image
                src="/admin/filters.svg"
                alt="filters"
                width={23}
                height={28}
              />

              <div className={styles['input-container']}>
                <Image
                  src="/admin/search.svg"
                  alt="search"
                  width={25}
                  height={25}
                />
                <input placeholder="Buscar..." type="text" />
              </div>
            </div>
          </div>

          <div className={styles['admin-table']}>
            <table>
              <thead>
                <tr>
                  <th>id</th>
                  <th>Categoria</th>
                  <th className={styles['th-center']}>Productos</th>
                  <th className={styles['th-actions']}>Acciones</th>
                </tr>
              </thead>
              <tbody>
                {perfumeCategories &&
                  perfumeCategories.map((categorie, id) => (
                    <tr key={id}>
                      <td>{id + 1}</td>
                      <td>{categorie.nombre}</td>
                      <td className={styles['td-center']}>{categorie.productos}</td>
                      <td className={styles['td-actions']}>
                        <div>

                        <Link href="">
                            <Image
                              src="/admin/edit.png"
                              alt="edit icon"
                              width={25}
                              height={25}
                            />
                        </Link>
                        <Link href="">
                            <Image
                              src="/admin/delete.png"
                              alt="delete icon"
                              width={25}
                              height={25}
                              />
                        </Link>
                              </div>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>


          </div>

          <div className={styles['admin-table-footer']}>
              <div className={styles['admin-footer-left']}>
                <p>Categorias por página: 10</p>
              </div>
              <div className={styles['admin-footer-right']}>
                <div className={styles['admin-footer-pagination']}>
                  <p>Pagina</p>
                  <input type="number" />
                  <p>de 1</p>
                </div>

                <div className={styles["footer-actions"]}>



                <div className={`${styles['footer-button']} ${styles['rotate']}`}>
                  <Image
                    src="/admin/arrow.png"
                    alt="Anterior"
                    width={15}
                    height={15}
                    />
                </div>
                <div className={styles['footer-button']}>
                  <Image
                    src="/admin/arrow.png"
                    alt="Siguiente"
                    width={15}
                    height={15}
                    />
                </div>

                  </div>

              </div>
            </div>

        </div>
      </div>
    </>
  )
}

export default AdminCategories
