

function LinkToday() {
  return (
    <div className="flex w-screen justify-center bg-primary-darkViolet bg-boost-desktop bg-no-repeat bg-center bg-cover max-input:bg-boost-mobile">
      <div className="w-4/6 flex flex-col justify-center items-center mt-12 mb-12 gap-5 max-sm:text-center">
        <h1 className="text-3xl text-white font-semibold max-sm:text-2xl duration-200">Boost your links today</h1>
        <button className="bg-primary-cyan p-2 px-5 rounded-3xl text-white font-medium hover:bg-cyan-200 duration-200">Get Started</button>
      </div>
    </div>
  )
}

export default LinkToday
