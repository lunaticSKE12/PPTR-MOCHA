// import puppeteer from 'puppeteer'
import { step } from 'mocha-steps'
import Page from '../builder'

describe("Mocha steps demo", () => {
  // let browser
  let page
  // let mobile

  before(async () => {
    // browser = await puppeteer.launch({ headless: true })
    page = await Page.build('Desktop')
    // mobile = await Page.build('Mobile')
    // await page.setDefaultTimeout(7000)
  })

  after(async () => {
    // await browser.close()
    await page.close()
    // await mobile.close()
  })

  step('should load google homepage', async () => {
    await page.goto("https://google.com")
  })

  step('step 2 should fail', async () => {
    await page.waitForSelector('#FAIL')
  })
  step('step 3 ', async () => {
    console.log("from step 3")
  })
  step('step 4 ', async () => {
    console.log("from step 4")
  })
})