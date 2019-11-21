'use strict';
/** 
Copyright 2019 Keyhole Labs LLC

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

var log4js = require('log4js');
var logger = log4js.getLogger('app/exampleAuthhandler.js');
var appconfig = require('../config.js');
logger.setLevel(appconfig.loglevel);


var handle = function (request,response) {

    var user = { userid: "testuserid" };

   // session({ user: user })
    request.session.user = user;

    logger.info("User session created");

    response.status(200);
    response.send("Authenticated")

};

exports.handle = handle;
