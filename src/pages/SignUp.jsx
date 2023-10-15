import { useContext } from "react";
import Navbar from "../component/Navbar";
import { AuthContext } from "../context/AuthProvider";


const SignUp = () => {
    const { createUser } = useContext(AuthContext)

    const handleSignUp = e =>{
        e.preventDefault()
        const form = e.target;
        const email = form.email.value
        const password = form.password.value
        console.log(email, password);
        createUser(email, password)
        .then(result => {
            console.log(result.user)
            const createdAT = result.user?.metadata?.creationTime
            const user = {email, createdAT:createdAT}
            fetch('https://coffee-store-server-7m7u12x91-azizul96s-projects.vercel.app/user',{
                method: 'POST',
                headers:{
                    'content-type': 'application/json'
                },
                body: JSON.stringify(user)
            })
            .then(res => res.json())
            .then(data =>{
                console.log(data);
                if(data.insertedId){
                    alert('Created')
                }
            })

        })
        .catch((error) =>  {
            console.log(error.message);
        })
    }
    return (
        <div>
            <div>
                <Navbar></Navbar>
            </div>
            <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Sign Up now!</h1>
                    
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSignUp} className="card-body">
                        
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                        </div>
                        <div className="form-control mt-6">
                        <button className="btn btn-primary">Sign Up</button>
                        </div>
                    </form>
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;