// in src/Foo.js
import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Title } from 'react-admin';

const test = (props) => (
  <Card {...props}>
    <Title title="My Page" />
    <CardContent>...</CardContent>
  </Card>
);

export default test;
