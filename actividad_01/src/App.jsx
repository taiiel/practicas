import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';

// 1 forma - cambio el contenido con los 2 primeros botones, cambio el color con el 3ro
/*
function App() {
  const [content, setContent] = useState('');
  const [backColor, setBackColor] = useState('blue');

  const showFirstContent = () => {
    setContent('first content');
  };

  const showSecondContent = () => {
    setContent('second content');
  };

  const changeBackgroundColor = () => {
    if (backColor === 'blue') {
      setBackColor('red');
    } else {
      setBackColor('blue');
    }
  };

  return (
    <main className="mainContent">
      <div>
        <button className="buttons" onClick={showFirstContent}>
          Button 1
        </button>
        <button className="buttons" onClick={showSecondContent}>
          Button 2
        </button>
        <button className="buttons" onClick={changeBackgroundColor}>
          Button 3
        </button>
      </div>
      <div className={backColor}>{content}</div>
    </main>
  );
}

export default App;
*/

// 2 forma - tengo un booleano para indicar que mostrar

function App() {
  const [showText, setShowText] = useState(true);
  const [backColor, setBackColor] = useState('blue');

  const showFirstContent = () => {
    setShowText(true);
  };

  const showSecondContent = () => {
    setShowText(false);
  };

  const changeBackgroundColor = () => {
    if (backColor === 'blue') {
      setBackColor('red');
    } else {
      setBackColor('blue');
    }
  };

  return (
    <main className="mainContent">
      <div>
        <button className="buttons" onClick={showFirstContent}>
          Button 1
        </button>
        <button className="buttons" onClick={showSecondContent}>
          Button 2
        </button>
        <button className="buttons" onClick={changeBackgroundColor}>
          Button 3
        </button>
      </div>
      <div className={backColor}>
        {showText ? <p> Hola mundo! </p> : <img src={reactLogo} />}
      </div>
    </main>
  );
}

export default App;
