import "./../../assets/styles/styles.css"
import pizzachild from "./../../assets/images/pizzachild.jpg"

const Home = () => {


  return (
    <>
      <div className="bg-[#faeada] w-full sm:max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-5xl 2xl:max-w-6xl py-2 rounded-3xl">
        <div className="border-gray-400 bg-[#faeada] p-4 pt-8 grid place-items-center rounded-3xl">
          <img src={pizzachild} alt="a wacky child holding a plate with four small pizza and also saying PIZZA NIGHT!" className="rounded-3xl" />
        </div>
        <div className="border-gray-400 bg-[#faeada] p-4 items-center">
          <h1 className="text-2xl md:text-3xl lg:text-6xl font-extrabold">Welcome to Pizzapaloz!</h1>
          <br />
          <h3 className="text-sm md:text-base lg:text-xl mb-4 px-6">
            <div className="overflow-y-auto max-h-[400px] md:max-h-auto" style={{WebkitOverflowScrolling: 'touch'}}>
              <span>
                The home of irresistible pies! Our pizza shop is a culinary gem rooted in the sunny waves of Los Angeles, where our passion for pizza has been passed down through generations. With a long-standing tradition of pizza making, we craft each pie with love and expertise. From the classic Margherita to our unique specialty creations, every slice is a masterpiece that bursts with flavors. At Pizzapaloz, we believe that great pizza goes beyond the taste—it's about creating moments of joy and bringing people together. Join us on this mouthwatering adventure as we serve up slices of happiness and share our love for pizza with you. Indulge in the magic of Pizzapaloz and experience the tradition of pizza making in every bite. Welcome to the world of pies, where deliciousness knows no bounds!
              </span>
            </div>
          </h3>
        </div>
      </div>
    </>
  )
}

export default Home;