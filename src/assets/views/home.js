export const templateHome = () => {
    const divContainer = document.getElementById('root');
    divContainer.innerHTML +=
        `<header>
            <div id="topNavHome">
                <a href="#/home"><img src="/assets/images/cultivate-logo.png" alt="cultivate" class="logo"></a>
                <button class="btn-nav" id="signUp">Registrarse</button>
                <button class="btn-nav" id="login">Iniciar Sesión</button>
                
               
            </div>
        </header>
        <main>
            <div id="bannerContainer">      
                <img src="/assets/images/img-banner-home.jpg" alt="bannerSeed" class="banner">
            </div> 
                  
              
            </main>`
}