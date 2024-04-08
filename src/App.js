import Header from  "./Components/Header";
import Footer from "./Components/Footer";
import Todos from "./Components/Todos";
function App() {
  let todosItems=[
    {
      "Sno":1,
      "title":"The Digital World",
      "discription":"This is the era of new technology.."
    },
    {
      "Sno":2,
      "title":"Programing",
      "discription":"This is bassed on programming skils"
    },
    {
      "Sno":3,
      "title":"The Blind man",
      "discription":"This is the story of blind man"
    }
  ];
  
  return (
    <>  
    <Header/>
    <Todos todos={todosItems}/>
    <Footer/>
    </>

  );
}

export default App;
