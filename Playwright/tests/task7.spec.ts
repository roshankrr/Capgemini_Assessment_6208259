import { test } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto("https://www.icc-cricket.com/rankings");
  await page
    .getByRole("link", { name: "mens-batting-rankings", exact: true })
    .click();
  await page.getByRole("cell", { name: "845" }).click();
  await page.screenshot({ path: "./screenshot/ranking.png" });
});
