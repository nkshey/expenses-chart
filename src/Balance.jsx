import Logo from "./Logo";

function Balance() {
  return (
    <section className="flex w-full items-center justify-between rounded-[0.625rem] bg-soft-red px-5 py-[1.125rem] text-very-pale-orange md:rounded-[1.25rem] md:px-8 md:py-6">
      <div>
        <span className="mb-0.5 inline-block font-light md:mb-3 md:text-lg md:font-normal">
          My balance
        </span>
        <p className="font-semibold text-2xl md:text-[2.0625rem]">$921.48</p>
      </div>

      <Logo />
    </section>
  );
}

export default Balance;
