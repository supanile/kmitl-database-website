import Link from "next/link";

export const users = [
  {
    key: "1",
    name: "Tony Reichert",
    assetId: "AA1111",
    date: "30/09/66",
    detail: "คอมพิวเตอร์ Notebook Acer, a001",
    role: "CEO",
    status: (
      <Link href="/main/borrow/1">
        <button
          className="px-2 py-1 rounded-md text-base text-white bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50 font-kanit"
          style={{ fontFamily: "Kanit" }}
        >
          ขอยืม
        </button>
      </Link>
    ),
  },
  {
    key: "2",
    name: "Zoey Lang",
    assetId: "AA1112",
    date: "30/09/66",
    detail: "คอมพิวเตอร์ Notebook Acer, a002",
    role: "Technical Lead",
    status: (
      <span className="text-red-500 font-bold" style={{ fontFamily: "Kanit" }}>
        ไม่ว่าง
      </span>
    ),
  },
  {
    key: "3",
    name: "Jane Fisher",
    assetId: "AA1113",
    date: "30/09/66",
    detail: "คอมพิวเตอร์ Notebook Acer, a003",
    role: "Senior Developer",
    status: (
      <Link href="/main/borrow/2">
        <button
          className="px-2 py-1 rounded-md text-base text-white bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50 font-kanit"
          style={{ fontFamily: "Kanit" }}
        >
          ขอยืม
        </button>
      </Link>
    ),
  },
  {
    key: "4",
    name: "William Howard",
    assetId: "AA1114",
    date: "30/09/66",
    detail: "คอมพิวเตอร์ Notebook Acer, a004",
    role: "Community Manager",
    status: (
      <span className="text-red-500 font-bold" style={{ fontFamily: "Kanit" }}>
        ไม่ว่าง
      </span>
    ),
  },
  {
    key: "5",
    name: "Emily Collins",
    assetId: "AA1115",
    date: "30/09/66",
    detail: "คอมพิวเตอร์ Notebook Acer, a005",
    role: "Marketing Manager",
    status: (
      <Link href="/main/borrow/5">
        <button
          className="px-2 py-1 rounded-md text-base text-white bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50 font-kanit"
          style={{ fontFamily: "Kanit" }}
        >
          ขอยืม
        </button>
      </Link>
    ),
  },
  {
    key: "6",
    name: "Brian Kim",
    assetId: "AA1116",
    date: "30/09/66",
    detail: "คอมพิวเตอร์ Notebook Acer, a006",
    role: "Product Manager",
    status: (
      <Link href="/main/borrow/6">
        <button
          className="px-2 py-1 rounded-md text-base text-white bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50 font-kanit"
          style={{ fontFamily: "Kanit" }}
        >
          ขอยืม
        </button>
      </Link>
    ),
  },
  {
    key: "7",
    name: "Laura Thompson",
    assetId: "AA1117",
    date: "30/09/66",
    detail: "คอมพิวเตอร์ Notebook Acer, a007",
    role: "UX Designer",
    status: (
      <Link href="/main/borrow/7">
        <button
          className="px-2 py-1 rounded-md text-base text-white bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50 font-kanit"
          style={{ fontFamily: "Kanit" }}
        >
          ขอยืม
        </button>
      </Link>
    ),
  },
  {
    key: "8",
    name: "Michael Stevens",
    assetId: "AA1118",
    date: "30/09/66",
    detail: "คอมพิวเตอร์ Notebook Acer, a008",
    role: "Data Analyst",
    status: (
      <span className="text-red-500 font-bold" style={{ fontFamily: "Kanit" }}>
        ไม่ว่าง
      </span>
    ),
  },
  {
    key: "9",
    name: "Sophia Nguyen",
    assetId: "AA1119",
    date: "30/09/66",
    detail: "คอมพิวเตอร์ Notebook Acer, a009",
    role: "Quality Assurance",
    status: (
      <Link href="/main/borrow/9">
        <button
          className="px-2 py-1 rounded-md text-base text-white bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50 font-kanit"
          style={{ fontFamily: "Kanit" }}
        >
          ขอยืม
        </button>
      </Link>
    ),
  },
  {
    key: "10",
    name: "James Wilson",
    assetId: "AA11110",
    date: "30/09/66",
    detail: "คอมพิวเตอร์ Notebook Acer, a010",
    role: "Front-end Developer",
    status: (
      <span className="text-red-500 font-bold" style={{ fontFamily: "Kanit" }}>
        ไม่ว่าง
      </span>
    ),
  },
  {
    key: "11",
    name: "Ava Johnson",
    assetId: "AA11111",
    date: "30/09/66",
    detail: "คอมพิวเตอร์ Notebook Acer, a011",
    role: "Back-end Developer",
    status: (
      <Link href="/main/borrow/11">
        <button
          className="px-2 py-1 rounded-md text-base text-white bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50 font-kanit"
          style={{ fontFamily: "Kanit" }}
        >
          ขอยืม
        </button>
      </Link>
    ),
  },
  {
    key: "12",
    name: "Isabella Smith",
    assetId: "AA11112",
    date: "30/09/66",
    detail: "คอมพิวเตอร์ Notebook Acer, a012",
    role: "Graphic Designer",
    status: (
      <Link href="/main/borrow/12">
        <button
          className="px-2 py-1 rounded-md text-base text-white bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50 font-kanit"
          style={{ fontFamily: "Kanit" }}
        >
          ขอยืม
        </button>
      </Link>
    ),
  },
  {
    key: "13",
    name: "Oliver Brown",
    assetId: "AA11113",
    date: "30/09/66",
    detail: "คอมพิวเตอร์ Notebook Acer, a013",
    role: "Content Writer",
    status: (
      <span className="text-red-500 font-bold" style={{ fontFamily: "Kanit" }}>
        ไม่ว่าง
      </span>
    ),
  },
  {
    key: "14",
    name: "Lucas Jones",
    assetId: "AA11114",
    date: "30/09/66",
    detail: "คอมพิวเตอร์ Notebook Acer, a014",
    role: "Project Manager",
    status: (
      <Link href="/main/borrow/14">
        <button
          className="px-2 py-1 rounded-md text-base text-white bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50 font-kanit"
          style={{ fontFamily: "Kanit" }}
        >
          ขอยืม
        </button>
      </Link>
    ),
  },
  {
    key: "15",
    name: "Grace Davis",
    assetId: "AA11115",
    date: "30/09/66",
    detail: "คอมพิวเตอร์ Notebook Acer, a015",
    role: "HR Manager",
    status: (
      <Link href="/main/borrow/15">
        <button
          className="px-2 py-1 rounded-md text-base text-white bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50 font-kanit"
          style={{ fontFamily: "Kanit" }}
        >
          ขอยืม
        </button>
      </Link>
    ),
  },
  {
    key: "16",
    name: "Elijah Garcia",
    assetId: "AA11116",
    date: "30/09/66",
    detail: "คอมพิวเตอร์ Notebook Acer, a016",
    role: "Network Administrator",
    status: (
      <Link href="/main/borrow/16">
        <button
          className="px-2 py-1 rounded-md text-base text-white bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50 font-kanit"
          style={{ fontFamily: "Kanit" }}
        >
          ขอยืม
        </button>
      </Link>
    ),
  },
  {
    key: "17",
    name: "Emma Martinez",
    assetId: "AA11117",
    date: "30/09/66",
    detail: "คอมพิวเตอร์ Notebook Acer, a017",
    role: "Accountant",
    status: (
      <span className="text-red-500 font-bold" style={{ fontFamily: "Kanit" }}>
        ไม่ว่าง
      </span>
    ),
  },
  {
    key: "18",
    name: "Benjamin Lee",
    assetId: "AA11118",
    date: "30/09/66",
    detail: "คอมพิวเตอร์ Notebook Acer, a018",
    role: "Operations Manager",
    status: (
      <Link href="/main/borrow/18">
        <button
          className="px-2 py-1 rounded-md text-base text-white bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50 font-kanit"
          style={{ fontFamily: "Kanit" }}
        >
          ขอยืม
        </button>
      </Link>
    ),
  },
  {
    key: "19",
    name: "Mia Hernandez",
    assetId: "AA11119",
    date: "30/09/66",
    detail: "คอมพิวเตอร์ Notebook Acer, a019",
    role: "Sales Manager",
    status: (
      <span className="text-red-500 font-bold" style={{ fontFamily: "Kanit" }}>
        ไม่ว่าง
      </span>
    ),
  },
  {
    key: "20",
    name: "Daniel Lewis",
    assetId: "AA11120",
    date: "30/09/66",
    detail: "คอมพิวเตอร์ Notebook Acer, a020",
    role: "DevOps Engineer",
    status: (
      <Link href="/main/borrow/20">
        <button
          className="px-2 py-1 rounded-md text-base text-white bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50 font-kanit"
          style={{ fontFamily: "Kanit" }}
        >
          ขอยืม
        </button>
      </Link>
    ),
  },
  {
    key: "21",
    name: "Amelia Clark",
    assetId: "AA11121",
    date: "30/09/66",
    detail: "คอมพิวเตอร์ Notebook Acer, a021",
    role: "Social Media Specialist",
    status: (
      <Link href="/main/borrow/21">
        <button
          className="px-2 py-1 rounded-md text-base text-white bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50 font-kanit"
          style={{ fontFamily: "Kanit" }}
        >
          ขอยืม
        </button>
      </Link>
    ),
  },
  {
    key: "22",
    name: "Jackson Walker",
    assetId: "AA11122",
    date: "30/09/66",
    detail: "คอมพิวเตอร์ Notebook Acer, a022",
    role: "Customer Support",
    status: (
      <Link href="/main/borrow/22">
        <button
          className="px-2 py-1 rounded-md text-base text-white bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50 font-kanit"
          style={{ fontFamily: "Kanit" }}
        >
          ขอยืม
        </button>
      </Link>
    ),
  },
  {
    key: "23",
    name: "Henry Hall",
    assetId: "AA11123",
    date: "30/09/66",
    detail: "คอมพิวเตอร์ Notebook Acer, a023",
    role: "Security Analyst",
    status: (
      <Link href="/main/borrow/23">
        <button
          className="px-2 py-1 rounded-md text-base text-white bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50 font-kanit"
          style={{ fontFamily: "Kanit" }}
        >
          ขอยืม
        </button>
      </Link>
    ),
  },
  {
    key: "24",
    name: "Charlotte Young",
    assetId: "AA11124",
    date: "30/09/66",
    detail: "คอมพิวเตอร์ Notebook Acer, a024",
    role: "PR Specialist",
    status: (
      <span className="text-red-500 font-bold" style={{ fontFamily: "Kanit" }}>
        ไม่ว่าง
      </span>
    ),
  },
  {
    key: "25",
    name: "Liam King",
    assetId: "AA11125",
    date: "30/09/66",
    detail: "คอมพิวเตอร์ Notebook Acer, a025",
    role: "Mobile App Developer",
    status: (
      <Link href="/main/borrow/25">
        <button
          className="px-2 py-1 rounded-md text-base text-white bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50 font-kanit"
          style={{ fontFamily: "Kanit" }}
        >
          ขอยืม
        </button>
      </Link>
    ),
  },
];
