import React, { useState } from 'react';


const SignDashBoard = () => {
    const [isSignIn, setIsSignIn] = useState(true);

    const toggleForm = () => {
        setIsSignIn(!isSignIn);
    };

    return (
        
        <div className="flex justify-center items-center h-screen">
            <div className="bg-gray-100 p-8 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold mb-4">
                    {isSignIn ? 'Sign In' : 'Sign Up'}
                </h2>
                <form>
                    {isSignIn ? (
                        <>
                            <div className="mb-4">
                                <label htmlFor="messId" className="block text-gray-700 font-bold mb-2">
                                    Mess ID
                                </label>
                                <input
                                    type="text"
                                    id="messId"
                                    className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                                    placeholder="Enter your Mess ID"
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="password" className="block text-gray-700 font-bold mb-2">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    id="password"
                                    className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                                    placeholder="Enter your password"
                                />
                            </div>
                        </>
                    ) : (
                        <>
                            <div className="mb-4">
                                <label htmlFor="productName" className="block text-gray-700 font-bold mb-2">
                                    Product Name
                                </label>
                                <input
                                    type="text"
                                    id="productName"
                                    className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                                    placeholder="Enter product name"
                                />
                            </div>
                            {/* Additional form fields for sign up */}
                            {/* ... */}
                        </>
                    )}
                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                    >
                        {isSignIn ? 'Sign In' : 'Sign Up'}
                    </button>
                </form>
                <p className="mt-4">
                    {isSignIn ? "Don't have an account?" : 'Already have an account?'}
                    <button
                        className="text-blue-500 ml-1 underline"
                        onClick={toggleForm}
                    >
                        {isSignIn ? 'Sign Up' : 'Sign In'}
                    </button>
                </p>
            </div>
        </div>
    );
};



export default SignDashBoard;
