import React from 'react';
import { CalendarSetupForm } from './components/ContactForm.tsx';

const App: React.FC = () => {
  return (
    <main className="min-h-screen w-full bg-gradient-to-br from-slate-900 to-slate-800 text-white font-sans flex flex-col items-center justify-center p-4 selection:bg-cyan-500 selection:text-white">
      <div className="w-full max-w-4xl">
        <CalendarSetupForm />
      </div>
    </main>
  );
};

export default App;
