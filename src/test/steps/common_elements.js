import { element, by } from 'protractor';

function CommonElements() {
    return {
        getCopyrightMessage() {
            return element(by.tagName('footer'));
        }
    };
}

module.exports = CommonElements;