import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux'
import store from './store'
import { QueryClient, QueryClientProvider } from 'react-query';
import App from './index'
import { icons } from './asset/icons'

React.icons = icons;

const queryClient = new QueryClient();

ReactDOM.render(
    <Provider store={store}>
        <QueryClientProvider client={queryClient}>
            <App />
        </QueryClientProvider>
    </Provider>,
    document.getElementById('app')
);
