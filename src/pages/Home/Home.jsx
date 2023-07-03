import "./../../assets/styles/styles.css"
import pizzachild from "./../../assets/images/pizzachild.jpg"

const Home = () => {


  return (
    <>
      <div className="bg-white w-1216 h-840">
        <div className="border-gray-400 bg-white p-4 pt-8 grid place-items-center">
          <img src={pizzachild} alt="a wacky child holding a plate with four small pizza and also saying PIZZA NIGHT!" className="rounded-15px" />
        </div>
        <div className="border-gray-400 bg-white p-4 items-center">
          <h1 className="text-2xl md:text-3xl lg:text-6xl font-extrabold">Welcome to Pizzapaloz!</h1>
          <br />
          <h3 className="text-sm md:text-base lg:text-xl mb-4 px-10">
            The home of irresistible pies! Our pizza shop is a culinary gem rooted in the sunny waves of Los Angeles, where our passion for pizza has been passed down through generations.
            With a long-standing tradition of pizza making, we craft each pie with love and expertise. From the classic Margherita to our unique specialty creations, every slice is a masterpiece that bursts with flavors.
            At Pizzapaloz, we believe that great pizza goes beyond the taste—it's about creating moments of joy and bringing people together. Join us on this mouthwatering adventure as we serve up slices of happiness and share our love for pizza with you.
            Indulge in the magic of Pizzapaloz and experience the tradition of pizza making in every bite. Welcome to the world of pies, where deliciousness knows no bounds!
          </h3>
        </div>
      </div>
    </>
  )
}

export default Home;