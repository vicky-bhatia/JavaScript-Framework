const googleSearch = require("../PageObject/GoogleSearch");
describe("Google Search", async () => {

    it("first Test", async () => {
        await googleSearch.searchData();
        await browser.pause(8000);
    });

})