import { APIRequestContext, BrowserContext } from "@playwright/test";
import UserApi from "../apis/UserApi";
import config from '../playwright.config';
export default class RegisterPage {
    private page: Page;
    private request?: APIRequestContext;
    private context?: BrowserContext;
    //Constractour
    constructor(page: Page, request?: APIRequestContext, context?: BrowserContext) {
        this.page = page;
        this.request = request;
        this.context = context;
    }
    //Elements
    private get firstNameInput() {
        return '[data-testid="first-name"]';
    }
    private get lastNameInput() {
        return '[data-testid="last-name"]';
    }
    private get emailInput() {
        return '[data-testid="email"]';
    }
    private get passwoedInput() {
        return '[data-testid="password"]';
    }
    private get confirmPasswordInput() {
        return '[data-testid="confirm-password"]';
    }
    private get submitButton() {
        return '[data-testid="submit"]';
    }

    //Methods or Steps
    async load() {
        await this.page.goto("/signup");

    }
    async register(user: User) {
        await this.page.locator(this.firstNameInput).fill(user.getFirstName());
        await this.page.locator(this.lastNameInput).fill(user.getLastName());
        await this.page.locator(this.emailInput).fill(user.getEmail());
        await this.page.locator(this.passwoedInput).fill(user.getPassword());
        await this.page.locator(this.confirmPasswordInput).fill(user.getPassword());
        await this.page.locator(this.submitButton).click();
    }
    async registerUsingTheAPI(user: User) {

        const response = await new UserApi(this.request!).register(user);
        const resposeBody = await response.json();
        const accessToken = resposeBody.access_token;
        const userID = resposeBody.userID;
        const firstName = resposeBody.firstName;
        user.setAcessToken(accessToken);
        await this.context!.addCookies([
            {
                name: "access_token",
                value: accessToken,
                url: config.use?.baseURL,
            },
            {
                name: "userID",
                value: userID,
                url: config.use?.baseURL,
            },
            {
                name: "firstName",
                value: firstName,
                url: config.use?.baseURL,
            }
        ]);
    }
}