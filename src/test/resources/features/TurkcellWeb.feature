@ayhan1
Feature: Turkcell.com

  Scenario: Turkcell Smart Phone Buy

    Given I go to main page
    When I should see page title as "Turkcell'le Bağlan Hayata"
    And I wait 5 seconds for element having class "m-tab__panes" to display
    Then I see class "m-tab__panes" element

    When I click on element having xpath "//*[@class='m-header-nav']//*[@data-index='0']"
    Then I should see page title as "Turkcell Bünyesinde Yer Alan Tüm Akıllı Cihazlar"

    When I click on element having xpath "//*[@href='cihazlar/akilli-telefonlar']"
    Then I should see page title as "Turkcell Akıllı Telefon Model ve Fiyatları"

    When I scroll to element having xpath "//*[text()='Huawei P40']"
    When I click on element having xpath "//*[@data-product-id='huawei-p40']"
    And I wait for 5 seconds
    Then I should see page title as "Huawei P40 - TURKCELL"

  #  And radio button having class "a-price-radio-b price-radio-cash" should be selected
  # And I click on element having class "a-price-radio-b price-radio-cash"
    And I wait for 2 seconds
    And I click on element having xpath "//*[text()='Sepete Ekle']"
    And I click on element having class "hypeLoginBtn2"
    And I wait for 5 seconds
    Then I should see page title as "Sepetim - TURKCELL"
    And I wait for 2 seconds

    When I click on element having xpath "//*[text()='Kullanıcı sözleşmesini ']"
    And I wait for 2 seconds
    And I click on element having xpath "//*[text()='Onayla']"
    And I wait for 2 seconds
    And I click on element having xpath "//*[text()='Siparişe Devam Et']"
    And I wait for 5 seconds
    Then I should see page title as "Sipariş Bilgileri - TURKCELL"

    When I enter "Test Turkcell" into input field having id "fullName"
    And I enter "Test1@gmail.com" into input field having id "email"
    And I enter "392151636" into input field having id "gsm-1"
    And I enter "58468553958" into input field having id "tckimlik"
    And I enter "Ayhan Uzundal" into input field having id "customerDeliveryAddressName"
    And I enter "392151636" into input field having id "customerDeliveryGsm"
    And I wait for 5 seconds
    When I scroll to element having id "select2-select-cities-container"
    And I click on element having id "select2-select-cities-container"
    And I wait for 2 seconds
    And I enter "İstanbul" into input field having class "select2-search__field"
   # And I select 0 option by index from dropdown having id "select-cities"
 #  And I select "1" option by value from dropdown having id "select-cities"
    And I press enter button class "select2-search__field" element

  #  And I click on element having xpath "//*[@aria-activedescendant='select2-select-cities-result-5sjo-1']"
  #  And I select 1 option by index from dropdown having id "select2-select-cities-container"
    And I wait for 2 seconds
    And I enter "88888888888 caddesi test sokak" into input field having id "textarea-01"
    And I click on element having xpath "//*[text()='Siparişe Devam Et']"
    Then I should see page title as "Ödeme Bilgileri - TURKCELL"

    When I enter "Ayhan Uzundal" into input field having id "ccCardHolderName"
    And I wait for 2 seconds
    And I click on element having id "ccCardNumber"
    And I wait for 2 seconds
    And I click on element having id "ccCardNumber"
 #   And I enter "5526488525483325" into input field having id "ccCardNumber"
    And I wait for 5 seconds
    And I click on element having id "select2-ccMonth-container"
    And I wait for 2 seconds
    And I click on element having xpath "//*[@id='select2-ccMonth-results']//*[@title='1']"
    And I click on element having id "select2-ccYear-container"
    And I click on element having xpath "//*[@id='select2-ccYear-results']//*[@title='2023']"
    And I wait for 2 seconds
    And I enter "111" into input field having id "ccSecurityNumber"
    And I wait for 2 seconds

    #And I click on element having xpath "//*[text()='Siparişe Devam Et']"












