/// <reference types="cypress" />


describe('exercises to practice', () => {
    it('Exercise 1', () => {
        cy.visit('https://qbek.github.io/selenium-exercises/pl/basic_form.html')
        cy.get('#firstname').type('Ewa')
        cy.get('#lastname').type('Maj')
        cy.get('#email').type('ewa@wp.pl')
        cy.get('.btn-success').click()

        cy.get('form').submit()

        cy.get('#firstname-check').should('have.text', 'Ewa')
        cy.get('#lastname-check').should('have.text', 'Maj')
        cy.get('.form-control-plaintext').should('have.value', 'ewa@wp.pl')
        
        
    } )

    it('Exercise 2', () => {
        cy.visit('https://qbek.github.io/selenium-exercises/pl/check_boxes.html')

        // To jest antypattern tak NIE ROBIMY jak mamy checkboxa nigdy .click tylko .check
       // cy.get('[name="red"]').click()
       // cy.get('[name="blue"]').click()

       // cy.get('[name = "red"]').check()
       // cy.get('[name = "blue"]').check()
        //mamy też .uncheck

        cy.get('[type="checkbox"]').check('red', 'blue')

        //cy.get('#light').should('hav.attr', 'data-color', '#FF00FF')

        cy.get('[for="swich"]').check()
        cy.get('text').should()
    } )

    it.only('Exercise 3', () => {
        cy.visit('https://qbek.github.io/selenium-exercises/pl/radio_buttons.html')

        cy.get('[type="radio"]').check()


        cy.get('input').check('radiozet')
        cy.get('#radiozet-details a').should('have.attr', 'href', 'https://www.radiozet.pl' )

//metdota faleniska odwracanie asecji (sprfawdzamy czy jak test jest napisany tak żeb y sfailowł i sprawdzamy czy napewno sfailuje) symuluje nie działanie systemu
        cy.get('input').check('rmffm')
        cy.get('#radiozet-details a').should('have.attr', 'href', 'https://www.radiozet.pl' )
    })

})

