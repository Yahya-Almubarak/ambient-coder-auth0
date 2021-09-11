import React from 'react';

const LogoutButton = () => {
    const logout = async () => {
        const domain = "dev-r06am3cy.us.auth0.com";
        const clientId = "cqXHSSvOpmKkQXVVdW2ZhMlhGe70jJgJ";
        const returnTo = "http://localhost:3000";

        const response = await fetch(`https://${domain}/logout?client_id=${clientId}&returnTo=${returnTo}`,
        {redirect: "manual"});

        window.location.replace(response.url)

    };

   
    return(
        <button onClick={() => logout()}>
            Log Out
        </button>
    )
}

export default LogoutButton;