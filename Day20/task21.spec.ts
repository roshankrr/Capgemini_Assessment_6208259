import { test, expect } from "@playwright/test";
import path from "node:path";

test("user_registration task 20", async ({ page }) => {
  await page.goto("https://demoqa.com/upload-download");
  let download_button = await page.locator("#downloadButton").click();
  let image = await "../../../../../Downloads/sampleFile.jpeg";
  await page.locator("#uploadFile").setInputFiles(path.join(__dirname, image));
  await page.waitForTimeout(2000);
  await expect(page.locator("#uploadedFilePath")).toContainText(
    "sampleFile.jpeg",
  );
});
