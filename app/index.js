import React from 'react';
import { Provider } from 'react-redux';

import RootNavigation from './components/Navigation/Root';
import Store from './redux';

export const App = () => (
    <Provider store={Store}>
        <RootNavigation />
    </Provider>
);
