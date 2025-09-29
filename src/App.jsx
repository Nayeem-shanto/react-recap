
import "./App.css";
import Person from "./Person"

function App() {
  

  return (
    <>
      <h1 className="font-bold text-4xl text-center w-10/12 mx-auto pt-10">Welcome to the world of REACT JS</h1>

      <section className="bg-sky-300 w-10/12 mx-auto mt-10 px-5 rounded-2xl p-4">
          <div>
            <p>How to use props in react js</p>
            

          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-3  ">
            <Developer name="Allen Blake" tech="Javascript"></Developer>
            <Developer name="David Smith" tech="C#"></Developer>
            <Developer name="Michel frik" tech="Java"></Developer>
            <Developer name="Pitter parker" tech="PHP"></Developer>
          </div>

          <div>
            <p>Props by destructuring</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <Player name={"Cristiano Ronaldo"} country={"Portugal"} league={"Al-Naser"}></Player>
              <Player name={"Lionel Messi"} country={"Argentina"} league={"Barcelona"}></Player>
              <Player name={"Neymar Jr"} country={"Brazil"} league={"Santos"}></Player>
              <Player name={"Gareth Bale"} country={"Wales"} league={"Real-Madrid"}></Player>
              <Player></Player>
            </div>
          </div>

          <div className="border-2 border-amber-900 m-4 p-5">
            <h3>Create components and import from others file</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Person name={"Nayeem Hasan Shanto"} profession={"Engineer"} salary={`100000 tk`} ></Person>
              <Person name={"Afsana Begum Sristy"} profession={"Accounts Officer"} salary={`80000 tk`}></Person>
              <Person></Person>
              <Person></Person>
              <Person></Person>
              <Person></Person>
            </div>
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

function Player({country="Country", name="Player-Name", league="League"}){
  
  return (
    <div className="border-2 border-red-400 rounded-2xl p-4 text-center">
      <h3>Player Name: {name} </h3>
      <p>Country: {country} </p>
      <p>League: {league} </p>
    </div>
  )
}

export default App;
