
import { RouterApp } from './providers/RouterProvider.tsx';
import '@/app/styles/tailwind.css';
import '@/app/styles/main.scss';

import { ScrollLock } from '@/features/scroll-lock/index.ts';

function App() {

  return (
    <>
    <ScrollLock/>
    <RouterApp/>
    </>
  )
}

export default App;
