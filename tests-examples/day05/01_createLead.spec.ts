import { test, chromium } from "@playwright/test";

test("create Lead", async () => {
    const browserInstance = await chromium.launch({ channel: "chrome" });

    const browserContext = await browserInstance.newContext();

    const page = await browserContext.newPage();
    await page.goto("http://leaftaps.com/opentaps/control/main");

    await page.locator("#username").fill("demosalesmanager");

    await page.locator("#password").fill("crmsfa");

    await page.locator(".decorativeSubmit").click();

    await page.waitForTimeout(5000);

    await page.locator("text=CRM/SFA").click();
    await page.waitForTimeout(5000);
    await page.getByRole('link', { name: 'Leads' }).click();

    await page.getByRole('link', { name: 'Create Lead' }).click();

    // await page.locator("#createLeadForm_companyName").click(); //lexicographics

    await page.locator("#createLeadForm_companyName").fill("testLeaf");

    await page.locator("#createLeadForm_firstName").fill("Dhanes");

    await page.locator('#createLeadForm_lastName').fill("Aadhith");

    // await page.locator("").fill("companyName");

    await page.locator(".smallSubmit").click();

    const status = await page.locator("#viewLead_statusId_sp").innerText();

    console.log("Satus of created lead = " + status)
    const companyNameWithId = await page.locator("#viewLead_companyName_sp").innerText();
    console.log("lead Id  =" + companyNameWithId);
    await page.waitForTimeout(5000);

    const numbers = (companyNameWithId.match(/\d+/g) || []).map(Number);

    console.log("lead Id only" + numbers);

    numbers.slice(1, 2)

})