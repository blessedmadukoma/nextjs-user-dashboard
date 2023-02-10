import React from "react";
import Link from "next/link";
import Image from "next/image";
import { RxSketchLogo, RxDashboard, RxPerson } from "react-icons/rx";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { FiSettings } from "react-icons/fi";

const Sidebar = ({ children }) => {
  return (
    <section>
      <aside className="flex">
        <div className="fixed w-20 h-screen p-4 bg-white border-r-[1px] flex flex-col justify-between">
          <section className="flex flex-col items-center">
            <Link href="/">
              <div className="bg-purple-800 text-white p-3 rounded-lg inline-block">
                <RxSketchLogo />
              </div>
            </Link>

            <span className="border-b-[1px] border-gray-200 w-full p-2"></span>

            <Link href="/">
              <div className="bg-gray-100 hover:bg-gray-200 cursor-pointer m-4 p-3 rounded-lg inline-block">
                <RxDashboard />
              </div>
            </Link>

            <Link href="/customers">
              <div className="bg-gray-100 hover:bg-gray-200 cursor-pointer m-4 p-3 rounded-lg inline-block">
                <RxPerson />
              </div>
            </Link>

            <Link href="/orders">
              <div className="bg-gray-100 hover:bg-gray-200 cursor-pointer m-4 p-3 rounded-lg inline-block">
                <HiOutlineShoppingBag />
              </div>
            </Link>
            <Link href="/settings">
              <div className="bg-gray-100 hover:bg-gray-200 cursor-pointer m-4 p-3 rounded-lg inline-block">
                <FiSettings />
              </div>
            </Link>
          </section>
        </div>
      </aside>
      {/* <main className="ml-20 w-full">{children}</main> */}
      <main className="ml-20">{children}</main>
    </section>
  );
};

export default Sidebar;
