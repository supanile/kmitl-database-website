"use client";

import { useMemo, useState } from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Pagination,
  getKeyValue,
  Input,
} from "@nextui-org/react";
import { users } from "@/data/data2";
import styles from "@/app/ui/main/return/return.module.css";
import Link from "next/link";

export default function ReturnPage() {
  const [page, setPage] = useState(1);
  const rowsPerPage = 6;

  const pages = Math.ceil(users.length / rowsPerPage);

  const items = useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    return users.slice(start, end);
  }, [page, users]);

  return (
    <Table
      className="mt-5"
      aria-label="Example table with client side pagination"
      bottomContent={
        <Pagination
          isCompact
          showControls
          showShadow
          color="warning"
          page={page}
          total={pages}
          onChange={(page) => setPage(page)}
        />
      }
      classNames={{
        wrapper: "min-h-[222px]",
      }}
      topContent={
        <div
          className="flex items-center justify-center text-underline font-bold text-2xl py-10"
          style={{ fontFamily: "Kanit" }}
        >
          <h1>รายการครุภัณฑ์ ที่ทำการขอยืม</h1>
        </div>
      }
    >
      <TableHeader>
        <TableColumn
          key="assetid"
          className="bg-[#F97316] text-white"
          style={{ fontFamily: "Kanit" }}
        >
          เลขครุภัณฑ์ ID
        </TableColumn>
        <TableColumn
          key="date"
          className="bg-[#F97316] text-white"
          style={{ fontFamily: "Kanit" }}
        >
          สิ้นสุดวันยืม
        </TableColumn>
        <TableColumn
          key="detail"
          className="bg-[#F97316] text-white"
          style={{ fontFamily: "Kanit" }}
        >
          รายละเอียด อุปกรณ์
        </TableColumn>
        <TableColumn
          key="status"
          className="bg-[#F97316] text-white"
          style={{ fontFamily: "Kanit" }}
        >
          ทำรายการ
        </TableColumn>
      </TableHeader>
      <TableBody items={items}>
        {(item) => (
          <TableRow key={item.name}>
            {(columnKey) => (
              <TableCell>{getKeyValue(item, columnKey)}</TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
};

/*
const ReturnPage = () => {
  const [page, setPage] = useState(1);
  const rowsPerPage = 6;

  const pages = Math.ceil(users.length / rowsPerPage);

  const items = useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    return users.slice(start, end);
  }, [page, users]);
  
      return (
      <div className={styles.container}>
          <div className={styles.header}>
            <h1>รายการครุภัณฑ์ ที่ทำการขอยืม</h1>
          </div>
          <table className={styles.table}>
            <thead>
              <tr className="bg-orange-500 text-white">
                <td>เลขครุภัณฑ์ ID</td>
                <td>สิ้นสุดวันยืม</td>
                <td>รายละเอียด อุปกรณ์</td>
                <td>ทำรายการ</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>AA1111</td>
                <td>30/09/66</td>
                <td>คอมพิวเตอร์ Notebook acer , a001</td>
                <td>
                  <Link href="/main/return/checkreturn">
                    <button className={`${styles.button} ${styles.return}`}>
                      คืน
                    </button>
                  </Link>
                </td>
              </tr>
              <tr>
                <td>AA1112</td>
                <td>30/09/66</td>
                <td>คอมพิวเตอร์ Notebook acer , a002</td>
                <td>
                  <Link href="/main/return/checkreturn">
                    <button className={`${styles.button} ${styles.return}`}>
                      คืน
                    </button>
                  </Link>
                </td>
              </tr>
              <tr>
                <td>AA1113</td>
                <td>30/10/66</td>
                <td>คอมพิวเตอร์ Notebook acer , a003</td>
                <td>
                  <Link href="/main/return/checkreturn">
                    <button className={`${styles.button} ${styles.return}`}>
                      คืน
                    </button>
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
          <div className="text-red-500 flex justify-center items-center">
            ทำรายการคืนได้ 1 อย่าง ต่อ 1 ครั้ง
          </div>
        </div>
      );
    };
    
export default ReturnPage; */
