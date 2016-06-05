'use strict';

var Promise = require('promise');

var RestClient = function(path) {
    this.path = path;
}

var EntityManager = function(path, scope, entityName) {
    this.path = path;
    this.scope = scope;
    this.entityName = entityName;
}

function toQueryString(obj) {
    var parts = [];
    for (var i in obj) {
        if (obj.hasOwnProperty(i)) {
            parts.push(encodeURIComponent(i) + "=" + encodeURIComponent(obj[i]));
        }
    }
    return parts.join("&");
}

EntityManager.prototype.retrieve = function(entityId) {
    let url = this.path + "/" + this.scope + "/" + this.entityName + "/" + entityId;

    return new Promise(function(resolve, reject) {
        var httpRequest = new XMLHttpRequest();
        httpRequest.addEventListener("load", function(){
            let status = httpRequest.status;
            let response = httpRequest.response;

            if (this.status >= 200 && this.status < 300) {
                resolve(response);
            } else {
                reject({status: status, error: response});
            }
        });
        httpRequest.open("GET", url);
        httpRequest.send();
    });
}

EntityManager.prototype.find = function(entityQuery) {
    let url = this.path + "/" + this.scope + "/" + this.entityName;
    let queryString = toQueryString(entityQuery);

    return new Promise(function(resolve, reject) {
        var httpRequest = new XMLHttpRequest();
        httpRequest.addEventListener("load", function(){
            let status = httpRequest.status;
            let response = httpRequest.response;

            if (this.status >= 200 && this.status < 300) {
                resolve(response);
            } else {
                reject({status: status, error: response});
            }
        });
        httpRequest.open("GET", url + "?" + queryString);
        httpRequest.send();
    });
}

EntityManager.prototype.query = function(queryBy, entityQuery) {
    let url = this.path + "/" + this.scope + "/" + this.entityName + "/query/" + queryBy;
    let queryString = toQueryString(entityQuery);

    return new Promise(function(resolve, reject) {
        var httpRequest = new XMLHttpRequest();
        httpRequest.addEventListener("load", function(){
            let status = httpRequest.status;
            let response = httpRequest.response;

            if (this.status >= 200 && this.status < 300) {
                resolve(response);
            } else {
                reject({status: status, error: response});
            }
        });

        httpRequest.open("GET", url + "?" + queryString);
        httpRequest.send();
    });
}

EntityManager.prototype.save = function(entity) {
    let url = this.path + "/" + this.scope + "/" + this.entityName;

    return new Promise(function(resolve, reject) {
        var httpRequest = new XMLHttpRequest();
        httpRequest.addEventListener("load", function(){
            let status = httpRequest.status;
            let response = httpRequest.response;

            if (this.status >= 200 && this.status < 300) {
                resolve(response);
            } else {
                reject({status: status, error: response});
            }
        });

        httpRequest.open("POST", url);
        httpRequest.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        httpRequest.send(JSON.stringify(entity));
    });
}

EntityManager.prototype.invoke = function(entityId, operation) {
    let url = this.path + "/" + this.scope + "/" + this.entityName + "/" + entityId + "/" + operation;
    var args = arguments.length >= 3 ? Array.from(arguments).slice(3) : [];

    return new Promise(function(resolve, reject) {
        var httpRequest = new XMLHttpRequest();
        httpRequest.addEventListener("load", function(){
            let status = httpRequest.status;
            let response = httpRequest.response;

            if (this.status >= 200 && this.status < 300) {
                resolve(response);
            } else {
                reject({status: status, error: response});
            }
        });

        httpRequest.open("POST", url);
        httpRequest.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        httpRequest.send(JSON.stringify(args));
    });
}

EntityManager.prototype.update = function(entityId, entity) {
    let url = this.path + "/" + this.scope + "/" + this.entityName + "/" + entityId;

    return new Promise(function(resolve, reject) {
        var httpRequest = new XMLHttpRequest();
        httpRequest.addEventListener("load", function(){
            let status = httpRequest.status;
            let response = httpRequest.response;

            if (this.status >= 200 && this.status < 300) {
                resolve(response);
            } else {
                reject({status: status, error: response});
            }
        });

        httpRequest.open("PUT", url);
        httpRequest.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        httpRequest.send(JSON.stringify(entity));
    });
}

EntityManager.prototype.remove = function(entityId) {
    let url = this.path + "/" + this.scope + "/" + this.entityName + "/" + entityId;

    return new Promise(function(resolve, reject) {
        var httpRequest = new XMLHttpRequest();
        httpRequest.addEventListener("load", function(){
            let status = httpRequest.status;
            let response = httpRequest.response;

            if (this.status >= 200 && this.status < 300) {
                resolve(response);
            } else {
                reject({status: status, error: response});
            }
        });

        httpRequest.open("DELETE", url);
        httpRequest.send();
    });
}

RestClient.prototype.getManager = function(scope, entityName) {
    return new EntityManager(this.path, scope, entityName);
}

module.exports = RestClient;
