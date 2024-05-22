/// <reference types="cypress" />

const loginUrl = "https://app.todoist.com/auth/login"
const loggedUrl = "https://app.todoist.com/app/today"



const emailInput = 'element-01'
const passInput = 'element-03'
const loginForm = 'form'
const glass = 'loading'
const sesionCookie = 'todoistd'
const userEmail = "awemaj@gmail.com"
const userPassword = "1a2b3c"

//test deklaratywny (sprawdz se def tez imperatywny)
describe('user log in', () => {
    it('user can log in', () =>{
        userOpensLoginPage
        userEntersCorrectCreds
        userWaitUntillGlassClosed
        userCheckeIfIsLoggedIn

    })
})

function userOpensLoginPage() {
    cy.visit.loginUrl
}

function userEntersCorrectCreds(){
    cy.get(emailInput).type(userEmail)
    cy.get(passInput).type(userPassword)
    cy.get(loginForm).submit
    userWaitUntillGlassClosed
    
}


function userWaitUntillGlassClosed(){
    cy.get(glass).should('be.visible')
    cy.get(glass).should('not.be.visible')
}



function userCheckeIfIsLoggedIn(){
   cy.url().should('contain', loggedUrl)
}

function userCheckIfSessionCookieIsCreated(){

}

