import { BrowserRouter } from "react-router-dom";

import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import { ConnectedRouter } from 'connected-react-router';
// import { history } from './app/store'
import App from './App';
import { createBrowserHistory } from 'history'

const container = document.getElementById('root')!;
const root = createRoot(container);

const history = createBrowserHistory()

root.render(
  <Provider store={store}>
    <App />

    {/* <BrowserRouter>
      <App />
    </BrowserRouter> */}
  </Provider>
);