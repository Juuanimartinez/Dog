import { createStore } from 'redux';
import reducer from './reducer';

const store = createStore(
  reducer,
  // Agrego la siguiente línea si deseo habilitar Redux DevTools en el navegador
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;