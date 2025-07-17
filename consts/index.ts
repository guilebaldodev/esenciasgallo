import {flowerDescription } from "./description";

export interface Product {
  id: number;
  titulo: string;
  descripcion: string;
  precio: number;
  anterior?: number;
  img: string[] ;
  categoria: string;
}



export const flowerCatalog: Product[] = [
  // RAMOS
  {
    id: 1,
    titulo: "Ramo de 100 Rosas Rojas",
    descripcion: flowerDescription,
    precio: 1800,
    anterior: 2000,
    img: [
      "/products/flowers/product-1/product-1-1.webp",
      "/products/flowers/product-1/product-1-2.webp",
    ],
    categoria: "Ramos",
  },
  {
    id: 2,
    titulo: "Ramo de Mini Rosas Rosadas y Estate",
    descripcion: flowerDescription,
    precio: 550,
    img: [
      "/products/flowers/product-2/product-2-1.webp",
      "/products/flowers/product-2/product-2-2.webp",
    ],
    categoria: "Ramos",
  },
  {
    id: 3,
    titulo: "Ramo de Mini Rosas Amarillas ",
    descripcion: flowerDescription,
    precio: 620,
    img: [
      "/products/flowers/product-3/product-3-1.webp",
      "/products/flowers/product-3/product-3-2.webp",
    ],
    categoria: "Ramos",
  },
  {
    id: 4,
    titulo: "Ramo de Rosas Rosa, Lilis y Matsumoto",
    descripcion: flowerDescription,
    precio: 610,
    img: [
      "/products/flowers/product-4/product-4-1.webp",
      "/products/flowers/product-4/product-4-2.webp",
    ],
    categoria: "Ramos",
  },

  // FLOREROS
  {
    id: 5,
    titulo: "Florero de Gerberas y Girasoles",
    descripcion: flowerDescription,
    precio: 920,
    img: [
      "/products/flowers/product-5/product-5-1.webp",
      "/products/flowers/product-5/product-5-2.webp",
    ],
    categoria: "Floreros",
  },
  {
    id: 6,
    titulo: "Florero Rosas Amarillas",
    descripcion: flowerDescription,
    precio: 940,
    img: [
      "/products/flowers/product-6/product-6-1.webp",
      "/products/flowers/product-6/product-6-2.webp",
    ],
    categoria: "Floreros",
  },
  {
    id: 7,
    titulo: "Globo Burbuja de 24",
    descripcion: flowerDescription,
    precio: 900,
    anterior: 100,
    img: [
      "/products/flowers/product-7/product-7-1.webp",
      "/products/flowers/product-7/product-7-2.webp",
    ],
    categoria: "Globos",
  },
  {
    id: 8,
    titulo: "Bunch de Globos",
    descripcion: flowerDescription,
    precio: 1400,
    img: [
      "/products/flowers/product-8/product-8-1.webp",
    ],
    categoria: "Globos",
  },

  // ROSAS
  {
    id: 9,
    titulo: "Caja de Rosas Rojas",
    descripcion: flowerDescription,
    precio: 2100,
    img: [
      "/products/flowers/product-9/product-9-1.webp",
      "/products/flowers/product-9/product-9-2.webp",
    ],
    categoria: "Cajas",
  },

  // CAJAS DE REGALO
  {
    id: 10,
    titulo: "Caja de Rosas Amarillas",
    descripcion: flowerDescription,
    precio: 1950,
    img: [
      "/products/flowers/product-10/product-10-1.webp",
      "/products/flowers/product-10/product-10-2.webp",
    ],
    categoria: "Cajas",
  },
];

export const categoryOptions = [
  { value: "Ramos", label: "Ramos" },
  { value: "Floreros", label: "Floreros" },
  { value: "Globos", label: "Globos" },
  { value: "Cajas", label: "Cajas" },
];


