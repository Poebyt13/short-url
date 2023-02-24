

function Card({ mg, img, title, info}) {

  return (
    <div className={ `bg-white w-72 rounded-[8px] h-full z-10 ${mg} max-lg:mt-20`}>
      <div className="pl-6 -translate-y-8 h-12">
        <img src={img} alt="prova" className="bg-primary-darkViolet p-4 w-16 rounded-full overflow-visible" />
      </div>
      <div className="p-6 pt-0">
        <h5 className="font-bold mb-2 text-lg">{title}</h5>
        <p className="text-neutral-grayishViolet text-xs leading-5">{info}</p>
      </div>
    </div>
  )
}

export default Card
