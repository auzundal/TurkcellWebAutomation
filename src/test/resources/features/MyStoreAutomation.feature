@ayhan2
Feature: My Store Test Automation

  Scenario: My Store Test Automation

    Given I go to main page
    Then I should see page title as "My Store"

    When I click on element having class "header_user_info"
    Then I should see page title as "Login - My Store"

    When I scroll to element having id "SubmitCreate"
    And I click on element having id "email_create"
    And I enter "hepsiburada2@gmail.com" into input field having id "email_create"
    And I click on element having id "SubmitCreate"
    And I scroll to element having id "customer_firstname"
    Then I see id "customer_firstname" element

    When I enter "TestFirstNamee" into input field having id "customer_firstname"
    And I enter "TestUsernamee" into input field having id "customer_lastname"
    And I enter "123456" into input field having id "passwd"
    And I wait for 2 seconds
    And I enter "Ayhan" into input field having id "firstname"
    And I wait for 2 seconds
    And I enter "Uzundal" into input field having id "lastname"
    And I enter "HepsiBurada TrumpTower" into input field having id "address1"
    And I enter "Istanbul" into input field having id "city"
    And I select 2 option by index from dropdown having id "id_state"
    And I enter "14555" into input field having id "postcode"
    And I enter "5395555555" into input field having id "phone_mobile"
    And I click on element having id "submitAccount"
    Then I should see page title as "My account - My Store"

    When I click on element having xpath "/html/body/div/div[1]/header/div[3]/div/div/div[6]/ul/li[2]/a"
    And I wait for 2 seconds
    And I click on element having xpath "/html/body/div/div[2]/div/div[3]/div[1]/div[1]/div/ul/li[3]"
    And I click on element having xpath "/html/body/div/div[2]/div/div[3]/div[2]/ul/li[1]"
    Then I should see page title as "Printed Summer Dress - My Store"
    And I wait for 2 seconds

    When I scroll to element having id "add_to_cart"
    And I click on element having id "add_to_cart"
    And I wait for 2 seconds
    And I click on element having xpath "//*[@class='icon-chevron-left left']"
    And I scroll to element having id "search_query_top"
    And I enter "Summer" into input field having id "search_query_top"
    And I click on element having xpath "//*[@name='submit_search']"
    And I wait for 5 seconds
    And I scroll to element having xpath "/html/body/div/div[2]/div/div[3]/div[2]/ul/li[1]/div"
    And I click on element having xpath "/html/body/div/div[2]/div/div[3]/div[2]/ul/li[1]/div"
    Then I should see page title as "Printed Summer Dress - My Store"

    When I click on element having id "add_to_cart"
    And I wait for 2 seconds
    And I click on element having class "cross"
    And I wait for 2 seconds
    Then I click on element having xpath "//*[@class='shopping_cart']"

   # And element having xpath "//*[@class='cart_quantity text-center']" should have attribute "2" with value "2"
#    And element having xpath "//*[@class='price special-price']" should have attribute "$28.98" with value "$28.98"
    When I click on element having xpath "//*[@class='button btn btn-default standard-checkout button-medium']"
    And I click on element having xpath "//*[@class='button btn btn-default button-medium']"
    And I click on element having id "cgv"
    And I click on element having xpath "//*[@class='button btn btn-default standard-checkout button-medium']"
    And I click on element having class "bankwire"
    And I click on element having xpath "//*[@class='button btn btn-default button-medium']"
    And I see xpath "//*[@class='button-exclusive btn btn-default']" element
    And I click on element having class "account"
    And I click on element having xpath "//*[@title='Orders']"
 #   And element having class "history_price" should have attribute "$62.36" with value "$62.36"
    And I wait for 5 seconds
    Then I close browser






