import AboutMe from "./components/aboutMe/AboutMe"
import Divisor from "./components/divisor/Divisor"
import Header from "./components/header/Header"
import Jumbo from "./components/jumbotron/Jumbo"
import Skills from "./components/skills/Skills";


function App() {

  return (
    <>
      <Header></Header>
      <Jumbo></Jumbo>
      <Divisor sectionName="su di me"></Divisor>
      <AboutMe></AboutMe>
      <Divisor sectionName="abilità"></Divisor>
      <Skills></Skills>
    </>
  );
}

export default App
