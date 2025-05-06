import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './index.css'; 

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
       <audio controls>
        <source src="/OnSight.mp3" type="audio/mpeg" />
      </audio>
    </div>
  );
}

export default App;