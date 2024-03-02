import dictionary from "./assets/images/my-project-images/dictionary.jpg";
import github from "./assets/images/my-project-images/githubuser.jpg";
import tic from "./assets/images/my-project-images/ttt.jpg";
import age from "./assets/images/my-project-images/agecalc.jpg";
import MES from "./assets/images/my-project-images/organized_MES.jpg";
import ToDo from "./assets/images/my-project-images/todo.jpg";

const projects = [
  {
    image: ToDo,
    title: "Full-Stack ToDo List App (React, ASP.NET, SQL Server, Azure)",
    link: "https://chriscablish.github.io/todo-list/",
    code: "https://github.com/ChrisCablish/todo-list",
  },
  {
    image: MES,
    title: "Organized MES (LaunchCode Capstone) (Java SpringBoot, mySQL, AWS)",
    link: "http://WorkflowManager-env.eba-d2t2geh2.us-east-2.elasticbeanstalk.com",
    code: "https://github.com/ChrisCablish/workflow-manager/tree/demo",
  },
  {
    image: dictionary,
    title: "Dictionary Web App (React, Asynchronous Javascript)",
    link: "https://chriscablish.github.io/dictionary-app/",
    code: "https://github.com/ChrisCablish/dictionary-app",
  },
  {
    image: github,
    title: "Github User Search (React, Github API)",
    link: "https://chriscablish.github.io/github-user-search-app/",
    code: "https://github.com/ChrisCablish/github-user-search-app",
  },
  {
    image: tic,
    title: "Tic-Tac-Toe Game (React)",
    link: "https://chriscablish.github.io/tic-tac-toe/",
    code: "https://github.com/ChrisCablish/tic-tac-toe",
  },
  {
    image: age,
    title: "Age Calculator (Vanilla JS)",
    link: "https://chriscablish.github.io/age-calculator-app/",
    code: "https://github.com/ChrisCablish/age-calculator-app",
  },
];

export default projects;
