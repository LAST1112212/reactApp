import './App.css';
import Portfolio from "./pages/Portfolio/Portfolio";
import AboutUs from "./pages/AbotUs/AboutUs";
import AboutPage from "./pages/AbouPage/AboutPage";

function App() {
   const info ={
     title: "i am title",
     body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore, laborum?" ,
   }

  return (
   <div>
     <AboutUs/>
     <Portfolio/>
     <AboutPage object={info}/>
   </div>
  );
}

export default App;
