import { test, expect } from "@playwright/test";

test("lenskart", async ({ page }) => {
  await page.goto("https://www.lenskart.com");
  let stores = await page.getByLabel("STORES");
  await stores.hover();
  let banglore = await page.getByRole("link", { name: "city" }).nth(1);
  let bangloreStore = await page.locator(
    '//div[@class="sc-3b185ffd-2 bGQhWP"][5]//a[@class="sc-2ea48804-9 byBHlR getGaData"][2]',
  ); //using xpath
  await bangloreStore.click();
});
