import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// GitHub Pages serves /404.html for unknown client routes.
// If we were redirected with ?p=/some/path, restore the original route.
const redirectPath = new URL(window.location.href).searchParams.get('p');
if (redirectPath) {
  window.history.replaceState(null, '', redirectPath + window.location.hash);
}

createRoot(document.getElementById('root')!).render(
  <App />
);
