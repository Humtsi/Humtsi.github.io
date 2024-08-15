import ReactDOM from 'react-dom/client'
import Router from './components/Router'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

library.add(faArrowRight);

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <Router/>
)