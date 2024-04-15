"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Pagination,
  getKeyValue,
  Chip,
  Input,
} from "@nextui-org/react";
import moment from "moment";
import "moment/locale/th";
moment.locale("th");
import Swal from "sweetalert2";
import axios from "axios";
// import { users } from "@/data/data";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";

async function getAsset() {
  const respone = await fetch("http://localhost:3002/getAsset");

  if (!respone.ok) {
    throw new Error("cannot fetch Asset");
  }
  return respone.json();
}

export default function BorrowPage() {
  const { assetid } = useSearchParams();
  const route = useRouter();

  const [filterValue, setFilterValue] = useState("");
  const [page, setPage] = useState(1);
  const [assetState, setAssetState] = useState([]);
  const initAsset = async () => {
    try {
      const result = await getAsset();
      setAssetState(result);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    initAsset();
  }, []);

  const handleSubmit = (e, id) => {
    e.preventDefault();
    Swal.fire({
      title: "Are you sure?",
      text: `คุณต้องการลบ ${id} ใช่หรือไม่`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "ยืนยัน",
      cancelButtonText: "ยกเลิก",
    }).then((result) => {
      if (result.isConfirmed) {
        axios({
          method: "post",
          withCredentials: true,
          url: "http://localhost:3002/deleteAsset",
          data: {
            fdAssetId: id,
          },
        })
          .then((res) => {
            Swal.fire({
              title: "Success!",
              text: "ข้อมูลถูกลบเรียบร้อยแล้ว.",
              icon: "success",
            }).then(() => {
              window.location.reload();
            });
          })
          .catch((err) => {});
      }
    });
  };

  const hasSearchFilter = Boolean(filterValue);

  const filteredItems = useMemo(() => {
    let filteredUsers = [...assetState];

    if (hasSearchFilter) {
      filteredUsers = filteredUsers.filter((asset) =>
        asset?.fdAssetId.toLowerCase().includes(filterValue.toLowerCase())
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

  const topContent = useMemo(() => {
    return (
      <div className="flex flex-col items-center space-y-4">
        <h1
          className="text-underline font-bold text-2xl py-6 text-black"
          style={{ fontFamily: "Kanit" }}
        >
          รายการครุภัณฑ์
        </h1>
        <div className="flex flex-row justify-between w-full space-x-4">
          <div className="mr-auto">
            <Input
              isClearable
              className="flex items-center justify-center caret-black"
              placeholder="Search for a ID..."
              value={filterValue}
              onClear={onClear}
              onValueChange={onSearchChange}
            />
          </div>
          <div>
            <Link href="/main/products/add">
              <button className="flex p-2 bg-indigo-700 hover:bg-indigo-800 text-white rounded-lg cursor-pointer px-8">
                + เพิ่มครุภัณฑ์
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }, [filterValue, onSearchChange]);
  return (
    <Table
      className="mt-5"
      style={{ backgroundColor: "black" }}
      aria-label="Example table with client side pagination"
      checkboxesProps={{
        classNames: {
          wrapper: "after:bg-foreground after:text-background text-background",
        },
      }}
      bottomContent={
        <div>
          <Pagination
            isCompact
            showControls
            showShadow
            color="warning"
            page={page}
            total={pages}
            onChange={(page) => setPage(page)}
          />
        </div>
      }
      classNames={{
        wrapper: "min-h-[222px]",
      }}
      topContent={topContent}
    >
      <TableHeader>
        <TableColumn
          key="fdId"
          className="bg-[#151C2C] text-white"
          style={{ fontFamily: "Kanit" }}
        >
          ลำดับ
        </TableColumn>
        <TableColumn
          key="fdAssetId"
          className="bg-[#151C2C] text-white"
          style={{ fontFamily: "Kanit" }}
        >
          เลขครุภัณฑ์ ID
        </TableColumn>
        <TableColumn
          key="fdAssetName"
          className="bg-[#151C2C] text-white"
          style={{ fontFamily: "Kanit" }}
        >
          รายละเอียด อุปกรณ์
        </TableColumn>
        <TableColumn
          key="fdStatus"
          className="bg-[#151C2C] text-white"
          style={{ fontFamily: "Kanit" }}
        >
          สถานะอุปกรณ์
        </TableColumn>
        <TableColumn
          key="fdStatus"
          className="bg-[#151C2C] text-white"
          style={{ fontFamily: "Kanit" }}
        >
          ทำรายการ
        </TableColumn>
      </TableHeader>
      {
        <TableBody emptyContent={"ไม่พบการยืม"} items={items}>
          {items.map((item, index) => (
            <TableRow key={index}>
              <TableCell>{getKeyValue(item, "fdId")}</TableCell>
              <TableCell>{getKeyValue(item, "fdAssetId")}</TableCell>
              <TableCell>{getKeyValue(item, "fdAssetName")}</TableCell>
              <TableCell>
                {getKeyValue(item, "fdStatus") === 0 && <Chip className="capitalize" color="success" size="md" variant="flat"> ว่าง</Chip>}
                {getKeyValue(item, "fdStatus") === 1 && <Chip className="capitalize" color="danger" size="md" variant="flat"> ถูกยืม</Chip>}
                {getKeyValue(item, "fdStatus") === 2 && <Chip className="capitalize" color="warning" size="md" variant="flat"> รอตรวจสอบ</Chip>}
              </TableCell>

              {/* <TableCell>{getKeyValue(item, "fdStatus") == 1 }</TableCell> */}
              <TableCell>
                <div className="flex gap-4">
                  <Link href={`/main/products/${item.fdId}`}>
                    <button
                      className="px-2 py-1 rounded-md text-base text-white bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50 font-kanit"
                      style={{ fontFamily: "Kanit" }}
                    >
                      แก้ไข
                    </button>
                  </Link>
                  <button
                    onClick={(e) => handleSubmit(e, item.fdAssetId)}
                    className="px-2 py-1 rounded-md text-base text-white bg-red-500 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 font-kanit"
                    style={{ fontFamily: "Kanit" }}
                  >
                    ลบ
                  </button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      }
    </Table>
  );
}
