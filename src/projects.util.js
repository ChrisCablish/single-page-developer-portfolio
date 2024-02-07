import dictionary from "./assets/images/my-project-images/dictionary.jpg";
import github from "./assets/images/my-project-images/githubuser.jpg";
import tic from "./assets/images/my-project-images/ttt.jpg";
import age from "./assets/images/my-project-images/agecalc.jpg";
import MES from "./assets/images/my-project-images/organized_MES.jpg";

const projects = [
  {
    image: MES,
    title: "Organized MES (LaunchCode Capstone)",
    link: "http://WorkflowManager-env.eba-d2t2geh2.us-east-2.elasticbeanstalk.com",
    code: "https://github.com/ChrisCablish/workflow-manager/tree/demo",
  },
  {
    image: dictionary,
    title: "Dictionary Web App",
    link: "https://chriscablish.github.io/dictionary-app/",
    code: "https://github.com/ChrisCablish/dictionary-app",
  },
  {
    image: github,
    title: "Github User Search",
    link: "https://chriscablish.github.io/github-user-search-app/",
    code: "https://github.com/ChrisCablish/github-user-search-app",
  },
  {
    image: tic,
    title: "Tic-Tac-Toe Game",
    link: "https://chriscablish.github.io/tic-tac-toe/",
    code: "https://github.com/ChrisCablish/tic-tac-toe",
  },
  // {
  //   image: age,
  //   title: "Age Calculator",
  //   link: "https://chriscablish.github.io/age-calculator-app/",
  //   code: "https://github.com/ChrisCablish/age-calculator-app",
  // },
];

export default projects;
