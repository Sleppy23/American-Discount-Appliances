
describe('american discount appliance website smoke test', () => {
    it('should load the home page', async () => {
      await browser.url(`https://americandiscountappliancesllc.com`)
      let mainLogo = $(
        '.u_1504576310.dmRespCol.small-12.large-3.medium-3.has-one-widget-only'
      )
      await expect(mainLogo).toBeExisting()
    })
})