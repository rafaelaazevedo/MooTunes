import { browser } from 'protractor';
import AccountActions from './account_actions';
import CommonActions from './common_actions';
import { Given, When, Then } from 'cucumber';

const accountActions = new AccountActions();
const commonActions = new CommonActions();

Given('the account page has loaded', function() {
	const geoLink = `http://maps.google.com/maps?q=${browser.currentUser.address.geo.lat},${browser.currentUser.address.geo.lng}`;
	accountActions.goToPage();
	accountActions.assertName(browser.currentUser.name);
	accountActions.assertEmail(browser.currentUser.email);
	accountActions.assertAddress(browser.currentUser.address, geoLink);
	accountActions.assertPhone(browser.currentUser.phone);
	accountActions.assertWebsite(browser.currentUser.website);
	return commonActions.assertCopyright();
});

When('pressing the back button', function() {
	return accountActions.goBack();
});

Then('the account page for that name should be loaded', function () {
	const geoLink = `http://maps.google.com/maps?q=${browser.currentUser.address.geo.lat},${browser.currentUser.address.geo.lng}`;
	accountActions.assertName(browser.currentUser.name);
	accountActions.assertEmail(browser.currentUser.email);
	accountActions.assertAddress(browser.currentUser.address, geoLink);
	accountActions.assertPhone(browser.currentUser.phone);
	accountActions.assertWebsite(browser.currentUser.website);
	return commonActions.assertCopyright();
});