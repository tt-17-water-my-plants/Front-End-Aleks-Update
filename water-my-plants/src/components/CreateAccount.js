import React, { useState } from 'react'


const initialFormValues = {
    username: '',
    phone: '',
    password: '', 
}

export default function CreateAccount() {
    const [formValues, setFormValues] = useState(initialFormValues)

    const onChange = evt => {
        const { name, value } = evt.target;
        setFormValues({
            ...formValues, [name]: value
        })
    };

    const onSubmit = evt => {
        evt.preventDefault();
        const newUser = {
            username: formValues.username.trim(),
            phone: formValues.phone.trim(),
            password: formValues.password.trim(),
        }
        setFormValues(initialFormValues)
    }

    return (
        <div>
            {/* Icon? */}
            <h2>Sign Up</h2>
            <form onSubmit={onSubmit}>
                <label>
                    Username
                    <input
                        type='text'
                        name='username'
                        value={formValues.username}
                        onChange={onChange}
                    />
                </label>
                <label>
                    Phone
                    <input
                        type='text'
                        name='phone'
                        value={formValues.phone}
                        onChange={onChange}
                    />
                </label>
                <label>
                    Password
                    <input
                        type='password'
                        name='password'
                        value={formValues.password}
                        onChange={onChange}
                    />
                </label>
                <button disabled>Submit</button>
            </form>
        </div>
    )
}

