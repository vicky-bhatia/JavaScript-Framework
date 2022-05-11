class ElementUtil
{
    async doClick(webelement)
    {
        await webelement.waitForDisplayed();
        await webelement.click();
    }

    async doDoubleClick(webelement)
    {
        await webelement.waitForDisplayed();
        await webelement.doubleClick();
    }

    async doSetValue(webelement,value)
    {
        await webelement.waitForDisplayed();
        await webelement.setValue(value);
    }
    
    async doGetText(webelement)
    {
        await webelement.waitForDisplayed();
        return await webelement.getText();
    }

    async doGetPageTitle()
    {
        return await browser.getTitle();
    }

    async doIsDisplayed(webelement)
    {
        await webelement.waitForDisplayed();
        return await webelement.isDisplayed();
    }

    async doIsSelected(webelement)
    {
        await webelement.waitForDisplayed();
        return await webelement.isSelected();
    }

    async doIsClickable(webelement)
    {
        await webelement.waitForDisplayed();
        return await webelement.isClickable();
    }

    async doIsEnabled(webelement)
    {
        await webelement.waitForDisplayed();
        return await webelement.isEnabled();
    }

    async doIsExisting(webelement)
    {
        await webelement.waitForDisplayed();
        return await webelement.isExisting();
    }
    
}
module.exports = new ElementUtil();