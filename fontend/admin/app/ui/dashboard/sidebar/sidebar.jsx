"use client";
import Image from "next/image";
import MenuLink from "./menuLink/menuLink";
import { useRouter } from "next/navigation";
import axios from "axios";
import { useState, useEffect, Suspense } from "react";
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
        title: "จัดการครุภัณฑ์",
        path: "/main/products",
        icon: <MdShoppingBag />,
      },
    ],
  },
];

const Sidebar = () => {
  const router = useRouter();
  const [user, setUser] = useState({});

  useEffect(() => {
    getUser();
  }, []);

  const getUser = () => {
    axios({
      method: "get",
      withCredentials: true,
      url: "http://localhost:3002/getAdmin",
    }).then((response) => {
      if (!response.data) {
        router.push("/login");
      }
      setUser(response.data);
    });
  };
  async function handleSubmit(event) {
    axios({
      method: "post",
      withCredentials: true,
      url: "http://localhost:3002/logout",
    })
      .then((res) => {
        router.push("/login");
      })
      .catch((err) => {
        console.log(err);
      });
    // console.log(res)
  }
  
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
          <Suspense fallback={<div>Loading...</div>}>
          <span className={styles.username}>{user?.fdFname} {user?.fdLname}</span>
          </Suspense>
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
      <button className={styles.logout} onClick={handleSubmit}>
        <MdLogout />
        Logout
      </button>
      </Link>
    </div>
  );
};

export default Sidebar;
