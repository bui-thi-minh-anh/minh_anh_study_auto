export  async function login(page) {
    await (page).goto('https://www.saucedemo.com/');
    debugger;
    await (page).locator('#user-name').fill('standard_user');
    await (page).locator('#password').fill('secret_sauce');

    const loginBtn = page.locator('[data-test="login-button"]');

    await loginBtn.click ({timeout: 30000});

    await page.waitForURL('https://www.saucedemo.com/inventory.html');
}
