// import { test, expect } from "@playwright/test";
// import User from "../models/User";
// import TodoPage from "../pages/TodoPage";
// import RegisterPage from "../pages/RegisterPage";
// import NewTodoPage from "../pages/NewTodoPage";
// test("should be able to add an item to the todo list", async ({ page, request, context }) => {
//     const user = new User();
//     const registerPage = new RegisterPage(page, request, context);
//     await registerPage.registerUsingTheAPI(user);
//     const newtodopage = new NewTodoPage(page);
//     await newtodopage.load();
//     await newtodopage.addNewTask('playwrite');
//     const todoPage = new TodoPage(page);
//     const todoItem = await todoPage.getTodoTextByIndex(0);
//     expect(todoItem).toEqual('playwrite');
// });

// test("should be able to delete an item from the todo list", async ({ page, request, context }) => {
//     const user = new User();
//     const registerPage = new RegisterPage(page, request, context);
//     await registerPage.registerUsingTheAPI(user);

//     const newTodoPage = new NewTodoPage(page, request)
//     await newTodoPage.addNewTaskUsingAPI(user);

//     const todoPage = new TodoPage(page);
//     await todoPage.load();
//     await todoPage.deleteTodoByIndex(0);

//     const noTodoMessage = todoPage.getNoTodosMessage();
//     await expect(noTodoMessage).toBeVisible();
// });