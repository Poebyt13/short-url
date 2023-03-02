
import { useState } from "react";
import NewLink from "./NewLink";
import Card from "./Card";

import iconBrand from "../assets/icon-brand-recognition.svg";
import iconRecords from "../assets/icon-detailed-records.svg";
import iconFully from "../assets/icon-fully-customizable.svg";


function Statistics() {

    const [disattivare, setDisattivare] = useState(false);
    const [errore, setErrore] = useState(false);
    const [key, setKey] = useState(0);
    const [inputText, setInputText] = useState("");
    const [containerInfo, setContainerInfo] = useState([]);
    const [contatoreContainer, setContatoreContainer] = useState(0);

    const aumentare = (n) => {
        return n + 1;
    }

    const getLink = () => {
        setDisattivare(true);

        if (inputText.includes("https") && inputText.includes("://")) {

            if (inputText.includes(" ")) {

                setErrore(true);

            } else {

                setErrore(false);
                axios.get("https://api.shrtco.de/v2/shorten?url="+inputText).then(e => {

                    containerInfo[contatoreContainer] = <NewLink nameLink={e.data.result.original_link} newLink={e.data.result.full_short_link} key={key}></NewLink>

                    setContatoreContainer(aumentare);
                    setKey(aumentare);

                    if (contatoreContainer == 3) {
                        setContatoreContainer(0);
                    }
                })
            }

        } else {
            setErrore(true);
        }

        setTimeout(() => {
            setDisattivare(false);
        }, 1000);
    }

    const textLink = (e) => {
        setInputText(e.target.value);
    }

    return (

        /* Statistics background gray */
        <aside className="flex w-screen mt-20 justify-center bg-slate-200">

            {/* body statistic */}
            <div className="w-3/4 -translate-y-20">

                {/* Input for shorting link */}
                <div className="h-[22.5vh] flex justify-center items-center max-input:mb-10">
                    
                    <div className={`bg-shorten-desktop bg-primary-darkViolet gap-4 w-full flex justify-center items-center text-sm rounded-lg py-10 max-input:flex-col max-input:py-8 max-input:bg-shorten-mobile max-input:bg-center bg-no-repeat bg-cover`}>

                        <input type="text" placeholder="Shorten a link here..." className={`w-[70%] p-3 rounded-lg outline-none duration-150 max-input:w-11/12 ${errore ? "outline-secondary-red outline focus:outline-[3px] placeholder:text-secondary-red" : ""}`} onChange={textLink} />

                        <i className={`absolute left-0 ml-[4.5%] mt-20 text-secondary-red text-xs max-input:mt-0 ${errore ? "visible text-secondary-red" : "invisible"}`}>Please add a link</i>

                        <button className={`w-[20%] bg-primary-cyan p-3 px-6 rounded-lg text-white font-medium hover:bg-cyan-200 duration-200 max-input:w-11/12 ${errore ? "max-input:mt-5" : ""}`} onClick={getLink} disabled={disattivare ? true : false}>Shorten It!</button>
                    </div>
                </div>

                {/* Input risultato */}
                <div className="flex flex-col text-[.91rem] gap-5">{containerInfo}</div>

                {/* Advances Statistics */}
                <div className="mt-14 flex flex-col items-center">

                    {/* Advances tittle */}
                    <div className="text-center">
                        <h3 className="text-3xl font-bold text-neutral-veryDarkBlue">Advances Statistics</h3>
                        <p className="mt-2 text-neutral-grayishViolet text-sm">Track how your links are performing acrosss the web with <br />our advances statistics dashboard.</p>
                    </div>

                    {/* Advances information */}
                    <div className="flex w-full max-xl:w-[120%] justify-between mt-20 max-lg:flex-col max-lg:items-center duration-300 max-lg:mt-0">

                        {/* Riga in mezzo ai contenitori */}
                        <div className="w-full h-[.4rem] absolute translate-y-[8rem] bg-primary-cyan max-lg:w-[.4rem] max-lg:h-[35rem]"></div>

                        {/* generazione contenitori */}

                        <Card mg={"mt-0"} img={iconBrand} title={"Brand Recognition"} info={"Boost your brand recognition with each click, Generic links dont' mean a thing. Branded links help intil confidence in your content."}></Card>
                        <Card mg={"mt-10"} img={iconRecords} title={"Detailed Records"} info={"Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions."}></Card>
                        <Card mg={"mt-20"} img={iconFully} title={"Fully Customizable"} info={"Improve brand awareness and content discoverability through customizable links, supercharging audience engagement."}></Card>
                        
                    </div>
                </div>

            </div>
        </aside>
    )
}

export default Statistics
