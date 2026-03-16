import { test, expect } from "@playwright/test";
import { Task27Page } from "../pom/task27.page";
test("flipcart_senario end to end", async ({ page }) => {
  await page.goto("https://www.flipkart.com");
  await page.locator(".b3wTlE").click();
  let flipkart = new Task27Page(page);
  await flipkart.HomeBtn.click();
  await flipkart.GudiPadwaStoreImg.click();
  await flipkart.Deal5.click();
  let [page2] = await Promise.all([
    page.waitForEvent("popup"),
    flipkart.Prod1.click(),
  ]);
  await flipkart.addToCart(page2);
  await page2.close();
  await page.goBack();
  await flipkart.Deal8.click();
  [page2] = await Promise.all([
    page.waitForEvent("popup"),
    flipkart.Prod1.click(),
  ]);
  await flipkart.addToCart(page2);
  await page2.close();
  await flipkart.CartBtn.click();
  await page.screenshot({ path: "./screenshot/end_to_end_flipkart.png" });
});
