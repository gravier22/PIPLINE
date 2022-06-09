/// <reference types="cypress" />

describe("Opciones de click",()=>{

    it ("Dar un click en un botón",()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/")
        cy.title().should('eq','OrangeHRM')

        cy.get('#txtUsername').should('be.visible').type('Admin')
        cy.get('#txtPassword').should('be.visible').type('admin123')
        cy.get('#btnLogin').should('be.visible').should('be.enabled').click()
        cy.get('#menu_admin_viewAdminModule > b').should('be.visible').click()


        })
    
    })