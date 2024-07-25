/**
 * @format
 */

import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';

import { name as appName } from './app.json';
import App from './src/screens/App';
import { store } from './src/store/store';

const Root = () => {
    return (
        <Provider store={store}>
            <App />
        </Provider>
    );
};

AppRegistry.registerComponent(appName, () => Root);
