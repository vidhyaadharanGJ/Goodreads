import { test } from "@playwright/test"


test("Login", async({page})=>{

       test.setTimeout(60000)


       await page.goto("https://www.goodreads.com/")

       await page.locator("//a[text()='Sign In']").click()

       await page.locator("//button[@class='gr-button gr-button--dark gr-button--auth authPortalConnectButton authPortalSignInButton']").click()
       await page.locator("#ap_email").fill("gjdharan@gmail.com")

       await page.locator("#ap_password").fill("Bournvita#12")

       await page.locator("#signInSubmit").click()

       await   page.waitForTimeout(5000)




      







    
})