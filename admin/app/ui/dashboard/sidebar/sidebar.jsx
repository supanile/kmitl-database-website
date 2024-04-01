import Image from "next/image";
import MenuLink from "./menuLink/menuLink";
import styles from "./sidebar.module.css";
import {
  MdDashboard,
  MdSupervisedUserCircle,
  MdShoppingBag,
  MdLogout,
  MdHome,
} from "react-icons/md";
import Link from "next/link";

const menuItems = [
  {
    list: [
      {
        title: "หน้าหลัก",
        path: "/main",
        icon: <MdHome />,
      },
      {
        title: "Dashboard",
        path: "/main/dashboard",
        icon: <MdDashboard />,
      },
      // {
      //   title: "users",
      //   path: "/main/users",
      //   icon: <MdSupervisedUserCircle />,
      // },
      {
        title: "จัดการณ์ครุภัณฑ์",
        path: "/main/products",
        icon: <MdShoppingBag />,
      },
    ],
  },
];

const Sidebar = () => {
  return (
    <div className={styles.container}>
      <Image
          className={styles.logoImage}
          src="/kmitlfight.png"
          alt=""
          width="200"
          height="200"
        />
        <div className={styles.user}>
        <Image
          className={styles.userImage}
          src="/noavatar.png"
          alt=""
          width="50"
          height="50"
        />
        <div className={styles.userDetail}>
          <span className={styles.username}>May Thanida</span>
          <span className={styles.userTitle}>Administrator</span>
        </div>
      </div>
      <ul className={styles.list}>
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
