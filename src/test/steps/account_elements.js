import { element, by } from 'protractor';

function AccountElements() {
    return {
		getName() {
			return element(by.css('.account-name'));
		},
        getEmail() {
            return element(by.css('.account-email a'));
        },
        getPhone() {
            return element(by.css('.account-phone'));
        },
        getWebsite() {
            return element(by.css('.account-website a'));
        },
        getAddress() {
            return element(by.css('.account-address a'));
        },
        getBack() {
            return element(by.id('back'));
        }
    };
}

module.exports = AccountElements;
