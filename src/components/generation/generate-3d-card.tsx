import threeDCube from "@/assets/Image/boards/three-d-cube.png";
import { BorderBeam } from "@/components/ui/border-beam";
import { cn } from "@/lib/utils";
import "@google/model-viewer";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import ToolBarToolTips from "./tool-bar-tool-tips";
const ModelViewer = dynamic(() => import("./model-viewer"), {
  loading: () => <p>Loading...</p>,
  ssr: false,
});

type TImages = {
  imageUrl: string | null;
};
type TGenerate3DCard = {
  isGenerating: boolean;
  images: TImages;
  showToolTip: boolean;
  index: number;
  modelUrl?: string | null;
  status: "Success" | "inProgress";
  subThreadId: string;
  isCurrent: boolean;
};

export default function Generate3DCard({
  isGenerating,
  images,
  showToolTip,
  modelUrl,
  index,
  subThreadId,
  isCurrent,
}: TGenerate3DCard) {
  const [shouldShow3D, setShouldShow3D] = useState(false);
  const timerRef = useRef<NodeJS.Timeout>(null);
  useEffect(() => {
    if (isCurrent && !isGenerating && modelUrl) {
      // Delay showing the 3D model to allow animations to complete
      timerRef.current = setTimeout(() => {
        setShouldShow3D(true);
      }, 300);
    } else {
      setShouldShow3D(false);
    }

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [isCurrent, isGenerating, modelUrl]);

  return (
    <motion.div
      initial={{ opacity: 0.5 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.5 }}
      className="w-[264px] h-[370px] relative p-0"
    >
      <div className="relative -z-[10] rounded-2xl w-full h-full overflow-hidden">
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: shouldShow3D ? 0 : 1 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0 w-full h-full"
        >
          <Image
            src={images?.imageUrl ?? threeDCube.src}
            width={1920}
            height={1080}
            alt="3D model preview"
            className={cn("w-full h-full object-cover", {
              "blur-md": isGenerating,
            })}
            priority
          />
        </motion.div>

        {/* Conditionally render the 3D model with opacity transition */}
        {!isGenerating && modelUrl && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: shouldShow3D ? 1 : 0 }}
            transition={{ duration: 0.5 }}
            style={{
              pointerEvents: "auto",
            }}
            className={cn("absolute inset-0 w-full h-full", {
              "pointer-events-none": !shouldShow3D,
            })}
          >
            <ModelViewer
              key={`google-model-viewer-${subThreadId}-${index}`}
              src={modelUrl}
              alt=""
              poster={images.imageUrl}
            />
          </motion.div>
        )}
      </div>

      <div
        className={cn(
          "absolute -bottom-4 z-50 flex items-center gap-2 justify-center w-full",
          {
            hidden: !showToolTip,
          },
        )}
      >
        <ToolBarToolTips imageUrl={images.imageUrl} subThreadId={subThreadId} />
      </div>

      <BorderBeam
        containerClassName={cn("border-2 rounded-2xl", {
          hidden: !isGenerating,
        })}
        initialOffset={0}
        size={250}
        colorFrom="rgba(119, 217, 253,1)"
        colorTo="rgba(119, 217, 253,1)"
        className="border-2 rounded-2xl z-50 relative"
      />
    </motion.div>
  );
}
