import Navbar from "./components/Navbar/Navbar";
import QueryInput from "./components/QueryInput/QueryInput";
import QueryOutput from "./components/QueryOutput/QueryOutput";
import Schema from "./components/Schema/Schema";

function App() {
  return (
    <>
      <Navbar />
      <main className="m-4 lg:flex gap-4 items-baseline">
        <section className="hidden lg:block w-48 flex-shrink-0 overflow-x-hidden">
          <div className="text-xl font-bold">Schema Definition</div>
          <Schema />
        </section>
        <section className="min-w-0 flex-1 mb-8">
          <QueryInput />
          <QueryOutput />
        </section>
      </main>
    </>
  );
}

export default App;
