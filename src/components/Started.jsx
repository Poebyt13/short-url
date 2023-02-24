
import imgWork from "../assets/illustration-working.svg";

function Started() {
  return (
    /* Article */

    <div className="flex w-screen justify-center bg-white">
      <article className="w-3/4 mt-12 mb-12 max-xl:mt-24 max-xl:mb-24">

        {/* Article Info */}
        <section className="flex flex-row items-center justify-evenly max-xl:justify-between max-lg:flex-col-reverse">

          {/* Article more info */}
          <div className="max-lg:text-center max-lg:mt-10 duration-300">
            <h1 className="text-6xl font-bold mb-1 text-neutral-veryDarkBlue leading-[3.75rem] max-xl:text-5xl duration-300">More than just <br /> shorter links</h1>
              <p className="text-neutral-grayishViolet mb-5 max-xl:text-sm duration-300">Build your brand's recognition and get detailed <br /> insights on how your links are performing.</p>
            <button className="bg-primary-cyan p-2 px-6 rounded-3xl text-white font-medium hover:bg-cyan-200 duration-200 text-sm">Get Started</button>
          </div>

          {/* Article image */}
          <div className="duration-300">
            <img src={imgWork} alt="person-workin" className="w-[35rem] max-xl:w-[25rem] duration-300 translate-x-20 select-none max-lg:translate-x-10" />
          </div>
        </section>
      </article>
    </div>

  )
}

export default Started
