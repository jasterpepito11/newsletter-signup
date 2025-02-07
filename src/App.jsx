import { useState, createContext } from 'react';
import './App.css';
import Notification from './components/Notification';
import Panel from './components/Panel';

export const FormStatusContext = createContext({
  formStatus: false,
  setFormStatus: () => { }
});

export const EmailContext = createContext(null);

function App() {
  const [formStatus, setFormStatus] = useState(false);
  const [email, setEmail] = useState('');

  return (
    <FormStatusContext.Provider value={{ formStatus, setFormStatus }}>
      <EmailContext.Provider value={{email, setEmail}}>
        <section className='card'>
          {formStatus ?
            <Notification /> :
            <Panel />
          }
        </section>
      </EmailContext.Provider>
    </FormStatusContext.Provider>
  )
}

export default App;
