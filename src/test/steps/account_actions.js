import { browser } from 'protractor';
import AccountElements from './account_elements';

function AccountActions() {

	const accountElements = new AccountElements();

	return {
    	assertEmail(text) {
			const email = accountElements.getEmail();
			expect(email.getAttribute('href')).to.eventually.contains(`mailto:${text}`);
			return expect(email.getText()).to.eventually.be.equal(text);
	    },
		assertAddress(text, link) {
			const address = accountElements.getAddress();
			expect(address.getAttribute('href')).to.eventually.contains(link);
			expect(address.getText()).to.eventually.contains(text.suite);
			expect(address.getText()).to.eventually.contains(text.street);
			return expect(address.getText()).to.eventually.contains(text.city);
		},
		assertPhone(text) {
			const phone = accountElements.getPhone();
			return expect(phone.getText()).to.eventually.be.equal(text);
		},
		assertWebsite(text) {
			const website = accountElements.getWebsite();
			expect(website.getAttribute('href')).to.eventually.contains(text);
			return expect(website.getText()).to.eventually.be.equal(text);
		},
		assertName(text) {
			const name = accountElements.getName().getText();
			return expect(name).to.eventually.be.equal(text);
		},
		goBack() {
			const button = accountElements.getBack();
			return button.click();
		},
		goToPage(){
			return browser.get(`${browser.baseUrl}account?userId=${browser.currentUser.id}`);
		},
  	};
}

module.exports = AccountActions;
