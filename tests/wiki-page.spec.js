import { test, expect } from "@playwright/test"

test("Wiki page", async ({ page }) => {
    await page.goto("https://www.wikipedia.org/")
    await page.pause()

    const searchButton = page.locator('//*[@id="search-form"]/fieldset/button');
    await searchButton.waitFor()
    await page.pause()
})