import { use } from "react"

export default function Users({fetchUsers}){
    const userData =use(fetchUsers);
    console.log(userData) 
    return(
        <div>
            <h3 className='text-center font-extrabold'>Total Users: {userData.length} </h3>
        </div>
    )
}