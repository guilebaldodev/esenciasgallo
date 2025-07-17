import Image from 'next/image'
import styles from '../admin.module.css' 

const AdminAccount = () => {
  return (
    <>
      <div className={styles['admin-account']}>
        <div className={styles['admin-products-titles']}>
          <div className={styles['admin-title-id']}>
            <Image
              src="/layout/admin/config.png"
              alt="config icon"
              width={25}
              height={25}
            />
            <h3>Cuenta del usuario</h3>
          </div>

          <div className={styles['admin-route']}>
            <Image
              src="/admin/home-icon.png"
              alt="home icon"
              width={20}
              height={20}
            />
            <p> / Cuenta</p>
          </div>
        </div>

        <div className={styles['admin-account-header']}>
          <div className={styles['admin-img-container']}>
            <Image
              src="/admin/user-profile.png"
              alt="user profile"
              width={50}
              height={50}
            />
          </div>

          <div className={styles['admin-texts']}>
            <h5>Santiago Gimenez</h5>
            <p>administrador@gmail.com</p>
            <p>Administrador</p>
          </div>
        </div>

        <div className={styles['admin-account-section']}>
          <div className={styles['admin-section-texts']}>
            <h4>Informacion personal</h4>
            <p>Visualiza los datos de la cuenta</p>
          </div>
          <div className={styles['admin-section-inputs']}>
            <input placeholder="Correo electronico" type="text" />
            <input placeholder="Nombre" type="text" />
            <input placeholder="Apellidos" type="text" />
            <div className={styles['admin-section-button']}>
              <button>Guardar</button>
            </div>
          </div>
        </div>

        <div className={styles['admin-account-section']}>
          <div className={styles['admin-section-texts']}>
            <h4>Contraseña</h4>
            <p>Cambia tu contraseña si es necesario</p>
          </div>
          <div className={styles['admin-section-inputs']}>
            <input placeholder="Contraseña actual" type="password" />
            <input placeholder="Contraseña nueva" type="password" />
            <input placeholder="Repite la nueva contraseña" type="password" />
            <div className={styles['admin-section-button']}>
              <button>Guardar</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AdminAccount
