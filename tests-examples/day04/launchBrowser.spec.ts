import { test, chromium } from "@playwright/test";

test("lauch browser", async () => {

    const browserInstance = await chromium.launch({
        headless: false, channel:
            "chrome"
    });

    const browserContext = await browserInstance.newContext();

    const page = await browserContext.newPage();

    await page.goto("http://leaftaps.com/opentaps/control/main");
    await page.waitForTimeout(5000);

})