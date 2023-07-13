import React, { useState } from 'react';

const OrderForm = ({ handlePlaceOrder, handleSizeChange, handleQuantityChange, size, quantity }) => {
  const [pizza, setPizza] = useState('');
  const sizes = [
    { size: 'small', price: 13 },
    { size: 'medium', price: 19 },
    { size: 'large', price: 23 },
  ];

  const pizzas = [
    'Select pizza',
    'Wild Mushroom Delight',
    'Good Ol\' Margherita',
    'Tasty BBQ Chicken',
    'Wild & Spicy Diavolo',
    'Goodness of the Mediterranean',
    'Tasty Veggie Supreme'
  ];

  const handlePizzaChange = (e) => {
    setPizza(e.target.value);
  };

  const calculateTotal = () => {
    const selectedSize = sizes.find((s) => s.size === size);

    if (!selectedSize) {
      return 0;
    }

    const price = selectedSize.price;
    const subtotal = price * quantity;
    const tax = 0.075;
    const total = subtotal + subtotal * tax;
    return total.toFixed(2);
  };

  return (
    <form onSubmit={handlePlaceOrder}>
      <div className="flex flex-col items-center">
        <div className="w-64">
          <div className="pb-4 text-left">
            <label htmlFor="size" className="pr-2">
              Size:
            </label>
            <select
              id="size"
              value={size}
              onChange={handleSizeChange}
              className="border border-gray-400 rounded w-full px-4 py-2"
            >
              <option value="">Select size</option>
              {sizes.map((s) => (
                <option key={s.size} value={s.size}>
                  {s.size} - ${s.price}
                </option>
              ))}
            </select>
          </div>
          <div className="pb-4 text-left">
            <label htmlFor="pizza" className="pr-2">
              Pizza:
            </label>
            <select
              id="pizza"
              value={pizza}
              onChange={handlePizzaChange}
              className="border border-gray-400 rounded w-full px-4 py-2"
            >
              {pizzas.map((p) => (
                <option key={p} value={p}>
                  {p}
                </option>
              ))}
            </select>
          </div>
          <div className="pb-4 text-left">
            <label htmlFor="quantity" className="pr-2">
              Quantity:
            </label>
            <input
              type="number"
              id="quantity"
              min="1"
              value={quantity}
              onChange={handleQuantityChange}
              className="border border-gray-400 rounded w-full px-4 py-2"
            />
          </div>
          <div>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 w-full"
              disabled={!size || !pizza || !quantity}
            >
              Place Order
            </button>
          </div>
          <div className="pt-4 text-left">
            Total: ${calculateTotal()}
          </div>
        </div>
      </div>
    </form>
  );
};

export default OrderForm;
