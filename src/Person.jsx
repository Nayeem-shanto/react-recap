export default function Person({name="name", profession="profession", salary=0}){
    return(
        <div className="border-1 border-slate-950 rounded-2xl p-4 text-2xl">
            <h3>Person Name: {name} </h3>
            <h3>Profession: {profession}</h3>
            <h3>Salary: {salary} </h3>
        </div>
    )
}