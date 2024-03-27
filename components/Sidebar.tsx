"use client";

import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { Montserrat } from "next/font/google";

import { cn } from "@/lib/utils";

import {
  Code,
  ImageIcon,
  LayoutDashboard,
  MessagesSquare,
  MusicIcon,
  Settings,
  VideoIcon,
} from "lucide-react";
import { usePathname } from "next/navigation";
import FreeCounter from "./FreeCounter";

const montserrat = Montserrat({ weight: "600", subsets: ["latin"] });

const routes = [
  {
    lable: "DashBoard",
    icon: LayoutDashboard,
    href: "/dashboard",
    color: "text-sky-500",
  },
  {
    lable: "Conversation",
    icon: MessagesSquare,
    href: "/conversation",
    color: "text-green-500",
  },
  {
    lable: "Image Generation",
    icon: ImageIcon,
    href: "/image",
    color: "text-pink-500",
  },
  {
    lable: "Music Generation",
    icon: MusicIcon,
    href: "/music",
    color: "text-orange-500",
  },
  {
    lable: "Video Generation",
    icon: VideoIcon,
    href: "/video",
    color: "text-emerald-500",
  },
  {
    lable: "Code Generation",
    icon: Code,
    href: "/code",
    color: "text-violet-500",
  },
];

const Sidebar: NextPage = () => {
  const pathname = usePathname();

  return (
    <div className="space-y-4 flex py-4 flex-col h-full bg-[#111827] text-white">
      <div className="px-3 py-2 flex-1">
        <Link href={"/dashboard"} className="flex items-center pl-3 mb-14">
          <div className="relative w-8 h-8 mr-4">
            <Image fill src="/logo.png" alt="Logo" className="object-cover" />
          </div>
          <h1 className={cn("text-2xl font-bold", montserrat.className)}>
            Kiki
          </h1>
        </Link>

        <div className="space-y-1">
          {routes.map((item) => (
            <Link
              href={item.href}
              key={item.href}
              className={cn(
                "text-sm group flex p-3 w-full justify-center font-medium cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition",
                pathname === item.href
                  ? "text-white bg-white/10"
                  : "text-zinc-400"
              )}
            >
              {" "}
              <div className="flex items-center flex-1">
                <item.icon className={cn("h-5 w-5 mr-3", item.color)} />
                {item.lable}
              </div>
            </Link>
          ))}
        </div>
      </div>
      {/* <FreeCounter apiLimitCount={apiLimitCount} /> */}
    </div>
  );
};

export default Sidebar;
