import { Page, expect, Locator } from "@playwright/test";

export default class Consumer {
  HomeBtn: Locator;
  ConsumerLoginBtn: Locator;
  DepositeBtn: Locator;
  WidrawlBtn: Locator;
  Balance: Locator;
  ChooseConsumerSel: Locator;
  AmountInp: Locator;

  constructor(page: Page) {
    this.HomeBtn = page.getByRole("button", { name: "Home" });
    this.ConsumerLoginBtn = page.getByRole("button", { name: "Login" });
    this.DepositeBtn = page.getByRole("button", { name: "Deposit" });
    this.WidrawlBtn = page.getByRole("button", { name: "Withdraw" });
    this.AmountInp = page.getByPlaceholder("amount");
    this.Balance = page.locator('//div[@class="center"]//strong[2]');
    this.ChooseConsumerSel = page.locator("#userSelect");
  }
}
