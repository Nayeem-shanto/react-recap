
import "./App.css";


function App() {
  

  return (
    <>
      <h1 className="font-bold text-4xl text-center w-10/12 mx-auto pt-10">Welcome to the world of REACT JS</h1>

      <section className="bg-sky-300 w-10/12 mx-auto mt-10 px-5">
          <div>
            <p>How to use props in react js</p>

          </div>
          <div className="grid grid-cols-4  ">
            <Developer name="Allen Blake" tech="Javascript"></Developer>
            <Developer name="David Smith" tech="C#"></Developer>
            <Developer name="Michel frik" tech="Java"></Developer>
            <Developer name="Pitter parker" tech="PHP"></Developer>
          </div>
      </section>
      
    </>
  );
}

function Developer(props){
  console.log(props)
  return(
    <div className="border-2 border-amber-400 p-4  text-2xl">
      <h3 >Name: <span className="font-semibold">{props.name}</span> </h3>
      <h3>Technology: {props.tech} </h3>
    </div>
  )
}

export default App;
