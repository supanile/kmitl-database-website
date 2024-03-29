"use client";

import Image from "next/image";

const LoginPage = () => {
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
          <div className="text-sm flex flex-col gap-4 mt-4 top-0 left-0 inline-block w-150 text-red-500">Email*</div>
          <form className="text-sm flex flex-col gap-4 mt-4">
            <input
              type="text"
              name="username"
              className="p-2 rounded-xl border text-black"
              placeholder="Email Account (ไม่ต้องใส่ @kmitl.ac.th)"
            />
          <div className="top-0 left-0 inline-block w-150 text-red-500">Password*</div>
            <input
              type="password"
              name="password"
              className="p-2 rounded-xl border w-full text-black"
              placeholder="Password"
            />
            <button className="bg-[#f16322] text-white rounded-xl py-2 hover:scale-105 duration-300">
              LOGIN
            </button>
          </form>
          <div className="mt-2 text-xs text-[#002D74] underline">
            <a href="#">FORGOT PASSWORD</a>
          </div>
          <div className="mt-6 text-gray-400 grid items-center grid-cols-3">
            <hr className="border-gray-400" />
            <p className="text-center text-sm">หรือ</p>
            <hr className="border-gray-400" />
          </div>
          <button
            className="bg-white px-2 py-2 mt-5 border w-full rounded-xl 
          flex justify-center items-center text-sm hover:scale-105 duration-300 text-[#002D74]"
          >
            <Image
              src="/google-logo.png"
              width={30}
              height={30}
              alt="Google Logo"
            />
            <span className="px-2">Login with Google</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
