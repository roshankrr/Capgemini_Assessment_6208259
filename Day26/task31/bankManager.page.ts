import { Page, expect, Locator } from "@playwright/test";

export default class Manager {
  HomeBtn: Locator;
  AddConsumer: Locator;
  FirstNameInp: Locator;
  LastNameInp: Locator;
  PostCodeInp: Locator;
  AddConsumerAccountBtn: Locator;
  OpenAccountBtn: Locator;
  ChooseConsumerSel: Locator;
  ChooseCurrencySel: Locator;
  ProcessBtn: Locator;

  constructor(page: Page) {
    this.HomeBtn = page.getByRole("button", { name: "Home" });
    this.AddConsumer = page.getByRole("button", { name: "Add Customer" });
    this.AddConsumerAccountBtn = page.getByRole("button", {
      name: "Add Customer",
    });
    this.OpenAccountBtn = page.getByRole("button", { name: "Open Account" });
    this.FirstNameInp = page.getByPlaceholder("First Name");
    this.LastNameInp = page.getByPlaceholder("Last Name");
    this.PostCodeInp = page.getByPlaceholder("Post Code");
    this.AddConsumer = page.getByRole("button", { name: "Add Customer" });
    this.ChooseConsumerSel = page.locator("#userSelect");
    this.ChooseCurrencySel = page.locator("#currency");
    this.ProcessBtn = page.getByRole("button", { name: "Process" });
  }
}
