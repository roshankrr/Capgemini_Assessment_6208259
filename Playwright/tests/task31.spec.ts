import { test, expect } from "@playwright/test";
import Login from "../pom/task31/taskLogin.page";
import Manager from "../pom/task31/bankManager.page";
import Consumer from "../pom/task31/consumerLogin.page";
import data from "../public/task31data.json";

test.use({
  launchOptions: {
    slowMo: 500,
  },
});

test("Bank System", async ({ page }) => {
  await page.goto(data.url);
  let login = new Login(page);
  let manager = new Manager(page);
  let consumer = new Consumer(page);
  await login.LoginAsManager.click();
  await manager.AddConsumerAccountBtn.click();
  await manager.FirstNameInp.fill(data.firstName);
  await manager.LastNameInp.fill(data.lastName);
  await manager.PostCodeInp.fill(data.postalCode);
  await manager.AddConsumer.nth(1).click();
  await manager.OpenAccountBtn.click();
  await manager.ChooseConsumerSel.selectOption({ value: "6" });
  await manager.ChooseCurrencySel.selectOption({ value: "Rupee" });
  await manager.ProcessBtn.click();
  await login.HomeBtn.click();
  await login.LoginAsConsumer.click();
  await consumer.ChooseConsumerSel.selectOption({ value: "6" });
  await consumer.ConsumerLoginBtn.click();
  let balance = Number(await consumer.Balance.textContent());
  await consumer.DepositeBtn.click();
  await consumer.AmountInp.fill(data.depositeAmount);
  await consumer.DepositeBtn.nth(1).click();
  balance = Number(await consumer.Balance.textContent());
  await expect(consumer.Balance).toHaveText(data.depositeAmount);
  await consumer.WidrawlBtn.click();
  await consumer.AmountInp.fill(data.withdrawAmount);
  await consumer.WidrawlBtn.nth(1).click();
  balance = balance - Number(data.withdrawAmount);
  console.log(balance, Number(data.withdrawAmount));
  await expect(consumer.Balance).toHaveText(String(balance));
  await page.screenshot({ path: "./screenshot/task31.png" });
  await consumer.LogoutBtn.click();
});
