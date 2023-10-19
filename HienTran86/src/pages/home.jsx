import Header from "../components/Header";
import { AppContextProvider } from "../context/AppContext";

const Home = () => {

  return (
    <div>
      <AppContextProvider>
        <Header />
        <main>this is my main </main>

      </AppContextProvider>
      <footer>this is footer</footer>

    </div>
  );
};


export default Home;