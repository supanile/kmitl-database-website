import Navbar from "../ui/main/navbar/navbar";
import Sidebar from "../ui/main/sidebar/sidebar";
import styles from "../ui/main/main.module.css";
import Footer from "../ui/main/footer/footer";

const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <div className={styles.menu}>
        <Sidebar />
      </div>
      <div className={styles.content}>
        <Navbar />
        {children}
        <Footer/>
      </div>
    </div>
  );
};

export default Layout;
