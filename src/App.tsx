import { useState } from 'react';
import './App.css';

import FancyButton from './Components/UI/FancyButton/FancyButton';
import FancyTabSwitch from './Components/UI/FancyTabSwitch/FancyTabSwitch';
import FancyInput from './Components/UI/FancyInput/FancyInput';
import FancyInputV2 from './Components/UI/FancyInputV2/FancyInputV2';
import FancyAdvancedInput from './Components/UI/FancyAdvancedInput/FancyAdvancedInput';

const Icon = (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm11.666 1.89c.682 0 1.139.47 1.187 1.107H14v-.11c-.053-1.187-1.024-2-2.342-2-1.604 0-2.518 1.05-2.518 2.751v.747c0 1.7.905 2.73 2.518 2.73 1.314 0 2.285-.792 2.342-1.939v-.114h-1.147c-.048.615-.497 1.05-1.187 1.05-.839 0-1.318-.62-1.318-1.727v-.742c0-1.112.488-1.754 1.318-1.754zm-6.188.926h.044L6.542 11h1.006L9 5.001H7.818l-.82 4.355h-.056L5.97 5.001h-.94l-.972 4.355h-.053l-.827-4.355H2L3.452 11h1.005l1.02-4.184z"/>
  </svg>
  );




const switchValues = [
  {
    label: 'Test1',
    key: '1',
    icon: Icon,
  },
  {
    label: 'test2',
    key: '2',
    icon: Icon,
  },
  {
    label: 'test3',
    key: '3',
    icon: Icon,
  },

]

function App() {
  const [activated, setActivated] = useState(false)

  const buttonSwitch = () => {
    setActivated(!activated)
  }

  return (
    <div className="App">
      <FancyInputV2 textColor='dark' align='left'  label='Test'/>
    </div>
  );
}

export default App;