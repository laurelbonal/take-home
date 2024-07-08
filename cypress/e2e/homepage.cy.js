describe('displays articles on homepage and allows user to choose country', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://newsapi.org/v2/top-headlines*', {
      fixture: 'articles.json'
    }).as('getArticles')
    cy.visit('http://localhost:3000/')
  })
  it('should load articles', () => {
    cy.wait('@getArticles');
    cy.get('.article-card').should('have.length', 6);
    cy.get('.article-card').first().should('contain', 'Biden')
    cy.get('.article-card').last().should('contain', 'Forecast')
  })
  it('should have menu of countries', ()=>{
    cy.get('.country-filter').should('contain', 'United States')
    cy.get('.country-filter').should('contain', 'United Kingdom')
    cy.get('.country-filter').should('contain', 'Canada')
    cy.get('.country-filter').should('contain', 'Australia')
    cy.get('.country-filter').should('contain', 'Germany')
  })
})