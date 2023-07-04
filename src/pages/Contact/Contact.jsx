import { useState } from "react";

import ganggang from './../../assets/images/ganggang.png'

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const scriptURL = 'https://script.google.com/macros/s/AKfycbznHlZPwfTva4WTy2xjMJ2Mtpq-Gy59dyEFJLCMHqrxBmhKRyVmdycLcxUDE86o7iH-Xg/exec'
    const form = e.target;

    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
      .then(response => console.log('Success!', response))
      .catch(error => console.error('Error!', error.message));

    setIsSubmitted(true);
  };

  return (
    <div className="bg-[#faeada] w-full sm:max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-5xl 2xl:max-w-6xl px-8 py-4 rounded-3xl">
      <div className="bg-[#faeada] px-8 py-4">
        <div className="grid grid-cols">
          <div className="border-b-2 border-x-zinc-950">
            <h1 className="text-2xl md:text-3xl lg:text-6xl font-extrabold pb-2">Contact Us</h1>
          </div>
          <div className="py-4 flex flex-col items-center space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
            <p className="pr-3 text-left">
              <span className="font-bold">Phone:</span> 123-456-7890
            </p>
            <p className="pr-2 text-left">
              <span className="font-bold">Address:</span> 123 Fake Street, City, Country
            </p>
          </div>
        </div>
        {isSubmitted ? (
          <p>Thank you for your message! We'll get back to you soon.</p>
        ) : (
        <div className="border-t-2 border-x-zinc-950">
          <form className="text-left" onSubmit={handleSubmit}>
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-4">
              <label htmlFor="name" className="block sm:col-start-1 sm:col-span-1 font-bold">Name:</label>
              <input
                type="text"
                id="name"
                name="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full border border-gray-300 rounded py-2 px-3 sm:col-start-2 sm:col-span-3"
              />
            </div>
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-4">
              <label htmlFor="email" className="block sm:col-start-1 sm:col-span-1 font-bold">Email:</label>
              <input
                type="email"
                id="email"
                name="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full border border-gray-300 rounded py-2 px-3 sm:col-start-2 sm:col-span-3"
              />
            </div>
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-4">
              <label htmlFor="message" className="block sm:col-start-1 sm:col-span-1 font-bold">Message:</label>
              <textarea
                className="mt-2 sm:mt-0 sm:col-start-2 sm:col-span-3 w-full border border-gray-300 rounded py-2 px-3"
                id="message"
                name="Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              ></textarea>
            </div>

            <div className="flex justify-end mt-4">
              <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Submit
              </button>
            </div>
          </form>
        </div>
        )}
      </div>
      <img className="pt-4" src={ganggang} atl="a bundle of cute furry buddiesenjoying pizza together" />
    </div>
  );
}

export default Contact;
