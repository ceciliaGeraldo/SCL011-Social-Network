//test de validaciones
import {validEmail} from '../src/assets/js/validation.js'

describe("verdicar funcion de registro", () =>{
it("Deberia retornar false para email incorrecto" ,()=>{
   expect(validEmail("martcamila1@gmail")).toBe(false)
});
});
 