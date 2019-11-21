/** 
Copyright 2018 Keyhole Software LLC

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

// Authenticate Types -  none, session, token

module.exports = {
    loglevel: process.env.LOGLEVEL || "all",
    port: process.env.PORT || 9090,
    host: process.env.HOST || "localhost",
    wallet_path: process.env.KEYSTORE || "app/hfc-key-store",
    user_id: process.env.USERID || "PeerAdmin",
    orderer_url: process.env.ORDERER_URL || "grpc://localhost:7050",
    network_url: process.env.NETWORK_URL || "grpc://localhost:7051",
    event_url: process.env.EVENT_URL || "grpc://localhost:7052",
    authenticate: process.env.AUTHENTICATE || true,
    authhandler: process.env.AUTHHANDLER || "./authentication/exampleAuthHandler.js",
    authvalidator: process.env.AUTHVALIDTOR || "./authentication/tokenValidator.js"


}