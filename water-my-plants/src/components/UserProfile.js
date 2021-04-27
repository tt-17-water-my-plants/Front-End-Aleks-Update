import React, {useState} from 'react';

const initialData = {
    password:'',
    phoneNumber:'',
}

function Profile (){
    const [userData, setUserData] = useState(initialData);

    const onClick = evt => {
        return console.log(evt)
    }
    return(
        <div>
            <h2>Profile</h2>
            <button onClick={onClick}>Update Password</button>
            <button onClick={onClick}>Update Phone Number</button>
        </div>
    )


}

export default Profile;