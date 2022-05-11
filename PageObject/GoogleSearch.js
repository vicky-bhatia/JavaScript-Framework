//Open Browser
//search Something 
//press enter
const elementUtil = require("../utility/elementUtil");
class GoogleSearch
{
    get openBrowser()
    {
         browser.url("https://www.google.com/");
    }

    get maxWindow()
    {
        return browser.maximizeWindow();
    }

    get searchBarInput()
    {
        return $("//input[@name='q']")
    }

    get pressReturn()
    {
        return browser.keys("Return");
    }

    async searchData()
    {
        await this.openBrowser;
        await this.maxWindow;
        await elementUtil.doSetValue(this.searchBarInput,"JavaScript");
        await this.pressReturn;
    }
}
module.exports = new GoogleSearch();