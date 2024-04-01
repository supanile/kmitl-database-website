import Link from "next/link";

export const users = [
  /* {
    key: "1",
    name: "Tony Reichert",
    assetId: "AA1111",
    date: "30/09/66",
    detail: "คอมพิวเตอร์ Notebook Acer, a001",
    role: "CEO",
    status: (
      <Link href={`/main/return/checkreturn`}>
        <button
          className="px-2 py-1 rounded-md text-base text-white bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50 font-kanit"
          style={{ fontFamily: "Kanit" }}
        >
          คืน
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
      <Link href="/main/return/checkreturn">
        <button
          className="px-2 py-1 rounded-md text-base text-white bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50 font-kanit"
          style={{ fontFamily: "Kanit" }}
        >
          คืน
        </button>
      </Link>
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
      <Link href="/main/return/checkreturn">
        <button
          className="px-2 py-1 rounded-md text-base text-white bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50 font-kanit"
          style={{ fontFamily: "Kanit" }}
        >
          คืน
        </button>
      </Link>
    ),
  },
  {
    key: "4",
    name: "William Howard",
    assetId: "AA1111",
    date: "30/09/66",
    detail: "คอมพิวเตอร์ Notebook Acer, a004",
    role: "Community Manager",
    status: (
      <Link href="/main/return/checkreturn">
        <button
          className="px-2 py-1 rounded-md text-base text-white bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50 font-kanit"
          style={{ fontFamily: "Kanit" }}
        >
          คืน
        </button>
      </Link>
    ),
  },
  {
    key: "5",
    name: "Emily Collins",
    assetId: "AA1111",
    date: "30/09/66",
    detail: "คอมพิวเตอร์ Notebook Acer, a005",
    role: "Marketing Manager",
    status: (
      <Link href="/main/return/checkreturn">
        <button
          className="px-2 py-1 rounded-md text-base text-white bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50 font-kanit"
          style={{ fontFamily: "Kanit" }}
        >
          คืน
        </button>
      </Link>
    ),
  },
  {
    key: "6",
    name: "Brian Kim",
    assetId: "AA1111",
    date: "30/09/66",
    detail: "คอมพิวเตอร์ Notebook Acer, a006",
    role: "Product Manager",
    status: (
      <Link href="/main/return/checkreturn">
        <button
          className="px-2 py-1 rounded-md text-base text-white bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50 font-kanit"
          style={{ fontFamily: "Kanit" }}
        >
          คืน
        </button>
      </Link>
    ),
  },
  {
    key: "7",
    name: "Laura Thompson",
    assetId: "AA1111",
    date: "30/09/66",
    detail: "คอมพิวเตอร์ Notebook Acer, a007",
    role: "UX Designer",
    status: (
      <Link href="/main/return/checkreturn">
        <button
          className="px-2 py-1 rounded-md text-base text-white bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50 font-kanit"
          style={{ fontFamily: "Kanit" }}
        >
          คืน
        </button>
      </Link>
    ),
  },
  {
    key: "8",
    name: "Michael Stevens",
    assetId: "AA1111",
    date: "30/09/66",
    detail: "คอมพิวเตอร์ Notebook Acer, a008",
    role: "Data Analyst",
    status: (
      <Link href="/main/return/checkreturn">
        <button
          className="px-2 py-1 rounded-md text-base text-white bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50 font-kanit"
          style={{ fontFamily: "Kanit" }}
        >
          คืน
        </button>
      </Link>
    ),
  },
  {
    key: "9",
    name: "Sophia Nguyen",
    assetId: "AA1111",
    date: "30/09/66",
    detail: "คอมพิวเตอร์ Notebook Acer, a009",
    role: "Quality Assurance",
    status: (
      <Link href="/main/return/checkreturn">
        <button
          className="px-2 py-1 rounded-md text-base text-white bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50 font-kanit"
          style={{ fontFamily: "Kanit" }}
        >
          คืน
        </button>
      </Link>
    ),
  },
  {
    key: "10",
    name: "James Wilson",
    assetId: "AA1111",
    date: "30/09/66",
    detail: "คอมพิวเตอร์ Notebook Acer, a010",
    role: "Front-end Developer",
    status: (
      <Link href="/main/return/checkreturn">
        <button
          className="px-2 py-1 rounded-md text-base text-white bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50 font-kanit"
          style={{ fontFamily: "Kanit" }}
        >
          คืน
        </button>
      </Link>
    ),
  },
  {
    key: "11",
    name: "Ava Johnson",
    assetId: "AA1111",
    date: "30/09/66",
    detail: "คอมพิวเตอร์ Notebook Acer, a011",
    role: "Back-end Developer",
    status: (
      <Link href="/main/return/checkreturn">
        <button
          className="px-2 py-1 rounded-md text-base text-white bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50 font-kanit"
          style={{ fontFamily: "Kanit" }}
        >
          คืน
        </button>
      </Link>
    ),
  },
  {
    key: "12",
    name: "Isabella Smith",
    assetId: "AA1111",
    date: "30/09/66",
    detail: "คอมพิวเตอร์ Notebook Acer, a012",
    role: "Graphic Designer",
    status: (
      <Link href="/main/return/checkreturn">
        <button
          className="px-2 py-1 rounded-md text-base text-white bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50 font-kanit"
          style={{ fontFamily: "Kanit" }}
        >
          คืน
        </button>
      </Link>
    ),
  },
  {
    key: "13",
    name: "Oliver Brown",
    assetId: "AA1111",
    date: "30/09/66",
    detail: "คอมพิวเตอร์ Notebook Acer, a013",
    role: "Content Writer",
    status: (
      <Link href="/main/return/checkreturn">
        <button
          className="px-2 py-1 rounded-md text-base text-white bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50 font-kanit"
          style={{ fontFamily: "Kanit" }}
        >
          คืน
        </button>
      </Link>
    ),
  },
  {
    key: "14",
    name: "Lucas Jones",
    assetId: "AA1111",
    date: "30/09/66",
    detail: "คอมพิวเตอร์ Notebook Acer, a014",
    role: "Project Manager",
    status: (
      <Link href="/main/return/checkreturn">
        <button
          className="px-2 py-1 rounded-md text-base text-white bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50 font-kanit"
          style={{ fontFamily: "Kanit" }}
        >
          คืน
        </button>
      </Link>
    ),
  },
  {
    key: "15",
    name: "Grace Davis",
    assetId: "AA1111",
    date: "30/09/66",
    detail: "คอมพิวเตอร์ Notebook Acer, a015",
    role: "HR Manager",
    status: (
      <Link href="/main/return/checkreturn">
        <button
          className="px-2 py-1 rounded-md text-base text-white bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50 font-kanit"
          style={{ fontFamily: "Kanit" }}
        >
          คืน
        </button>
      </Link>
    ),
  },
  {
    key: "16",
    name: "Elijah Garcia",
    assetId: "AA1111",
    date: "30/09/66",
    detail: "คอมพิวเตอร์ Notebook Acer, a016",
    role: "Network Administrator",
    status: (
      <Link href="/main/return/checkreturn">
        <button
          className="px-2 py-1 rounded-md text-base text-white bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50 font-kanit"
          style={{ fontFamily: "Kanit" }}
        >
          คืน
        </button>
      </Link>
    ),
  },
  {
    key: "17",
    name: "Emma Martinez",
    assetId: "AA1111",
    date: "30/09/66",
    detail: "คอมพิวเตอร์ Notebook Acer, a017",
    role: "Accountant",
    status: (
      <Link href="/main/return/checkreturn">
        <button
          className="px-2 py-1 rounded-md text-base text-white bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50 font-kanit"
          style={{ fontFamily: "Kanit" }}
        >
          คืน
        </button>
      </Link>
    ),
  },
  {
    key: "18",
    name: "Benjamin Lee",
    assetId: "AA1111",
    date: "30/09/66",
    detail: "คอมพิวเตอร์ Notebook Acer, a018",
    role: "Operations Manager",
    status: (
      <Link href="/main/return/checkreturn">
        <button
          className="px-2 py-1 rounded-md text-base text-white bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50 font-kanit"
          style={{ fontFamily: "Kanit" }}
        >
          คืน
        </button>
      </Link>
    ),
  },
  {
    key: "19",
    name: "Mia Hernandez",
    assetId: "AA1111",
    date: "30/09/66",
    detail: "คอมพิวเตอร์ Notebook Acer, a019",
    role: "Sales Manager",
    status: (
      <Link href="/main/return/checkreturn">
        <button
          className="px-2 py-1 rounded-md text-base text-white bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50 font-kanit"
          style={{ fontFamily: "Kanit" }}
        >
          คืน
        </button>
      </Link>
    ),
  },
  {
    key: "20",
    name: "Daniel Lewis",
    assetId: "AA1111",
    date: "30/09/66",
    detail: "คอมพิวเตอร์ Notebook Acer, a020",
    role: "DevOps Engineer",
    status: (
      <Link href="/main/return/checkreturn">
        <button
          className="px-2 py-1 rounded-md text-base text-white bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50 font-kanit"
          style={{ fontFamily: "Kanit" }}
        >
          คืน
        </button>
      </Link>
    ),
  },
  {
    key: "21",
    name: "Amelia Clark",
    assetId: "AA1111",
    date: "30/09/66",
    detail: "คอมพิวเตอร์ Notebook Acer, a021",
    role: "Social Media Specialist",
    status: (
      <Link href="/main/return/checkreturn">
        <button
          className="px-2 py-1 rounded-md text-base text-white bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50 font-kanit"
          style={{ fontFamily: "Kanit" }}
        >
          คืน
        </button>
      </Link>
    ),
  },
  {
    key: "22",
    name: "Jackson Walker",
    assetId: "AA1111",
    date: "30/09/66",
    detail: "คอมพิวเตอร์ Notebook Acer, a022",
    role: "Customer Support",
    status: (
      <Link href="/main/return/checkreturn">
        <button
          className="px-2 py-1 rounded-md text-base text-white bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50 font-kanit"
          style={{ fontFamily: "Kanit" }}
        >
          คืน
        </button>
      </Link>
    ),
  },
  {
    key: "23",
    name: "Henry Hall",
    assetId: "AA1111",
    date: "30/09/66",
    detail: "คอมพิวเตอร์ Notebook Acer, a023",
    role: "Security Analyst",
    status: (
      <Link href="/main/return/checkreturn">
        <button
          className="px-2 py-1 rounded-md text-base text-white bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50 font-kanit"
          style={{ fontFamily: "Kanit" }}
        >
          คืน
        </button>
      </Link>
    ),
  },
  {
    key: "24",
    name: "Charlotte Young",
    assetId: "AA1111",
    date: "30/09/66",
    detail: "คอมพิวเตอร์ Notebook Acer, a024",
    role: "PR Specialist",
    status: (
      <Link href="/main/return/checkreturn">
        <button
          className="px-2 py-1 rounded-md text-base text-white bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50 font-kanit"
          style={{ fontFamily: "Kanit" }}
        >
          คืน
        </button>
      </Link>
    ),
  },
  {
    key: "25",
    name: "Liam King",
    assetId: "AA1111",
    date: "30/09/66",
    detail: "คอมพิวเตอร์ Notebook Acer, a025",
    role: "Mobile App Developer",
    status: (
      <Link href="/main/return/checkreturn">
        <button
          className="px-2 py-1 rounded-md text-base text-white bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50 font-kanit"
          style={{ fontFamily: "Kanit" }}
        >
          คืน
        </button>
      </Link>
    ),
  }, */
  {
    key: "1",
    name: "Liam King",
    assetId: "AA1111",
    date: "30/09/66",
    detail: "คอมพิวเตอร์ Notebook Acer a025",
    role: "Mobile App Developer"
  }

].map((item) => ({
  ...item,
  status: <Link href={`return/${item.key}`}>
  <button
    className="px-2 py-1 rounded-md text-base text-white bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50 font-kanit"
    style={{ fontFamily: "Kanit" }}
  >
    คืน
  </button>
</Link>,
}));

