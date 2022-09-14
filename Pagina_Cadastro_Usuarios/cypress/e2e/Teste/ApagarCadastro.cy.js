/// <reference types="cypress" />

describe('Deve apagar cadastro do usuário', () => {
    beforeEach(() => {
      // Antes de cada teste, deve abrir a pagina e verificar se foi carregada
      //cy.visit - Comando para visitar pagina
      cy.visit('https://qa-test.ticto.io/')
    })
  
    it('Deve acessar o botão "Ações" e Excluir o novo usuário criado', () => {
        
      //cy.get - Comando para coletar a tabela onde o usuário foi criado
        cy.get('td.text-truncate')
  
      //cy.contains - Comando para filtrar a coluna da tabela pelo nome do usuário
        .contains('Daniel dos Anjos')
  
      //cy.parent - Comando para acessar a "div" da coluna do usuário   
      .parent()
  
      //cy.find - Comando para encontrar o botão "Ações" e .click para clicar no botão
        .find('[type="button"]')
        .click()
        
      //cy.get e .click - Comando para coletar o botão secundário "Apagar" e clicar  
        .get('[data-target="#modalDelete1009"]')
        .click()
     
        //cy.get e .click - Comando para coletar o botão de confirmação de exclusão
        .get('[form="delete1009"]')
        .click()
  
  })
  
  })