export const flowerSales = [
  {
    id: 1,
    titulo: "Ramo de 100 Rosas Rojas",
    descripcion: "Ramos",
    precio: 1800,
    img: "/products/flowers/product-1/product-1-1.webp",
    estado: "pagado",
    fecha: "05/06/2025",
    color: "green",
  },
  {
    id: 5,
    titulo: "Florero de Gerberas y Girasoles",
    descripcion: "Floreros",
    precio: 920,
    img: "/products/flowers/product-5/product-5-1.webp",
    estado: "pagado",
    fecha: "06/06/2025",
    color: "green",
  },
  {
    id: 7,
    titulo: "Globo Burbuja de 24",
    descripcion: "Globos",
    precio: 900,
    img: "/products/flowers/product-7/product-7-1.webp",
    estado: "pendiente",
    fecha: "06/06/2025",
    color: "gold",
  },
  {
    id: 10,
    titulo: "Caja de Rosas Amarillas",
    descripcion: "Cajas",
    precio: 1950,
    img: "/products/flowers/product-10/product-10-1.webp",
    estado: "cancelado",
    fecha: "07/06/2025",
    color: "red",
  },
];



export const flowerCategories = [
  {
    nombre: "Ramos",
    productos: 4,
  },
  {
    nombre: "Floreros",
    productos: 2,
  },
  {
    nombre: "Globos",
    productos: 2,
  },
  {
    nombre: "Cajas",
    productos: 2,
  },
];


export const salesBarChart={
    options:{
        chart: {
            id: 'basic-bar',
            toolbar: { show: false },
            background:"#fff"
          },
          xaxis: {
            categories: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
          },
          yaxis: {
            min: 0,
            max: 100,  
          },
          dataLabels: {
            enabled: true,
            position:"top",
            offsetY:-22,
      
            style: {
              colors: ['black'],  // Color del texto de los datos
              fontWeight: 600,  // Peso de la fuente
              fontSize:"14px"
            },
          },
          plotOptions: {
            bar: {
              borderRadius:3,
              borderRadiusApplication:'end',
              columnWidth: '40%',
              background:"#fff",
              dataLabels: {
                position: 'top'
              }
            },
          },
          grid:{
            show:false
          },
          fill: {
            opacity: 0.8,
            colors: ['#0071DC'],  // Colores de las barras
          },
          tooltip: {
            enabled: true,  // Oculta los tooltips
          },
    },
    series:[
        {
          name: 'Ventas',
          data: [45, 88, 23, 56, 74, 19, 67, 42, 90, 33, 21, 58],  // Datos de las barras
        },
      ],
}

export const salesPieChart = {
  options: {
    chart: {
      type: "pie",
    },
  labels: ['Ramos', 'Floreros', 'Globos', 'Cajas'],
    colors: ['#4CAF50', '#FF9800', '#2196F3', '#9C27B0'], // Colores personalizados más vibrantes
    legend: {
      position: "top", // Coloca los labels arriba del gráfico
      horizontalAlign: "center",
    }
  },
  
  series: [30, 45, 20, 60] // Datos representando productos vendidos por cada categoría
};


export const salesLineChart = {
  options: {
    chart: {
      type: "line",
    },

    xaxis: {
      categories: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'], // Meses abreviados
    },
    stroke: {
      curve: "smooth", // Líneas suaves
      width: [4, 4, 4, 4] // Grosor de cada línea
    },
    markers: {
      size: 4, // Tamaño de los puntos en las líneas
    },
    colors: ['#1E90FF', '#32CD32', '#FF8C00', '#8A2BE2'], // Colores personalizados para cada categoría
    legend: {
      position: "top",
      horizontalAlign: "center",
    }
  },
  

  series: [
    {
      name: "Ramos",
      data: [32, 45, 38, 60, 50, 47, 65, 55, 70, 40, 62, 75] // Ventas mensuales para "Toro"
    },
    {
      name: "Floreros",
      data: [23, 28, 22, 34, 29, 51, 40, 57, 30, 69, 52, 63] // Ventas mensuales para "Inflables"
    },
    {
      name: "Globos",
      data: [12, 15, 20, 18, 30, 25, 43, 37, 42, 38, 55, 50] // Ventas mensuales para "Accesorios"
    },
    {
      name: "Cajas",
      data: [27, 30, 45, 35, 55, 52, 63, 60, 65, 50, 42, 72] // Ventas mensuales para "Refacciones"
    }
  ]
  

};