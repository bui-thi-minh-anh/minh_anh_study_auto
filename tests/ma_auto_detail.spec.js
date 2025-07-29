import {test, expect} from '@playwright/test';
import { login } from './utils/login';

test.beforeEach('Open detail page', async({page}) => {
    await login(page);
    let id = 4;
    await page.goto(`https://www.saucedemo.com/inventory-item.html?id=4`);
})

// button [<- Back to products]
test('Back to product', async({page}) => {
    const backBtn = page.locator('[data-test="back-to-products"]');
    await (backBtn).click();

    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
})

// check button Add to card incase card has item before
test('add in detail', async({page}) => {
    const addToCartBtn = page.locator('.btn.btn_primary.btn_small.btn_inventory');
    const cartBadge = page.locator('[data-test="shopping-cart-badge"]');

    let badgeCount = 0;
    
    if (await (cartBadge).isVisible()){
        const cartBadgeText = cartBadge.innerText();
        badgeCount = await parseFloat(cartBadgeText, 10);
    }

    await (addToCartBtn).click();
    await expect (cartBadge).toHaveText((badgeCount + 1).toString());
})

//check button Add to card incase card hasn't item before
test('add in detail = 0', async({page}) => {
    const addToCartBtn = page.locator('.btn.btn_primary.btn_small.btn_inventory');
    const cartBadge = page.locator('[data-test="shopping-cart-badge"]');

    let badgeCount = 0;
    if ( await (cartBadge.isHidden)){
        const cartBadgeText = cartBadge.innerText();
        badgeCount =  await parseFloat(cartBadgeText , 10);
    }

    await addToCartBtn.click();
    await expect(cartBadge).toHaveText('1');
})

//check button 