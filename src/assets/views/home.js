export const templateHome = () => {
    const divContainer = document.getElementById('root');
    divContainer.innerHTML +=
        `<header>
                <a href="#/home"><img src="/assets/images/cultivate-logo.png" alt="cultivate" class="logo"></a>
                <button class="btn-nav" id="signUp">Registrarse</button>
                <button class="btn-nav" id="login">Iniciar Sesión</button>
                
               
           
        </header>
        <main>
            <div class="container">      
                <img src="/assets/images/bannerCultivate2.png" alt="bannerSeed" class="banner">
                <button class="btn">Únete </button>   
            </div> 
                  
              
            </main>`
}