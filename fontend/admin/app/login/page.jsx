"use client";

import Image from "next/image";

import { useState, useEffect } from "react";
import { useRouter, redirect } from "next/navigation";
import Swal from "sweetalert2";
import axios from "axios";

export default function LoginPage() {
  const router = useRouter();
const [password, setPassword] = useState("");
const [user, setUser] = useState("");
async function handleSubmit(event) {
  event.preventDefault();

  axios({
    method: "post",
    data: {
      username: user,
      password: password,
    },
    withCredentials: true,
    url: "http://localhost:3002/loginadmin",
  })
    .then((res) => {
      console.log(res);

      if (res.data != "No user found") {
        if (res.data.fdEmail == user && res.data.fdPassword == password) {
          const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 1500,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.onmouseenter = Swal.stopTimer;
              toast.onmouseleave = Swal.resumeTimer;
            },
          });
          Toast.fire({
            icon: "success",
            title: "Signed in successfully",
          }).then(() => {
            router.push("/main");
          });
        } else {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Incorrect email or password",
          });
          // Handle errors}
        }
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Incorrect email or password",
        });
      }
    })
    .catch((err) => {
      console.log(err);
    });
  // console.log(res)
}
  return (
    <section className="bg-gradient-to-b from-white to-orange-500 min-h-screen flex items-center justify-center">
      <div className="bg-gray-100 px-5 py-12 md:w-96 rounded-2xl shadow-lg">
        <div className="px-6">
          <Image
            className="mx-auto"
            src="/kmitllogo.png"
            width={100}
            height={100}
            alt="Google Logo"
          />
          <h2 className="font-bold text-l text-[#f16322] text-center">
            KMITL Equipment Borrow System
          </h2>
          <br></br>
          <h2 className="font-bold text-2xl text-[#f16322] text-center">
            SIGN IN
          </h2>
          <div className="text-sm flex flex-col gap-4 mt-4 top-0 left-0 inline-block w-150 text-red-500">
            Email*
          </div>
          <form
            className="text-sm flex flex-col gap-4 mt-4"
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              name="username"
              className="p-2 rounded-xl border text-black"
              placeholder="Email Account (ใส่ @kmitl.ac.th)"
              onChange={(e) => setUser(e.target.value)}
              required
            />
            <div className="top-0 left-0 inline-block w-150 text-red-500">
              Password*
            </div>
            <input
              type="password"
              name="password"
              className="p-2 rounded-xl border w-full text-black"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button className="bg-[#f16322] text-white rounded-xl py-2 hover:scale-105 duration-300">
              LOGIN
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
