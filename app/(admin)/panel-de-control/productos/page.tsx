'use client';

import Image from 'next/image';
import Link from 'next/link';
import styles from '../admin.module.css';
import { flowerCatalog } from '@/consts';

const AdminProducts = () => {


  return (
    <div className={styles['admin-products-container']}>
      <div className={styles['admin-products-titles']}>
        <div className={styles['admin-title-id']}>
          <Image src="/layout/admin/tag.png" alt="Tag Icon" width={25} height={25} />
          <h3>Productos</h3>
        </div>

        <div className={styles['admin-route']}>
          <Image src="/admin/home-icon.png" alt="Home Icon" width={20} height={20} />
          <p> / Productos / Lista</p>
        </div>
      </div>

      <div className={styles['admin-table-container']}>
        <div className={styles['admin-table-header']}>
          <div className={styles['admin-table-left']}>
            <Link href={"/panel-de-control/anadir-producto"}>
              <Image src="/admin/add-icon.svg" alt="Add Icon" width={20} height={20} />
              Agregar
            </Link>
          </div>

          <div className={styles['admin-table-right']}>
            <Image src="/admin/filters.svg" alt="Filters Icon" width={23} height={28} />
            <div className={styles['input-container']}>
              <Image src="/admin/search.svg" alt="Search Icon" width={25} height={25} />
              <input placeholder="Buscar..." type="text" />
            </div>
          </div>
        </div>

        <div className={styles['admin-table']}>
          <table>
            <thead>
              <tr>
                <th>id</th>
                <th>Producto</th>
                <th>Categoria</th>
                <th className={styles['th-center']}>Precio</th>
                <th className={styles['th-actions']}>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {flowerCatalog &&
                flowerCatalog.map((bull, id) => (
                  <tr key={id}>
                    <td>{id + 1}</td>
                    <td>
                      <div className={styles['td-image']}>
                        <Image src={`${bull.img[0]}`} alt={bull.titulo} width={40} height={40} />
                        <p>{bull.titulo}</p>
                      </div>
                    </td>
                    <td>{bull.categoria}</td>
                    <td className={styles['td-center']}>${bull.precio}</td>
                    <td className={styles['td-actions']}>
                      <div>

                      <Link href="">
                        <Image src="/admin/edit.png" alt="Edit Icon" width={24} height={24} />
                      </Link>

                      <Link href={`/catalogo/${bull.id}`}>
                        <Image src="/admin/eye.png" alt="View Icon" width={24} height={24} />
                      </Link>

                      <Link href="">
                        <Image src="/admin/delete.png" alt="Delete Icon" width={24} height={24} />
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
              <p>Productos por página: 10</p>
            </div>
            <div className={styles['admin-footer-right']}>
              <div className={styles['admin-footer-pagination']}>
                <p>Pagina</p>
                <input type="number" />
                <p>de 20</p>
              </div>

              <div className={styles["footer-actions"]}>


              <div className={`${styles['footer-button']} ${styles['rotate']}`}>
                <Image src="/admin/arrow.png" alt="Anterior" width={15} height={15} />
              </div>
              <div className={styles['footer-button']}>
                <Image src="/admin/arrow.png" alt="Siguiente" width={15} height={15} />
              </div>

              </div>


            </div>
          </div>

      </div>
    </div>
  );
};

export default AdminProducts;
