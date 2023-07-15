import React, { useState } from 'react';
import OrderForm from './OrderForm';

const Order = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [total, setTotal] = useState('');
  const [size, setSize] = useState('');
  const [quantity, setQuantity] = useState(1);

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleSizeChange = (e) => {
    setSize(e.target.value);
    const calculatedTotal = calculateTotal(e.target.value, quantity);
    setTotal(calculatedTotal);
  };

  const handleQuantityChange = (e) => {
    setQuantity(parseInt(e.target.value));
    const calculatedTotal = calculateTotal(size, parseInt(e.target.value));
    setTotal(calculatedTotal);
  };

  const calculateTotal = (size, quantity) => {
    const prices = {
      small: 13,
      medium: 19,
      large: 23,
    };
    const tax = 0.075;
    const price = prices[size];
    const subtotal = price * quantity;
    const total = subtotal + subtotal * tax;
    return total.toFixed(2);
  };

  const handleReturn = () => {
    setIsSubmitted(false);
    setTotal('');
    setSize('');
    setQuantity(1);
  };

  const OrderDone = ({ total }) => {
    return (
      <div>
        <p>Thank you for your order! Total: ${total}</p>
        <button onClick={handleReturn} className="mt-4 bg-red-500 text-white rounded-md px-4 py-2 hover:bg-red-400">
          Return
        </button>
      </div>
    );
  };

  return (
    <div className="bg-[#faeada] min-h-screen flex items-center justify-center rounded-3xl">
      <div className="relative">
        <h1 className={`text-3xl font-bold mb-4 inline-block py-2 px-4 rounded-full ${isSubmitted ? 'text-white bg-red-500' : 'text-white bg-gray-800'}`}>
          Get 'em while it's hot!
        </h1>
        <div className={`absolute top-0 left-0 bg-${isSubmitted ? 'green' : 'white'}-300 rounded-full p-1`}></div>
        <div className="max-w-[1152px] w-full px-8">
          <div className={`bg-opacity-75 bg-white rounded-lg border-2 border-opacity-75 border-gray-500 p-6 ${isSubmitted ? 'bg-green-100 border-green-500' : ''}`}>
            {isSubmitted ? (
              <OrderDone total={total} />
            ) : (
              <OrderForm
                handlePlaceOrder={handlePlaceOrder}
                handleSizeChange={handleSizeChange}
                handleQuantityChange={handleQuantityChange}
                size={size}
                quantity={quantity}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
