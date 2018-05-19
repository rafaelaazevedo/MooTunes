import { browser } from 'protractor';
import API from './api';
import { Before, After, setDefaultTimeout } from 'cucumber';

const api = new API(browser.params);
setDefaultTimeout(60 * 1000);

Before(() => {
	browser.api = api.getUsers();
	// Get Random user from API
	//TODO Create a model to include the user info in a Dictionary
	const index = Math.floor((Math.random() * browser.api.length) + 1);
	browser.currentUser = browser.api[index];
	browser.waitForAngularEnabled(false);
    return browser.get(browser.baseUrl);
});

// After(() => {
//TODO Create report
// });
