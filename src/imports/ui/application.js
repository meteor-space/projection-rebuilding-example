import React from 'react';
//import {container} from './components/container';

export default Space.Application.extend('BankApplication', {

  requiredModules: [
    'Space.messaging'
  ],

  onInitialize() {
    this.injector.map('React').to(React);
  }

});