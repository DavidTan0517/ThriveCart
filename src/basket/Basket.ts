// src/basket/Basket.ts

import { Product } from './types';

export class Basket {
  private items: string[] = [];

  constructor(private catalogue: Record<string, Product>) {}

  add(productCode: string): void {
    if (!this.catalogue[productCode]) {
      throw new Error(`Invalid product code: ${productCode}`);
    }
    this.items.push(productCode);
  }

  clear(): void {
    this.items = [];
  }

  private calculateSubtotal(): number {
    return this.items.reduce(
      (sum, code) => sum + this.catalogue[code].price,
      0
    );
  }

  private calculateDiscount(): number {
    const redWidgets = this.items.filter(i => i === 'R01').length;
    const discounts = Math.floor(redWidgets / 2);
    return discounts * (this.catalogue['R01'].price / 2);
  }

  private deliveryCost(subtotal: number): number {
    if (subtotal === 0) return 0;
    if (subtotal >= 90) return 0;
    if (subtotal >= 50) return 2.95;
    return 4.95;
  }

  getBreakdown() {
    const subtotal = this.calculateSubtotal();
    const discount = this.calculateDiscount();
    const discountedSubtotal = subtotal - discount;
    const delivery = this.deliveryCost(discountedSubtotal);

    return {
      subtotal,
      discount,
      delivery,
      total: parseFloat((discountedSubtotal + delivery).toFixed(2))
    };
  }

  total(): number {
    return this.getBreakdown().total;
  }

  getItems(): string[] {
    return [...this.items];
  }
}
