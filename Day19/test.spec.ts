import { test } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto(
    "https://www.amazon.com/s?k=phones&crid=2A545XRBLB3CI&sprefix=phon%2Caps%2C367&ref=nb_sb_noss_2",
  );
  let loc = await page.locator(
    '//div[@id="172db690-7d2e-4c01-9c33-4a2b2053268a"]//h2[@class="a-size-medium a-spacing-none a-color-base a-text-normal"]//span|//div[@id="172db690-7d2e-4c01-9c33-4a2b2053268a"]//span[@class="a-price-whole"]',
  );

  console.log(await loc.allInnerTexts());
});
