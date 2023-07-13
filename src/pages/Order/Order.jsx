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

  const OrderDone = ({ total }) => {
    return (
      <div>
        <p>Thank you for your order! Total: ${total}</p>
      </div>
    );
  };

  return (
    <div className="max-w-[1152px]">
      <div className="bg-[#faeada] w-full sm:max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-5xl 2xl:max-w-6xl py-2 rounded-3xl">
        <div className="p-6">
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
  );
};

export default Order;
