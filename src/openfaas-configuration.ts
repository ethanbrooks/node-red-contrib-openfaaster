import { Red } from 'node-red';
import * as OpenFaaS from 'openfaas';

export interface OpenFaaSConfiguration {
    host: string,
    port: number, action: string,
    container: string
    options: any,
    getClient(): OpenFaaS
}

module.exports = function (RED: Red) {


    function OpenFaaSConfiguration(n) {
        RED.nodes.createNode(this, n);

        let node: OpenFaaSConfiguration = this;
        node.host = n.host;
        node.port = n.port;
        node.options = n.options;

        let openfaasopt = {};

        if (node.host.includes("openfaas.sock")) {
            openfaasopt = {
                socketPath: node.host
            }
        } else {
            openfaasopt = {
                host: node.host,
                port: node.port
            }
        }
        node.getClient = (): OpenFaaS => {
            return new OpenFaaS(openfaasopt);
        };
    }
    RED.nodes.registerType("openfaas-configuration", OpenFaaSConfiguration);

}

