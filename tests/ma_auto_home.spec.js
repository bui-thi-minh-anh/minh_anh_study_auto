import {test, expect} from '@playwright/test';
import { login } from './utils/login';
// test.use({headless: false});


// check dropdown sort in home page
test.beforeEach('call login function', async({page}) => {
    await login(page);
})

// kiem tra các item trong dropdown
test('sort dropdown', async({page}) => {
    const dropdownBtn = page.locator('[data-test="active-option"]');
    await expect (dropdownBtn).toHaveText('Name (A to Z)');

    // await (dropdownBtn).click({timeout: 10000});

    const dropList = page.locator('[data-test="product-sort-container"]');

    const dropListItem = (dropList).locator('option');

    const dropListItemText = await (dropListItem).allInnerTexts();

    const arrDropList = [
        'Name (A to Z)',
        'Name (Z to A)',
        'Price (low to high)',
        'Price (high to low)'
    ];

    expect (dropListItemText).toEqual(arrDropList);
})
// sort high high to low
test('sort Price high to low', async({page}) => {
    const dropdownBtn = page.locator('[data-test="active-option"]');
    const sortPage = page.locator('[data-test="product-sort-container"]');

    await (sortPage).selectOption('lohi');

    const sortpriceListDesc = page.locator('.inventory_item_price');
    const countItem = await sortpriceListDesc.count();
    const pricesDesc = [];

    for (let i = 0; i < countItem; i++){
        const priceTextItem = await sortpriceListDesc.nth(i).innerText();
        const priceItem = parseFloat(priceTextItem.replace('$',''));
        pricesDesc.push(priceItem);
    }

    const priceItemDesc = [...pricesDesc].sort((a,b) => a - b);
    await expect (priceItemDesc).toEqual(pricesDesc);
})

// sort Name (A to Z)
test ('sort name A to Z', async({page}) => {
    const dropList = page.locator('[data-test="product-sort-container"]');
    const sortAToZ = await (dropList).selectOption('az');

    const nameItemText = page.locator('.inventory_item_name ');
    const itemCount = await nameItemText.count();
    let arrName = [];

    for (let i = 0; i < itemCount; i++){
        const name = await nameItemText.nth(i).innerText();
        arrName.push(name);
    }

    const nameAsc = [...arrName].sort((a,b) => a.localeCompare(b));
    expect (arrName).toEqual(nameAsc);
})

// sort Name ( Z to A)
test ('sort name Z to A', async({page}) => {
    const dropList = page.locator('[data-test="product-sort-container"]');
    const sortZToA = await (dropList).selectOption('za');

    const nameItemText = page.locator('.inventory_item_name');
    const count = nameItemText.count();
    let arrName = [];

    for (let i = 0; i < count; i++){
        const name = await (nameItemText).nth(i).innerText();
        arrName.push(name);
    }

    const nameDesc = [...arrName].sort((a,b) => addAbortListener.localeCompare(b));
    expect (arrName).toEqual(nameDesc);
 })

 // add item to cart
 test('add item to cart', async({page}) => {
    const addToCartBtn = page.locator('.btn.btn_primary.btn_small.btn_inventory');
    // await (addToCartBtn).click({timeout: 10000});

    const cartIcon = page.locator('[data-test="shopping-cart-link"]');
    const cartBadge = page.locator('[data-test="shopping-cart-badge"]');

    await (addToCartBtn).nth(0).click();
    await (addToCartBtn).nth(1).click();

    await expect(cartBadge).toHaveText('2');
 })

 //remove item from card
 test('remove button',async({page}) => {
    const removeBtn = page.locator ('.btn.btn_secondary.btn_small.btn_inventory');
    const addToCartBtn = page.locator('.btn.btn_primary.btn_small.btn_inventory');
    const numberBadge = page.locator('[data-test="shopping-cart-badge"]');
    
    await (addToCartBtn).nth(0).click();
    await (addToCartBtn).nth(1).click();
    await (addToCartBtn).nth(2).click();

    await (removeBtn).nth(0).click();

    await expect (numberBadge).toHaveText('2');
}) 

 // open item detail
 test('Open item detail',async({page})=> {
    // const imageHyperLink = page.locator('[data-test="item-4-img-link"]');
    const imageHyperLink = page.locator('.inventory_item_img').first();
    await (imageHyperLink).click();

    await expect(page).toHaveURL(/inventory-item\.html\?id=\d+/);
 })