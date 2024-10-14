import AboutMe from "./components/aboutMe/AboutMe"
import Divisor from "./components/divisor/Divisor"
import Header from "./components/header/Header"
import Jumbo from "./components/jumbotron/Jumbo"


function App() {

  return (
    <>
      <Header></Header>
      <Jumbo></Jumbo>
      <Divisor
      sectionName="su di me"></Divisor>
      <AboutMe></AboutMe>
    </>
  )
}

export default App
