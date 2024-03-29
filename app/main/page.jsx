import Information from "../ui/main/information/information";
import styles from "../ui/main/main.module.css";

const Main = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
        <Information />
      </div>
    </div>
  );
};

export default Main;