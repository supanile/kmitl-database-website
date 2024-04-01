import { MdSupervisedUserCircle } from "react-icons/md";
import styles from "./card2.module.css";
import Link from "next/link";

const Card2 = () => {
  return (
    <Link href="/" className={styles.container}>
      <MdSupervisedUserCircle size={28} />
      <div className="flex flex-col gap-5">
        <span className="flex flex-col gap-5 text-xl">
          การยืม - คืนครุภัณฑ์
        </span>
        <span className="text-4xl font-semibold">20</span>
      </div>
    </Link>
  );
};

export default Card2;
