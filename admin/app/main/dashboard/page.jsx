import Card2 from "@/app/ui/card2/card2";
import BarChart2 from "@/app/ui/chart2/chart2";
import Card from "@/app/ui/dashboard/card/card";
import BarChart from "@/app/ui/dashboard/chart/chart";
import styles from "@/app/ui/dashboard/dashboard.module.css";

const DashboardPage = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
        <div className={styles.cards}>
          <Card />
          <Card2 />
        </div>
        <BarChart />
        <br />
        <br />
        <BarChart2 />
      </div>
      <div className={styles.side}>
      </div>
    </div>
  );
};

export default DashboardPage;
