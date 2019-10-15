// test de validaciones
import {validEmail , valideImput, validPassword} from '../src/assets/js/validation.js'

describe("verdicar funcion de registro", () =>{
it("Deberia retornar false para email incorrecto" ,()=>{
   expect(validEmail("martcamila1@gmail")).toBe(false)
});
it("Deberia retornar true para email correcto" ,()=>{
    expect(validEmail("martcamila1@laboratoria.com")).toBe(true)
 });
});

describe("verdicar funcion de validar input vacios", () =>{
    it("Deberia retornar false para campos completos" ,()=>{
       expect(valideImput("camila ","mart@gmail.com ","camila ")).toBe(false)
    });
    it("Deberia retornar true para campos vacios" ,()=>{
        expect(valideImput("camila ","mart@gmail.com ","")).toBe(true)
     });
});

describe("Verificar funcion de contraseña con mas de 6 caracteres", () =>{
    it("Deberia retornar true si la contraseña tiene menos de 6 caracteres" ,()=>{
       expect(validPassword("hola")).toBe(true)
    });
    it("Deberia retornar false si la contraseña tiene 6 caracteres o más" ,()=>{
        expect(validPassword("contraseña")).toBe(false)
     });
});