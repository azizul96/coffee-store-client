import { useLoaderData } from "react-router-dom";
import Navbar from "../component/Navbar";
import { useState } from "react";

const Users = () => {
  const loadedUser = useLoaderData();
  const [users, setUsers] = useState(loadedUser)

  const handleDelete = id =>{
    fetch(`https://coffee-store-server-7m7u12x91-azizul96s-projects.vercel.app/user/${id}`,{
        method: 'DELETE'
    })
    .then(res => res.json())
    .then(data => {
        if(data.deletedCount > 0){
            alert('Deleted')

            const remaining = users.filter(user => user._id !==id )
            setUsers(remaining)
        }
    })

  }

  return (
    <div>
      <Navbar></Navbar>
      <div>
        <h2>User : {users.length}</h2>
      </div>
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>ID</th>
                <th>Email</th>
                <th>Crated At</th>
                <th>Last Login At</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {
                users.map(user => <tr key={user._id}>
                    <th>1</th>
                    <td>{user.email}</td>
                    <td>{user.createdAT}</td>
                    <td>{user.lastLoggedAt}</td>
                    <td></td>
                    <td>
                        <button onClick={()=>handleDelete(user._id)} className="btn btn-sm btn-error">Delete</button>
                    </td>
                  </tr>)
              }
              
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Users;
