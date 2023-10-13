
import Navbar from "./Navbar";


const AddCoffee = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div>
                <section className="max-w-4xl p-6 mx-auto bg-gray-100 rounded-md shadow-md dark:bg-gray-800">
                    <h2 className="text-lg text-center mb-10 font-semibold text-gray-700 capitalize dark:text-white">Add a new coffee</h2>

                    <form>
                        <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                            <div>
                                <label className="text-gray-700 dark:text-gray-200 font-semibold">Name</label>
                                <input id="username" type="text" name="name" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"/>
                                
                            </div>
                                
                            <div>
                                <label className="text-gray-700 dark:text-gray-200 font-semibold" >Quantity</label>
                                <input id="emailAddress" type="text" name="quantity" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"/>
                            </div>

                            <div>
                                <label className="text-gray-700 dark:text-gray-200 font-semibold" >Supplier</label>
                                <input id="password" type="text" name="supplier" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"/>
                            </div>

                            <div>
                                <label className="text-gray-700 dark:text-gray-200 font-semibold" >Test</label>
                                <input id="passwordConfirmation" type="text" name="test" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"/>
                            </div>
                            <div>
                                <label className="text-gray-700 dark:text-gray-200 font-semibold" >Category</label>
                                <input id="passwordConfirmation" type="text" name="category" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"/>
                            </div>
                            <div>
                                <label className="text-gray-700 dark:text-gray-200 font-semibold">Details</label>
                                <input id="passwordConfirmation" type="text" name="details" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"/>
                            </div>
                            <div className="col-span-2">
                                <label className="text-gray-700 dark:text-gray-200 font-semibold">Photo</label>
                                <input id="passwordConfirmation" type="text" name="photo" className=" w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"/>
                            </div>
                        </div>

                        <div className="flex justify-end mt-6">
                            <button className="px-8 py-2.5 leading-5 w-full text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Add Coffee</button>
                        </div>
                    </form>
                </section>
            </div>
        </div>
    );
};

export default AddCoffee;