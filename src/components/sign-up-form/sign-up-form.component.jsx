import { useState } from "react";
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";

import './sign-up-form.style.scss'

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}

const SignUpForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const {displayName, email, password, confirmPassword} = formFields;

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        if(password !== confirmPassword) {
            alert("Passwords do not match.")
            return;
        }

        try {
            const { user } = await createAuthUserWithEmailAndPassword(email, password);
            await createUserDocumentFromAuth(user, {displayName});
            resetFormFields();

        } catch (error) {
            if (error.code === "auth/email-already-in-use") {
                alert("cannot create user, email-already-in-use");
            }else {
                console.log('user creation found an error', error);
            }
        }
    }


    //the method that handles the changes on the inputs
    const handleChange = (event) => {
        const {name, value} = event.target;

        setFormFields({...formFields, [name]: value});
    };

    const inputProps = [
        {
            type: "text",
            name: 'displayName',
            value: displayName,
            onChange: handleChange,
            label: 'Display Name',
            id: 1
        },
        {
            type: "email",
            name: 'email',
            value: email,
            onChange: handleChange,
            label: 'Email',
            id: 2
        },
        {
            type: "password",
            name: 'password',
            value: password,
            onChange: handleChange,
            label: 'Password',
            id: 3
        },
        {
            type: "password",
            name: 'confirmPassword',
            value: confirmPassword,
            onChange: handleChange,
            label: 'Confirm Password',
            id: 4
        }
    ];

    return (
        <div className="sign-up-container">
            <h2>Don't have an account?</h2>
            <span>Sign up with Email and Password</span>
            <form onSubmit={handleSubmit}>
                {
                    inputProps.map(({type, name, value, onChange, label, id}) => {
                        return (
                            <FormInput required type={type} name={name} value={value} onChange={onChange} label={label} key={id}/>
                        )
                    })
                }
                <Button type="submit">Sign Up</Button>
            </form>
        </div>
    );
};

export default SignUpForm;