// src/components/BasketUI.tsx

import { Basket } from '../basket/Basket';
import { catalogue } from '../data/catalogue';

interface Props {
  basket: Basket;
  refresh: () => void;
}

export function BasketUI({ basket, refresh }: Props) {
  const breakdown = basket.getBreakdown();

  return (
    <div className="basket">
      <h2>Products</h2>

      <div className="products">
        {Object.values(catalogue).map(product => (
          <button
            key={product.code}
            onClick={() => {
              basket.add(product.code);
              refresh();
            }}
          >
            <strong>{product.name}</strong>
            <span>${product.price}</span>
          </button>
        ))}
      </div>

      <h2>Basket</h2>
      <ul>
        {basket.getItems().map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>

      <div className="summary">
        <p>Subtotal: ${breakdown.subtotal.toFixed(2)}</p>
        <p>Discount: -${breakdown.discount.toFixed(2)}</p>
        <p>Delivery: ${breakdown.delivery.toFixed(2)}</p>
        <hr />
        <strong>Total: ${breakdown.total.toFixed(2)}</strong>
      </div>

      <button
        className="clear"
        onClick={() => {
          basket.clear();
          refresh();
        }}
      >
        Clear basket
      </button>
    </div>
  );
}
