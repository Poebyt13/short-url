
function Navbar({ open }) {

    return (
        <div className={`w-[80%] mt-32 absolute bg-primary-darkViolet text-white font-medium overflow-hidden rounded-xl z-50 duration-[.4s] ${open ? "visible animate-entrata" : "animate-uscita invisible"}`}>
            <div className="flex flex-col self-center items-center text-center w-full">
                <div className="p-10 py-7 flex flex-col gap-5 border-b-[1px] border-opacity-25 border-neutral-gray w-[90%] items-center">
                    <p><a href="#">Features</a></p>
                    <p><a href="#">Pricing</a></p>
                    <p><a href="#">Resources</a></p>
                </div>
                <div className="flex flex-col gap-4 p-10 py-7 w-full">
                    <p><a href="#">Login</a></p>
                    <button className="bg-primary-cyan p-2 px-5 rounded-3xl text-white font-medium hover:bg-cyan-200 transition-colors w-full">Sign Up</button>
                </div>
            </div>
        </div>
    )
}

export default Navbar
