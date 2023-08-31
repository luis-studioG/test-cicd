import { Navbar } from "./components/Navbar/index.tsx";
import { GuidelinesContent } from "./components/GuidelinesContent/index.tsx";
import { CiChecksContent } from "./components/CiChecksContent/index.tsx"
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
