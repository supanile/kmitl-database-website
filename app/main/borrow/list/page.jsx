"use client";

import styles from "@/app/ui/main/borrow/list/list.module.css";
import DatePicker from "@/app/ui/main/datepicker/datepicker";
import Text from "@/app/ui/main/text/text";
import Link from "next/link";
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
import { users } from "@/data/data3";

export default function BorrowPage() {
  const [filterValue, setFilterValue] = useState("");
  const [page, setPage] = useState(1);

  const hasSearchFilter = Boolean(filterValue);

  const filteredItems = useMemo(() => {
    let filteredUsers = [...users];

    if (hasSearchFilter) {
      filteredUsers = filteredUsers.filter((user) =>
        user.assetid.toLowerCase().includes(filterValue.toLowerCase())
      );
    }

    return filteredUsers;
  }, [users, filterValue]);

  const onSearchChange = useCallback((value) => {
    if (value) {
      setFilterValue(value);
      setPage(1);
    } else {
      setFilterValue("");
    }
  }, []);

  const onClear = useCallback(() => {
    setFilterValue("");
    setPage(1);
  }, []);

  const rowsPerPage = 6;

  const pages = Math.ceil(filteredItems.length / rowsPerPage);

  const items = useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    return filteredItems.slice(start, end);
  }, [page, filteredItems, rowsPerPage]);

  const topContent = useMemo(() => {
    return (
      <div className="flex flex-col items-center justify-center">
        <h1
          className="text-underline font-bold text-2xl py-6"
          style={{ fontFamily: "Kanit" }}
        >
          รายการที่ต้องยืม
        </h1>
        <div
          className="flex mr-auto items-center"
          style={{ fontFamily: "Kanit" }}
        ></div>
      </div>
    );
  }, [filterValue, onSearchChange]);
  return (
    <Table
      className="mt-5"
      aria-label="Example table with client side pagination"
      bottomContent={
        <div className={styles.container}>
          <div className={styles.header}>
          </div>
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
      topContent={topContent}
    >
      <TableHeader>
        <TableColumn
          key="assetid"
          className="bg-[#fecc0d] text-white"
          style={{ fontFamily: "Kanit" }}
        >
          เลขครุภัณฑ์ ID
        </TableColumn>
        <TableColumn
          key="detail"
          className="bg-[#fecc0d] text-white"
          style={{ fontFamily: "Kanit" }}
        >
          รายละเอียด อุปกรณ์
        </TableColumn>
        <TableColumn
          key="quantity"
          className="bg-[#fecc0d] text-white"
          style={{ fontFamily: "Kanit" }}
        >
          จำนวน
        </TableColumn>
      </TableHeader>
      <TableBody emptyContent={"ไม่พบเลขครุภัณฑ์ดังกล่าว"} items={items}>
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
}

/* ####################################################################################### */

/* export default function ListBorrowPage() {
  const [page, setPage] = useState(1);
  const rowsPerPage = 6;
  const pages = Math.ceil(users.length / rowsPerPage);
  const items = useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;
    return users.slice(start, end);
  }, [page, users]);

  const cardContent = useMemo(
    () => (
      <div>
        <div className="flex flex-col items-center justify-center">
          <h1
            className="text-underline font-bold text-2xl py-6"
            style={{ fontFamily: "Kanit" }}
          >
            รายการที่ต้องยืม
          </h1>
        </div>
        <Table
          className="mt-5"
          aria-label="Example table with client side pagination"
          classNames={{ wrapper: "min-h-[222px]" }}
        >
          <TableHeader>
            <TableColumn
              key="assetid"
              className="bg-[#fecc0d] text-white"
              style={{ fontFamily: "Kanit" }}
            >
              เลขครุภัณฑ์ ID
            </TableColumn>
            <TableColumn
              key="detail"
              className="bg-[#fecc0d] text-white"
              style={{ fontFamily: "Kanit" }}
            >
              รายละเอียด อุปกรณ์
            </TableColumn>
            <TableColumn
              key="quantity"
              className="bg-[#fecc0d] text-white"
              style={{ fontFamily: "Kanit" }}
            >
              จำนวน
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
        <div className={styles.container}>
          <div className={styles.header}>
            <h1>รายการที่ต้องยืม</h1>
          </div>
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
        </div>
    ),
    [items]
  );

  return cardContent;
} */

/* import styles from "@/app/ui/main/borrow/list/list.module.css";
import DatePicker from "@/app/ui/main/datepicker/datepicker";
import Text from "@/app/ui/main/text/text";
import Link from "next/link";const ListBorrowPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>รายการที่ต้องยืม</h1>
      </div>
      <table className={styles.table}>
        <thead></thead>
          <tr className="bg-yellow-500 text-white">
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
        </tbody>
        <tbody>
          <tr>
            <td>AA1113</td>
            <td>คอมพิวเตอร์ Notebook acer , a003</td>
            <td>1</td>
          </tr>
        </tbody>
      </table>
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
  );
};

export default ListBorrowPage; */

/* ############################################################################ */

/* topContent={
        <div
        className="flex items-center justify-center text-underline font-bold text-2xl py-10"
        style={{ fontFamily: "Kanit" }}
        >
        <h1>รายการที่ต้องยืม</h1>
        <div className={styles.container}>
        <div className={styles.header}>
        <h1>รายการที่ต้องยืม</h1>
        </div>
        <table className={styles.table}>
        <thead>
        <tr className="bg-yellow-500 text-white">
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
        </tbody>
        <tbody>
        <tr>
        <td>AA1113</td>
        <td>คอมพิวเตอร์ Notebook acer , a003</td>
        <td>1</td>
        </tr>
        </tbody>
        </table>
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
              </div>
            } */
