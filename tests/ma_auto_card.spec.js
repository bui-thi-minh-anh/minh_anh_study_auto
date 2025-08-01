import {test, expect} from '@playwright/test';
import { login } from './utils/login';

test.beforeEach('Open card page', async({page}) => {
  await login(page);
  await page.goto('https://www.saucedemo.com/inventory.html');
  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
  await page.goto('https://www.saucedemo.com/cart.html');
})

// check sp trong list item = card badge
test('number of item', async({page}) => {
    const cartBadge = page.locator('[data-test="shopping-cart-badge"]');
    // const cardItem = page.locator('.cart_item');
    const itemInCard = page.locator('.inventory-item')
    if (await cartBadge.isHidden()){
        console.log('Badge is hidden → Expect no items in cart');
        await expect (itemInCard).toBeHidden();
    }
    else {
        const cartBadgeText = await cartBadge.innerText();
        const cartBadgeNumber = await parseFloat(cartBadgeText,10);
        let countItem = await itemInCard.count();

        // await expect (cartBadgeNumber).toHaveText((countItem).toString());
        console.log(`Cart badge: ${cartBadgeNumber}, Count in UI: ${countItem}`);
        expect(countItem).toBe(cartBadgeNumber); 
    }
})

