"use client"
import { MdSupervisedUserCircle } from "react-icons/md";
import styles from "./card2.module.css";
import Link from "next/link";
import { useState, useEffect } from "react";


async function countBorrow() {
  const respone = await fetch("http://localhost:3002/countBorrow");
  if (!respone.ok) {
    throw new Error("cannot fetch Asset");
  }
  return respone.json();
}
const Card2 = () => {
  const [borrowState, setBorrowState] = useState([]);

  const initBorrow = async () => {
    try {
      const result = await countBorrow();
      setBorrowState(result);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    initBorrow();
  },[])


  return (
    <Link href="/main/dashboard/borrow" className={styles.container}>
      <MdSupervisedUserCircle size={28} />
      <div className="flex flex-col gap-5">
        <span className="flex flex-col gap-5 text-xl">
          การยืม - คืนครุภัณฑ์
        </span>
        <span className="text-4xl font-semibold">{borrowState[0]?.count}</span>
      </div>
    </Link>
  );
};

export default Card2;
