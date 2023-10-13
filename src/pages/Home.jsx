import { useLoaderData } from "react-router-dom";
import Navbar from "../component/Navbar";
import CoffeeCard from "../component/CoffeeCard";
import { useState } from "react";


const Home = () => {
    const loadedCoffees = useLoaderData()
    const [coffees, setCoffees] = useState(loadedCoffees)


    return (
        <div>
            <Navbar></Navbar>
            <div>
                <h1 className="font-bold text-3xl text-center my-5">Coffee Store</h1>
                <h1 className="font-bold text-3xl text-center my-5">Coffee Item {coffees.length}</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {
                        coffees.map(coffee => <CoffeeCard 
                            key={coffee._id} 
                            coffee={coffee}
                            coffees={coffees}
                            setCoffees={setCoffees}
                            ></CoffeeCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;