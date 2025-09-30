import { use } from "react"
import User from "../User";

export default function Users({fetchUsers}){
    const userData =use(fetchUsers);
    console.log(userData) 
    return(
        <div>
            <h3 className='text-center font-extrabold'>Total Users: {userData.length} </h3>
            <div className="border-2 p-4 rounded-2xl grid grid-cols-1 md:grid-cols-4 gap-4">
                { 
                userData.map(user => <User user={user}></User>)
            }
            </div>
        </div>
    )
}