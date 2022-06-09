/// <reference types="cypress" />

describe("Este es el inicio del curso de Cypress Seccion_1",()=>{

it ("Mi primer test --> Seccion_1",()=>{

        cy.log("Hola Mundo")
        /*Comando utilizado para asignar un tiempo de 
        espera en milisegundos.*/ 
        cy.wait(1500)
    })

    it ("Segundo Test -> Escribir en la caja de texto name",()=>{
        /*Con este comando abre la página que deseamos visitar*/
        cy.visit("https://www.google.com/")
        cy.get('.gLFyf').type('Harley {enter}')

    })

})