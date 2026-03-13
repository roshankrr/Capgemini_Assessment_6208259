import { test, expect } from "@playwright/test";
import path from "node:path";

test("user_registration task 20", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/upload");
  let image = await "../../../../../Downloads/sampleFile.jpeg";
  let upload = await page.locator(".button");
  await page.locator("#file-upload").setInputFiles(path.join(__dirname, image));
  await page.waitForTimeout(2000);
  await upload.click();
  await expect(page.locator("#uploaded-files")).toContainText(
    "sampleFile.jpeg",
  );
});
