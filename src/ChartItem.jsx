import { useEffect, useState } from "react";

const daysOfWeek = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
const todayIndex = new Date().getDay();
const today = daysOfWeek[todayIndex];

function ChartItem({ item }) {
  const [isOpen, setIsOpen] = useState(false);
  const [height, setHeight] = useState(null);

  useEffect(() => {
    const updateHeight = () => {
      if (window.innerWidth >= 572) {
        setHeight(`${item.amount + item.amount * 0.32}%`);
      } else {
        setHeight(`${item.amount + item.amount * 0.26}%`);
      }
    };

    updateHeight();
    window.addEventListener("resize", updateHeight);

    return () => {
      window.removeEventListener("resize", updateHeight);
    };
  }, [item.amount]);

  function handleMouseEnter() {
    setIsOpen(true);
  }

  function handleMouseLeave() {
    setIsOpen(false);
  }

  return (
    <li className="flex w-full flex-col items-center justify-end gap-3 md:gap-2.5">
      <button
        style={{
          height,
        }}
        className={`relative w-[calc(100%-1px)] max-w-[3.125rem] rounded-[0.25rem] hover:bg-opacity-50 md:w-[50px] md:rounded-md ${item.day === today ? "bg-cyan" : "bg-soft-red"}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {isOpen && (
          <span className="font-semibold absolute -top-[2.125rem] left-1/2 -translate-x-1/2 transform rounded-[0.25rem] bg-dark-brown p-1.5 text-xs text-very-pale-orange md:-top-12 md:px-2.5 md:py-3 md:text-[1.125rem]">
            ${item.amount}
          </span>
        )}
      </button>
      <p className="text-xs text-medium-brown md:text-[0.9375rem]">
        {item.day}
      </p>
    </li>
  );
}
//w-[2.0625rem]
export default ChartItem;
