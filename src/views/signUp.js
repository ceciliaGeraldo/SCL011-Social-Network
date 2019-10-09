//Vista de registros


export const templateSignUp = () =>{
document.getElementById('root');
divContainer.innerHTML+=
        `<main>
            <div>
                <input type="text" id="name" placeholder="Ingrese correo">
                <input type="email" id="email" placeholder="Ingrese correo">
                <input type="password" id="password" placeholder="Ingrese contraseña">
                <button id="register">Registrarse</button>
            </div>
        </main>`
}

export let  send = document.getElementById("register")
enviar.addEventListener("click", () => {

let email =document.getElementById("email").value
let password =document.getElementById("pasword").value

})
