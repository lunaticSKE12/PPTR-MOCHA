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
    await page.goto("http://zero.webappsecurity.com/index.html")
    await page.waitAndClick('#onlineBankingMenu')
    await page.waitFor(5000)
  })


})