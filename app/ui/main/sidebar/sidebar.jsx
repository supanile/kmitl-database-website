import Image from "next/image";
import MenuLink from "./menuLink/menuLink";
import styles from "./sidebar.module.css";
import {
  MdHome,
  MdEditSquare,
  MdAssignmentReturn,
  MdHistory,
  MdLibraryBooks,
  MdRule,
  MdLogout,
} from "react-icons/md";
import Link from "next/link";

const menuItems = [
  {
    title: "",
    list: [
      {
        title: "หน้าหลัก",
        path: "/main",
        icon: <MdHome />,
      },
      {
        title: "ยืม ครุภัณฑ์",
        path: "/main/borrow",
        icon: <MdEditSquare />,
      },
      {
        title: "คืน ครุภัณฑ์",
        path: "/main/return",
        icon: <MdAssignmentReturn />,
      },
      {
        title: "ประวัติการยืม - คืน",
        path: "/main/historys",
        icon: <MdHistory />,
      },
      {
        title: "วิธีการใช้งาน",
        path: "/main/howtouse",
        icon: <MdLibraryBooks />,
      },
      {
        title: "กฎการใช้งานครุภัณฑ์",
        path: "/main/ruleuse",
        icon: <MdRule />,
      },
    ],
  },
];
const Sidebar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.user}>
        <div className="flex items-center">
          <Image
            className="mt-[px] mr-[-20px]"
            src="/kmitlfight.png"
            alt=""
            width="180"
            height="180"
          />
          <Image
            className={styles.userImage}
            src="/noavatar.png"
            alt=""
            width="50"
            height="50"
          />
          <div className="flex flex-col ml-2">
            <span className={styles.username}>May Thanida</span>
            <span className={styles.userTitle}>Administrator</span>
          </div>
        </div>
      </div>
      <ul>
        {menuItems.map((cat) => (
          <li key={cat.title}>
            <span className={styles.cat}>{cat.title}</span>
            {cat.list.map((item) => (
              <MenuLink item={item} key={item.title} />
            ))}
          </li>
        ))}
      </ul>
      <Link href="/">
        <button className={styles.logout}>
          <MdLogout />
          Logout
        </button>
      </Link>
    </div>
  );
};

export default Sidebar;
