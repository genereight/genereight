const form = require('../views/welcome')
const SiteInfo = require('../models/siteInfo')
let siteInformation

const welcome = () => {
  siteInformation = new NewSite(NewSite)
  return siteInformation
}
console.log(siteInformation)
module.exports = welcome && {siteInformation}
