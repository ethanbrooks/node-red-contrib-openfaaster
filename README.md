https://flows.nodered.org/node/node-red-contrib-git-nodes

https://github.com/mkjiau/xtermjs-dockerode-expressjs-socket


https://xtermjs.org/




docker service update docker-Traefik_whoami --container-label-add "test=cool"


# node-red-contrib-dockerode


{"TaskTemplate": {
"ContainerSpec": {
    Labels


This Node RED module connects Docker with Node-RED.

> Node-RED is a tool for wiring together hardware devices, APIs and online services in new and interesting ways.

If you like it, please consider:

[![ko-fi](https://www.ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/T6T412CXA)
<br><a target="blank" href="https://brave.com/nai412"><img src="./examples/support_banner.png"/></a>
<br><a target="blank" href="https://paypal.me/NeumannBenjamin"><img src="https://img.shields.io/badge/Donate-PayPal-blue.svg"/></a>
<br><a target="blank" href="https://blockchain.info/payment_request?address=3KDjCmXsGFYawmycXRsVwfFbphog117N8P"><img src="https://img.shields.io/badge/Donate-Bitcoin-green.svg"/></a> 

## Getting started

First of all install [Node-RED](http://nodered.org/docs/getting-started/installation)

## Develop

* git clone https://github.com/naimo84/node-red-contrib-dockerode.git
* cd node-red-contrib-dockerode
* npm install
* gulp
* cd ~/.node-red 
* npm install /path/to/node-red-contrib-dockerode

<img src="https://img.shields.io/npm/dy/node-red-contrib-dockerode?style=for-the-badge"/>

## Usage

### Configuration:

#### docker.sock

- ***Using Node-RED in a Docker-Container***

The Node-RED container must have access to the docker.sock, so you have to add the docker-group ID to the container with <pre>docker run ... --group-add 250</pre> the ID 250 may be different on your system.

#### Exposing TCP-Daemon port

- ***hostname*** hostname of docker (e.g. "localhost")
- ***port*** port of docker (e.g. "2375")

In order to expose the docker-engine TCP daemon, you have to do the following:

- ***Docker for Windows / Docker Desktop:*** 
<br>Under Settings / General check "Expose daemon on tcp://localhost:2375 without TLS"

![DockerWindowsSettings.png](https://github.com/naimo84/node-red-contrib-dockerode/raw/master/examples/DockerWindowsSettings.png)

- ***Docker-CE***

See https://success.docker.com/article/how-do-i-enable-the-remote-api-for-dockerd

or: 

```
# File: /etc/default/docker
# Use DOCKER_OPTS to modify the daemon startup options.
#DOCKER_OPTS=""
DOCKER_OPTS="-H tcp://127.0.0.1:2375 -H unix:///var/run/docker.sock"
```

or: 

```
# File: /lib/systemd/system/docker.service
ExecStart=/usr/bin/docker daemon -H fd:// -H tcp://0.0.0.0:2375
```





## The MIT License
Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

Coded with :heart: in :it:
# node-red-contrib-openfaaster
