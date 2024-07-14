import React from 'react';
function UserInfo({ email, name }) {
    return (
        <>
            <h4>About You</h4>
            <p>Name:{name}</p>
            <p>e-mail:{email}</p>
        </>
    )
}
export default UserInfo