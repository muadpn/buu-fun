import { TGenerationalData } from "@/lib/redux/features/chat-types";
import { cn } from "@/lib/utils";
import { WheelGesturesPlugin } from "embla-carousel-wheel-gestures";
import { AnimatePresence } from "framer-motion";
import React, { useEffect, useRef } from "react";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import Generate3DCard from "./generate-3d-card";
const CurvedEmblaCarousel = ({
  subThreadId,
  GenRequests,
}: {
  threadId: string;
  subThreadId: string;
  GenRequests: TGenerationalData[];
}) => {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const prevLengthRef = useRef<number>(GenRequests.length);

  useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap() + 1);
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  useEffect(() => {
    if (api && GenRequests.length > prevLengthRef.current) {
      // If a new item was added, scroll to the last item
      api.scrollTo(GenRequests.length - 1);
      // Update the current selection after a small delay to ensure the carousel has updated
      setTimeout(() => {
        setCurrent(GenRequests.length);
      }, 100);
    }
    // Update the ref to track changes
    prevLengthRef.current = GenRequests.length;
  }, [GenRequests.length, api]);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const modelContainer = ref.current;
    if (!modelContainer) return;
    const stopPropagation = (e: Event) => {
      e.stopPropagation();
    };
    modelContainer.addEventListener("mousedown", stopPropagation);
    modelContainer.addEventListener("touchcancel", stopPropagation);
    modelContainer.addEventListener("touchend", stopPropagation);
    modelContainer.addEventListener("touchmove", stopPropagation);
    modelContainer.addEventListener("wheel", stopPropagation);
    modelContainer.addEventListener("touchstart", stopPropagation);
    return () => {
      if (!modelContainer) return;
      modelContainer.removeEventListener("mousedown", stopPropagation);
      modelContainer.removeEventListener("touchcancel", stopPropagation);
      modelContainer.removeEventListener("touchend", stopPropagation);
      modelContainer.removeEventListener("touchmove", stopPropagation);
      modelContainer.removeEventListener("wheel", stopPropagation);
      modelContainer.removeEventListener("touchstart", stopPropagation);
    };
  }, [ref]);

  return (
    <div
      className="max-w-[264px] max-h-[370px] h-full w-full "
      ref={carouselRef}
    >
      {GenRequests.length ? (
        <Carousel
          ref={ref}
          opts={{
            align: "center",
            startIndex: GenRequests.length - 1,
            dragFree: false,
            watchDrag: false,
            watchResize: true,
            watchSlides: true,
          }}
          plugins={[WheelGesturesPlugin()]}
          className="overflow-visible  pointer-events-none relative max-w-[264px] max-h-[370px] h-full w-full"
          setApi={setApi}
        >
          <CarouselContent
            className="ml-0 relative h-full pointer-events-none w-full"
            containerClass="overflow-visible pointer-events-none h-full w-full"
          >
            <AnimatePresence>
              {GenRequests.map((item, index) => {
                const isCurrent = current === index + 1;
                const distanceFromCenter = Math.abs(index + 1 - current);
                const direction = current > index + 1 ? -1.2 : 1.2;
                const TransformDirection = current > index + 1 ? -10 : 10.2;

                const rotate = isCurrent
                  ? "0deg"
                  : `${direction * (10 + distanceFromCenter * 5)}deg`;

                const scale = isCurrent
                  ? "100%"
                  : `${65 - Math.pow(index + 1, 1)}%`;
                const baseOffset = 10;
                const transformY = isCurrent
                  ? "0%"
                  : `${distanceFromCenter * baseOffset}%`;

                const transformX = isCurrent
                  ? "0%"
                  : `${TransformDirection * (index + 1) * 1}%`;
                return (
                  <CarouselItem
                    key={`carousel-sub-card-${index}-${item?.image?.imageId}-${item?.style}`}
                    style={{
                      transform: `translate(${transformX}, ${transformY}) rotate(${rotate}) scale(${scale})`,
                    }}
                    onClick={() => {
                      if (isCurrent) return;
                      api?.scrollTo(index);
                    }}
                    className={cn(
                      "relative pl-0  border-buu   pointer-events-none select-none max-w-[264px]  max-h-[370px] h-full rounded-lg shadow-lg",
                      "transition-all duration-500 ease-out"
                    )}
                  >
                    <Generate3DCard
                      isCurrent={isCurrent}
                      subThreadId={subThreadId}
                      index={index}
                      status={item.isGenerating ? "inProgress" : "Success"}
                      showToolTip={isCurrent}
                      isGenerating={item.isGenerating}
                      images={{
                        imageUrl: item.image.imageUrl,
                      }}
                      modelUrl={item?.model?.modelUrl}
                    />
                  </CarouselItem>
                );
              })}
            </AnimatePresence>
          </CarouselContent>
          <div className="absolute top-[50%] w-full pointer-events-auto">
            <div className="absolute top-[50%] right-0 pointer-events-auto">
              <CarouselNext className="disabled:hidden pointer-events-auto -right-4 top-auto" />
            </div>
            <div className="absolute top-[50%] left-0">
              <CarouselPrevious className="disabled:hidden pointer-events-auto -left-4 top-auto" />
            </div>
          </div>
        </Carousel>
      ) : (
        <Generate3DCard
          isCurrent={true}
          // id={`generating-${threadId}`}
          subThreadId="s"
          index={0}
          status={"inProgress"}
          showToolTip={true}
          isGenerating={true}
          images={{ imageUrl: null }}
          modelUrl={null}
        />
      )}
    </div>
  );
};

export default CurvedEmblaCarousel;
