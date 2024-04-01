"use client";

import { useCallback, useMemo, useState } from "react";
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
import { useSearchParams } from "next/navigation";
import Link from "next/link";

async function getAsset() {
  const respone = await fetch("http://localhost:3002/getasset");

  if (!respone.ok) {
    throw new Error("cannot fetch Asset");
  }
  return respone.json();
}

export default function BorrowPage() {
  const { assetid } = useSearchParams();

  const onChangePage = (newPage) => {
    setPage(newPage);
    const urlParams = new URLSearchParams({ assetid });
    const newUrl = `/main/borrow/list?${urlParams.toString()}`;
    router.push(newUrl);
  };

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
          รายการครุภัณฑ์ ที่สามารถเบิกได้
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
      aria-label="Example table with client side pagination"
      // bottomContent={
      //   <Pagination
      //     isCompact
      //     showControls
      //     showShadow
      //     color="warning"
      //     page={page}
      //     total={pages}
      //     onChange={(page) => setPage(page)}
      //   />
      // }
      // classNames={{
      //   wrapper: "min-h-[222px]",
      // }}
      topContent={topContent}
    >
      <TableHeader>
        <TableColumn
          key="key"
          className="bg-[#F97316] text-white"
          style={{ fontFamily: "Kanit" }}
        >
          ลำดับ
        </TableColumn>
        <TableColumn
          key="assetid"
          className="bg-[#F97316] text-white"
          style={{ fontFamily: "Kanit" }}
        >
          เลขครุภัณฑ์ ID
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

// import Image from "next/image";
// import Link from "next/link";
// import styles from "@/app/ui/dashboard/products/products.module.css"
// import Search from "@/app/ui/dashboard/search/search";
// import Pagination from "@/app/ui/dashboard/pagination/pagination";

// const ProductsPage = () => {
//   return (
//     <div className={styles.container}>
//       <div className={styles.top}>
//         <Search placeholder="Search for a product..." />
//         <Link href="/main/products/add">
//           <button className={styles.addButton}>+ เพิ่มครุภัณฑ์</button>
//         </Link>
//       </div>
//       <table className={styles.table}>
//         <thead>
//           <tr>
//             <td>Title</td>
//             <td>Description</td>
//             <td>Prices</td>
//             <td>Created</td>
//             <td>Stock</td>
//             <td>Action</td>
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <td>
//               <div className={styles.product}>
//                 <Image
//                   src="/noproduct.jpg"
//                   alt=""
//                   width={40}
//                   height={40}
//                   className={styles.productImage}
//                 />
//                 Notebook ACER
//               </div>
//             </td>
//             <td>Desc</td>
//             <td>$999</td>
//             <td>29.01.2024</td>
//             <td>72</td>
//             <td>
//               <div className={styles.buttons}>
//                 <Link href="/dashboard/products/test">
//                   <button className={`${styles.button} ${styles.view}`}>
//                     View
//                   </button>
//                 </Link>
//                 <button className={`${styles.button} ${styles.delete}`}>
//                   Delete
//                 </button>
//               </div>
//             </td>
//           </tr>
//         </tbody>
//       </table>
//       <Pagination />
//     </div>
//   );
// };

// export default ProductsPage;
