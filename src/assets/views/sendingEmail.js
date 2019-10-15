export const templateSendingMail = () => {
    const divContainer = document.getElementById('root');
    divContainer.innerHTML="";
    divContainer.innerHTML +=
        `<header>
            <div>
                <a href="#"><img src="/assets/images/cultivate-logo.png" alt="cultivate" class="logo"></a>
            </div>
        </header>
        <main>
            <div id="sendingEmail">              
                    
                    <p id="font-22">La cuenta ha sido creada correctamente.</p>
                    <p id="font-14">Hemos enviado un enlace de validación a tu correo electrónico.</p>
                    <button class="generic-btn" id="goBack">Volver</button>
                    
                    
            <div> 
         
              
            </main>`
    document.getElementById("goBack").addEventListener('click', () => {
       
        window.history.back();


    });
}