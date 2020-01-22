import * as OpenFaaS from 'openfaas';

OpenFaaS
.remove('yolo')
.then(x => console.log(x)) // handle response
.catch(err => console.log(err))