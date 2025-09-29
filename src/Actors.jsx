export default function Actors({actor, age=0}){
    return(
        <div>
            <h3>Actor Name: {actor.name} </h3>
            <h3>Age: {actor.age} </h3>
        </div>
    )
}