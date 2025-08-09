"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { FaHome } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";

const Breadcramp = () => {
  const pathname = usePathname().split("/")[1];
  return (
    <>
      <div className="flex items-center justify-between mb-4">
        <div>
          <p className="text-xl font-bold">Snack</p>
          <ul className="flex items-center gap-3 text-secondary font-semibold">
            <li>
              <Link href="/" className="flex items-center gap-1.5 text-brand">
              <FaHome/>
                <span>Home</span>
              </Link>
            </li>
            <li>
              <IoIosArrowForward className="text-xs" />
            </li>
            <li>
              <p>{pathname}</p>
            </li>
          </ul>
        </div>
        <div>
          <ul className="flex items-center gap-3 text-secondary font-semibold">
            <li>
              <Link
                href={"/"}
                className="bg-white p-2  text-base text-secondary rounded-2xl hover:text-brand"
              >
                {" "}
                Cabbage
              </Link>
            </li>
            <li>
              <Link
                href={"/"}
                className="bg-white p-2  text-base text-secondary rounded-2xl hover:text-brand"
              >
                {" "}
                Broccoli
              </Link>
            </li>
            <li>
              <Link
                href={"/"}
                className="bg-white p-2  text-base text-secondary rounded-2xl hover:text-brand"
              >
                {" "}
                Artichoke
              </Link>
            </li>
            <li>
              <Link
                href={"/"}
                className="bg-white p-2  text-base text-secondary rounded-2xl hover:text-brand"
              >
                {" "}
                Celery
              </Link>
            </li>
            <li>
              <Link
                href={"/"}
                className="bg-white p-2  text-base text-secondary rounded-2xl hover:text-brand"
              >
                {" "}
                Spinach
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Breadcramp;
