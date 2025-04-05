import { test, chromium } from "@playwright/test";

test("browserContext1", async () => {

    const browserInstance = await chromium.launch({
        headless: false, channel:
            "chrome"
    });

    const browserContext1 = await browserInstance.newContext();
    const page1 = await browserContext1.newPage();
    await page1.goto("https://www.amazon.in/");
    await page1.waitForTimeout(5000);

    const page2 = await browserContext1.newPage();
    await page2.goto("http://leaftaps.com/opentaps/control/main");
    await page2.waitForTimeout(5000);

    const browserContext2 = await browserInstance.newContext();
    const page3 = await browserContext2.newPage();
    await page3.goto("https://playwright.dev/");
    await page3.waitForTimeout(5000);


})