describe('Grupo de testes', () => {
    beforeEach('Teste página Login', () => {
        cy.visit('/')
    })

    it("Caso de teste: Cadastrar um usuário", () => {
        cy.contains('Criar conta').click();
        cy.get('[placeholder="Nome completo"]').type("Pedro Abritta Reis")        
        cy.get('[placeholder="Data de Nascimento"]').type("14/03/1998")
        cy.get('[placeholder="Curso"]').type("Engenharia da computação")
        cy.get('[placeholder="Cidade natal"]').type("Cataguases")
        cy.get('[placeholder="Telefone"]').type("32991268210")
        cy.get('[style="background-color: rgb(242, 242, 242); display: flex;"] > :nth-child(1) > :nth-child(1) > .r-backgroundColor-19kfsom > .r-flex-13awgt0 > [placeholder="Email"]').type("pedroabritta@gec.inatel.br")
        cy.get('[style="background-color: rgb(242, 242, 242); display: flex;"] > :nth-child(1) > :nth-child(1) > .r-backgroundColor-19kfsom > .r-flex-13awgt0 > [placeholder="Senha"]').type("senha123teste")
        cy.visit('/')
    });
    
    it("Caso de teste: Cadastrar uma república", () => {
        cy.contains('Criar conta').click();
        cy.contains('Criar Rep').click();
        cy.get('[placeholder="Email da república"]').type("barril@gmail.com")        
        cy.get('[placeholder="Digite o nome da república"]').type("República Barril")
        cy.get('[placeholder="Localização"]').type("Rua Delcides Teles, 384")
        cy.get('[placeholder="Capacidade de moradores"]').type("14")
        cy.get('[placeholder="Custo médio mensal (R$)"]').type("750,00")
        cy.get('[placeholder="Telefone para contato"]').type("32991268210")
        cy.get('[style="background-color: rgb(242, 242, 242); display: flex;"] > :nth-child(1) > :nth-child(1) > .r-backgroundColor-19kfsom > .r-flex-13awgt0 > [placeholder="Senha"]').type("senha123teste")
        cy.visit('/')
    });
    
    it("Caso de teste: Login", () => {
        cy.get('[placeholder="Email"]').type("pedroabritta@gec.inatel.br")        
        cy.get('[placeholder="Senha"]').type("teste123senha")
        cy.contains('Acessar').click();
    });
});