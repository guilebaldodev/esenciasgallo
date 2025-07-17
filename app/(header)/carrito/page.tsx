import Image from 'next/image';
import styles from './page.module.css'
const CartPage = () => {
    return ( <>
    <div className={styles['cart-page-container']}>
      <h2>Carrito</h2>
      <div className={styles['cart-container']}>
        <div className={styles['cart-list']}>
          <table className={styles['table-cart']}>
            <thead>
              <tr>
                <th></th>
                <th></th>
                <th>Producto</th>
                <th>Precio</th>
                <th>Cantidad</th>
                <th>Subtotal</th>
              </tr>
            </thead>

            <tbody>
  <tr>
    <td className={styles['table-x']}>
      <Image src="/layout/cross-icon2.png" alt="Eliminar" width={20} height={20} />
    </td>
    <td className={styles['table-img']}>
      <Image src="/products/bulls/product-1.webp" alt="Toro Extreme" width={55} height={55} />
    </td>
    <td>Toro Extreme</td>
    <td>$86,500</td>
    <td className={styles['quantity-icons']}>
      <div className={styles['quantity']}>
        <div className={styles['quantity-icon']}>-</div>
        <div className={`${styles['quantity-icon']} ${styles['lf-10']}`}>1</div>
        <div className={styles['quantity-icon']}>+</div>
      </div>
    </td>
    <td className={styles['table-price']}>$86,500</td>
  </tr>
  <tr>
    <td className={styles['table-x']}>
      <Image src="/layout/cross-icon2.png" alt="Eliminar" width={20} height={20} />
    </td>
    <td className={styles['table-img']}>
      <Image src="/products/bulls/product-2.webp" alt="Toro Salvaje Edición Limitada" width={55} height={55} />
    </td>
    <td>Toro Salvaje Edición Limitada</td>
    <td>$96,000</td>
    <td className={styles['quantity-icons']}>
      <div className={styles['quantity']}>
        <div className={styles['quantity-icon']}>-</div>
        <div className={`${styles['quantity-icon']} ${styles['lf-10']}`}>1</div>
        <div className={styles['quantity-icon']}>+</div>
      </div>
    </td>
    <td className={styles['table-price']}>$96,000</td>
  </tr>
  <tr>
    <td className={styles['table-x']}>
      <Image src="/layout/cross-icon2.png" alt="Eliminar" width={20} height={20} />
    </td>
    <td className={styles['table-img']}>
      <Image src="/products/bulls/product-3.webp" alt="Toro Feroz con Fuerza Máxima" width={55} height={55} />
    </td>
    <td>Toro Feroz con Fuerza Máxima</td>
    <td>$73,500</td>
    <td className={styles['quantity-icons']}>
      <div className={styles['quantity']}>
        <div className={styles['quantity-icon']}>-</div>
        <div className={`${styles['quantity-icon']} ${styles['lf-10']}`}>1</div>
        <div className={styles['quantity-icon']}>+</div>
      </div>
    </td>
    <td className={styles['table-price']}>$73,500</td>
  </tr>
</tbody>


          </table>

          <div className={styles['cart-buttons']}>
            <div className={styles['cart-cupon']}>
              <input type="text" placeholder="Código de cupón" />
              <button>Aplicar cupón</button>
            </div>
            <button className={styles['cart-refresh']}>Actualizar carrito</button>
          </div>
        </div>

        <div className={styles['cart-total']}>
          <h2>TOTAL DEL CARRITO</h2>
          <div className={styles['cart-total-subtotal']}>
            <h3>Subtotal</h3>
            <p>$256,000</p>
          </div>
          <div className={styles['cart-total-delivery']}>
            <h3>Envío</h3>
            <p>
              El coste del envío se te proporcionará una vez que un asesor tome tu orden
            </p>
          </div>

          <div className={styles['cart-total-price']}>
            <h3>{`Total (sin envío)`}</h3>
            <p>$256,000</p>
          </div>

          <button>Finalizar compra</button>
        </div>
      </div>
    </div>
    
    </> );
}
 
export default CartPage;