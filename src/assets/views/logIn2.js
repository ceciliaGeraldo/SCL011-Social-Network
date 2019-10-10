export const templateCSS = () =>{
    const divContainer = document.getElementById('root');
    divContainer.innerHTML+=
            `<main>
                <div>
                    <button id="Login">Login</button>
                    <button id="SignIn">Sign in</button>
                    <input type="text" id="name" placeholder="Ingrese Nombre">
                    <input type="email" id="email" placeholder="Ingrese correo">
                    <input type="password" id="password" placeholder="Ingrese contraseña">
                    <button id="register">Registrarse</button>
                    <button id="google">Google</button>
                    <button id="facebook">Facebook</button>
                </div>
            </main>`
}