import React from 'react';
function UserInfo({ email, name }) {
    return (
        <div>
            <h4>{name}</h4>
            <p>Username: {name}</p>
            <p>E-mail:{email}</p>
        </div>
    )
}
export default UserInfo