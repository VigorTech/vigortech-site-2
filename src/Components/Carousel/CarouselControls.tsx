// components/CarouselControls.tsx
import classNames from "classnames";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

type Props = {
  canScrollPrev: boolean;
  canScrollNext: boolean;
  onPrev(): void;
  onNext(): void;
};
const CarouselControls = (props: Props) => {
  return (
    <div className="flex justify-between  mx-auto top-[45%] left-[-6%] w-[110%]  absolute">
      <button
        onClick={() => {
          if (props.canScrollPrev) {
            props.onPrev();
          }
        }}
        disabled={!props.canScrollPrev}
      >
        <BsChevronLeft
          color={props.canScrollPrev ? "04D6B2" : "gray"}
          size={40}
        />
      </button>
      <button
        onClick={() => {
          if (props.canScrollNext) {
            props.onNext();
          }
        }}
        disabled={!props.canScrollNext}
      >
        <BsChevronRight
          color={props.canScrollPrev ? "04D6B2" : "gray"}
          size={40}
        />
      </button>
    </div>
  );
};
export default CarouselControls;
