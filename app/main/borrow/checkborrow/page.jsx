"use client";

import styles from "@/app/ui/main/borrow/checkborrow/checkborrow.module.css";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Swal from "sweetalert2";

const CheckBorrowPage = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>ตรวจสอบรายการยืม</h1>
      </div>
      <table className={styles.table}>
        <thead>
          <tr className="bg-gray-400 text-white rounded-lg">
            <td>เลขครุภัณฑ์ ID</td>
            <td>รายละเอียด อุปกรณ์</td>
            <td>จำนวน</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>AA1111</td>
            <td>คอมพิวเตอร์ Notebook acer , a001</td>
            <td>1</td>
          </tr>
          <tr>
            <td>AA1113</td>
            <td>คอมพิวเตอร์ Notebook acer , a003</td>
            <td>1</td>
          </tr>
        </tbody>
      </table>
      <br></br>
      <div className="relative font-kanit top-[14px] left-[255px] w-[924px] h-[377px] text-[#000]">
        <div className="absolute top-0 left-0 rounded-[20px] w-[924px] h-[437px] bg-[#f6f6f6] border-[2.5px] border-[#9bb7bc] box-border" />
        <div className="absolute top-[49px] left-[26px] rounded-[10px] w-[871px] h-[62px] bg-[#f6f6f6] border-[2.5px] border-[#9bb7bc] box-border" />
        <div className="absolute top-[149px] left-[26px] rounded-[10px] bg-[#f6f6f6] border-[2.5px] border-[#9bb7bc] box-border w-[871px] h-[62px]" />
        <div className="top-4 absolute left-6 leading-7">ผู้ขอยืม :</div>
        <div className="absolute top-16 left-12 leading-7 text-gray-700">
          นางสาวฐานิดา แสงศรี
        </div>
        <div className="leading-7 absolute top-[115px] left-6">วันขอยืม :</div>
        <div className="absolute top-[165px] left-[51px] leading-7 text-[#0067a3]">
          1 กันยายน พ.ศ. 2566
        </div>
        <div className="absolute top-[249px] left-[26px] rounded-[10px] bg-[#f6f6f6] border-[2.5px] border-[#9bb7bc] box-border w-[871px] h-[62px]" />
        <div className="absolute top-[218px] left-6 leading-7">กำหนดคืน :</div>
        <div className="absolute top-[224px] left-[51px] leading-[7] text-[#0067a3]">
          30 กันยายน พ.ศ. 2566
        </div>
        <div className="absolute top-[348px] left-[26px] rounded-[10px] bg-[#f6f6f6] border-[2.5px] border-[#9bb7bc] box-border w-[871px] h-[62px]" />
        <div className="relative top-[275px] left-[26px] leading-[7] font-kanit">
          เหตุผลการยืม :
        </div>
        <div className="relative font-kanit top-[210px] left-[51px] leading-[7] text-[#353535]">
          เพื่อนำไปใช้ในการทำโครงงาน
        </div>
      </div>
      <div className="flex md:flex-col justify-center items-center mt-40">
        <div className="flex gap-5">
          <button
            type="button"
            className="bg-blue-500 text-white active:bg-black hover:bg-black flex justify-center items-center gap-2
      font-bold px-6 h-12 rounded-md shadow hover:bg-blue-700 outline-none focus:outline-none "
            onClick={() =>
              Swal.fire({
                title: "ข้อมูลการยืมบันทึกเรียบร้อย!",
                text: "กรุณารอการติดต่อจากเจ้าหน้าที่พัสดุ",
                imageUrl: "/checked.png",
                imageWidth: 80,
                imageHeight: 80,
                imageAlt: "contain",
              }).then(() => (window.location.href = "/main"))
            }
          >
            เรียบร้อย
          </button>
        </div>
        {showModal ? (
          <div className={styles.overlay}>
            <div className="bg-white mt-72 flex justify-center items-center flex-col w-200 h-100 rounded-lg shadow-xl p-7">
              <Image
                src="/checked.png"
                width={80}
                height={80}
                objectFit="contain"
              />
              <h2 className="font-kanit text-2xl mt-2 mx-4 text-black-400 font-semibold text-center">
                ข้อมูลการยืมบันทึกเรียบร้อย!
              </h2>
              <h2 className="font-kanit text-base mt-2 mx-4 text-gray-500 font-semibold text-center">
                กรุณารอการติดต่อจากเจ้าหน้าที่พัสดุ
              </h2>
              <Link href="/main">
                <button
                  id="flex justify-center items-center"
                  className="my-5 w-auto px-8 h-10 bg-blue-600 text-white rounded-md shadow hover:shadow-lg font-semibold"
                  onClick={() => setShowModal(false)}
                >
                  OK
                </button>
              </Link>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default CheckBorrowPage;
