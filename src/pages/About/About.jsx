import imagetocome from "./../../assets/images/imagetocome.png";

const About = () => {
  return (
    <>
      <div className="max-w-[1152px] mx-auto">
        <div className="bg-[#faeada] px-8 py-6 rounded-3xl">
          <h2 className="text-3xl font-bold mb-4 inline-block py-2 px-4 bg-gray-800 text-white rounded-full">
            Our Story
          </h2>
          <div
            className="overflow-y-auto max-h-[500px] p-4 md:max-h-auto bg-[#fffefe] rounded-3xl"
            style={{ WebkitOverflowScrolling: "touch" }}
          >
            <div className="mb-6 text-left text-sm md:text-base lg:text-xl">
              <div className="indent-8 pb-2">
                Once upon a time, in the sunny waves of Los Angeles, a culinary
                gem was born—the home of irresistible pies known as Pizzapaloz.
                It all started with a deep-rooted passion for pizza that had
                been passed down through generations. This passion ignited a
                fire within the hearts of our founders, inspiring them to embark
                on a journey to create the most delectable pizzas known to
                mankind.
              </div>
              <div className="indent-8 pb-2">
                With a long-standing tradition of pizza making, Pizzapaloz is
                not just a pizza shop; it is a sacred place where each pie is
                crafted with love and expertise. Our skilled artisans pour their
                hearts and souls into every aspect of pizza creation, from the
                selection of the finest ingredients to the delicate art of dough
                tossing.
              </div>
              <div className="indent-8 pb-2">
                From the classic Margherita, with its harmonious blend of fresh
                tomatoes, creamy mozzarella, and fragrant basil, to our unique
                specialty creations that push the boundaries of culinary
                imagination, every slice that emerges from our ovens is a
                masterpiece in its own right. Each bite bursts with an explosion
                of flavors that dance upon your taste buds, leaving you craving
                for more.
              </div>
              <div className="indent-8 pb-2">
                But Pizzapaloz is not just about the taste; it's about the
                experiences and memories we create. We believe that great pizza
                has the power to bring people together, transcending mere
                sustenance to become a catalyst for joy and connection. Whether
                you're sharing a meal with loved ones, bonding with friends over
                a cheesy slice, or simply savoring a moment of solitude with
                your favorite pie, Pizzapaloz is there to elevate your
                experience and make it truly special.
              </div>
              <div className="indent-8 pb-2">
                Indulge in the magic of Pizzapaloz, and with each bite, you'll
                feel the weight of history and tradition. Our pizzas carry the
                legacy of generations past, a testament to the time-honored
                techniques and recipes that have been perfected over time. We
                invite you to join us on this mouthwatering adventure, as we
                serve up slices of happiness and share our love for pizza with
                the world.
              </div>
              <div className="indent-8 pb-2">
                Step into the world of Pizzapaloz, where the aroma of freshly
                baked crust fills the air, where every ingredient is carefully
                selected to deliver the perfect balance of flavors, and where
                the pursuit of deliciousness knows no bounds. We welcome you to
                experience the joy, the passion, and the tradition of pizza
                making that defines Pizzapaloz. Prepare to be enchanted, for
                here, in our humble pizzeria, we create magic, one pie at a
                time.
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold my-4 inline-block py-2 px-4 bg-gray-800 text-white rounded-full">
              Awards
            </h3>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="border border-gray-300 p-4">
                <img
                  src={imagetocome}
                  alt="Award 1"
                  className="w-full h-auto mb-2"
                />
                <p className="font-bold">Best Pizza of the Year</p>
                <p className="text-gray-600">Presented by Pizza Association</p>
              </div>
              <div className="border border-gray-300 p-4">
                <img
                  src={imagetocome}
                  alt="Award 2"
                  className="w-full h-auto mb-2"
                />
                <p className="font-bold">Pizza Chef of the Year</p>
                <p className="text-gray-600">Recognized by Food Critics</p>
              </div>
            </div>
            <h3 className="text-xl font-bold mb-4 inline-block py-2 px-4 bg-gray-800 text-white rounded-full">
              Magazine Articles
            </h3>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="border border-gray-300 p-4">
                <img
                  src={imagetocome}
                  alt="Magazine Article 1"
                  className="w-full h-auto mb-2"
                />
                <p className="font-bold">Taste and Savor</p>
                <p className="text-gray-600">"Pizzapaloz: A Slice of Heaven"</p>
              </div>
              <div className="border border-gray-300 p-4">
                <img
                  src={imagetocome}
                  alt="Magazine Article 2"
                  className="w-full h-auto mb-2"
                />
                <p className="font-bold">Foodie Times</p>
                <p className="text-gray-600">
                  "Pizza Perfection: Pizzapaloz Delights"
                </p>
              </div>
            </div>
            <h3 className="text-xl font-bold mb-4 inline-block py-2 px-4 bg-gray-800 text-white rounded-full">
              Reviews
            </h3>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="border border-gray-300 p-4">
                <img
                  src={imagetocome}
                  alt="Review 1"
                  className="w-full h-auto mb-2"
                />
                <p className="font-bold">John Doe</p>
                <p className="text-gray-600">
                  "Best pizza in town! A must-visit for pizza lovers."
                </p>
              </div>
              <div className="border border-gray-300 p-4">
                <img
                  src={imagetocome}
                  alt="Review 2"
                  className="w-full h-auto mb-2"
                />
                <p className="font-bold">Jane Smith</p>
                <p className="text-gray-600">
                  "Absolutely delicious! Pizzapaloz never disappoints."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
