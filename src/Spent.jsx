import Chart from "./Chart";

function Spent() {
  return (
    <section className="rounded-[0.625rem] bg-very-pale-orange px-5 py-6 text-dark-brown md:rounded-[1.25rem] md:px-8 md:py-[2.375rem]">
      <header>
        <h1 className="text-2xl font-bold md:mb-[1.875rem] md:text-[2.0625rem]">
          Spending - Last 7 days
        </h1>
      </header>

      <Chart />

      <div className="mt-[1.375rem] flex flex-col gap-1 text-[0.9375rem] md:mt-8 md:gap-2.5 md:text-[1.125rem]">
        <span className="text-medium-brown">Total this month</span>

        <div className="flex items-center justify-between">
          <p className="text-3xl font-bold md:text-[3.125rem]">$478.33</p>

          <div className="flex flex-col items-end gap-1 leading-none md:gap-1.5">
            <p className="font-bold">+2.4%</p>
            <span className="text-medium-brown">from last month</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Spent;
