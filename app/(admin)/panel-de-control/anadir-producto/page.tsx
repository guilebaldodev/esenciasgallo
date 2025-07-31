'use client'
import Image from "next/image";
import styles from '../admin.module.css'
import Select from "react-select";
import { useState } from "react";
import { categoryOptions } from "@/consts";

const AddProduct = () => {

  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);


  return ( 
    <>
      <div className={styles.add_product_container}>
        <div className={styles['admin-products-titles']}>
          <div className={styles['admin-title-id']}>
            <Image src="/layout/admin/tag.png" alt="Tag Icon" width={25} height={25} />
            <h3>Productos</h3>
          </div>

          <div className={styles['admin-route']}>
            <Image src="/admin/home-icon.png" alt="Home Icon" width={20} height={20} />
            <p> / Productos / Añadir</p>
          </div>
        </div>

        <form className={styles.add_product_form}>
          <div className={styles.form_container}>

            <div className={styles.left_form}>
              <div className={styles.add_product_title}>
                <h3>Añadir producto</h3>
              </div>

              <div className={styles.add_product_inputs}>
                <div className={styles.input_duo}>
                  <label htmlFor="">Nombre del producto</label>
                  <input type="text" placeholder="Ingresa el nombre del producto"/>
                </div>

                <div className={styles.input_duo}>
                  <label htmlFor="">Descripcion del producto</label>
                  <textarea placeholder="Escribe una descripcion del producto" id=""></textarea>


                </div>

                                <div className={styles.input_duo}>
                    <label htmlFor="">Categoria</label>
                                      <Select
                                  isClearable
                placeholder="Elige una categoria"
                options={categoryOptions}
                onChange={(option) => setSelectedCategory(option?.value ?? null)}
        />
                  </div>

                <div className={styles.double_input}>
                  <div className={styles.input_duo}>
                    <label htmlFor="">Precio regular</label>
                    <input type="text" placeholder="$" />
                  </div>

                  <div className={styles.input_duo}>
                    <label htmlFor="">Precio de venta</label>
                    <input type="text" placeholder="$" />
                  </div>
                </div>

                <div className={styles.double_input}>
                  <div className={styles.input_duo}>
                    <label htmlFor="">Medidas del producto</label>
                    <input type="text" placeholder="Medida en cm"/>
                  </div>

  
                </div>
              </div>
            </div>

            <div className={styles.right_form}>
              <div className={styles.right_form_titles}>
                <h3>Imagenes del producto</h3>
                <p>Necesitas añadir al menos una imagen para poder crear un producto</p>
              </div>

              <div className={styles.upload}>
                <div className={styles.upload_file}>
                  <Image src={"/admin/upload-icon.png"} alt="" width={40} height={40} />
                  <h4>Click aqui para subir imagenes</h4>
                </div>

                <div className={styles.upload_items}>
                  <div className={styles.upload_item}>
                    <div className={styles.upload_info}>
                      <Image src={"/products/perfum/product-1/product-1-1.jpg"} height={36} width={36} alt="" />
                      <div className={styles.upload_info_texts}>
                        <p className={styles.grey}>producto.png</p>
                        <p>97.KB</p>
                      </div>
                    </div>
                    <Image src={"/admin/x.png"} height={15} width={15} alt="x" />
                  </div>

                  <div className={styles.upload_item}>
                    <div className={styles.upload_info}>
                                            <Image src={"/products/perfum/product-1/product-1-1.jpg"} height={36} width={36} alt="" />

                      <div className={styles.upload_info_texts}>
                        <p className={styles.grey}>producto2.png</p>
                        <p>97.KB</p>
                      </div>
                    </div>
                    <Image src={"/admin/x.png"} height={15} width={15} alt="x" />
                  </div>


                </div>
              </div>

              <div className={styles.form_buttons}>
                <button className={styles.red_button}>Cancelar</button>
                <button>Crear</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
 
export default AddProduct;
