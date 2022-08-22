# Vue 3 (Vite) Amplify Build Issue

1. `yarn install`
1. `yarn build`

Result:

```
'request' is not exported by __vite-browser-external, imported by node_modules/@aws-sdk/credential-provider-node/node_modules/@aws-sdk/credential-provider-imds/dist/es/remoteProvider/httpRequest.js
file: /Users/samh/Code/repro-vite-amplify/node_modules/@aws-sdk/credential-provider-node/node_modules/@aws-sdk/credential-provider-imds/dist/es/remoteProvider/httpRequest.js:4:9
2: import { ProviderError } from "@aws-sdk/property-provider";
3: import { Buffer } from "buffer";
4: import { request } from "http";
            ^
5: /**
6:  * @internal
error during build:
Error: 'request' is not exported by __vite-browser-external, imported by node_modules/@aws-sdk/credential-provider-node/node_modules/@aws-sdk/credential-provider-imds/dist/es/remoteProvider/httpRequest.js
    at error (file:///Users/samh/Code/repro-vite-amplify/node_modules/rollup/dist/es/shared/rollup.js:1858:30)
    at Module.error (file:///Users/samh/Code/repro-vite-amplify/node_modules/rollup/dist/es/shared/rollup.js:12412:16)
    at Module.traceVariable (file:///Users/samh/Code/repro-vite-amplify/node_modules/rollup/dist/es/shared/rollup.js:12771:29)
    at ModuleScope.findVariable (file:///Users/samh/Code/repro-vite-amplify/node_modules/rollup/dist/es/shared/rollup.js:11423:39)
    at FunctionScope.findVariable (file:///Users/samh/Code/repro-vite-amplify/node_modules/rollup/dist/es/shared/rollup.js:6355:38)
    at ChildScope.findVariable (file:///Users/samh/Code/repro-vite-amplify/node_modules/rollup/dist/es/shared/rollup.js:6355:38)
    at FunctionScope.findVariable (file:///Users/samh/Code/repro-vite-amplify/node_modules/rollup/dist/es/shared/rollup.js:6355:38)
    at ChildScope.findVariable (file:///Users/samh/Code/repro-vite-amplify/node_modules/rollup/dist/es/shared/rollup.js:6355:38)
    at Identifier.bind (file:///Users/samh/Code/repro-vite-amplify/node_modules/rollup/dist/es/shared/rollup.js:7422:40)
    at CallExpression.bind (file:///Users/samh/Code/repro-vite-amplify/node_modules/rollup/dist/es/shared/rollup.js:5252:23)
  ```
  