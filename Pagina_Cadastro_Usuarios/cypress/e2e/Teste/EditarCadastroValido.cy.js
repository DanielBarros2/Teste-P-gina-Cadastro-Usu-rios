/// <reference types="cypress" />

describe('Deve editar cadastro com dados validos', () => {
    beforeEach(() => {
      // Antes de cada teste, deve abrir a pagina e verificar se foi carregada
      //cy.visit - Comando para visitar pagina
      cy.visit('https://qa-test.ticto.io/')
    })
  
    it('Deve acessar o botão "Ações" e "Editar" do novo usuário criado', () => {
        
      //cy.get - Comando para coletar a tabela onde o usuário foi criado
        cy.get('td.text-truncate')

      //cy.contains - Comando para filtrar a coluna da tabela pelo nome do usuário
        .contains('Daniel Barros')

      //cy.parent - Comando para acessar a "div" da coluna do usuário   
      .parent()

      //cy.find - Comando para encontrar o botão "Ações" e .click para clicar no botão
        .find('[type="button"]')
        .click()
        
      //cy.get e .click - Comando para coletar o botão secundário "Editar" e clicar  
        .get('[data-target="#modalEdit1009"]')
        .click() 

      //cy.get- Comando para coletar campo "Nome", .clear para limpar e .type para inserir novo nome  
        cy.get('[value="Daniel Barros"]').clear()
        .type('Daniel dos Anjos')
      
      //cy.get e .click - Comando para coletar o botão secundário "Editar" e clicar
      cy.get('[value="danieldosanjosbarros@gmail.com"]').clear()
        .type('danielanjos@gmail.com')
    
       //cy.get e .click - Comando para coletar e clicar no botão "Salvar"  
      cy.get('[form="edit1009"]').click()

  })

})