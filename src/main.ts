import { createApp } from 'vue'
import './style.css'
import { Amplify } from 'aws-amplify'
import App from './App.vue'

Amplify.configure({
  aws_appsync_graphqlEndpoint: '',
  aws_appsync_region: 'us-east-1',
  aws_appsync_authenticationType: 'AWS_IAM',

  Auth: {
    identityPoolId: '',
    region: 'us-east-1',
    userPoolId: '',
    userPoolWebClientId: '',
    mandatorySignIn: false,
  },
});

createApp(App).mount('#app')
