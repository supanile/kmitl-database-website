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

export default function BorrowDetail({params}) {
  // const router = useRouter()
  const id = params.id
  const product = users.find(user => user.fdId === parseInt(id));
  
  return (
    <Table
      className="mt-5"
      aria-label="Example table with client side pagination"
      bottomContent={
        <div className={styles.container}>
          <div className={styles.header}></div>
          <br></br>
          <div className={styles.div15}>
            <div className={styles.item} />
            <div className={styles.inner} />
            <div className={styles.rectangleDiv} />
            <div className={styles.div16}>กำหนดคืน :</div>
            <div className={styles.div17}>
              <DatePicker />
            </div>
            <div className={styles.div18}>เหตุผลการยืม :</div>
            <div className={styles.div19}>
              <Text placeholder="กรอกข้อมูล..." />
            </div>
          </div>
          <div>
            <Link href="/main/borrow/checkborrow">
              <button className={`${styles.button} ${styles.submit}`}>
                ยืนยันการยืม
              </button>
            </Link>
          </div>
        </div>
      }
      classNames={{
        wrapper: "min-h-[222px]",
      }}
    >
      <TableHeader>
        <TableColumn
          key="fdAssetId"
          className="bg-[#fecc0d] text-white"
          style={{ fontFamily: "Kanit" }}
        >
          เลขครุภัณฑ์ ID
        </TableColumn>
        <TableColumn
          key="fdAssetName"
          className="bg-[#fecc0d] text-white"
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
