import { test, expect } from "@playwright/test";
import User from "../models/User";
import RegisterPage from "../pages/RegisterPage";
test("shold be able to resgister to todo website", async ({ page }) => {
    const user = new User();
    const registerPage = new RegisterPage(page);
    registerPage.load();
    registerPage.register(user);
    const welcomeMessage = page.locator('[data-testid="welcome"]');
    await expect(welcomeMessage).toBeVisible();
});