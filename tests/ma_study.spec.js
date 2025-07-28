import { test, expect, chromium } from '@playwright/test';
test.use({ headless: false });


test.beforeEach(async({page}) => {
    await page.goto('https://www.pinterest.com/');
})

// case kiểm tra page title
test('get Page Title',async ({page}) => {
    await expect(page).toHaveTitle("Pinterest");
})

// case kiểm tra url
test('check Page URL', async({page}) => {
    await expect(page).toHaveURL(/.*pinterest.*/);
})

// case kiem tra button login 
test('check button Login',async({page}) => {
    const loginBtn = page.locator ('[data-test-id= "simple-login-button"]');
    await expect (loginBtn).toHaveText("Log in");
    await expect (loginBtn).toBeVisible();

    await (loginBtn).click();

    const modalLogin = page.locator('[data-test-id="full-page-signup-close-button"]');
    await expect (modalLogin).toBeVisible();
    
    const emailInputField = page.locator('[data-test-id="emailInputField"]');
    await expect (emailInputField).toBeVisible();

    const inputPassword = page.locator('[data-test-id = "passwordInputField"]');
    await expect (inputPassword).toBeVisible();

})

// case kiem tra no input email , password

çç
 // case incorrect password
test ('input incorrect password', async({page}) => {
    const emailInputField = page.locator('[data-test-id="emailInputField"]');
    const passwordInputField = page.locator ('[data-test-id="passwordInputField"]');

    await (emailInputField).fill('anh.btm@picontechnology.com');
    await (passwordInputField).fill('hahha*1661');

    const loginBtn = page.locator('[data-test-id="registerFormSubmitButton"]');
    await loginBtn.click();
    await page.waitForTimeout(1000000);

    const passwordErrorMessage = page.locator('[role="alert"]');
    
    await expect (passwordErrorMessage).toBeVisible({timeout: 50000});
    // await expect (passwordErrorMessage).toContainText(['The password you entered is incorrect.']);
})

//case kiem tra button sign up
test('check button Sign up',async({page}) => {
    const signupBtn = page.locator('[data-test-id="simple-signup-button"]')
    await expect (signupBtn).toHaveText("Sign up");
    await expect (signupBtn).toBeVisible();
})

