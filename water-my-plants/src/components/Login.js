import React from 'react'


function Login (props) {
    const {} =props
    
    const onSubmit = evt => {
        evt.preventDefault()
    }
    const onChange = evt => {
        const {name, value} = evt.target
        change(name, value)
    }
    
    
    
    
    
    return(
        <form id='login-form' onSubmit={onSubmit}>
            <h2>Sign In</h2>
            <label>Username
                <input
                value={}
                onChange={onChange}
                name='username'
                type='text'
                />
            </label>
            <label>Password
                <input
                value={}
                onChange={onChange}
                name='password'
                type='text'
                />
            </label>
            <button>Sign In</button>
        </form>
    )
}

export default Login