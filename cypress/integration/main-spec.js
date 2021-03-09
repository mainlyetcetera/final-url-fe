describe('the main dom elements', () => {
  beforeEach(() => {
    cy
      .fixture('../fixtures/start.json')
      .then(data => {
        cy.intercept('GET', 'http://localhost:3001/api/v1/urls', {
          statusCode: 200,
          body: data
        })
      })

    cy
      .fixture('../fixtures/urlToAdd.json')
      .then(data => {
        cy.intercept('POST', 'http://localhost:3001/api/v1/urls', {
          statusCode: 200,
          body: data
        })
      })

    cy
      .visit('http://localhost:3000')
  })

  it('should see a title', () => {
    cy
      .get('h1')
      .contains('URL Shortener')
  })

  it.only('see a shortened url', () => {
    cy
      .get('section > div > a')
      .contains('http://localhost:3001/useshorturl/1')
  })

  it('view Form', () => {
  })

  it('should reflect info in input fields', () => {
  })
})
