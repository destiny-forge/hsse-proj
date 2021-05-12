import React from 'react';
import { SiteConsumer } from './SiteContext';

const Context = (BaseComponent) => (props) => (
  <SiteConsumer>
    {({ site }) => <BaseComponent {...props} site={site} />}
  </SiteConsumer>
);

export default Context;
