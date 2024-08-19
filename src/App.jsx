import Balance from "./Balance";
import Spent from "./Spent";

function App() {
  return (
    <main className="flex flex-col gap-4 md:gap-6">
      <Balance />
      <Spent />
    </main>
  );
}

export default App;
