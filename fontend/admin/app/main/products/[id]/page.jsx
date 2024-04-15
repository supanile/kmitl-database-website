"use client";
import styles from "@/app/ui/dashboard/products/singleProduct/singleProduct.module.css";
// import Image from "next/image";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from 'next/link'
import axios from "axios";
import Swal from "sweetalert2";


async function getAsset(){

  const respone = await fetch("http://localhost:3002/getAsset");
  if (!respone.ok) {
    throw new Error("cannot fetch Asset");
  }
  return respone.json();
}
export default function SingleProductPage({ params }) {

  const [assetState, setAssetState] = useState([]);
  const id = params.id;
  const [status, setStatus] = useState(0);
  const asset = assetState.find((asset) => asset.fdId === parseInt(id));
  const router = useRouter();

  const initAsset = async () => {
    try {
      const result = await getAsset();
      setAssetState(result);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    initAsset()
  },[])

  const handleSubmit = (e) => {

    e.preventDefault()
    Swal.fire({
      title: "Are you sure?",
      text: "คุณต้องการยืนยันข้อมูลใช่หรือไม่",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "ยืนยัน"
    }).then((result) => {
      if (result.isConfirmed) {
        axios({
          method: 'POST',
          withCredentials: true,
          url: 'http://localhost:3002/updateAsset',
          data: {
            fdAssetId: asset?.fdAssetId,
            fdStatus: status
          }
        }).then((response) => {
          // console.log(response)
          Swal.fire({
            title: "Success!",
            text: "ข้อมูลถูกบันทึกเรียบร้อยแล้ว.",
            icon: "success"
          }).then(() => {
            router.push('/main/products')
          })
        })
      }
    });
    // router.push('/main/products')
  }
  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className="text-2xl">{asset?.fdAssetName}</div>
          <label className="mt-4">หมายเลขครุภัณฑ์</label>
          <label className="p-5 border-2 border-gray-700 border-opacity-100 rounded-md bg-[#151c2c] text-white my-2" style={{ border: '2px solid #2e374a' }}> {asset?.fdAssetId} </label>
          <label>ชื่ออุปกรณ์</label>
          <label className="p-5 border-2 border-gray-700 border-opacity-100 rounded-md bg-[#151c2c] text-white my-2" style={{ border: '2px solid #2e374a' }}> {asset?.fdAssetName} </label>
          <label>สถานะ</label>
          <select name="cat" value={status} defaultValue={0}
            onChange={(e) => setStatus(e.target.value)} >
            <option value="0">ว่าง</option>
            <option value="1">ถูกยืม</option>
            <option value="2">รอตรวจสอบ</option>
          </select>
          <div className="inline-flex gap-4">
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
            ตกลง
          </button>
          <Link href="/main/products">
          <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
            ยกเลิก
          </button>
          </Link>
          </div>
        </form>
      </div>
    </div>
  );
}