import { useState } from "react";
import { signInWithGooglePopup, signInAuthUserWithEmailAndPassword } from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";

import './sign-in-form.style.scss'

const defaultFormFields = {
    email: '',
    password: '',
}

const SignInForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password } = formFields;

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    const signInWithGoogle = async () => {
        await signInWithGooglePopup();
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const { user } = await signInAuthUserWithEmailAndPassword(email, password);
            resetFormFields();

        } catch (error) {
            switch(error.code) {
                case 'auth/wrong-password':
                    alert("Wrong password");
                    break;  
                case 'auth/user-not-found':
                    alert("No user associated with this email");
                    break;
                default:
                    console.log(error);  
            }

            if (error.code === "auth/wrong-password") {
                
            }
        }
    }


    //the method that handles the changes on the inputs
    const handleChange = (event) => {
        const {name, value} = event.target;

        setFormFields({...formFields, [name]: value});
    };

    return (
        <div className="sign-in-container">
            <h2>Already have an account?</h2>
            <span>Sign in with Email and Password</span>
            <form onSubmit={handleSubmit}>
                <FormInput 
                required 
                type="email" 
                name="email" 
                value={email} 
                onChange={handleChange} 
                label="Email" />
                
                <FormInput 
                required 
                type="password" 
                name="password" 
                value={password} 
                onChange={handleChange} 
                label="Password" />
                <div className="buttons-container">
                    <Button type="submit">Sign in</Button>
                    <Button type="button" onClick={signInWithGoogle} buttonType={"google"}>Google sign in</Button>                
                </div>
            </form>
        </div>
    );
};

export default SignInForm;