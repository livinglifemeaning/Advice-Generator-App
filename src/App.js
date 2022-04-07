import { useState, useEffect } from "react";
import dividerMobile from "./images/pattern-divider-mobile.svg";
import dividerDesktop from "./images/pattern-divider-desktop.svg";
import Button from "./components/Button";

function App() {
  const [advice, getAdvice] = useState('');
  const [id, getId] = useState(''); 

  useEffect(() => {
    const fetchAdvice = async () => {
      const res = await fetch("https://api.adviceslip.com/advice");
      const data = await res.json();
      getAdvice(data.slip.advice); 
      getId(data.slip.id); 
    };

    fetchAdvice(); 
  }, []);

  
  const getNewAdvice = async () => {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    getAdvice(data.slip.advice); 
    getId(data.slip.id); 
  }

  

  return (
    <div className="container">
      <p className="advice-number">Advice #{id}</p>
      <p className="advice-text"> "{advice}"</p>
      <div className="divider">
        <picture>
          <source media="(min-width: 500px)" srcSet={dividerDesktop} />
          <img src={dividerMobile} alt="divider" />
        </picture>
      </div>
      <Button onClick={getNewAdvice} />
    </div>
  );
}

export default App;
