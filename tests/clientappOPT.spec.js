const {test, expect} = require('@playwright/test');
const data = JSON.parse(JSON.stringify(require('../test-data/testdata.json')));

test("Client App Optimised Test", async({page})=>
{

    //Login Page
    await page.goto(data.URL);
    await page.getByPlaceholder("email@example.com").fill(data.eMail);
    await page.getByPlaceholder("enter your passsword").fill(data.Password);
    await page.getByRole("button",{name:"login"}).click();

    await page.waitForLoadState("domcontentloaded");

    //Adding Product to Products Page & Navigating to Cart
    await page.locator(".card-body").filter({hasText:data.ProductName}).getByRole("button",{name:"Add To Cart"}).click();
    await page.getByRole("listitem").getByRole("button",{name:"Cart"}).click();

    //Asserting Product in cart and Checkout from Cart Page
    await expect(page.getByText(data.ProductName)).toBeVisible();
    await page.getByRole("button",{name:"Checkout"}).click();

    //Payment & Shipping Page
    await expect(page.getByText(data.ProductName)).toBeVisible();
    const quantity = (await page.getByText("Quantity: 1").textContent()).split(" ")[2];
    console.log(quantity);
    await page.getByRole('textbox').nth(1).fill(data.cvv);
    await page.getByRole('combobox').nth(1).selectOption(data.expiryYear);
    await page.getByRole('textbox').nth(2).fill(data.name);
    await page.getByRole('textbox').nth(3).fill(data.coupon);
    await page.getByRole('button',{name: "Apply Coupon"}).click();
    await expect(page.getByText("Coupon Applied")).toBeVisible();
    await page.getByText("Coupon Applied").screenshot({path:"./screenshots/couponapplied.png"})
    await expect(page.getByText(data.eMail)).toBeVisible();
    await page.getByRole('textbox').nth(5).pressSequentially('ind');
    await page.getByText(data.country,{exact: true}).click();
    await page.getByText("PLACE ORDER").click();

    //Order Confirmation page
    await expect(page.getByText("Thankyou for the order.")).toBeVisible();
    await expect(page.getByText(data.ProductName)).toBeVisible();
    await expect(page.getByText("Qty: 1")).toBeVisible();
    const orderID = ((await page.locator("td label").nth(1).textContent()).trim()).split(" ")[1];
    console.log('Order ID:',orderID);
    await page.getByText("Orders History Page").click();

    //Orders Page
    const orderrows = page.locator('tbody tr').filter({hasText:orderID});
    await orderrows.getByRole('button').first().click();

    //Order preview page
    await expect(page.getByText(orderID)).toBeVisible();
    const address = page.locator(".address");
    await expect(address.first()).toContainText(data.eMail);
    await expect(address.first()).toContainText(data.country);
    await expect(address.last()).toContainText(data.eMail);
    await expect(address.last()).toContainText(data.country);
    await expect(page.getByText(data.ProductName)).toBeVisible();

    //signout
    await page.getByRole('button',{name:"Sign Out"}).click();

    //Login Page Assertion
    await expect(page.getByText("Log in")).toBeVisible();

});