describe('Blog app', function() {
	beforeEach(function() {
		cy.request('POST', 'http://localhost:3001/api/testing/reset')
		const user = {
			name: 'Matti Luukkainen',
			username: 'mluukkai',
			password: 'salainen'
		}
		cy.request('POST', 'http://localhost:3001/api/users',user)
		cy.visit('http://localhost:3000')
	})

	it('Login form is shown', function() {
		cy.contains('login').click()
	})

	describe('Login',function() {
		it('succeeds with correct credentials', function() {
cy.get('#username').type('mluukkai')
    cy.get('#password').type('salainen')
cy.get('#login-button').click()
			cy.contains('Matti Luukkainen is logged in')
		})

		it('fails with wrong credentials', function() {
cy.get('#username').type('mluukkai')
    cy.get('#password').type('vaarasalasana')
cy.get('#login-button').click()
			cy.contains('Matti Luukkainen is logged in')
		})
	})
})
describe('Blog app', function () {
  describe.only('When logged in', function () {
    beforeEach(function () {
      cy.request('POST', "http://localhost:3003/api/testing/reset")
      const user = {
        name: 'Matti Luukkainen', username: 'mluukkai', password: 'salainen'
      }
      cy.request('POST', 'http://localhost:3003/api/users/', user)
      cy.visit('http://localhost:3000')
      cy.get('#username').type('mluukkai')
      cy.get('#password').type('salainen')
      cy.get('#login-button').click()
    })

    it('A blog can be created', function () {
      cy.contains('new blog').click()
      cy.get('#url').type('google.com')
      cy.get('#title').type('google search')
      cy.get('#author').type('google dev team')
      cy.contains('create').click()
      cy.contains('google search')
    })
    it('A blog can be liked', function () {
      cy.contains('Create a blog!').click()
      cy.get('#url').type('truthcoin.org')
      cy.get('#title').type('Paul Sztorc old blog')
      cy.get('#author').type('Paul')
      cy.contains('create').click()
      cy.contains('view').click()
      cy.contains('like').click()
      cy.contains('likes')
    })
    })
