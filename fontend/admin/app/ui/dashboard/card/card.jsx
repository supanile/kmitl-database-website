"use client"
import { MdChecklist } from "react-icons/md";
import styles from "./card.module.css";
import Link from "next/link";
import { useState, useEffect } from "react";


async function countAsset() {
  const respone = await fetch("http://localhost:3002/countAsset");
  if (!respone.ok) {
    throw new Error("cannot fetch Asset");
  }
  return respone.json();
}
const Card = () => {
  const [assetState, setAssetState] = useState([]);
  const initAsset = async () => {
    try {
      const result = await countAsset();
      setAssetState(result);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    initAsset();
  },[])

  return (
    <Link href="/main/products" className={styles.container}>
      <MdChecklist size={24} />
      <div className="flex flex-col gap-5"> 
        <span className="flex flex-col gap-5 text-xl">จำนวนครุภัณฑ์</span>
        <span className="text-4xl font-semibold">{assetState[0]?.count}</span>
      </div>
    </Link>
  );
};

export default Card;
