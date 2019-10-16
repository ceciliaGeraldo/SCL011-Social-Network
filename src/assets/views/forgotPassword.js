export const templateForgotPassword = () => {
    const divContainer = document.getElementById('root');
    //window.location.hash='/login'
    divContainer.innerHTML +=
        `<header>
            <div>
                <a href="#"><img src="/assets/images/cultivate-logo.png" alt="cultivate" class="logo"></a>
            </div>
        </header>
        <main>
            <div id="logInContainer">
                <div id="topNavSign">
                    <p class="login-tab" id="forgotPassword">Recuperar contraseña</p>
                </div>
                    
                    <p>Por favor ingresa tu correo electrónico a continuación:</p>
                    <p>o</p>
                    <input type="email" id="emailForgotPassword" placeholder="Correo electrónico">
                    <button class="generic-btn" id="btnForgotPassword">Recuperar</button>
                    
                
                    
            <div> 
            <div id="logInFooter">
            ¿Aún no tienes cuenta? Regístrate  <a><span class="link-bold" id="registerHere">aquí</span></a>
            </div>
                    <div id="errorContainerLogIn"></div>
              
            </main>`}