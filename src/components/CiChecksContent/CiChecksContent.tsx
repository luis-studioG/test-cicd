import "./CiChecksContent.css";
import pipeline from "../../assets/images/pipeline.png";

export const CiChecksContent = () => (
  <div className="checks-card">
    <h2>CI check list at SG</h2>
    <ul className="checks-container">
      <li>
        <b>Cache node modules</b> downloads and checks all dependencies used on
        the code and save a copy of them. Use only one package manager, either
        npm, pnpm or yarn. Note: don't override .lock files.
      </li>
      <li>
        <b>GitLeaks</b> finds secret environment variables on you code, e.g. an
        AWS id or password.
      </li>
      <li>
        <b>SBOM</b> generates a list of dependencies used on your project. Use
        descriptive name for your project or SBOM can find some dependency with
        the same name and that will make the code break.
      </li>
      <li>
        <b>OSV</b> runs on an Open source database to check vulnerabilities on
        your code. The best way to debug this is, find the vulnerability on{" "}
        <a href="https://osv.dev/" target="_blank" rel="noopener noreferrer">
          OSV
        </a>{" "}
        scan, identify the package and either update the package itself or some
        child dependency if what it's that was prompted on the scan. into your
        repo's ci.yaml file
      </li>
      <li>
        <b>SAST</b> uses{" "}
        <a
          href="https://semgrep.dev/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Semgrep
        </a>{" "}
        tool to find bugs and dependency vulnerabilities, run security scans in
        CI, and enforce standards across your organisation. Note: it is possible
        to add a .semgrepignore file on the code with the paths to ignore files
        (not a best practice).
      </li>
      <li>
        <b>Danger</b>, checks small stuff like adding a description to your PR,
        checking if the PR is too big or if the PR has as assignee. Note: won't
        break your pipeline.
      </li>
    </ul>

    <img src={pipeline} alt="createYaml" className="create-yaml-img"></img>
  </div>
);

export default CiChecksContent;
