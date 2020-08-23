///  <reference types="cypress"/>


describe('Testando Campos de Texto', ( ) => {
    before('', ( ) => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')
    })


    it('Deve escrever nome e sobrenome na caixa de texto', ( ) => {
        cy.get('#formNome').type('Samuel')
            .should('have.value', 'Samuel')

        cy.get('[data-cy=dataSobrenome]') .type('Amâncio de Oliveira')
            .should('have.value', 'Amâncio de Oliveira')
    })


    it('Deve escolher o sexo Masculino', ( ) => {
        cy.get('#formSexoMasc').click( )
            .should('be.checked')
        
            cy.get('#formSexoFem').should('not.be.checked')
    })


    it('Deve escolher Carne e Frango e Pizza no menu comida', ( ) => {
        cy.get('#formComidaCarne').click( )
            .should('have.value', 'carne')

        cy.get('#formComidaFrango').click( )
            .should('have.value', 'frango')

        cy.get('#formComidaPizza').click( )
            .should('have.value', 'pizza')
    })

    it('Deve escolher escolaridade Superior', ( ) => {
        cy.get('[data-test=dataEscolaridade]')
            .select('Superior')
            .should('have.value', 'superior')
    })

    it('deve escolher esporte futebol e fazer uma assertiva', ( ) => {
        cy.get('[data-testid=dataEsportes]')
            .select([ 'futebol', 'Corrida' ])
        cy.get('[data-testid=dataEsportes]').then($el => {
            expect ($el.val( )).to.be.deep.equal([ 'futebol', 'Corrida' ])
         })
    
    })

    it('escrever nas sugestões', ( ) => {
        cy.get('#elementosForm\\:sugestoes').type('olá Antonio Filho, me mande a lista de exercicios para estudar porque eu vou ter a semana inteira livre! caba safado!')
    })

    

    
})