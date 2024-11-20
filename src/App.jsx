import { createSignal, createEffect, onCleanup } from 'solid-js'

import './App.css'

function App() {
  const [pet, setPet] = createSignal('🥚');
  const [hunger, setHunger] = createSignal(20);
  const [boredom, setBoredom] = createSignal(20);
  const [energy, setEnergy] = createSignal(100);
  const [age, setAge] = createSignal(0);
  const [isAlive, setIsAlive] = createSignal(true);
  const [message, setMessage] = createSignal('Take care of your pet!');

  createEffect(() => {
    const intervalId = setInterval(() => {
      if (isAlive()) {
        setHunger(prev => Math.min(100, prev + 1));
        setBoredom(prev => Math.min(100, prev + 1));
        setEnergy(prev => Math.max(0, prev - 1));
        setAge(prev => + 1);
        updatePetState();
      }
    }, 2000)

    onCleanup(() => clearInterval(intervalId))
  });

  const updatePetState = () => {
    if (hunger() >= 100 || boredom() >= 100 || energy() <= 0) {
      setIsAlive(false);
      setPet('👻')
      setMessage('Your pet has passed away. Please refresh to start over');
    } else if (age() === 10 && pet() === '🥚') {
      
      setPet('🐣')
      setMessage('Your pet has hatched!')
    } else if (age() === 30 && pet() === '🐣') {
      setPet('🐥')
      setMessage('Your pet has grown!, congratulations!')
    }
  }


  return (
    <div >
      
    </div>
  )
}

export default App;