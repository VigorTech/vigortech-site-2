import classNames from "classnames";

type Props = {
  itemsLength: number;
  selectedIndex: number;
  visible: boolean;
};
const Dots = ({ itemsLength, selectedIndex, visible }: Props) => {
  const arr = new Array(itemsLength).fill(0);
  return (
    <div className="flex gap-1 my-2 justify-center -translate-y-5">
      {arr.map((_, index) => {
        const selected = index === selectedIndex;
        return (
          <div
            className={classNames({
              "h-1 w-1 mx-1  rounded-full transition-all duration-300 bg-slate-50":
                true,
              // tune down the opacity if slide is not selected
              "opacity-50": !selected,
              "scale-[3]": selected,
              "hidden": !visible,
            })}
            key={index}
          ></div>
        );
      })}
    </div>
  );
};
export default Dots;
