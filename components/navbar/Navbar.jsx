"use client";
import { useState } from "react";
import Link from "next/link";
import MenuIcon from "./MenuIcon";
import MenuLinks from "./MenuLinks";
import Themebutton from "./Themebutton";
import SmallLinks from "./SmallLinks";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="flex justify-between items-center w-full px-4 py-3 uppercase font-medium">
      <Link href="/" className="text-sm nav-animate">
        Hanh Nguyen
      </Link>
      <div className="flex items-center gap-3">
        <MenuLinks />

        <div className="flex">
          <Themebutton />

          <div onClick={() => setMenuOpen(true)} className="sm:hidden">
            <MenuIcon />
          </div>
        </div>
      </div>
      {menuOpen && <SmallLinks setMenuOpen={setMenuOpen} />}
    </div>
  );
}

export default Navbar;
