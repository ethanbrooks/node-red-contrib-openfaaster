
openfaas
.compose('initial data', [
    'func_nodeinfo',
    'func_echoit',
    'func_wordcount'
])
.then(x => console.log(x.body)) // handle final output
.catch(err => console.log(err))