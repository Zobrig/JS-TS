import { test, expect } from "@playwright/test"

test("Wiki page", async ({ page }) => {
    await page.goto("https://www.wikipedia.org/")
    await page.pause()

    const searchButton = page.locator('//*[@id="search-form"]/fieldset/button');
    await searchButton.waitFor()
    await page.pause()

    const nativeLanguageButton = page.locator('//*[@id="js-lang-list-button"]');
    await nativeLanguageButton.waitFor()
    await page.pause()

    const footerGooglePlayButton = page.locator('//*[@id="www-wikipedia-org"]/footer/div[2]/div/div/ul/li[1]/a/span');
    await footerGooglePlayButton.waitFor()
    await page.pause()

    const searchInput = page.locator('//*[@id="searchInput"]');
    await searchInput.waitFor()
    await page.pause()
})