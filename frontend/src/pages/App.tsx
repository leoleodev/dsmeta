import { Header } from "../components/Header";
import { Salescard } from "../components/Salescard";

import '../styles/global.css';

function App() {
  return(

    <>
      <Header />

      <main>
        <section id="sales">
          <div className="salesContainer">

            <Salescard />

          </div>
        </section>
      </main>
    </>

  );
}

export default App
