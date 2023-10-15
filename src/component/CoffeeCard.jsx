/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'
const CoffeeCard = ({coffee, coffees, setCoffees}) => {
    const {_id, name, quantity,  photo} = coffee

    const handleDelete = ()=>{
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
            
            fetch(`https://coffee-store-server-7m7u12x91-azizul96s-projects.vercel.app/coffee/${_id}`,{
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.deletedCount > 0){
                    Swal.fire(
                        'Deleted!',
                        'Your file has been deleted.',
                        'success'
                    )
                    const remaining = coffees.filter(cof => cof._id !== _id)
                    setCoffees(remaining)
                }
            })
            }
          })
    }
  return (
    <div>
      <div className="card card-side bg-base-100 shadow-xl">
        <figure>
          <img className="w-80 h-60" src={photo} alt="photo" />
        </figure>
        <div className="flex justify-between w-full px-4 py-5">
          <div>
            <h2 className="card-title">{name}</h2>
            <p>Click the button to view coffee details.</p>
            <p>Quantity: {quantity}</p>
          </div>
          <div className="card-actions justify-end ">
            <div className="btn-group btn-group-vertical space-y-3">
                <button className="btn btn-warning">View</button>
                <Link to={`/updateCoffee/${_id}`}>
                    <button className="btn btn-warning">Edit</button>
                </Link>
                <button onClick={()=>handleDelete(_id)} className="btn btn-warning">Delete</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
