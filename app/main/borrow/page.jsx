'use client'

import { useCallback, useMemo, useState, useEffect } from "react";
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
import { users } from "@/data/data";


async function getAsset() {
  const respone = await fetch('http://localhost:3002/getasset');

  if (!respone.ok) {
    throw new Error('cannot fetch Asset')
  }
  return respone.json()
}
export default function BorrowPage() {
  const [filterValue, setFilterValue] = useState("");
  const [page, setPage] = useState(1);
  const [assetState , setAssetState] = useState([])
  const initAsset = async () => {
    try {
      const result = await getAsset();
      setAssetState(result)
      
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(()=>{
    initAsset()
  },[])


  const hasSearchFilter = Boolean(filterValue);

  const filteredItems = useMemo(() => {
    let filteredUsers = [...assetState];

    if (hasSearchFilter) {
      filteredUsers = filteredUsers.filter((asset) =>
        asset.fdAssetId.toLowerCase().includes(filterValue.toLowerCase()),
      );
    }

    return filteredUsers;
  }, [assetState, filterValue]);

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

  const topContent = useMemo(()=>{
    return (
      <div className="flex flex-col items-center justify-center">
          <h1 className="text-underline font-bold text-2xl py-6" style={{ fontFamily: "Kanit" }}>
            รายการครุภัณฑ์ ที่สามารถเบิกได้
          </h1>
          <div className="flex mr-auto items-center" style={{ fontFamily: "Kanit" }}>
            <Input
              isClearable
              className="flex items-center justify-center pb-10"
              placeholder="Search for a ID..."
              value={filterValue}
              onClear={() => onClear()}
              onValueChange={onSearchChange}
            />
          </div>
        </div>
    );
  }, [filterValue, onSearchChange]);
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
      topContent={topContent}
    >
      <TableHeader>
        <TableColumn
          key="fdId"
          className="bg-[#F97316] text-white"
          style={{ fontFamily: "Kanit" }}
        >
          ลำดับ
        </TableColumn>
        <TableColumn
          key="fdAssetId"
          className="bg-[#F97316] text-white"
          style={{ fontFamily: "Kanit" }}
        >
          เลขครุภัณฑ์ ID
        </TableColumn>
        <TableColumn
          key="fdAssetName"
          className="bg-[#F97316] text-white"
          style={{ fontFamily: "Kanit" }}
        >
          รายละเอียด อุปกรณ์
        </TableColumn>
        <TableColumn
          key="fdStatus"
          className="bg-[#F97316] text-white"
          style={{ fontFamily: "Kanit" }}
        >
          ทำรายการ
        </TableColumn>
      </TableHeader>
      <TableBody emptyContent={"ไม่พบเลขครุภัณฑ์ดังกล่าว"} items={items}>
        {(item) => (
          <TableRow key={item.fdAssetId}>
            {(columnKey) => (
              <TableCell>{getKeyValue(item, columnKey)}</TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
/* import Search from "@/app/ui/main/search/search";
import styles from "@/app/ui/main/borrow/borrow.module.css";
import Link from "next/link";

const BorrowPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>รายการครุภัณฑ์ ที่สามารถเบิกได้</h1>
      </div>
      <div className="flex items-center justify-center pb-10">
        <Search placeholder="Search for a ID..." />
      </div>
      <table className={styles.table}>
        <thead>
          <tr className="bg-orange-500 text-white">
            <td>ลำดับ</td>
            <td>เลขครุภัณฑ์ ID</td>
            <td>รายละเอียด อุปกรณ์</td>
            <td>ทำรายการ</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1.</td>
            <td>AA1111</td>
            <td>คอมพิวเตอร์ Notebook acer , a001</td>
            <td className="text-red-500 font-bold">ไม่ว่าง</td>
          </tr>
          <tr>
            <td>2.</td>
            <td>AA1112</td>
            <td>คอมพิวเตอร์ Notebook acer , a002</td>
            <td>
              <Link href="/">
                <button className={`${styles.button} ${styles.borrow}`}>
                  ขอยืม
                </button>
              </Link>
            </td>
          </tr>
          <tr>
            <td>3.</td>
            <td>AA1113</td>
            <td>คอมพิวเตอร์ Notebook acer , a003</td>
            <td>
              <Link href="/">
                <button className={`${styles.button} ${styles.borrow}`}>
                  ขอยืม
                </button>
              </Link>
            </td>
          </tr>
        </tbody>
      </table>
      <table className={styles.table}>
        <thead>
          <tr className="bg-yellow-500 text-white">
            <td>ลำดับ</td>
            <td>เลขครุภัณฑ์ ID</td>
            <td>รายละเอียด อุปกรณ์</td>
            <td>ทำรายการ</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1.</td>
            <td>AA1111</td>
            <td>คอมพิวเตอร์ Notebook acer , a001</td>
            <td>
              <Link href="/">
                <button className={`${styles.button} ${styles.delete}`}>
                  ลบ
                </button>
              </Link>
            </td>
          </tr>
          <tr>
            <td>2.</td>
            <td>AA1113</td>
            <td>คอมพิวเตอร์ Notebook acer , a003</td>
            <td>
              <Link href="/">
                <button className={`${styles.button} ${styles.delete}`}>
                  ลบ
                </button>
              </Link>
            </td>
          </tr>
        </tbody>
      </table>
      <div>
        <Link href="/main/borrow/list">
          <button className={`${styles.button} ${styles.submit}`}>
            เรียบร้อย
          </button>
        </Link>
      </div>
    </div>
  );
};

export default BorrowPage; */
