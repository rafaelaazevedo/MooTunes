import { browser } from 'protractor';
import HomeActions from './home_actions';
import CommonActions from './common_actions';
import { Given, When } from 'cucumber';

const homeActions = HomeActions();
const commonActions = new CommonActions();

Given('the home page has loaded', function () {
	homeActions.assertNames();
	homeActions.assertEmails();
	homeActions.assertWelcomeMessage('Welcome !!');
	return commonActions.assertCopyright();
});

When('selecting a name on the list', function () {
	return homeActions.selectUser(browser.currentUser.name);
});


