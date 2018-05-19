import { browser } from 'protractor';
import HomeElements from './home_elements';

function HomeActions() {
	const homeElements = new HomeElements();

	return {
		selectUser(name) {
			return homeElements.getName(name).click();
		},
		assertEmails() {
			return homeElements.getUserEmails().then((results) => {
				results.map((elm, index) => {
					expect(elm.getText()).to.eventually.be.equal(browser.api[index].email);
					expect(elm.getAttribute('href')).to.eventually.be.equal(`mailto:${browser.api[index].email}`);
				});
			});
		},
		assertNames() {
			return homeElements.getUserNames().then((results) => {
				results.map((elm, index) => {
					expect(elm.getText()).to.eventually.be.equal(browser.api[index].name);
					expect(elm.getAttribute('href')).to.eventually.be.equal(`${browser.baseUrl}account?userId=${browser.api[index].id}`);
				});
			});
		},
		assertWelcomeMessage(text) {
			const welcome = homeElements.getWelcomeMessage();
			return expect(welcome.getText()).to.eventually.be.equal(text);
		},
	};
}

module.exports = HomeActions;