import { NextPage } from "next";
import { Menu } from "lucide-react";
import { UserButton } from "@clerk/nextjs";

import { Button } from "./ui/button";
import MobileSidebar from "./Mobile-sidebar";

interface Props {}

const Navbar: NextPage<Props> = ({}) => {
  return (
    <div className="flex item-center p-4">
      <MobileSidebar />
      <div className="w-full flex justify-end">
        <UserButton afterSignOutUrl={"/"} />
      </div>
    </div>
  );
};

export default Navbar;
