import { test, expect} from '@playwright/test';
import { TIMEOUT } from 'dns';
test.use({ headless: false });

test.beforeEach ('open page', async({page}) => {
    await page.goto('https://www.saucedemo.com/');
})

test('check Page URL ad title', async({page}) => {
    await expect(page).toHaveURL('https://www.saucedemo.com/');
    await expect(page).toHaveTitle ('Swag Labs');
})

// testcase login thanh cong
test ('login succesfully',async({page}) => {
    const usernameInputField = page.locator('#user-name');
    const passwordInputField = page.locator('#password');

    await usernameInputField.fill('standard_user');
    await passwordInputField.fill('secret_sauce');

    
    const loginBtn = page.locator('[data-test="login-button"]');

    await loginBtn.click ({timeout: 30000});

    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
    
})

//testcase khong nhap username 
test ('show error message incase dont input user name',async({page}) => {
    const usernameInputField = page.locator('#user-name');
    const passwordInputField = page.locator('#password');

    await usernameInputField.fill('');
    await passwordInputField.fill('secret_sauce');

    
    const loginBtn = page.locator('[data-test="login-button"]');

    await loginBtn.click ({timeout: 30000});

    const errorMessage = page.locator('[data-test="error"]');

    await expect (errorMessage).toBeVisible();
    await expect (errorMessage).toHaveText('Epic sadface: Username is required');
})

//testcase khong nhap password
test ('show error message incase dont input password',async({page}) => {
    const usernameInputField = page.locator('#user-name');
    const passwordInputField = page.locator('#password');

    await usernameInputField.fill('standard_user');
    await passwordInputField.fill('');

    
    const loginBtn = page.locator('[data-test="login-button"]');

    await loginBtn.click ({timeout: 30000});

    const errorMessage = page.locator('[data-test="error"]');

    await expect (errorMessage).toBeVisible();
    await expect (errorMessage).toHaveText('Epic sadface: Password is required');
})

test ('incorrect password',async({page}) => {
    const usernameInputField = page.locator('#user-name');
    const passwordInputField = page.locator('#password');

    await usernameInputField.fill('standard_user');
    await passwordInputField.fill('haha');

    
    const loginBtn = page.locator('[data-test="login-button"]');

    await loginBtn.click ({timeout: 30000});

    const errorMessage = page.locator('[data-test="error"]');

    await expect (errorMessage).toBeVisible();
    await expect (errorMessage).toHaveText('Epic sadface: Username and password do not match any user in this service');
})