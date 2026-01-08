import { describe, it, expect } from 'vitest';
import { Basket } from './Basket';
import { catalogue } from '../data/catalogue';

describe('Basket pricing logic', () => {
  it('returns 0 total for empty basket', () => {
    const basket = new Basket(catalogue);
    expect(basket.total()).toBe(0);
  });

  it('applies red widget offer correctly', () => {
    const basket = new Basket(catalogue);
    basket.add('R01');
    basket.add('R01');

    const breakdown = basket.getBreakdown();

    expect(breakdown.subtotal).toBe(65.9);
    expect(breakdown.discount).toBe(16.475);
    expect(breakdown.total).toBe(54.37);
  });

  it('applies correct delivery under $50', () => {
    const basket = new Basket(catalogue);
    basket.add('B01');
    basket.add('G01');

    const breakdown = basket.getBreakdown();

    expect(breakdown.delivery).toBe(4.95);
    expect(breakdown.total).toBe(37.85);
  });

  it('gives free delivery over $90', () => {
    const basket = new Basket(catalogue);
    basket.add('B01');
    basket.add('B01');
    basket.add('R01');
    basket.add('R01');
    basket.add('R01');

    const breakdown = basket.getBreakdown();

    expect(breakdown.delivery).toBe(0);
    expect(breakdown.total).toBe(98.27);
  });

  it('clears the basket', () => {
    const basket = new Basket(catalogue);
    basket.add('R01');
    basket.clear();

    expect(basket.total()).toBe(0);
    expect(basket.getItems().length).toBe(0);
  });
});
