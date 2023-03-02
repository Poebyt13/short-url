
import { useState } from "react";

function NewLink({ nameLink, newLink }) {

    let newText = nameLink.replace("?", "_");

    let text = newText.replace(/(-)/gm, "_");

    const [Copy, setCopy] = useState(false);

    const copiato = () => {
        setCopy(true);
        navigator.clipboard.writeText(newLink);

        setTimeout(() => {
            setCopy(false);
        }, 2000);
    }

    return (
        <div className="flex h-14 bg-white w-full rounded-lg justify-between items-center max-input:flex-col max-input:h-32">
            <div className="ml-5 font-medium w-[22.5rem] overflow-hidden overflow-x-visible scrollbar max-lg:w-[15rem] max-input:border-b-[1.5px] max-input:border-neutral-gray max-input:ml-0  max-input:mt-3 max-input:w-full max-input:mb-4 max-input:pb-4">
                <p className="max-input:ml-5">{text}</p>
            </div>
            <div className="flex mr-5 gap-5 text-primary-cyan font-medium max-input:flex-col max-input:mb-3 max-input:gap-2 max-input:mr-0 max-input:w-full items-center max-input:items-start">
                <p className="max-input:ml-5"><a href={newLink} target="_blank">{newLink}</a></p>
                <button className={Copy ? " bg-primary-darkViolet p-[.3rem] px-6 rounded-lg text-white font-medium duration-300 max-input:w-[95%] max-input:self-center" : "bg-primary-cyan p-[.3rem] px-6 rounded-lg text-white font-medium hover:bg-cyan-200 duration-300 max-input:w-[95%] max-input:self-center"} onClick={copiato}>{Copy ? "Copied!" : "Copy"}</button>
            </div>
        </div>
    )
}

export default NewLink
