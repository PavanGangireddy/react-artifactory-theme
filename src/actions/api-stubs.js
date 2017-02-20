/*jshint -W069 */
/**
 *
 * @class artifactory
 * @param {(string|object)} [domainOrOptions] - The project domain or options object. If object, see the object's optional properties.
 * @param {string} [domainOrOptions.domain] - The project domain
 * @param {object} [domainOrOptions.token] - auth token - object with value property and optional headerOrQueryName and isQuery properties
 */
var artifactory = (function() {
    'use strict';

    var axios = require('axios');

    function artifactory(options) {
        var domain = (typeof options === 'object') ? options.domain : options;
        this.domain = domain ? domain : '/artifactory/api';
        if (this.domain.length === 0) {
            throw new Error('Domain parameter must be specified as a string.');
        }
    }

    /**
     * Gets current `UserProfile` object.

     * @method
     * @name artifactory#getAuthCurrent
     *
     */
    artifactory.prototype.getAuthCurrent = function(parameters) {

        var _this = this;
        return new Promise(function(resolve, reject) {

            if (parameters === undefined) {
                parameters = {};
            }

            var domain = _this.domain;

            var path = '/auth/current';

            var body;
            var queryParameters = {};
            var headers = {};
            var form = {};

            var responseWrapper = {
                response: {},
                body: {}
            };
            var errorWrapper = {
                error: {
                    error_code: 0, //TODO: Need to revisit the error code
                    message: ''
                }
            };

            if (parameters.hasOwnProperty('headers')) {

                headers = parameters['headers'];
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters)
                    .forEach(function(parameterName) {
                        var parameter = parameters.$queryParameters[parameterName];
                        queryParameters[parameterName] = parameter;
                    });
            }

            var config = {
                method: 'GET',
                baseURL: domain,
                url: path,
                params: queryParameters,
                headers: headers,
                data: body
            };
            if (Object.keys(form).length > 0) {
                config.form = form;
            }
            if (typeof(body) === 'object' && !(body instanceof Buffer)) {
                config.json = true;
            }

            axios(config)
                .then(function(response) {

                    // Handling API response. This is custom implementation for each client
                    responseWrapper = responseHandler(response, response.data);

                    if (responseWrapper.body && !(responseWrapper.body.error)) {
                        return resolve(responseWrapper);
                    } else {
                        return reject(responseWrapper);
                    }
                }, function(e) {
                    errorWrapper.error.message = e.message;
                    responseWrapper.body = errorWrapper;

                    return reject(responseWrapper);
                });
        });
    };
    /**
     * Logs user into the system
     * @method
     * @name artifactory#postAuthLogin
     * @param {} body - UserLogin object
     *
     */
    artifactory.prototype.postAuthLogin = function(parameters) {

        var _this = this;
        return new Promise(function(resolve, reject) {

            if (parameters === undefined) {
                parameters = {};
            }

            var domain = _this.domain;

            var path = '/auth/login';

            var body;
            var queryParameters = {};
            var headers = {};
            var form = {};

            var responseWrapper = {
                response: {},
                body: {}
            };
            var errorWrapper = {
                error: {
                    error_code: 0, //TODO: Need to revisit the error code
                    message: ''
                }
            };

            if (parameters.hasOwnProperty('headers')) {

                headers = parameters['headers'];
            }

            if (parameters['body'] !== undefined) {
                body = parameters['body'];
            }

            if (parameters['body'] === undefined) {
                errorWrapper.error.message = 'Missing required  parameter: body';
                responseWrapper.body = errorWrapper;

                return reject(responseWrapper);
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters)
                    .forEach(function(parameterName) {
                        var parameter = parameters.$queryParameters[parameterName];
                        queryParameters[parameterName] = parameter;
                    });
            }

            var config = {
                method: 'POST',
                baseURL: domain,
                url: path,
                params: queryParameters,
                headers: headers,
                data: body
            };
            if (Object.keys(form).length > 0) {
                config.form = form;
            }
            if (typeof(body) === 'object' && !(body instanceof Buffer)) {
                config.json = true;
            }

            axios(config)
                .then(function(response) {

                    // Handling API response. This is custom implementation for each client
                    responseWrapper = responseHandler(response, response.data);

                    if (responseWrapper.body && !(responseWrapper.body.error)) {
                        return resolve(responseWrapper);
                    } else {
                        return reject(responseWrapper);
                    }
                }, function(e) {
                    errorWrapper.error.message = e.message;
                    responseWrapper.body = errorWrapper;

                    return reject(responseWrapper);
                });
        });
    };
    /**
     * Logs user into the system
     * @method
     * @name artifactory#postAuthLogout
     *
     */
    artifactory.prototype.postAuthLogout = function(parameters) {

        var _this = this;
        return new Promise(function(resolve, reject) {

            if (parameters === undefined) {
                parameters = {};
            }

            var domain = _this.domain;

            var path = '/auth/logout';

            var body;
            var queryParameters = {};
            var headers = {};
            var form = {};

            var responseWrapper = {
                response: {},
                body: {}
            };
            var errorWrapper = {
                error: {
                    error_code: 0, //TODO: Need to revisit the error code
                    message: ''
                }
            };

            if (parameters.hasOwnProperty('headers')) {

                headers = parameters['headers'];
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters)
                    .forEach(function(parameterName) {
                        var parameter = parameters.$queryParameters[parameterName];
                        queryParameters[parameterName] = parameter;
                    });
            }

            var config = {
                method: 'POST',
                baseURL: domain,
                url: path,
                params: queryParameters,
                headers: headers,
                data: body
            };
            if (Object.keys(form).length > 0) {
                config.form = form;
            }
            if (typeof(body) === 'object' && !(body instanceof Buffer)) {
                config.json = true;
            }

            axios(config)
                .then(function(response) {

                    // Handling API response. This is custom implementation for each client
                    responseWrapper = responseHandler(response, response.data);

                    if (responseWrapper.body && !(responseWrapper.body.error)) {
                        return resolve(responseWrapper);
                    } else {
                        return reject(responseWrapper);
                    }
                }, function(e) {
                    errorWrapper.error.message = e.message;
                    responseWrapper.body = errorWrapper;

                    return reject(responseWrapper);
                });
        });
    };
    /**
     * Gets list of  `Repository` objects
     * @method
     * @name artifactory#getRepositories
     * @param {string} type - Type of repository
     *
     */
    artifactory.prototype.getRepositories = function(parameters) {

        var _this = this;
        return new Promise(function(resolve, reject) {

            if (parameters === undefined) {
                parameters = {};
            }

            var domain = _this.domain;

            var path = '/repositories';

            var body;
            var queryParameters = {};
            var headers = {};
            var form = {};

            var responseWrapper = {
                response: {},
                body: {}
            };
            var errorWrapper = {
                error: {
                    error_code: 0, //TODO: Need to revisit the error code
                    message: ''
                }
            };

            if (parameters.hasOwnProperty('headers')) {

                headers = parameters['headers'];
            }

            if (parameters['type'] !== undefined) {
                queryParameters['type'] = parameters['type'];
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters)
                    .forEach(function(parameterName) {
                        var parameter = parameters.$queryParameters[parameterName];
                        queryParameters[parameterName] = parameter;
                    });
            }

            var config = {
                method: 'GET',
                baseURL: domain,
                url: path,
                params: queryParameters,
                headers: headers,
                data: body
            };
            if (Object.keys(form).length > 0) {
                config.form = form;
            }
            if (typeof(body) === 'object' && !(body instanceof Buffer)) {
                config.json = true;
            }

            axios(config)
                .then(function(response) {

                    // Handling API response. This is custom implementation for each client
                    responseWrapper = responseHandler(response, response.data);

                    if (responseWrapper.body && !(responseWrapper.body.error)) {
                        return resolve(responseWrapper);
                    } else {
                        return reject(responseWrapper);
                    }
                }, function(e) {
                    errorWrapper.error.message = e.message;
                    responseWrapper.body = errorWrapper;

                    return reject(responseWrapper);
                });
        });
    };

    /**
     * Response Handler code
     * @method
     * @name artifactory#responseHandler
     * @param {object} response - response object
     * @param {object} body - body object
     */
    function responseHandler(response, body) {

        if (response.statusCode >= 200 && response.statusCode <= 299) {

            if (body.error) {
                return {
                    response: response,
                    body: body
                };
            } else {
                return {
                    response: response,
                    body: body
                };
            }
        } else {
            return {
                response: response,
                body: body
            };
        }
    }

    return artifactory;
})();

exports.artifactory = artifactory;
