import { test } from "./Customfixtures.spec"


test("cOMMUNITY", async({page})=>{

       const commnity=  await  page.locator("(//span[text()='Community ▾'])[1]")

       await commnity.click()

       await page.locator("(//a[text()='Groups'])[1]").click()

       const textgroups = await page.locator("//h1[@class='gr-h1 gr-h1--serif']").textContent()

       await console.log(textgroups)
})