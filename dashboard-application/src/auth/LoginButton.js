import React from 'react';

const LoginButton = () => {
    const login = async () => {
        const domain = "dev-r06am3cy.us.auth0.com";
        const audience = "https://www/challenges-api.com";
        const scope = "read:challenges";
        const clientId = "cqXHSSvOpmKkQXVVdW2ZhMlhGe70jJgJ";
        const responseType = "code";
        const redirectUri = "http://localhost:3000/challenges";

        const response = await fetch(
            `https://${domain}/authorize?` + 
            `audience=${audience}&` +
            `scope=${scope}&` +
            `response_type=${responseType}&` +
            `client_id=${clientId}&` +
            `redirect_uri=${redirectUri}`, {
                redirect: "manual",
            }
        );
        console.log(response)
        window.location.replace(response.url);
    };

    return(
        <button onClick={() => login()}>
            Log In
        </button>
    )
}

export default LoginButton;