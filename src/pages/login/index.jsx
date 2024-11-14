import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import StyledLogo from "src/components/atoms/styledlogo";
import { DASHBOARD } from "src/routingpaths";
import { useToast } from "src/toast/ToastProvider";

export default function Login() {

    // [****/ React useRef hook /****]
    // https://reactjs.org/docs/hooks-reference.html#useref
    // useRef is used to access the DOM element directly without using querySelector or getElementById
    // It is useful when you need to access the value of an input field or trigger a method on a DOM element
    // It is also useful when you need to store a mutable value that persists across re-renders
    // In this example, we use useRef to access the value of the input fields and the checkbox
    
    // Define refs for each form input field
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const rememberMeRef = useRef(null);

    const navigate = useNavigate();
    const toast = useToast();

    // Handle form submission using refs
    const handleSubmit = (event) => {
        event.preventDefault();

        // Retrieve values using refs
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        const rememberMe = rememberMeRef.current.checked;

        // Example: Perform any login logic, API calls, or validation here
        console.log("Email:", email);
        console.log("Password:", password);
        console.log("Remember Me:", rememberMe);

        // Example: Show a toast message
        toast.pushSuccess("Login successful!" , 10000);

        // For now, let's simulate a successful login by navigating to the dashboard
        navigate(DASHBOARD);
    };

    return (
        <React.Fragment>
            <div className="min-h-screen flex items-center justify-center w-full ">
                <div className="bg-white shadow-md rounded-lg px-8 py-6 max-w-md w-full ">
                    <h1 className="text-4xl font-bold text-center my-4">
                        <StyledLogo />
                    </h1>
                    <h1 className="text-2xl font-bold text-center mb-4">Welcome Back!</h1>
                    
                    {/* Form submission using onSubmit handler */}
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                            <input 
                                type="email" 
                                id="email" 
                                ref={emailRef} // Assign ref
                                className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" 
                                placeholder="your@email.com" 
                                required 
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                            <input 
                                type="password" 
                                id="password" 
                                ref={passwordRef} // Assign ref
                                className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" 
                                placeholder="Enter your password" 
                                required 
                            />
                        </div>
                        <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center">
                                <input 
                                    type="checkbox" 
                                    id="remember" 
                                    ref={rememberMeRef} // Assign ref
                                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 focus:outline-none" 
                                />
                                <label htmlFor="remember" className="ml-2 block text-sm text-gray-700">Remember me</label>
                            </div>
                        </div>
                        {/* Submit button is now a button element to trigger onSubmit */}
                        <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            Login
                        </button>
                    </form>
                </div>
            </div>
        </React.Fragment>
    );
}
