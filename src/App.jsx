import Nav from "./components/Nav";
import Started from "./components/Started";
import Statistics from "./components/Statistics";
import LinkToday from "./components/LinkToday";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {

  

  return (
    <div className="App flex flex-col items-center">
      <Nav></Nav>
      <Started></Started>
      <Statistics></Statistics>
      <LinkToday></LinkToday>
      <Footer></Footer>
      <Navbar></Navbar>
    </div>
  )
}

export default App
