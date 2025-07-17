'use client';
import Image from 'next/image';
import styles from './dashboard.module.css'
import ChartComponent from '@/app/ui/ChartComponent';
import { salesBarChart, salesLineChart, salesPieChart } from '@/consts';

const Dashboard = () => {
  return (
    <div className={styles['dashboard-container']}>
      <div className={styles['dashboard-header']}>

        <div className={styles['dashboard-header-item']}>
          <div className={`${styles['dashboard-item-img']} ${styles['red']}`}>
            <Image src="/layout/admin/red-earnings.png" alt="Ganancias Icon" width={24} height={24} />
          </div>
          <div className={styles['dashboard-item-texts']}>
            <p className={styles['text-title']}>$160,000</p>
            <p className={styles['text-subtitle']}>Ganancias</p>
          </div>
        </div>

        <div className={styles['dashboard-header-item']}>
          <div className={`${styles['dashboard-item-img']} ${styles['green']}`}>
            <Image src="/layout/admin/green-delivery.png" alt="Ventas Icon" width={24} height={24} />
          </div>
          <div className={styles['dashboard-item-texts']}>
            <p className={styles['text-title']}>50</p>
            <p className={styles['text-subtitle']}>Ventas</p>
          </div>
        </div>

        <div className={styles['dashboard-header-item']}>
          <div className={`${styles['dashboard-item-img']} ${styles['blue']}`}>
            <Image src="/layout/admin/blue-product.png" alt="Productos Icon" width={24} height={24} />
          </div>
          <div className={styles['dashboard-item-texts']}>
            <p className={styles['text-title']}>70</p>
            <p className={styles['text-subtitle']}>Productos</p>
          </div>
        </div>

        <div className={styles['dashboard-header-item']}>
          <div className={`${styles['dashboard-item-img']} ${styles['purple']}`}>
            <Image src="/layout/admin/purple-category.png" alt="Categorias Icon" width={24} height={24} />
          </div>
          <div className={styles['dashboard-item-texts']}>
            <p className={styles['text-title']}>4</p>
            <p className={styles['text-subtitle']}>Categorias</p>
          </div>
        </div>
      </div>

      <div className={styles['dashboard-items']}>

        <div className={styles['dashboard-sales-bars']}>
          <div className={styles['sales-bar-container']}>
            <div className={styles['sales-bar-titles']}>
              <h3>Total de ventas del negocio</h3>
              <p>Resumen por año</p>
            </div>
            <div className={styles['sales-bar']}>
              <ChartComponent
                series={salesBarChart.series}
                height={300}
                width="auto"
                type="bar"
                options={salesBarChart.options}
              />
            </div>
          </div>
        </div>

        <div className={styles['dashboard-sales-radar']}>
          <div className={styles['sales-radar-container']}>
            <div className={styles['sales-radar-titles']}>
              <h3>Total de productos por categoria</h3>
              <p>Resumen por año</p>
            </div>
            <div className={styles['sales-radar']}>
              <ChartComponent
                type="pie"
                series={salesPieChart.series}
                options={salesPieChart.options}
                height={300}
                width="auto"
              />
            </div>
          </div>
        </div>

        <div className={styles['dashboard-sales-category']}>
          <div className={styles['sales-category-container']}>
            <div className={styles['sales-radar-titles']}>
              <h3>Ventas productos por categoria</h3>
              <p>Resumen por año</p>
            </div>
            <div className={styles['sales-category']}>
              <ChartComponent
                type="line"
                height={300}
                width="auto"
                series={salesLineChart.series}
                options={salesLineChart.options}
              />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Dashboard;