import React from 'react';

export default Space.Application.extend('Application', {

  requiredModules: [
    'Space.messaging'
  ],

  onInitialize() {
    this.injector.map('React').to(React)
  }

});