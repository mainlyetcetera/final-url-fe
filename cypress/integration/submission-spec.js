describe('submitting the form', () => {
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
      cy.intercept('POST', 'http://localhost:3001/api/v1/urls', {
        statusCode: 201,
        body: {
          "long_url": "https://youtube.com",
          "title": "vid stuff!",
          "id": 2,
          "short_url": "http://localhost:3001/useshorturl/12"
        }
      })

    cy
      .visit('http://localhost:3000')
  })

  it('can add data', () => {
    cy
      .get('form')
      .children('input:first')
      .type('vid place!')
      .get('form input:first')
      .should('have.value', 'vid place!')

      .get('form')
      .children('input:nth-child(2)')
      .type('http://youtube.com')
      .get('form input:nth-child(2)')
      .should('have.value', 'http://youtube.com')

    cy
      .get('form button')
      .click()

    cy
      .get('section')
      .children('div')
      .should('have.length', 2)
  })
})
