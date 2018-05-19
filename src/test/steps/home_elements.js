import { element, by } from 'protractor';

function HomeElements() {
    return {
        getUserNames() {
            return element.all(by.css('.name-link a'));
        },
		getName(name) {
			return element(by.cssContainingText('.name-link a', name));
		},
        getUserEmails() {
            return element.all(by.css('.mail-link a'));
        },
        getWelcomeMessage() {
            return element(by.id('title'));
        }
    };
}

module.exports = HomeElements;