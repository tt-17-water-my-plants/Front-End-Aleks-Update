import React from 'react'


function Login (props) {
    const {} =props
    
    const onSubmit = evt => {
        evt.preventDefault()
    }
    const onChange = evt => {

    }
    
    
    
    
    
    return(
        <form id='login-form' onSubmit={onSubmit}>
            <h2>Sign In</h2>
            <label>Username
                <input
                value={}
                onChange={}
                name='username'
                type='text'
                />
            </label>
            <label>Password
                <input
                value={}
                onChange={}
                name='password'
                type='text'
                />
            </label>
            <button>Sign In</button>
        </form>
    )
}