import React, { useState } from 'react';

const Order = () => {
  const [size, setSize] = useState('small');
  const [pizza, setPizza] = useState('Wild Mushroom Delight');
  const [quantity, setQuantity] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [total, setTotal] = useState('');

  const sizes = ['small', 'medium', 'large'];
  const pizzas = [
    'Wild Mushroom Delight',
    'Good Ol\' Margherita',
    'Tasty BBQ Chicken',
    'Wild & Spicy Diavolo',
    'Goodness of the Mediterranean',
    'Tasty Veggie Supreme'
  ];
  const prices = {
    small: 13,
    medium: 19,
    large: 23
  };
  const tax = 0.075;

  const handleSizeChange = (e) => {
    setSize(e.target.value);
  };

  const handlePizzaChange = (e) => {
    setPizza(e.target.value);
  };

  const handleQuantityChange = (e) => {
    setQuantity(parseInt(e.target.value));
  };

  const calculateTotal = () => {
    const price = prices[size];
    const subtotal = price * quantity;
    const total = subtotal + (subtotal * tax);
    return total.toFixed(2);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const total = calculateTotal();
    setTotal(total);
    setIsSubmitted(true);
    setSize('small');
    setPizza('Wild Mushroom Delight');
    setQuantity(1);
  };

  return (
    <div className="max-w-[1152px]">
      <div className="bg-[#faeada] w-full sm:max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-5xl 2xl:max-w-6xl py-2 rounded-3xl">
        <div className="p-6">
          <form onSubmit={handleSubmit}>
            <div className="pd-4 text-left">
              <label htmlFor="size" className="pr-2">Size:</label>
              <select id="size" value={size} onChange={handleSizeChange} className="border border-gray-400 rounded">
                {sizes.map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </div>
            <div className="pd-4 text-left">
              <label htmlFor="pizza" className="pr-2">Pizza:</label>
              <select id="pizza" value={pizza} onChange={handlePizzaChange} className="border border-gray-400 rounded">
                {pizzas.map((p) => (
                  <option key={p} value={p}>{p}</option>
                ))}
              </select>
            </div>
            <div className="pd-4 text-left">
              <label htmlFor="quantity" className="pr-2">Quantity:</label>
              <input
                type="number"
                id="quantity"
                min="1"
                value={quantity}
                onChange={handleQuantityChange}
                className="border border-gray-400 rounded"
              />
            </div>
            {isSubmitted ? (
              <div>
                <p>Thank you for your order! Total: ${total}</p>
              </div>
            ) : (
              <div>
                <p className="mb-2">Total: ${calculateTotal()}</p>
              </div>
            )}
            {!isSubmitted && (
              <div>
                <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Place Order</button>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
  // plans for shopify intagration is on its way.
}

export default Order;
