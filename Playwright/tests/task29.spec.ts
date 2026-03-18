import { test, expect } from "@playwright/test";
import Data from "../public/task29data.json";
import path from "node:path";
// import * from "../public/task29data.json"
test("file upload task29 using json", async ({ page }) => {
  await page.goto(Data.url);
  let ChooseBtn = await page.locator("input#file-upload");
  await ChooseBtn.setInputFiles(path.join(__dirname, Data.filePath));
  let uploadBtn = await page.locator("input#file-submit").click();
  let uploadedFile = await page.locator("div#uploaded-files");
  await expect(uploadedFile).toContainText(Data.fileName);
  await page.screenshot({ path: "./screenshot/task29.png" });
});
