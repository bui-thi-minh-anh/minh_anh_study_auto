import {test, expect} from '@playwright/test';
import { login } from './utils/login';

test.beforeEach('Open card page', async({page}) => {
  await login(page);
  await page.goto('https://www.saucedemo.com/inventory.html');
  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
  await page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
  await page.goto('https://www.saucedemo.com/cart.html');
})

// check sp trong list item = card badge
test('number of item', async({page}) => {
    const cartBadge = page.locator('[data-test="shopping-cart-badge"]');
    const cardItem = page.locator('.cart_item');
    // const itemInCard = page.locator('.inventory-item')
    if (await cartBadge.isHidden()){
        console.log('Badge is hidden → Expect no items in cart');
        await expect (cardItem).toHaveCount(0);
    }
    else {
        const cartBadgeText = await cartBadge.innerText();
        const cartBadgeNumber = await parseFloat(cartBadgeText,10);
        let countItem = await cardItem.count();

        // await expect (cartBadgeNumber).toHaveText((countItem).toString());
        console.log(`Cart badge: ${cartBadgeNumber}, Count in UI: ${countItem}`);
        expect(countItem).toBe(cartBadgeNumber); 
    }
})

// Check button "Continue shopping"
test('Continue shopping' , async({page}) => {
    const continueShopBtn = page.locator('[data-test="continue-shopping"]');
    await continueShopBtn.click();
    await expect (page).toHaveURL('https://www.saucedemo.com/inventory.html');
})

// check button "remove" in card page
test('button Remove', async({page}) => {
    const removeBtn =  page.locator('#remove-sauce-labs-backpack');
    const cartBadge = page.locator('[data-test="shopping-cart-badge"]');

    await removeBtn.click();

    const cartBadgeText = await cartBadge.innerText();
    const cartBadgeNumber = await parseInt(cartBadgeText, 10);


    await expect (cartBadgeNumber).toBe(1);
})