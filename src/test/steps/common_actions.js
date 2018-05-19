import CommonElements from './common_elements';

function CommonActions() {
  const commonElements = new CommonElements();

  return {
    assertCopyright() {
    	const message = commonElements.getCopyrightMessage().getText();
    	return expect(message.isDisplayed()).to.eventually.be.true;
    }
  };
}

module.exports = CommonActions;
