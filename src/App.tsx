import { useState } from 'react';
import { Basket } from './basket/Basket';
import { catalogue } from './data/catalogue';
import { BasketUI } from './components/BasketUI';

const basket = new Basket(catalogue);

function App() {
  const [, setTick] = useState(0);

  return (
    <div className="container">
      <h1>Acme Widget Co</h1>
      <BasketUI
        basket={basket}
        refresh={() => setTick(t => t + 1)}
      />
    </div>
  );
}

export default App;
