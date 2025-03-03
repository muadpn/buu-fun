import { getAllThreads } from "@/lib/react-query/threads";
import { useAuthentication } from "@/providers/account.context";
import { useQuery } from "@tanstack/react-query";
import { format } from "date-fns";
import { motion } from "framer-motion";
import { Ghost, Loader2, MessageCircle, TimerIcon } from "lucide-react";
import { SheetClose } from "@/components/ui/sheet";
import Link from "next/link";
import { useAppDispatch } from "@/hooks/redux";
import { setHistoryModel } from "@/lib/redux/features/settings";

const containerVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.1, duration: 0.3 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
};
export default function HistoryNavigation() {
  //   const data = mockData;
  //   const isLoading = false;
  const dispatch = useAppDispatch();
  const { identityToken } = useAuthentication();
  const { data, isLoading } = useQuery({
    queryKey: ["get-all-recent-threads"],
    queryFn: async () => {
      const accessToken = identityToken;
      return await getAllThreads(accessToken ?? "");
    },
  });
  if (isLoading) {
    return (
      <div className="flex  items-center justify-center w-full h-[80%]">
        <div className="flex items-center justify-center flex-col w-full">
          <div className="flex items-center justify-center flex-col w-full">
            <Loader2 className="animate-spin" />
            <p>Loading recent chats</p>
          </div>
        </div>
      </div>
    );
  }
  if (!data?.items.length) {
    return (
      <div className="flex  items-center justify-center w-full h-[80%]">
        <div className="flex items-center justify-center flex-col w-full">
          <div className="flex items-center justify-center flex-col w-full">
            <Ghost className="w-10 h-10 text-blue-300" />
            <p className="text-lg text-center leading-5 mt-2">
              You don&apos;t have any <br /> recent history
            </p>
          </div>
        </div>
      </div>
    );
  }
  return (
    <motion.div
      className="flex flex-col max-h-[90%] gap-2 mt-4 overflow-y-scroll scrollbar-w-hidden scrollbar-track-orange-lighter scrollbar-thumb-rounded"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {data?.items.map((item) => (
        <SheetClose key={item._id} asChild>
          <motion.div
            className="border-buu relative bg-buu flex flex-col gap-2 shadow-buu-muted p-3 rounded-xl backdrop-blur-10 "
            variants={itemVariants}
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.999 }}
          >
            <Link
              onClick={() => {
                dispatch(setHistoryModel(false));
              }}
              prefetch={false}
              href={`/generation/${item._id}`}
              className="w-full top-0 left-0 absolute  h-full"
            />
            <div className="flex items-center gap-2">
              <MessageCircle className="w-5 h-5 text-blue-300" />
              <h1 className="line-clamp-1 font-medium text-foreground">
                {item.title}
              </h1>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <TimerIcon className="w-4 h-4 text-blue-300" />
              {format(new Date(item.createdAt), "HH:mm, dd MMMM, EEEE")}
            </div>
          </motion.div>
        </SheetClose>
      ))}
    </motion.div>
  );
}
