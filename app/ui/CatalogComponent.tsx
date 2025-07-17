"use client";

import { useState } from "react";
import { flowerCatalog } from "@/consts";
import ProductCard from "@/app/ui/Product";
import styles from "@/app/(header)/catalogo/page.module.css";
import Select from "react-select";
import { useSearchParams } from "next/navigation";

const categoryOptions = [
  { value: "Ramos", label: "Ramos" },
  { value: "Floreros", label: "Floreros" },
  { value: "Globos", label: "Globos" },
  { value: "Cajas", label: "Cajas" },
];

const CatalogPage = () => {

  const searchParams = useSearchParams();
  const searchQuery = searchParams.get("busqueda")?.toLowerCase() || "";
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredCatalog = flowerCatalog.filter((product) => {
    const matchesCategory = selectedCategory
      ? product.categoria === selectedCategory
      : true;

    const matchesSearch = product.titulo.toLowerCase().includes(searchQuery);

    return matchesCategory && matchesSearch;
  });



  return (

    <>
    <div className={styles["search-containerr"]}>


      <div className={styles["search-page-container"]}>
        <div className={styles["search-products"]}>
          <div className={styles["search-products-container"]}>
            <div className={styles["search-page-title"]}>
              <h3>

                {searchQuery?
                <>
                  Resultados para {searchQuery}
                </>
                :
                <>
                  Todos los productos
                </>
                
                }

              </h3>
            </div>

      <div
        style={{
          paddingBottom: "1rem",
          display: "flex",
          gap: "10px",
          marginTop: "10px",
          flexWrap: "wrap",
        }}
      >
                  <Select
                                  isClearable
                placeholder="Filtrar por categoría"
                options={categoryOptions}
                onChange={(option) => setSelectedCategory(option?.value ?? null)}
        />
  
      </div>


            <div className={styles["grid-products"]}>
              {filteredCatalog.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </div>
      </div>

     
    </div>



          </>
  );
};

export default CatalogPage;
