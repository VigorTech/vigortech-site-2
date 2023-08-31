import useEmblaCarousel, { EmblaOptionsType } from "embla-carousel-react";
import { PropsWithChildren, useEffect, useState } from "react";
import DotButton from "./Dots";
import CarouselControls from "./CarouselControls";
import Dots from "./Dots";
import React from "react";

// Define the props
type Props = PropsWithChildren & EmblaOptionsType & {
  visibleDots: boolean;
  visibleButtonControl: boolean;
};

const Carousel = ({ children,  visibleButtonControl = true, visibleDots = false, ...options }: Props) => {
  // 1. useEmblaCarousel returns a emblaRef and we must attach the ref to a container.
  // EmblaCarousel will use that ref as basis for swipe and other functionality.
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const canScrollNext = !!emblaApi?.canScrollNext();
  const canScrollPrev = !!emblaApi?.canScrollPrev();

  useEffect(() => {
    function selectHandler() {
      // selectedScrollSnap gives us the current selected index.
      const index = emblaApi?.selectedScrollSnap();
      setSelectedIndex(index || 0);
    }

    emblaApi?.on("select", selectHandler);
    // cleanup
    return () => {
      emblaApi?.off("select", selectHandler);
    };
  }, [emblaApi]);

  const length = React.Children.count(children);

  return (
    // Attach ref to a div
    // 2. The wrapper div must have overflow:hidden
    <div className="relative">
      <div className="overflow-hidden relative select-none" ref={emblaRef}>
        {/* 3. The inner div must have a display:flex property */}
        {/* 4. We pass the children as-is so that the outside component can style it accordingly */}
        <div className="flex">{children}</div>
      </div>
      <CarouselControls
        visibleButton={visibleButtonControl}
        canScrollNext={canScrollNext}
        canScrollPrev={canScrollPrev}
        onNext={() => emblaApi?.scrollNext()}
        onPrev={() => emblaApi?.scrollPrev()}
      />
      <Dots itemsLength={length} selectedIndex={selectedIndex} visible={visibleDots} />
    </div>
  );
};
export default Carousel;
