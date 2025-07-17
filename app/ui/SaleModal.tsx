import Image from "next/image";
import styles from "./css/Modal.module.css";

// import {Select, SelectSection, SelectItem} from "@nextui-org/select";
import { flowerCatalog, BullCategories, flowerCategories } from "@/consts";


type CategoryModalProps = {
  closeModal: () => void;
};

const SaleModal = ({ closeModal }: CategoryModalProps) => {
  return (
    <>
      <div className={styles.modal_container}>
        <div className={styles.add_modal}>
          <div className={styles.add_modal_title}>
            <div>
              <Image
                src="/layout/admin/delivery.png"
                alt="category icon"
                width={25}
                height={25}
              />
              <h3>Añadir venta</h3>
            </div>
            <Image
              onClick={() => {
                closeModal();
              }}
              alt="x icon"
              width={20}
              height={20}
              src="/admin/x.png"
            />
          </div>

          <form className={styles.add_modal_form}>
            <div className={styles.input_duo}>
              <label htmlFor="">Nombre del cliente</label>
              <input type="text" placeholder="Ingrese el nombre" name="" id="" />
            </div>
            <div className={styles.input_duo}>
              <label htmlFor="">Contacto del cliente</label>
              <input type="text" placeholder="Ingrese el contacto" name="" id="" />
            </div>
            <div className={styles.input_duo}>
              <label htmlFor="">Producto vendido</label>
              <select>
              {flowerCatalog &&
                flowerCatalog.map((bull, id) => (
                    <option key={id} value="someOption">{bull.titulo}</option>
                ))}
      


              </select>

            </div>
        
              <div className={styles.double_input}>

              <div className={styles.input_duo}>
              <label htmlFor="">Precio de venta</label>
              <input type="text" placeholder="$" name="" id="" />
            </div>
            <div className={styles.input_duo}>
              <label htmlFor="">Categoria</label>
              <select>
                    {
                        flowerCategories && flowerCategories.map((category,index)=>(
                    <option key={index} value="someOption">{category.nombre}</option>

                        ))
                    }
              </select>
            </div>
              </div>

              <div className={styles.input_duo}>
              <label htmlFor="">Estado de la entrega</label>

              <select>
                <option value="someOption">Preparando</option>
                <option value="someOption">En camino</option>
                <option value="someOption">Entregado</option>
                <option value="someOption">Cancelado</option>
              </select>
            </div>
                


            <div className={styles.form_buttons}>
              <button className={styles.red_button}>Cancelar</button>
              <button>Crear</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SaleModal;