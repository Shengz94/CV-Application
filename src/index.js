import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CvMaker from "./components/CvMaker"
import githubLogo from "./img/github-120px.png"

ReactDOM.render(
  <React.StrictMode>
    <div class="logo">
        <div class="app-name"><h1>Curriculum Vitae Template</h1></div>
        <a class="github-reference" href="https://github.com/Shengz94">
          <img src={githubLogo} alt="Github"/>
        </a>
    </div>
    <CvMaker />
  </React.StrictMode>,
  document.getElementById('root')
);
