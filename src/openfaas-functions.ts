import { Red } from 'node-red';
import { OpenFaaSConfiguration } from './openfaas-configuration';

module.exports = function (RED: Red) {

    function OpenFaaSFunctions(n) {
        RED.nodes.createNode(this, n);
        console.log(n.config);
        let config = (RED.nodes.getNode(n.config) as unknown as OpenFaaSConfiguration);
        if (!config) {
            this.status({ fill: "red", shape: "ring", text: "no configuration" });
            return;
        }
        let client = config.getClient();

        this.on('input', (msg) => {

/*
            openfaas
            .list({
                json: true
            })
            .then(x => console.log(x)) // handle response
            .catch(err => console.log(err))
*/
            client.listFunctions({ all: false })
                .then(functions => {
                    this.send(Object.assign(msg, { payload: functions }));
                })
                .catch(err => {
                    this.send({ payload: {} })
                    this.error(err)
                });

        });
    }

    RED.httpAdmin.post("/functionSearch", function (req, res) {
        RED.log.debug("POST /functionSearch");
        const nodeId = req.body.id;
        let config = RED.nodes.getNode(nodeId);

        discoverSonos(config, (functions) => {
            RED.log.debug("GET /functionSearch: " + functions.length + " found");
            res.json(functions);
        });
    });

    function discoverSonos(config, discoveryCallback) {
        let client = config.getClient();
        client.listFunctions({ all: false })
            .then(functions => discoveryCallback(functions))
            .catch(err => this.error(err));
    }

    RED.nodes.registerType('openfaas-functions', OpenFaaSFunctions);
}

