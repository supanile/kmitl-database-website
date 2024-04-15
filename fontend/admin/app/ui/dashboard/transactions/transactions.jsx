"use client";

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
  Button,
} from "@nextui-org/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";
import moment from "moment"
import 'moment/locale/th'
import axios from "axios";
moment.locale('th')

async function getBorrow() {
  const respone = await fetch("http://localhost:3002/getBorrow");

  if (!respone.ok) {
    throw new Error("cannot fetch Asset");
  }
  return respone.json();
}

function getMoment(date) {
  const thaiDate = moment(date).format('DD MMM YYYY / HH.mm น.');
  return thaiDate
}
export default function Transactions() {
  const [filterValue, setFilterValue] = useState("");
  const [page, setPage] = useState(1);
  const [user, setUser] = useState({});

  const [borrowState, setBorrowState] = useState([]);
  
  const getUser = () => {
    axios({
      method: "get",
      withCredentials: true,
      url: "http://localhost:3002/getAdmin",
    }).then((response) => {
      setUser(response.data);
    });
  };
  useEffect(() => {
    getUser();
  }, []);
  const initAsset = async () => {
    try {
      const result = await getBorrow();
      setBorrowState(result);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    initAsset();
  }, []);

  const hasSearchFilter = Boolean(filterValue);

  const filteredItems = useMemo(() => {
    let filteredUsers = [...borrowState];

    if (hasSearchFilter) {
      filteredUsers = filteredUsers.filter((asset) =>
        borrow.fdId.toLowerCase().includes(filterValue.toLowerCase())
      );
    }

    return filteredUsers;
  }, [borrowState, filterValue]);

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

  const handleSubmit = (e,item) => {
    e.preventDefault()
    Swal.fire({
      title: "Are you sure?",
      text: `คุณต้องการอนุมัติ เลข ${item.fdAssetId} ใช่หรือไม่`,
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
          url: 'http://localhost:3002/postConfirm',
          data: {
            fdAdmin: user?.fdEmail,
            fdId: item.fdId,
          }
        })
          .then((res) => {
            Swal.fire({
              title: "Success!",
              text: "ข้อมูลถูกบันทึกเรียบร้อยแล้ว.",
              icon: "success"
            }).then(() => {
              window.location.reload()
            })
          })
          .catch((err) => {})
        }
    })
  }
  const rowsPerPage = 6;

  const pages = Math.ceil(filteredItems.length / rowsPerPage);

  const items = useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    return filteredItems.slice(start, end);
  }, [page, filteredItems, rowsPerPage]);

  const router = useRouter();
  function handleClick(id) {
    router.push(`/main/borrow/${id}`);
  }
  const topContent = useMemo(() => {
    return (
      <div className="flex flex-col items-center justify-center">
        <h1
          className="text-underline font-bold text-2xl py-6 text-black"
          style={{ fontFamily: "Kanit" }}
        >
          รายการยืมมาใหม่
        </h1>
        <div
          className="flex mr-auto items-center"
          style={{ fontFamily: "Kanit" }}
        >
          <Input
            isClearable
            className="flex items-center justify-center pb-10 caret-black"
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
      style={{ backgroundColor: 'black' }}
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
          key="fdDisplay"
          className="bg-[#151C2C] text-white"
          style={{ fontFamily: "Kanit" }}
        >
          ผู้ยืม
        </TableColumn>
        <TableColumn
          key="fdReturnDate"
          className="bg-[#151C2C] text-white"
          style={{ fontFamily: "Kanit" }}
        >
          กำหนดคืน
        </TableColumn>
        <TableColumn
          key="fdStatus"
          className="bg-[#151C2C] text-white"
          style={{ fontFamily: "Kanit" }}
        >
          ทำรายการ
        </TableColumn>
      </TableHeader>
      <TableBody emptyContent="ไม่มีคนมาขอยืม" items={items}>
        {items.map((item,index) => (
          <TableRow key={index}>
            <TableCell>{getKeyValue(item,"fdId")}</TableCell>
            <TableCell>{getKeyValue(item,"fdAssetId")}</TableCell>
            <TableCell>{getKeyValue(item,"fdDisplay")}</TableCell>
            <TableCell>{getMoment(getKeyValue(item,"fdReturnDate"))}</TableCell>
            <TableCell>
                  <button onClick={(e) => handleSubmit(e, item)}
                    className="px-2 py-1 rounded-md text-base text-white bg-red-500 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 font-kanit"
                    style={{ fontFamily: "Kanit" }}
                  >
                    อนุมัติ
                  </button>
              </TableCell>
            </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

