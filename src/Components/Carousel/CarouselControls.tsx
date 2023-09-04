// components/CarouselControls.tsx
import classNames from "classnames";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

type Props = {
  canScrollPrev: boolean;
  canScrollNext: boolean;
  visibleButton: boolean;
  onPrev(): void;
  onNext(): void;
};
const CarouselControls = (props: Props) => {
  return (
    <div className="flex justify-between  mx-auto top-[45%] left-[-6%] w-[110%]  absolute">
      <button
        className={classNames({ hidden: !props.visibleButton })}
        onClick={() => {
          props.onPrev();
          if (props.canScrollPrev) {
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
        className={classNames({ hidden: !props.visibleButton })}
        onClick={() => {
          props.onNext();
          if (props.canScrollPrev) {
          }
        }}
        disabled={!props.canScrollPrev}
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
