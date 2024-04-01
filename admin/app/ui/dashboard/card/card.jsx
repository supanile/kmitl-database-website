import { MdChecklist } from "react-icons/md";
import styles from "./card.module.css";
import Link from "next/link";

const Card = () => {
  return (
    <Link href="/" className={styles.container}>
      <MdChecklist size={24} />
      <div className="flex flex-col gap-5">
        <span className="flex flex-col gap-5 text-xl">จำนวนครุภัณฑ์</span>
        <span className="text-4xl font-semibold">13</span>
      </div>
    </Link>
  );
};

export default Card;
