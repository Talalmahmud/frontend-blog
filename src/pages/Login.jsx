import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
    const [passwordVisible, setPasswordVisible] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Implement your sign-in logic here
    };

    return (
        <div className="flex items-center justify-center h-screen">
            <form
                onSubmit={handleSubmit}
                className="bg-white  drop-shadow-lg rounded px-8 pt-6 pb-8 mb-4 w-full md:w-1/4"
            >
                <h2 className="text-2xl font-bold mb-8">Sign In</h2>
                <div className="mb-4">
                    <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="email"
                    >
                        Email
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="email"
                        type="email"
                        placeholder="Enter your email"
                    />
                </div>
                <div className="mb-6">
                    <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="password"
                    >
                        Password
                    </label>
                    <div className="shadow  appearance-none border rounded   px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline">
                        <div className=" flex items-center">
                            <input
                                id="password"
                                type={passwordVisible ? "password" : "text"}
                                placeholder="Enter your password"
                                className=" outline-none py-2 w-full"
                            />
                            <button
                                onClick={() =>
                                    setPasswordVisible(!passwordVisible)
                                }
                                className="text-center shadow-md h-full"
                            >
                                {passwordVisible ? "show" : "hide"}
                            </button>
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-between">
                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                        Sign In
                    </button>
                    <Link
                        to="/signup"
                        className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                    >
                        Create an account
                    </Link>
                </div>
            </form>
        </div>
    );
};

export default Login;
