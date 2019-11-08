export const templateHome = () => {
    const divContainer = document.getElementById('root');
    divContainer.innerHTML +=
        `<header>
            <div id="topNavHome">
                <a href="#/home"><img src="/assets/images/cultivate-logo.png" alt="cultivate" class="logo"></a>
                <button class="btn-nav" id="signUp">Registrarse</button>
                <button class="btn-nav" id="login">Iniciar Sesión</button>                
            </div>
            <nav role='navigation'>
            <div id="menuToggle">
                    <input type="checkbox" />
                    <span></span>
                    <span></span>
                    <span></span>
                    <ul id="menu">
                        <a href="#"><li>Home</li></a>
                        <a href="#"><li>About</li></a>
                        <a href="#"><li>Info</li></a>
                        <a href="#"><li>Contact</li></a>
                        <a href="https://erikterwan.com/" target="_blank"><li>Show me more</li></a>
                    </ul>
                </div>
            </nav>
        </header>
        <main>
            <div id="bannerContainer">      
                <img src="/assets/images/img-banner-home.jpg" alt="bannerSeed" class="banner">
            </div> 
                  
              
            </main>`
}