const {test, expect} = require('@playwright/test');
import TestData from '../test-data/testdata.json';

test("Client App Test", async ({page})=>
{
    //Login
    await page.goto(TestData.URL);
    await page.locator('#userEmail').fill(TestData.eMail);
    await page.locator('#userPassword').fill(TestData.Password);
    await page.locator('#login').click();

    await page.waitForLoadState('networkidle')

    //Search Product
    await page.locator('.card-body b').first().waitFor();
    const products = await page.locator('.card-body');
    const Count = await products.count();

    for (let i=0; i < Count; i++)
    {
        if (await products.nth(i).locator('b').textContent() === TestData.ProductName)
        {
            await products.nth(i).locator('text =  Add To Cart').click(); //Add to Cart
            break;
        }
    }

    await page.locator("li button[routerlink*='cart']").click();
    await page.locator('li h3').first().waitFor();
    expect(page.locator('li h3')).toHaveText(TestData.ProductName); //order item check

    await page.locator("ul button[type='button']").click(); //checkout

    //checkout page assertion
    expect(await page.locator(".item__title")).toHaveText(TestData.ProductName); //orderitem check
    const orderQuantityText = await page.locator(".item__quantity").textContent(); //order quantity capture
    const orderQuantity = await orderQuantityText.split(" ")[2];
    console.log(orderQuantity);

    //Checkout Personal Information
    await page.locator("form div input[type='text']").nth(1).fill(TestData.cvv);
    await page.locator("select").nth(1).selectOption(TestData.expiryYear);
    await page.locator("form div input[type='text']").nth(2).fill(TestData.name);
    await page.locator("form div input[type='text']").nth(3).fill(TestData.coupon);
    await page.locator("button[type='submit']").click(); //apply coupon
    const couponStatus = page.locator('p',{hasText : "Coupon Applied"});
    await expect(couponStatus).toBeVisible(); //coupon application status
    
    //shipping info
    expect(page.locator("label[type='text']")).toHaveText(TestData.eMail);
    //selecting country from auto-suggest dropdown
    await page.locator("input[placeholder='Select Country']").pressSequentially("ind",{delay:150});
    const countriesdropdown = page.locator('.ta-results');
    await countriesdropdown.first().waitFor();
    const countrycount = await countriesdropdown.locator('button').count();

    for (let i=0;i<countrycount;i++)
    {
        if (await countriesdropdown.locator('button').nth(i).textContent() === TestData.country)
        {
            await countriesdropdown.locator('button').nth(i).click();
            break;
        }
    }
    await page.locator(".action__submit").click();

    await page.locator("tbody tr").first().waitFor();

    //order submission page
    expect(await page.locator('h1')).toHaveText(" Thankyou for the order. ");
    const orderID = await page.locator("td label").nth(1).textContent(); //capturing orderID
    console.log(orderID);
    expect(await page.locator("div .title").first()).toHaveText(TestData.ProductName); //ordered & submitted pdt name check
    const qtySubmitted = await page.locator("div .sub").first().textContent();
    const quantitySubmitted = await qtySubmitted.split(" ")[1];
    expect(quantitySubmitted).toBe(orderQuantity); //ordered & submitted qty check

    await page.locator("td [routerlink*='/myorders']").click();

    await page.locator("tbody tr").first().waitFor();

    //orders page
    const orderrows = await page.locator('tbody tr');

    for(let i=0;i< await orderrows.count();i++)
    {
        const rowOrderID = await orderrows.nth(i).locator('th').textContent();
        if(orderID.includes(rowOrderID))
        {
            await orderrows.nth(i).locator("button").first().click();
            break;
        }
    }

    //order summary page
    await page.locator("div .email-wrapper").waitFor();
    
    const summaryID = (await page.locator(".col-text").textContent()).trim();
    expect(orderID).toContain(summaryID);
    expect(await page.locator("div .text").nth(0)).toContainText(TestData.eMail);
    expect(await page.locator("div .text").nth(2)).toContainText(TestData.eMail);
    expect(await page.locator("div .text").nth(1)).toContainText(TestData.country);
    expect(await page.locator("div .text").nth(3)).toContainText(TestData.country)
    expect(await page.locator("div .title")).toContainText(TestData.ProductName);

    await page.locator("button",{hasText: " Sign Out "}).click();

    expect(await page.locator(".login-title")).toHaveText("Log in")

});