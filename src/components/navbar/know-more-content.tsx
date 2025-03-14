"use client";
import { DiscordIcon } from "@/assets/icons";
import DocumentationIcon from "@/assets/icons/documenation-icon";
import MailIcon from "@/assets/icons/mail-icon";
import TelegramIconWhite from "@/assets/icons/Telegram-icon-white";
import TikTokIcon from "@/assets/icons/tictok-icon";
import TwitterIcon from "@/assets/icons/TwitterIcon";
import YoutubePlayIcon from "@/assets/icons/youtube-play";
import Link from "next/link";

export default function KnowMoreContent() {
  return (
    <div className="w-full h-full">
      <div className="flex flex-col gap-1  items-start ">
        <h4 className=" font-bold leading-none mb-1">Help</h4>
        <Link
          href={"https://docs.buu.fun/"}
          target="_blank"
          className="flex items-center w-full gap-2 group"
        >
          <div className="w-5 h-5 ">
            <DocumentationIcon />
          </div>
          <p className="leading-none text-gray-400 group-hover:text-white font-medium">
            Documentation
          </p>
        </Link>
        <Link
          href={"https://www.youtube.com/@buuonsol/videos"}
          target="_blank"
          className="flex items-center w-full gap-2 group"
        >
          <div className="w-5 h-5 ">
            <YoutubePlayIcon />
          </div>{" "}
          <p className="leading-none text-gray-400 group-hover:text-white font-medium">
            Video Tutorial
          </p>
        </Link>
        <Link
          href={"mailto:support@buu.fun"}
          target="_blank"
          className="flex items-center w-full gap-2 group"
        >
          <div className="w-5 h-5 ">
            <MailIcon />
          </div>
          <p className="leading-none text-gray-400 group-hover:text-white font-medium">
            Contact Support
          </p>
        </Link>
      </div>
      <div className="w-full h-[1px] bg-muted-foreground/40 my-3 " />
      <div className="flex flex-col gap-1  items-start ">
        <h4 className=" font-bold leading-none  mb-1">Communities</h4>
        <Link
          href={"https://discord.gg/BUUFUN"}
          target="_blank"
          className="flex items-center w-full gap-2 group"
        >
          <div className="w-5 h-5 ">
            <DiscordIcon />
          </div>
          <p className="leading-none text-gray-400 group-hover:text-white font-medium">
            Discord
          </p>
        </Link>
        <Link
          href={"https://x.com/home"}
          target="_blank"
          className="flex items-center w-full gap-2 group"
        >
          <div className="w-5 h-5 ">
            <TwitterIcon />
          </div>{" "}
          <p className="leading-none text-gray-400 group-hover:text-white font-medium">
            X
          </p>
        </Link>
        <Link
          href={"https://t.me/buu_fun"}
          target="_blank"
          className="flex items-center w-full gap-2 group"
        >
          <div className="w-5 h-5 ">
            <TelegramIconWhite />
          </div>
          <p className="leading-none text-gray-400 group-hover:text-white font-medium">
            Telegram
          </p>
        </Link>
        <Link
          href={"https://docs.buu.fun/"}
          target="_blank"
          className="flex items-center w-full gap-2 group"
        >
          <div className="w-5 h-5 ">
            <TikTokIcon />
          </div>
          <p className="leading-none text-gray-400 group-hover:text-white font-medium">
            TikTok
          </p>
        </Link>
      </div>
    </div>
  );
}
