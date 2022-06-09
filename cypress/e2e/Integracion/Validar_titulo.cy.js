/// <reference types="cypress" />

describe("Seccion 1 Validar Titulo",()=>{

    it ("Test validar titulo de pagina",()=>{
          cy.visit("https://demoqa.com/text-box")
          cy.title().should('eq','ToolsQA')
          cy.log("Función title")
        })
    
    })