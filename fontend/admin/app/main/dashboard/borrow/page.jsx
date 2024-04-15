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
} from "@nextui-org/react";
import { useRouter } from "next/navigation";
import moment from "moment";
import 'moment/locale/th'
moment.locale('th')

async function getAsset() {
  const respone = await fetch("http://localhost:3002/showBorrow");

  if (!respone.ok) {
    throw new Error("cannot fetch Asset");
  }
  return respone.json();
}
function getMoment(date) {
  const thaiDate = moment(date).format('DD MMM YYYY / HH.mm น.');
  return thaiDate
}
export default function BorrowPage() {
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

  const hasSearchFilter = Boolean(filterValue);

  const filteredItems = useMemo(() => {
    let filteredUsers = [...assetState];

    if (hasSearchFilter) {
      filteredUsers = filteredUsers.filter((asset) =>
        asset.fdAssetId.toLowerCase().includes(filterValue.toLowerCase())
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

  const router = useRouter();
  const topContent = useMemo(() => {
    return (
      <div className="flex flex-col items-center justify-center">
        <h1
          className="text-underline font-bold text-2xl py-6 text-black"
          style={{ fontFamily: "Kanit" }}
        >
          การยืม-คินครุภัณฑ์
        </h1>
        <div
          className="flex mr-auto items-center"
          style={{ fontFamily: "Kanit" }}
        >
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
      style={{ backgroundColor: 'black' }}
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
      topContent= {topContent}
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
          key="fdDisplay"
          className="bg-[#151C2C] text-white"
          style={{ fontFamily: "Kanit" }}
        >
            ผู้ยืม
        </TableColumn>
        <TableColumn
          key="fdAssetName"
          className="bg-[#151C2C] text-white"
          style={{ fontFamily: "Kanit" }}
        >
          ชื่อครุภัณฑ์
        </TableColumn>
        <TableColumn
          key="fdBorrowDate"
          className="bg-[#151C2C] text-white"
          style={{ fontFamily: "Kanit" }}
        >
          วันที่ยืม
        </TableColumn>
        <TableColumn
          key="fdReturnDate"
          className="bg-[#151C2C] text-white"
          style={{ fontFamily: "Kanit" }}
        >
          วันที่คืน
        </TableColumn>
        <TableColumn
          key="fdFname"
          className="bg-[#151C2C] text-white"
          style={{ fontFamily: "Kanit" }}
        >
          ผู้อนุมัติ
        </TableColumn>
      </TableHeader>
      {<TableBody emptyContent={"ไม่พบจำนวน"} items={items}>
          {items.map((item, index) => (
            <TableRow key={index}>
              <TableCell>{getKeyValue(item, "fdId")}</TableCell>
              <TableCell>{getKeyValue(item, "fdDisplay")}</TableCell>
              <TableCell>{getKeyValue(item, "fdAssetName")}</TableCell>
              <TableCell>{getMoment(getKeyValue(item, "fdBorrowDate"))}</TableCell>
              <TableCell>{getMoment(getKeyValue(item, "fdReturnDate"))}</TableCell>
              <TableCell>{getKeyValue(item, "fdFname")}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        }
    </Table>
  );
}
