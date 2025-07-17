'use client'

import Image from "next/image";
import { useState } from "react";
import styles from "./css/filter.module.css";

const Filters = () => {
    const [openCategory, setOpenCategory] = useState(true);
    const [openColor, setOpenColor] = useState(true);
    const [openPrice, setOpenPrice] = useState(true);

    return ( 
        <>
            <div className={styles["overlay-filters"]}>

            <div className={styles["filters-container"]}>
                <div className={styles["filters-title"]}>
                    <h4>Filtros</h4>
                </div>

                <div className={styles["category-filters"]}>
                    <div className={styles["category-filter"]}>
                        <div className={styles["category-title"]} onClick={() => setOpenCategory(!openCategory)}>
                            <h5>Categorías</h5>
                            <Image 
                                src="/layout/down-arrow.png" 
                                width={22} 
                                height={22} 
                                alt="icono de flecha"
                                />
                        </div>
                        <div className={`${styles["content"]} ${openCategory ? styles["show"] : ""}`}>
                            <ul>
                                <li>Toros Mecánicos</li>
                                <li>Inflables</li>
                                <li>Refacciones</li>
                            </ul>
                        </div>
                    </div>

                    {/* Filtro de Color */}
                    <div className={styles["category-filter"]}>
                        <div className={styles["category-title"]} onClick={() => setOpenColor(!openColor)}>
                            <h5>Color</h5>
                            <Image 
                                src="/layout/down-arrow.png" 
                                width={22} 
                                height={22} 
                                alt="icono de flecha"
                                />
                        </div>
                        <div className={`${styles["content"]} ${openColor ? styles["show"] : ""}`}>
                            <ul className={styles["ul-color"]}>
                                <li> 
                                    <div className={styles["circle"] + " " + styles["red"]}></div>
                                    <span>Rojo</span>
                                </li>
                                <li> 
                                    <div className={styles["circle"] + " " + styles["green"]}></div>
                                    <span>Verde</span>
                                </li>
                                <li> 
                                    <div className={styles["circle"] + " " + styles["black"]}></div>
                                    <span>Negro</span>
                                </li>
                                <li> 
                                    <div className={styles["circle"] + " " + styles["brown"]}></div>
                                    <span>Cafe</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Filtro de precio */}
                    <div className={styles["category-filter"]}>
                        <div className={styles["category-title"]} onClick={() => setOpenPrice(!openPrice)}>
                            <h5>Precio</h5>
                            <Image 
                                src="/layout/down-arrow.png" 
                                width={22} 
                                height={22} 
                                alt="icono de flecha"
                            />
                        </div>
                        <div className={`${styles["content"]} ${openPrice ? styles["show"] : ""}`}>
                            <input min={0} max={85000} type="range" />
                            <div className={styles["range-price"]}>
                                <span>Precio: $0 - $85,150</span>
                                <button>Aplicar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </>
    );
}

export default Filters;
