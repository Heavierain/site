describe('empty spec', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('navigates to the product page', () => {
    cy.get('a[href="/products"]').eq(0).click();
  })

  it('navigates to the values page', () => {
    cy.get('a[href="/values"]').eq(0).click();
  })

  it('navigates to the blog page', () => {
    cy.get('a[href="/post"]').eq(0).click();
  })
})

describe('validate blog', () => {
    cy.visit('/post');
  })
})