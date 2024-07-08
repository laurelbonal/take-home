describe('template spec', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://newsapi.org/v2/top-headlines*', {
      fixture: 'articles.json'
    }).as('getArticles')
    cy.visit('http://localhost:3000/')
  })
  it('when a user clicks on an article, display article details', () => {
    cy.get('.articles > :nth-child(1) > a').click()
    cy.get('h1').should('contain', 'Biden')
    cy.get('.article-detail > :nth-child(3)').should('contain', '7/6/2024')
    cy.get('.article-detail > :nth-child(5)').should('contain', 'Source')
    cy.get('.article-detail > [href="/"]').should('contain', 'Back to Articles')
  })
})