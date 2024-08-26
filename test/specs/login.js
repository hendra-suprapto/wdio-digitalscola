describe('Test Saucedemo', () => {
    it ('Login_Test - Login succeessfully', async () => {

    await browser.url("https://www.saucedemo.com/")

    await $("#user-name").setValue("standard_user")
    await $("#password").setValue("secret_sauce")
    await $("#login-button").click()
    await $("#add-to-cart-sauce-labs-backpack").click()
    await browser.pause(10000)
    // await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html')
    // await expect(browser).toHaveTitle('Swag Labs')
    // await $("#add-to-cart-sauce-labs-backpack").click()
    
});
});