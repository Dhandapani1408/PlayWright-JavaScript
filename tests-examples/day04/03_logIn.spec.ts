import { test, chromium } from "@playwright/test";

test("login", async () => {

    const browserInstance = await chromium.launch({ headless: false, channel: 'chrome' });

    const browserContext = await browserInstance.newContext();

    const logInPage = await browserContext.newPage();

    await logInPage.goto("http://leaftaps.com/opentaps/control/main");

    await logInPage.locator("#username").fill("demosalesmanager");

    await logInPage.locator("#password").fill("crmsfa");

    await logInPage.locator(".decorativeSubmit").click();

    await logInPage.waitForTimeout(5000);


})