Feature: Google Main Page

  I want to open a search engine
  
  @smoke
  Scenario: Opening a search engine page
    Given I open Google page
    Then I see "Google" in the title

    # // describe("Google Main Page"){

    #     it('Opening a search engineGoogle page'){

    #         cy.visit("www.google.com")

    #         cy.title().should("eq", "Google")
    #     }
    # }