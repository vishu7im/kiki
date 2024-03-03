"use client";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import {
  ArrowRight,
  Code,
  ImageIcon,
  LayoutDashboard,
  MessagesSquare,
  MusicIcon,
  Settings,
  VideoIcon,
} from "lucide-react";
import { NextPage } from "next";
import { useRouter } from "next/navigation";

interface Props {}

const tools = [
  {
    lable: "DashBoard",
    icon: LayoutDashboard,
    href: "/dashboard",
    color: "bg-sky-500",
  },
  {
    lable: "Conversation",
    icon: MessagesSquare,
    href: "/conversation",
    color: "bg-pink-500",
  },
  {
    lable: "Image Genration",
    icon: ImageIcon,
    href: "/image",
    color: "bg-yellow-500",
  },
  {
    lable: "Music Genration",
    icon: VideoIcon,
    href: "/music",
    color: "bg-green-500",
  },
  {
    lable: "Video Genration",
    icon: MusicIcon,
    href: "/video",
    color: "bg-orange-500",
  },
  {
    lable: "Code Genration",
    icon: Code,
    href: "/code",
    color: "bg-emerald-500",
  },
];

const DashBoardPage: NextPage<Props> = ({}) => {
  const router = useRouter();
  return (
    <div>
      <div className="mb-8 space-y-4">
        <h2 className="text-2xl md:text-4xl font-bold text-center ">
          Explore the power of AI
        </h2>
        <p className="text-muted-foreground font-light text-sm md:text-lg text-center ">
          Chat with the smartest AI : Kiki - Experience the power of AI
        </p>
      </div>

      <div className="px-4 md:px-20 lg:px-32 space-y-4">
        {tools.map((tool) => (
          <Card
            onClick={() => router.push(tool.href)}
            key={tool.href}
            className="p-4 border-black/5 flex items-center justify-between hover:shadow-md transition cursor-pointer"
          >
            <div className="flex items-center gap-x-4">
              <div className={cn("p-2 w-fit rounded-md", tool.color)}>
                <tool.icon className={" text-white w-8 h-8"} />
              </div>
              <div className="font-semibold">{tool.lable}</div>
            </div>
            <ArrowRight className="w-5 h-5" />
          </Card>
        ))}
      </div>
    </div>
  );
};

export default DashBoardPage;
