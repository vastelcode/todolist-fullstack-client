import { createRoot } from 'react-dom/client'
import App from '@/app/App';
import { StoreProvider } from './app/providers/StoreProvider.tsx';
import { ThemeProvider } from './app/providers/ThemeProvider.tsx';

createRoot(document.getElementById('root')!).render(
  <StoreProvider>
    <ThemeProvider>
      <App/>
    </ThemeProvider>
  </StoreProvider>
)
