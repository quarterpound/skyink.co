import Landing from "./landing";
import Products from "./products";

const Home = () => {
  return (
    <main className="py-10 grid gap-20">
      <Landing />
      <Products />
    </main>
  );
};

export default Home;
