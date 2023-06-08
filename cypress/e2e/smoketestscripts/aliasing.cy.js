
describe('Checkboxes', () => {

    beforeEach(() => {
      cy.visit('https://bit.ly/3vswFBe')
    })
  
    it.only('checks all checkboxes with one command', () => {

      cy.xpath("//input[@type='checkbox']").should("have.length", 7)

      cy.xpath("//input[@type='checkbox']").as('raju')
      
      cy.xpath("//input[@type='checkbox']").first()
        .as('firstcheckbox');

        cy.xpath("//input[@type='checkbox']").last()
        .as('lastcheckbox');

        cy.get('@raju').check()

        cy.get('@raju')
        .each(checkbox => {
          expect(checkbox[0].checked).to.equal(true)
        })

        cy.log("All the check boxes checked")
        cy.get('@checkboxes').uncheck()
  
      cy.get('@checkboxes')
        .each(checkbox => {
          expect(checkbox[0].checked).to.equal(false)
        })

      cy.get('@firstcheckbox').check()
      cy.get('@lastcheckbox').check()
    })

    it('checks all checkboxes with one command', () => {

        cy.xpath("//input[@type='checkbox']").should("have.length", 7)
        cy.xpath("//input[@type='checkbox']").as('raju')
        
        cy.xpath("//input[@type='checkbox']").first()
          .as('firstcheckbox');
  
  
          cy.get('@checkboxes').check()
  
          cy.get('@checkboxes')
          .each(checkbox => {
            expect(checkbox[0].checked).to.equal(true)
          })
  
          cy.log("All the check boxes checked")
          cy.get('@checkboxes').uncheck()
    
        cy.get('@checkboxes')
          .each(checkbox => {
            expect(checkbox[0].checked).to.equal(false)
          })
  
        cy.get('@firstcheckbox').check()
      })
  })