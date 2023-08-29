import { Navbar } from "./components/Navbar/navbar.tsx";
import { GuidelinesContent } from "./components/GuidelinesContent/guidelinesContent.tsx";
import "./App.css";

function App(): JSX.Element {
  return (
    <>
      <Navbar />
      <GuidelinesContent />
    </>
  );
}

export default App;

