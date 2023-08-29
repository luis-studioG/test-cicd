// import { useState } from "react";
import "./guidelinesContent.css";

export const GuidelinesContent = () => (
  <div className="card">
    <h2>Guidelines for learning CI</h2>
    <ol className="list-container">
      <li>
        Created repo on Github with some base code. Tip: you can use{" "}
        <i>yarn create vite</i>
      </li>
      <li>Created .github/workflows folder with ci.yaml file</li>
      <li>
        Add .eslintrc.cjs file from{" "}
        <a
          href="https://studiographene.atlassian.net/wiki/spaces/SGPB/pages/1860665481/v1.0+-+CI+Checks#Linting"
          target="_blank"
          rel="noopener noreferrer"
        >
          here
        </a>
      </li>
      <li>
        Paste the{" "}
        <a
          href="https://github.com/studiographene/nodejs-ci"
          target="_blank"
          rel="noopener noreferrer"
        >
          this code
        </a>{" "}
        into your repo's ci.yaml file
      </li>
      <li>
        Update your code commit and push changes to <b>master</b> branch
      </li>
      <li>
        Check your repo tab <b>Actions</b> to see your pipeline running
      </li>
    </ol>

    <p>
      Learn more about{" "}
      <a
        href="https://github.com/features/actions"
        target="_blank"
        rel="noopener noreferrer"
      >
        Github actions
      </a>
    </p>
  </div>
);

export default GuidelinesContent;
