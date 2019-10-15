export const templateCSS = () =>{
    const divContainer = document.getElementById('root');
    divContainer.innerHTML+=
            `<div class="logIn">
            <header>
                <div>
                    <a href="#"><img src="/assets/images/cultivate-logo.png" alt="cultivate" class="logo"></a>
                </div>
            </header>
            <main>
                <div>
                    <button class="login-tab" id="login-btn">Login</button>
                    <button class="login-tab" id="signin-btn">Sign in</button>
                    <p>Regístrate y comparte información relacionada a tus cultivos.</p>
                    <button class="generic-btn" id="google">Google</button>
                    <button class="generic-btn" id="facebook">Facebook</button>
                    <p>o</p>
                    <input type="email" id="email" placeholder="Correo electrónico">
                    <input type="password" id="password" placeholder="Contraseña">
                    <button class="generic-btn" id="register">Ingresar</button>
                </div>
            </main>
            </div>`
}