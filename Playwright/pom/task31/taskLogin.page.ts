import { Page, expect, Locator } from "@playwright/test";

export default class Login {
  HomeBtn: Locator;
  LoginAsConsumer;
  LoginAsManager: Locator;

  constructor(page: Page) {
    this.HomeBtn = page.getByRole("button", { name: "Home" });
    this.LoginAsManager = page.getByRole("button", {
      name: "Bank Manager Login",
    });
    this.LoginAsConsumer = page.getByRole("button", { name: "Customer Login" });
  }
}
