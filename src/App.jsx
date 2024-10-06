import { BackToTopBtn } from "./components/BackToTopBtn";
import { FeatureCard } from "./components/FeatureCard";
import ImageModal from "./components/ImageModal";
import { Nav } from "./components/Nav";
import { ReviewCard } from "./components/ReviewCard";
import { useState } from "react";
function App() {
  const [selectImage, setSelectImage] = useState(null);

  console.log(selectImage);

  return (
    <div className="App overflow-hidden font-kalam">
      {/* back to top btn */}
      <BackToTopBtn />
      {/* end back to top btn */}

      <header className="relative">
        <video
          className="absolute w-[100%] h-[100%] object-cover top-0 left-0 -z-50"
          src={process.env.PUBLIC_URL + "/images/ocean.mp4"}
          autoPlay
          muted
          loop
        />
        <div className="fixed w-full z-40">
          <Nav />
        </div>
        {/* hero */}
        <section className=" py-32">
          <h1 className="text-center text-4xl md:text-8xl text-white font-bold">
            Explore New Places, <br />
            Adventure Awaits
          </h1>
          <p className="text-white text-center font-bold px-4 md:text-xl lg:text-4xl mt-4">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum, a
            quaerat. Obcaecati facere beatae at ut? Corrupti necessitatibus
          </p>
          <div className="p-4 lg:w-[50%] lg:mx-auto">
            <form className="bg-white m-5 rounded-lg p-4 shadow-[rgba(6,_24,_44,_0.4)_0px_0px_0px_2px,_rgba(6,_24,_44,_0.65)_0px_4px_6px_-1px,_rgba(255,_255,_255,_0.08)_0px_1px_0px_inset]">
              <h1 className="font-bold text-2xl md:text-4xl text-center ">
                Search Your Destination
              </h1>
              <div>
                <div className="flex flex-col my-4">
                  <label className="text-[#6DB2B9] font-bold text-xl lg:text-4xl mb-2">
                    Location
                  </label>
                  <input
                    className="bg-gray-200 text-xl lg:text-2xl focus:outline-none px-4 py-1 rounded-md shadow-[rgba(6,_24,_44,_0.4)_0px_0px_0px_2px,_rgba(6,_24,_44,_0.65)_0px_4px_6px_-1px,_rgba(255,_255,_255,_0.08)_0px_1px_0px_inset]"
                    type="text"
                    placeholder="Place You Want To Visit"
                  />
                </div>
                <div className="flex flex-col my-4">
                  <label className="text-[#6DB2B9] font-bold text-xl lg:text-4xl mb-2">
                    Guest Member
                  </label>
                  <input
                    type="text"
                    placeholder="Enter How Many People"
                    className="bg-gray-200 text-xl lg:text-2xl focus:outline-none px-4 py-1 rounded-md shadow-[rgba(6,_24,_44,_0.4)_0px_0px_0px_2px,_rgba(6,_24,_44,_0.65)_0px_4px_6px_-1px,_rgba(255,_255,_255,_0.08)_0px_1px_0px_inset]"
                  />
                </div>
                <div className="flex flex-col my-4">
                  <label className="text-[#6DB2B9] font-bold text-xl lg:text-4xl mb-2">
                    Arrival
                  </label>
                  <input
                    type="date"
                    className="bg-gray-200 text-xl lg:text-2xl focus:outline-none px-4 py-1 rounded-md shadow-[rgba(6,_24,_44,_0.4)_0px_0px_0px_2px,_rgba(6,_24,_44,_0.65)_0px_4px_6px_-1px,_rgba(255,_255,_255,_0.08)_0px_1px_0px_inset]"
                  />
                </div>
                <div className="flex flex-col my-4">
                  <label className="text-[#6DB2B9] font-bold text-xl lg:text-4xl mb-2">
                    Leaving
                  </label>
                  <input
                    type="date"
                    className="bg-gray-200 text-xl lg:text-2xl focus:outline-none px-4 py-1 rounded-md shadow-[rgba(6,_24,_44,_0.4)_0px_0px_0px_2px,_rgba(6,_24,_44,_0.65)_0px_4px_6px_-1px,_rgba(255,_255,_255,_0.08)_0px_1px_0px_inset]"
                  />
                </div>
                <button
                  type="button"
                  className="bg-[#3D8D9A] focus:outline-none w-full rounded-md px-4 lg:text-4xl hover:bg-white hover:text-[#3D8D9A] hover:border-[#3D8D9A] border-2 duration-150 py-1 text-white font-bold my-4"
                >
                  Search
                </button>
              </div>
            </form>
          </div>
        </section>
        {/* end hero */}
      </header>

      {/* feature */}
      <section id="feature" className="py-10">
        <h1 className="font-bold text-2xl text-center lg:text-6xl">
          <span className="text-[#3D8D9A]">F</span>eatured{" "}
          <span className="text-[#3D8D9A]">L</span>ocations
        </h1>
        <div className="lg:grid lg:grid-cols-3">
          {[1, 2, 3].map((item) => (
            <FeatureCard key={item} item={item} />
          ))}
        </div>
      </section>
      {/* end feature */}

      {/* about */}
      <section id="about" className="mt-5">
        <h1 className="text-center text-4xl lg:text-8xl">
          <span className="text-[#3D8D9A]">A</span>bout{" "}
          <span className="text-[#3D8D9A]">U</span>s
        </h1>
        <div className="grid lg:grid-cols-2 items-center">
          <img src={process.env.PUBLIC_URL + "/images/travel.jpg"} />
          <div>
            <h1 className="text-[#3D8D9A] font-bold text-4xl lg:text-8xl text-center">
              Why Choose Us ?
            </h1>
            <p className="text-center text-xl lg:text-2xl my-5">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure
              numquam officia earum, rem obcaecati quidem harum ducimus
              molestias animi
            </p>
            <div className="flex justify-center items-center gap-2 my-2">
              <button
                type="button"
                className="border-[#3D8D9A] duration-150 border-2 px-4 py-1 lg:text-4xl text-[#3D8D9A] hover:bg-[#3D8D9A] hover:text-white"
              >
                Read More
              </button>
              <button
                type="button"
                className="border-[#3D8D9A] duration-150 border-2 px-4 py-1 lg:text-4xl text-[#3D8D9A] hover:bg-[#3D8D9A] hover:text-white"
              >
                Get In Touch
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* end about */}

      {/* gallery */}
      <section id="gallery">
        <h1 className="text-center mt-10 mb-4 text-4xl lg:text-8xl font-bold">
          <span className="text-[#3D8D9A]">G</span>allery
        </h1>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 p-10">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div key={item}>
              <div className="relative group">
                <img
                  className="rounded-lg w-full"
                  src={process.env.PUBLIC_URL + `/images/pic${item}.jpg`}
                  alt={`pic${item}`}
                />
                <div
                  className="absolute w-full h-full flex flex-col items-center -bottom-10 rounded-lg justify-end bg-black/30 opacity-0 group-hover:opacity-100 group-hover:bottom-0 transition-all duration-300"
                  onClick={() =>
                    setSelectImage(
                      `${process.env.PUBLIC_URL}/images/pic${item}.jpg`
                    )
                  }
                >
                  <div className="text-white flex justify-around w-full text-4xl z-10 mb-5">
                    <i className="fas fa-heart cursor-pointer hover:text-pink-500" />
                    <i className="fas fa-share cursor-pointer hover:text-blue-500" />
                    <i className="fas fa-search cursor-pointer hover:text-amber-500" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        {selectImage && (
          <ImageModal
            imageSrc={selectImage}
            onClose={() => setSelectImage(null)}
          />
        )}
      </section>
      {/* end gallery */}

      {/* review */}
      <section
        id="review"
        style={{
          background: `linear-gradient(rgba(0, 152, 161, 0.7), rgba(0, 152, 161, 0.7)), url(${process.env.PUBLIC_URL}/images/photographer.jpg)`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundBlendMode: "multiply",
          backgroundAttachment: "fixed",
        }}
      >
        <h1 className="text-center text-4xl lg:text-8xl font-bold py-10">
          <span className="text-yellow-300 ">R</span>eview
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 pb-10">
          {[1, 2, 3].map((item) => (
            <ReviewCard key={item} item={item} />
          ))}
        </div>
      </section>
      {/* end review */}

      {/* contact */}
      <section id="contact" className="px-4">
        <h1 className="text-center mt-10 text-4xl lg:text-6xl font-bold">
          <span className="text-[#3D8D9A]">C</span>ontact{" "}
          <span className="text-[#3D8D9A]">U</span>s
        </h1>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d51985.10264089808!2d136.8235199486328!3d35.47783869999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x600306a1a9f23221%3A0xb3769c10128ff45d!2z44K144Oz44K144Oz44K344OG44Kj44Oe44O844K0IOODl-ODqeOCpOODoOODiOODqeODmeODqw!5e0!3m2!1sja!2sjp!4v1691493793824!5m2!1sja!2sjp"
          width="100%"
          height="450"
          style={{ border: "0", padding: "10px" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
        <div className="py-10 flex md:flex-row flex-col gap-4 justify-around">
          <div className="flex gap-2">
            <i className="fa-solid fa-house text-[#3D8D9A]"></i>
            <div>
              <h1 className="font-bold text-xl">Address</h1>
              <div className="text-xl">
                <p>Japan</p>
                <p>Gifu</p>
                <p>Seki</p>
              </div>
            </div>
          </div>
          <div className="flex gap-2">
            <i className="fa-solid fa-envelope text-[#3D8D9A]"></i>
            <div>
              <h1 className="font-bold text-xl">Email</h1>
              <p className="text-xl">thanh@abc.com</p>
            </div>
          </div>
          <div className="flex gap-2">
            <i className="fa-solid fa-phone text-[#3D8D9A]"></i>
            <div>
              <h1 className="font-bold text-xl">Phone</h1>
              <p className="text-xl">123-456-7890</p>
            </div>
          </div>
        </div>

        <div className="my-4">
          <h1 className="text-[#3D8D9A] font-bold text-4xl text-center lg:text-8xl">
            Get In Touch
          </h1>
          <form>
            <div className="grid grid-cols-2 gap-4 my-4">
              <input
                className="border-[#3D8D9A] border-2 pl-4 py-2 focus:outline-none text-xl lg:text-2xl"
                type="text"
                placeholder="Full Name"
              />
              <input
                className="border-[#3D8D9A] border-2 pl-4 py-2 focus:outline-none text-xl lg:text-2xl"
                type="text"
                placeholder="Email"
              />
            </div>
            <textarea
              className="border-[#3D8D9A] border-2 pl-4 py-2 focus:outline-none w-full text-xl lg:text-2xl"
              cols="30"
              rows="10"
              placeholder="Message"
            ></textarea>
            <button
              type="button"
              className="border-[#3D8D9A] rounded-lg text-[#3D8D9A] lg:text-4xl border-2 px-6 py-1 hover:bg-[#3D8D9A] hover:text-white duration-150"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
      {/* end contact */}

      {/* discount */}
      <section
        id="discount"
        style={{
          backgroundImage: `url(${
            process.env.PUBLIC_URL + "/images/island.jpg"
          })`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          height: "350px",
          maxHeight: "40%",
        }}
        className="flex flex-col justify-center relative"
      >
        <div className="absolute bg-black/30  top-0 left-0 w-full h-full"></div>
        <div className="z-10">
          <h1 className="text-white font-bold text-4xl lg:text-6xl text-center">
            Sign Up For 25% Discount
          </h1>
          <p className="text-center text-white my-5 text-xl lg:text-2xl">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Consectetur ipsa eius, vero quas optio beatae modi eveniet, magnam
            sapiente culpa
          </p>
          <form className="m-4 lg:text-center">
            <input
              type="text"
              placeholder="Enter Your Email"
              className="py-2 w-full lg:w-[50%] text-xl pl-4 focus:outline-none bg-gray-400/50 text-white placeholder-white"
            />
          </form>
          <div className="text-center">
            <button
              className="bg-[#02819B] text-white w-fit px-8 py-1 rounded-md text-xl lg:text-4xl border-4 hover:bg-transparent duration-150 border-[#02819B]"
              type="button"
            >
              Sign Up
            </button>
          </div>
        </div>
      </section>
      {/* end discount */}
    </div>
  );
}

export default App;
