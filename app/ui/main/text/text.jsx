import styles from "./text.module.css";

const Text = ({ placeholder }) => {
  return (
    <div className={styles.container}>
      <input type="text" placeholder={placeholder} className={styles.input} />
    </div>
  );
};

export default Text;
