import { test } from "@playwright/test";
import carrerData from "../public/amazonEndToEndCarrers.json";
import { Careers } from "../pom/endToendAmazon.page";

test.only("amazon-carrers", async ({ page }) => {
  const career = new Careers(page);
  await page.goto(carrerData.url);
  await career.CarrersBtn.click();
  await career.StudentOppRoleBtn.click();
  await career.FindOpenUniv.click();
  await career.selectCountry(carrerData.country);
  await career.selectState(carrerData.state);
  await career.selectCity(carrerData.city);
  await career.selectEmpl(carrerData.employmentType);
  await career.selectCateg(carrerData.category);
  await career.selectCarrer(carrerData.carrerArea);
  await career.selectTeam(carrerData.team);
  await career.selectRole(carrerData.roleType);
  let [page2] = await Promise.all([
    page.waitForEvent("popup"),
    await career.SecondJob.nth(1).click(),
  ]);
  await career.applyButton(page2);
  await page2.screenshot({ path: "./screenshot/amazonCareer.png" });
});
