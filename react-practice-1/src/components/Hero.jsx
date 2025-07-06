const Hero = () => {
  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8 mt-20">
        <div className="flex flex-col md:flex-row md:items-center md:gap-8 gap-4">


          <div className="w-full md:w-2/4">
            <div className="max-w-lg md:max-w-none">
              <h2 className="text-2xl font-semibold text-gray-900 sm:text-3xl">
                Lorem ipsum dolor sit <span className="bg-gradient-to-r from-green-600 to-green-900 bg-clip-text text-transparent">
                    Hello world
                </span> adipisicing elit.
              </h2>

              <p className="mt-4 text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur doloremque saepe
                architecto maiores repudiandae amet perferendis repellendus, reprehenderit voluptas
                sequi.
              </p>

              <button className="inline-block px-6 py-2 mt-4 text-white font-semibold rounded-xl bg-green-600  shadow-lg hover:shadow-xl ">
  Get Started
</button>

            </div>
          </div>


         <div className="w-full md:w-2/4">
  <img
    src="https://img.freepik.com/free-vector/programming-concept-illustration_114360-1351.jpg" // Example tech image
    width={300}
    className="rounded-xl w-full shadow-lg"
    alt="Tech Illustration"
  />
</div>


        </div>
      </div>
    </section>
  );
};

export default Hero;
