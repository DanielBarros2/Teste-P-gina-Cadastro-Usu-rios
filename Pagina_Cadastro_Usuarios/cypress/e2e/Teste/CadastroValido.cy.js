/// <reference types="cypress" />

describe('Deve informar dados de cadastro validos', () => {
    beforeEach(() => {
      // Antes de cada teste, deve abrir a pagina e verificar se foi carregada
      //cy.visit - Comando para visitar pagina
      cy.visit('https://qa-test.ticto.io/')
    })
  
    it('Deve informar dados de cadastro validos', () => {
        //cy.get - Comando para coletar campo do site
        //cy.type - Comando para inserir dados no campo selecionado
    
    //inserindo 'Daniel Barros' ao campo Nome
        cy.get('[id="name"]').type('Daniel Barros')
    
    //inserindo 'danieldosanjosbarros@gmail.com' ao campo Email
        cy.get('[id="email"]').type('danieldosanjosbarros@gmail.com')
    
    //inserindo 'abcd1234' ao campo senha
        cy.get('[id="password"]').type('abcd1234')
        
    //Pressionar botao Cadastrar
        cy.get('[class="btn btn-primary mt-3"]').click()
    
    
      })
  })
  
  