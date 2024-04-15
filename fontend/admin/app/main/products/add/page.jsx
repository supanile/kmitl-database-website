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
  const [category, setCategory] = useState(1);
  const [name, setName] = useState('');
  const [aid, setAid] = useState('');
  // const asset = assetState.find((asset) => asset.fdId === parseInt(id));
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
          url: 'http://localhost:3002/addAsset',
          data: {
            fdAssetId: aid,
            fdAssetName: name,
            fdCategoryId: category
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
        {console.log(name, aid, category)}
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className="text-2xl">เพิ่มข้อมูลครุภัณฑ์</div>
          <label className="mt-4">หมายเลขครุภัณฑ์</label>
          <input type="text" onChange={(e) => setAid(e.target.value)}  className="mt-4" />
          <label>ชื่ออุปกรณ์</label>
          <input type="text" onChange={(e) => setName(e.target.value)} className="mt-4"/>
          <label>หมวดหมู่</label>
          <select name="cat" value={category} defaultValue={0}
            onChange={(e) => setCategory(e.target.value)} >
            <option value="1">วัสดุกีฬา</option>
            <option value="2">วัสดุคอมพิวเตอร์</option>
            <option value="3">วัสดุห้องปฏิบัติการเคมี</option>
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