import {flowerDescription, perfumeDescription } from "./description";

export interface Product {
  id: number;
  titulo: string;
  descripcion: string;
  precio: number;
  anterior?: number;
  img: string[] ;
  categoria: string;
}



export const perfumeCatalog: Product[] = [
  {
    id: 1,
    titulo: "Dior Sauvage Eau de Toilette 100ml",
    descripcion: perfumeDescription,
    precio: 2200,
    anterior: 2500,
    img: [
      "/products/perfum/product-1/product-1-1.jpg",
    ],
    categoria: "Dior",
  },
  {
    id: 2,
    titulo: "Chanel Bleu de Chanel Parfum 100ml",
    descripcion: perfumeDescription,
    precio: 2700,
    img: [
      "/products/perfum/product-1/product-1-1.jpg",
    ],
    categoria: "Chanel",
  },
  {
    id: 3,
    titulo: "Versace Eros Flame 100ml",
    descripcion: perfumeDescription,
    precio: 2100,
    img: [
      "/products/perfum/product-1/product-1-1.jpg",
    ],
    categoria: "Versace",
  },
  {
    id: 4,
    titulo: "Yves Saint Laurent Y EDT 100ml",
    descripcion: perfumeDescription,
    precio: 2400,
    img: [
      "/products/perfum/product-1/product-1-1.jpg",
    ],
    categoria: "YSL",
  },
  {
    id: 5,
    titulo: "Carolina Herrera Bad Boy 100ml",
    descripcion: perfumeDescription,
    precio: 2300,
    anterior: 2600,
    img: [
      "/products/perfum/product-1/product-1-1.jpg",
    ],
    categoria: "Carolina Herrera",
  },
  {
    id: 6,
    titulo: "Paco Rabanne Invictus 100ml",
    descripcion: perfumeDescription,
    precio: 2000,
    img: [
      "/products/perfum/product-1/product-1-1.jpg",
    ],
    categoria: "Paco Rabanne",
  },
  {
    id: 7,
    titulo: "Montblanc Legend Spirit 100ml",
    descripcion: perfumeDescription,
    precio: 1850,
    img: [
      "/products/perfum/product-1/product-1-1.jpg",
    ],
    categoria: "Montblanc",
  },
  {
    id: 8,
    titulo: "Jean Paul Gaultier Le Male 125ml",
    descripcion: perfumeDescription,
    precio: 2650,
    img: [
      "/products/perfum/product-1/product-1-1.jpg",
    ],
    categoria: "Jean Paul Gaultier",
  },
];



export const categoryOptions = [
  { value: "Dior", label: "Dior" },
  { value: "Chanel", label: "Chanel" },
  { value: "Versace", label: "Versace" },
  { value: "YSL", label: "YSL" },
  { value: "Carolina Herrera", label: "Carolina Herrera" },
  { value: "Paco Rabanne", label: "Paco Rabanne" },
  { value: "Montblanc", label: "Montblanc" },
  { value: "Jean Paul Gaultier", label: "Jean Paul Gaultier" },
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