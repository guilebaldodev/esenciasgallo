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

export const perfumeSales = [
  {
    id: 1,
    titulo: "Dior Sauvage Eau de Toilette 100ml",
    descripcion: "Dior",
    precio: 2200,
    img: "/products/perfum/product-1/product-1-1.jpg",
    estado: "pagado",
    fecha: "05/07/2025",
    color: "green",
  },
  {
    id: 2,
    titulo: "Yves Saint Laurent Y EDT 100ml",
    descripcion: "YSL",
    precio: 2400,
    img: "/products/perfum/product-1/product-1-1.jpg",
    estado: "pagado",
    fecha: "06/07/2025",
    color: "green",
  },
  {
    id: 3,
    titulo: "Chanel Bleu de Chanel Parfum 100ml",
    descripcion: "Chanel",
    precio: 2700,
    img: "/products/perfum/product-1/product-1-1.jpg",
    estado: "pendiente",
    fecha: "07/07/2025",
    color: "gold",
  },
  {
    id: 4,
    titulo: "Jean Paul Gaultier Le Male 125ml",
    descripcion: "Jean Paul Gaultier",
    precio: 2650,
    img: "/products/perfum/product-1/product-1-1.jpg",
    estado: "cancelado",
    fecha: "08/07/2025",
    color: "red",
  },
];


export const perfumeCategories = [
  {
    nombre: "Dior",
    productos: 1,
  },
  {
    nombre: "Chanel",
    productos: 1,
  },
  {
    nombre: "Versace",
    productos: 1,
  },
  {
    nombre: "YSL",
    productos: 1,
  },
  {
    nombre: "Carolina Herrera",
    productos: 1,
  },
  {
    nombre: "Paco Rabanne",
    productos: 1,
  },
  {
    nombre: "Montblanc",
    productos: 1,
  },
  {
    nombre: "Jean Paul Gaultier",
    productos: 1,
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
    labels: ['Armaf', 'Hawas', 'Yves Saint Laurent', 'Jean Paul Gaultier'],
    colors: ['#be9c6f', '#000000', '#f7f776', '#888888'], // tus colores + neutros
    legend: {
      position: "top",
      horizontalAlign: "center",
    }
  },

  series: [40, 25, 15, 20] // Ejemplo de cantidades vendidas por marca
};


export const salesLineChart = {
  options: {
    chart: {
      type: "line",
    },

    xaxis: {
      categories: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
    },
    stroke: {
      curve: "smooth",
      width: [4, 4, 4, 4],
    },
    markers: {
      size: 4,
    },
    colors: ['#be9c6f', '#000000', '#f7f776', '#888888'], // Colores de tu marca + neutros
    legend: {
      position: "top",
      horizontalAlign: "center",
    }
  },

  series: [
    {
      name: "Armaf",
      data: [12, 18, 25, 30, 28, 35, 40, 38, 45, 42, 48, 50]
    },
    {
      name: "Hawas",
      data: [8, 14, 20, 22, 24, 30, 35, 33, 36, 38, 40, 42]
    },
    {
      name: "Yves Saint Laurent",
      data: [5, 8, 12, 18, 22, 20, 25, 27, 30, 28, 35, 37]
    },
    {
      name: "Jean Paul Gaultier",
      data: [10, 15, 20, 23, 26, 30, 34, 36, 38, 40, 43, 45]
    }
  ]
};
