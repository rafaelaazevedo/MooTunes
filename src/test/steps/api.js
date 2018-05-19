import request from 'sync-request';

function API(ApiParameters) {
	this.endpoints = {
			users: `${ApiParameters.URI}/users`,
		}
};

API.prototype.getUsers = function () {
    const response = request('GET', `${this.endpoints.users}`);

	if (response.statusCode !== 200) {
		throw Error(`Unable to get users, status is:${response.statusCode}`);
	}

	const json = parseResponse(response);

	return json;
};

function parseResponse(response) {
	return JSON.parse(response.getBody('utf8'));
};

module.exports = API;