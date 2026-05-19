import { Page, Locator } from "@playwright/test";

export default class TodoPage {

    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    private get todoItem(): string {
        return '[data-testid="todo-item"]';
    }

    private get deleteIcon(): string {
        return '[data-testid="delete"]';
    }

    private get noTodosMessage(): string {
        return '[data-testid="no-todos"]';
    }

    private get welcomeMessage(): string {
        return '[data-testid="welcome"]';
    }

    async load(): Promise<void> {
        await this.page.goto("/todo");
    }

    getWelcomeMessage(): Locator {
        return this.page.locator(this.welcomeMessage);
    }

    async getTodoTextByIndex(index: number): Promise<string> {
        return await this.page
            .locator(this.todoItem)
            .nth(index)
            .innerText();
    }

    async deleteTodoByIndex(index: number): Promise<void> {
        await this.page
            .locator(this.deleteIcon)
            .nth(index)
            .click();
    }

    getNoTodosMessage(): Locator {
        return this.page.locator(this.noTodosMessage);
    }
}