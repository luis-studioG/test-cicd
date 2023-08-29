
import "./App.css";
import { GuidelinesContent } from "./components/GuidelinesContent/guidelinesContent.tsx";
import { Navbar } from "./components/Navbar/navbar.tsx";

function App(): JSX.Element {
  return (
    <>
      <Navbar />
      <GuidelinesContent />
    </>
  );
}

export default App;
