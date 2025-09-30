import { use } from "react";

export default function User({user}){
    return (
        <div className="border-2 border-amber-700 rounded-2xl py-2 text-center bg-white text-xl ">
            <h3 className="font-semibold">User Name: {user.name} </h3>
            <h3>username: {user.username} </h3>
            <h3>email: {user.email} </h3>
        </div>
    )
}