"use client";

import { useCallback, useMemo, useState } from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  getKeyValue,
  Input,
} from "@nextui-org/react";
import styles from "@/app/ui/main/borrow/list/list.module.css";
import DatePicker from "@/app/ui/main/datepicker/datepicker";
import Text from "@/app/ui/main/text/text";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { users } from "@/data/data4";

export default function BorrowDetail({ params }) {
  // const router = useRouter()
  const id = params.id;
  const product = users.find((user) => user.fdId === parseInt(id));

  return (
    <Table
      className="mt-5"
      aria-label="Example table with client side pagination"
      bottomContent={
        <div className="relative font-kanit left-[305px] w-[924px] h-[600px] text-[#000]flex flex-col">
          <div className="absolute top-0 left-0 rounded-[20px] w-[924px] h-[355px] bg-[#f6f6f6] border-[2.5px] border-[#9bb7bc] box-border" />
          <div className="absolute top-[49px] left-[26px] rounded-[10px] w-[871px] h-[42px] bg-[#f6f6f6] border-[2.5px] border-[#9bb7bc] box-border" />
          <div className="absolute top-[130px] left-[26px] rounded-[10px] bg-[#f6f6f6] border-[2.5px] border-[#9bb7bc] box-border w-[871px] h-[42px]" />
          <div
            className="top-4 absolute left-6 leading-7"
            style={{ fontFamily: "Kanit" }}
          >
            ผู้ขอยืม :
          </div>
          <div
            className="absolute top-14 left-12 leading-7 text-gray-700"
            style={{ fontFamily: "Kanit" }}
          >
            นางสาวฐานิดา แสงศรี
          </div>
          <div
            className="leading-7 absolute top-[100px] left-6"
            style={{ fontFamily: "Kanit" }}
          >
            วันขอยืม :
          </div>
          <div
            className="absolute top-[137px] left-[51px] leading-7 text-[#0067a3]"
            style={{ fontFamily: "Kanit" }}
          >
            1 กันยายน พ.ศ. 2566
          </div>
          <div className="absolute top-[210px] left-[26px] rounded-[10px] bg-[#f6f6f6] border-[2.5px] border-[#9bb7bc] box-border w-[871px] h-[42px]" />
          <div
            className="absolute top-[180px] left-6 leading-7"
            style={{ fontFamily: "Kanit" }}
          >
            กำหนดคืน :
          </div>
          <div
            className="absolute top-[175px] left-[51px] leading-[7] text-[#0067a3]"
            style={{ fontFamily: "Kanit" }}
          >
            30 กันยายน พ.ศ. 2566
          </div>
          <div className="absolute top-[290px] left-[26px] rounded-[10px] bg-[#f6f6f6] border-[2.5px] border-[#9bb7bc] box-border w-[871px] h-[42px]" />
          <div
            className="relative top-[215px] left-[26px] leading-[7] font-kanit"
            style={{ fontFamily: "Kanit" }}
          >
            เหตุผลการยืม :
          </div>
          <div
            className="relative font-kanit top-[143px] left-[51px] leading-[7] text-[#353535]"
            style={{ fontFamily: "Kanit" }}
          >
            เพื่อนำไปใช้ในการทำโครงงาน
          </div>
          <div className="flex md:flex-col justify-center items-center mt-96">
            <div className="flex gap-5">
              <button
                type="button"
                className="bg-blue-500 text-white active:bg-black hover:bg-black flex justify-center items-center gap-2
      font-bold px-6 h-10 rounded-md shadow mt-[-200px] left-[200px] hover:bg-blue-700 outline-none focus:outline-none"
                style={{ fontFamily: "Kanit" }}
                onClick={() =>
                  Swal.fire({
                    title: `<div style="font-family: 'Kanit', sans-serif;">ข้อมูลการคืนบันทึกเรียบร้อย!</div>`,
                    html: `<div style="font-family: 'Kanit', sans-serif;">กรุณารอการติดต่อจากเจ้าหน้าที่พัสดุ</div>`,
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
          </div>
        </div>
      }
      classNames={{
        wrapper: "min-h-[222px]",
      }}
    >
      <TableHeader>
        <TableColumn
          key="assetid"
          className="bg-[#9ca3af] text-white"
          style={{ fontFamily: "Kanit" }}
        >
          เลขครุภัณฑ์ ID
        </TableColumn>
        <TableColumn
          key="detail"
          className="bg-[#9ca3af] text-white"
          style={{ fontFamily: "Kanit" }}
        >
          รายละเอียด อุปกรณ์
        </TableColumn>
      </TableHeader>
      <TableBody>
        <TableRow key={1}>
          <TableCell>{product.fdAssetId}</TableCell>
          <TableCell>{product.fdAssetName}</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}
