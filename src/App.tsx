import { Navbar } from "./components/Navbar/Navbar.tsx";
import { GuidelinesContent } from "./components/GuidelinesContent/GuidelinesContent.tsx";
import { CiChecksContent } from "./components/CiChecksContent/CiChecksContent.tsx";
import "./App.css";

function App(): JSX.Element {
  return (
    <>
      <Navbar />
      <GuidelinesContent />
      <CiChecksContent />
      
    </>
  );
}

export default App;

