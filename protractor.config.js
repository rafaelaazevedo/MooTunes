import mkdirp from 'mkdirp';

const REPORTS_FOLDER = 'target/test-reports/';

mkdirp(REPORTS_FOLDER);

// TODO create other browser's configurations and parallel tests
const chrome = {
    browserName: 'chrome',
    reportPath: `${REPORTS_FOLDER}report.json`,
    chromeOptions: {
        args: ['no-sandbox', '--headless'],
        prefs: {
            credentials_enable_service: false,
        },
    },
};

const capabilities = [chrome];

const configuration = {
    seleniumAddress: 'http://127.0.0.1:4444/wd/hub',
    specs: [
        'src/test/features/*.feature',
    ],
    multiCapabilities: capabilities,
    noGlobals: true,
    baseUrl: 'http://localhost:8080/',
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    resultJsonOutputFile: `${REPORTS_FOLDER}/protractor.json`,
	ignoreSynchronization: true,
	restartBrowserBetweenTests: true,
	cucumberOpts: {
        require: [
            'src/common.js',
            'src/test/steps/*.js'
        ],
        format: 'pretty',
        strict: true
    },
    params: {
        URI: 'http://jsonplaceholder.typicode.com'
    },
    onPrepare() {
        const protractor = require('protractor');
        const browser = protractor.browser;
        browser.manage().timeouts().setScriptTimeout(60000);
        return browser.getProcessedConfig().then(config => config.cucumberOpts.format = `json:${config.capabilities.reportPath}`);
    },
};

// TODO Add other browsers
configuration.multiCapabilities = [];
configuration.multiCapabilities.push(chrome);


module.exports.config = configuration;
