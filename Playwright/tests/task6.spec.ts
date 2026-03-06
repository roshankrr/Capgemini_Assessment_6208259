import { test } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto("https://www.google.com");
  await page.getByRole("combobox", { name: "Search" }).click();
  await page.getByRole("combobox", { name: "Search" }).fill("tokyo olympic");
  await page.keyboard.press("Enter");
  await page.goto("https://www.olympics.com/en/olympic-games/tokyo-2020");
  await page.getByRole("link", { name: "All Athletes" }).click();
  let gold = await page
    .locator(
      '//*[@id="globalTracking"]/section/section[3]/section/ul/div/div[2]/li[2]/div[3]/div[1]/span/span',
    )
    .textContent();
  let bronze = await page
    .locator(
      '//*[@id="globalTracking"]/section/section[3]/section/ul/div/div[2]/li[2]/div[3]/div[3]/span/span',
    )
    .textContent();
  console.log("gold", gold, "bronze", bronze);
  await page.screenshot({ path: "./screenshot/olympics.png" });
});
