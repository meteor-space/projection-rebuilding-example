import React from 'react';
import AddSimulation from '../containers/add-simulation';
import RemoveSimulation from '../containers/remove-simulation';
import RandomTransaction from '../containers/random-transactions';
import NumberOfSimulationsAvatar from '../containers/number-of-simulations-avatar';

import { Card, CardHeader, CardMedia } from 'material-ui/Card';

const Simulations = () => (

  <Card style={{marginBottom: '20px'}}>
    <CardHeader title="Simulations"
                subtitle="Trigger transactions in random intervals"
                avatar={<NumberOfSimulationsAvatar />}
    >
      <div style={{float: 'right', marginLeft: '10px'}}><AddSimulation /></div>
      <div style={{float: 'right'}}><RemoveSimulation /></div>
    </CardHeader>

    <CardMedia>
      <RandomTransaction />
    </CardMedia>
  </Card>

);

export default Simulations;
