import { useState, useEffect } from "react";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../../utils/firebase";
import validate from "../../utils/validate";

export const Login = () =>
{
    const [isSignInForm, setSignInForm] = useState(true);
    const [errorMessage, setErrorMessage] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const authInstance = getAuth();

    useEffect(() =>
    {
        const unsubscribe = onAuthStateChanged(authInstance, (user) =>
        {
            if (user)
            {
                navigate('/browse');
            }
            else
            {
                navigate('/');
            }
        });

        // Cleanup subscription on unmount
        return () => unsubscribe();
    }, [navigate, authInstance]);

    const handleFormToggle = () =>
    {
        setSignInForm(!isSignInForm);
        setErrorMessage(''); // Clear error message on form toggle
        setEmail('');
        setPassword('');
    };

    const handleClick = async (e) =>
    {
        e.preventDefault(); // Prevent default form submission
        const message = validate(email, password);
        setErrorMessage(message);
        if (message) return;

        try
        {
            if (isSignInForm)
            {
                await signUp();
            } else
            {
                await signIn();
            }
        } catch (error)
        {
            handleAuthError(error);
        }

        // Clear input fields
        setEmail('');
        setPassword('');
    };

    const signUp = async () =>
    {
        const userCredential = await createUserWithEmailAndPassword(authInstance, email, password);
        console.log(userCredential.user);
    };

    const signIn = async () =>
    {
        const userCredential = await signInWithEmailAndPassword(authInstance, email, password);
        console.log(userCredential.user);
    };

    const handleAuthError = (error) =>
    {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(`${errorCode}: ${errorMessage}`); // Better error message display
    };

    return (
        <form className='rounded-md text-white w-[500px] p-4 m-4 h-[400px] bg-opacity-60 w-3/12 bg-black my-36 mx-auto'>
            <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className='bg-gray-700 p-2 my-2 w-full'
                type='email'
                placeholder='Email'
                required
            />
            <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className='bg-gray-700 p-2 my-2 w-full'
                type='password'
                placeholder='Password'
                required
            />
            <button
                onClick={handleClick}
                className='rounded-md bg-black p-2 my-8 w-full'
                type='submit'
            >
                {isSignInForm ? 'Sign Up' : 'Login'}
            </button>
            {errorMessage && <p className="text-red-500">{errorMessage}</p>} {/* Display error message */}
            <p>
                {isSignInForm ? 'Already a member?' : 'New to Product Planet?'}
                <span className='cursor-pointer' onClick={handleFormToggle}>
                    {isSignInForm ? ' Sign in' : ' Sign up'}
                </span>
            </p>
        </form>
    );
};