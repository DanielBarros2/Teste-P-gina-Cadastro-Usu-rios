/// <reference types="cypress" />

describe('Deve carregar pagina', () => {
  beforeEach(() => {
    // Antes de cada teste, deve abrir a pagina e verificar se foi carregada
    //cy.visit - Comando para visitar pagina
    cy.visit('https://qa-test.ticto.io/')
  })

  it('Deve informar dados de cadastro invalidos', () => {
    //cy.get - Comando para coletar campo do site
    //cy.type - Comando para inserir dados no campo selecionado

//inserindo 000 ao campo Nome
    cy.get('[id="name"]').type('000')

//inserindo 000 ao campo Email
    cy.get('[id="email"]').type('000')

//inserindo espaço ao campo senha
    cy.get('[id="password"]').type('1')
    
//Pressionar botao Cadastrar
    cy.get('[class="btn btn-primary mt-3"]').click()

  })

})

