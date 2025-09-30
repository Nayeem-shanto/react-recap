import { act, Suspense } from "react";
import "./App.css";
import Person from "./Person";
import Actors from "./Actors";
import Batsman from "./Batsman";
import Users from "./Users";
import Posts from "./Posts";

const fetchUsers = fetch("https://jsonplaceholder.typicode.com/users").then(
  (response) => response.json()
);

const fetchPost = async()=>{
const response = await fetch('https://jsonplaceholder.typicode.com/posts');
return response.json();
}

function App() {

  const postPromise = fetchPost();
  const actors = [
    { id: 1, name: "Sharukh Khan", age: 58 },
    { id: 2, name: "Salman Khan", age: 60 },
    { id: 3, name: "Virat Koholi", age: 40 },
    { id: 4, name: "Sunny Leon", age: 45 },
  ];

  const handleClick = () => {
    alert("button Clicked");
  };

  function handleEvents() {
    alert("button 2 clicked");
  }
  const parameterButton = (num) => {
    const result = num + 10;
    alert(result);
  };

  return (
    <>
      <h1 className="font-bold text-4xl text-center w-10/12 mx-auto pt-10">
        Welcome to the world of REACT JS
      </h1>

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
            <Player
              name={"Cristiano Ronaldo"}
              country={"Portugal"}
              league={"Al-Naser"}
            ></Player>
            <Player
              name={"Lionel Messi"}
              country={"Argentina"}
              league={"Barcelona"}
            ></Player>
            <Player
              name={"Neymar Jr"}
              country={"Brazil"}
              league={"Santos"}
            ></Player>
            <Player
              name={"Gareth Bale"}
              country={"Wales"}
              league={"Real-Madrid"}
            ></Player>
            <Player></Player>
          </div>
        </div>

        <div className="border-2 border-amber-900 m-4 p-5">
          <h3>Create components and import from others file</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Person
              name={"Nayeem Hasan Shanto"}
              profession={"Engineer"}
              salary={`100000 tk`}
            ></Person>
            <Person
              name={"Afsana Begum Sristy"}
              profession={"Accounts Officer"}
              salary={`80000 tk`}
            ></Person>
            <Person></Person>
            <Person></Person>
            <Person></Person>
            <Person></Person>
          </div>
        </div>

        <section>
          {actors.map((actor) => (
            <Actors key={actor.id} actor={actor}></Actors>
          ))}
        </section>

        <div>
          {/* function call kora jabe nah.. declare korte hobe */}
          <button
            className="border-2 border-amber-900 bg-yellow-50 mr-2 p-2 rounded-2xl font-semibold text-xl"
            onClick={handleClick}
          >
            Click Btn-1
          </button>

          <button
            className="border-2 border-amber-900 bg-yellow-50 mr-2 p-2 rounded-2xl font-semibold text-xl"
            onClick={handleEvents}
          >
            Click Btn-2
          </button>

          <button
            onClick={() => parameterButton(10)}
            className="border-2 border-amber-900 bg-yellow-50 mr-2 p-2 rounded-2xl font-semibold text-xl"
          >
            Click Btn-3
          </button>
        </div>

        <div>
          <Batsman name={"Sakib Al Hasan"}></Batsman>
          <Batsman name={"Tamim Iqbal Khan"}></Batsman>
          <Batsman name={"Virat Koholi"}></Batsman>
        </div>

        {/* Data fetching */}
<h3 className="text-center font-semibold text-xl border-2 border-amber-700 p-5 bg-white rounded-2xl">Data fetching from API..............
  <br />
  jokhn async and await diye data fetch kora hoy tokhn react e just 1 ta step beshi korte hoy..
  <br />
  karon:- jokhn fetch kora hoy tokhn fetch ta ke directly ekta variable e strore kora hoy.
  <br />
  but jokhn async await diye kora hoy.. async ekta function.. tai data fetch kore shei functiont a ke just ekta variable e call korte hoy and shei function ta components er moddhe props hishebe use korte hoy
</h3>
        <div>
          <Suspense
            fallback={
              <div>
                <span className="loading loading-bars loading-xs"></span>
                <span className="loading loading-bars loading-sm"></span>
                <span className="loading loading-bars loading-md"></span>
                <span className="loading loading-bars loading-lg"></span>
                <span className="loading loading-bars loading-xl"></span>
              </div>
            }
          >
            <Users fetchUsers={fetchUsers}></Users>
          </Suspense>
        </div>

            <div>
              <Suspense>
                <Posts postPromise={postPromise}></Posts>
              </Suspense>
            </div>

      </section>
    </>
  );
}

function Developer(props) {
  /* console.log(props); */
  return (
    <div className="border-2 border-amber-400 p-4  text-2xl">
      <h3>
        Name: <span className="font-semibold">{props.name}</span>
      </h3>
      <h3>Technology: {props.tech} </h3>
    </div>
  );
}

function Player({
  country = "Country",
  name = "Player-Name",
  league = "League",
}) {
  return (
    <div className="border-2 border-red-400 rounded-2xl p-4 text-center">
      <h3>Player Name: {name} </h3>
      <p>Country: {country} </p>
      <p>League: {league} </p>
    </div>
  );
}

export default App;
