"use client";
import Link from "next/link";
import { MdOutlineMail } from "react-icons/md";
import { IoMdCall } from "react-icons/io";

function Contact() {
  return (
    <div id="contact" className="px-4 pb-28 w-full flex flex-col">
      <h1 className="text-center text-3xl font-medium uppercase pb-12">
        Contact Me
      </h1>

      <div className="flex flex-col md:flex-row items-center justify-center gap-9 md:justify-evenly">
        <div className="flex flex-col items-center gap-2">
          <div className="text-lg">hanh@nguyenterprises.work</div>
          <Link
            href="mailto:hanh@nguyenterprises.work"
            // className="py-2 px-4 bg-red-600 dark:bg-white text-white dark:text-red-600 font-semibold rounded-lg hover:bg-white hover:text-red-600 hover:ring-2 hover:ring-red-600 dark:hover:bg-red-600 dark:hover:text-white dark:hover:ring-white"
            className="py-2 px-4 text-xl bg-red-600  text-white font-semibold rounded-lg hover:bg-white hover:text-red-600 hover:ring-2 hover:ring-red-600 flex items-center gap-2"
          >
            <span className="text-xl">
              <MdOutlineMail />
            </span>
            <span>Email</span>
          </Link>
        </div>

        <div className="flex flex-col items-center gap-2">
          <div className="text-lg">+1 973-291-2852</div>
          <Link
            href="tel:+19732912852"
            // className="py-2 px-4 bg-red-600 dark:bg-white text-white dark:text-red-600 font-semibold rounded-lg hover:bg-white hover:text-red-600 hover:ring-2 hover:ring-red-600 dark:hover:bg-red-600 dark:hover:text-white dark:hover:ring-white"
            className="py-2 px-4 text-xl bg-red-600  text-white font-semibold rounded-lg hover:bg-white hover:text-red-600 hover:ring-2 hover:ring-red-600 flex items-center gap-2"
          >
            <span className="text-xl">
              <IoMdCall />
            </span>
            <span>Call or Text</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Contact;
