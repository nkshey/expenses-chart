import { useEffect, useState } from "react";
import ChartItem from "./ChartItem";

function Chart() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("./data.json");

        if (!response.ok) {
          throw new Error(
            `There was a problem with fetching the data: ${response.status}`,
          );
        }

        const data = await response.json();
        setData(data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchData();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <ul className="flex h-[15.875rem] justify-between gap-2.5 border-b-2 border-b-ream pb-6 md:px-2 md:pb-[2.125rem]">
      {data.map((item, index) => (
        <ChartItem item={item} key={index} />
      ))}
    </ul>
  );
}

export default Chart;
