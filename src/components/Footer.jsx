
import logo from "../assets/download.svg";

function Footer() {
    return (
        /* Footer component */
        <footer className="w-screen bg-neutral-veryDarkViolet flex justify-center">

            <div className="w-3/4 max-xl:w-[87.5%] duration-300 mt-12 mb-16 flex justify-between max-lg:flex-col max-lg:items-center gap-12">

                {/* Logo footer */}
                <div>
                    <img src={logo} alt="logo-name" className="w-28" />
                </div>

                {/* Links footer */}
                <div className="flex gap-20 ml-40 max-lg:ml-0 max-sm:flex-col max-sm:text-center max-sm:gap-10">
                    <div className="text-white text-sm">
                        <h4 className="font-semibold mb-4">Features</h4>
                        <ul className="font-extralight flex flex-col gap-2 text-xs">
                            <li><a href="#" className="hover:text-primary-cyan hover:font-normal">Link Shortening</a></li>
                            <li><a href="#" className="hover:text-primary-cyan hover:font-normal">Branded Links</a></li>
                            <li><a href="#" className="hover:text-primary-cyan hover:font-normal">Analytics</a></li>
                        </ul>
                    </div>
                    <div className="text-white text-sm">
                        <h4 className="font-semibold mb-4">Resources</h4>
                        <ul className="font-extralight flex flex-col gap-2 text-xs">
                            <li><a href="#" className="hover:text-primary-cyan hover:font-normal">Blog</a></li>
                            <li><a href="#" className="hover:text-primary-cyan hover:font-normal">Developers</a></li>
                            <li><a href="#" className="hover:text-primary-cyan hover:font-normal">Support</a></li>
                        </ul>
                    </div>
                    <div className="text-white text-sm">
                        <h4 className="font-semibold mb-4">Company</h4>
                        <ul className="font-extralight flex flex-col gap-2 text-xs">
                            <li><a href="#" className="hover:text-primary-cyan hover:font-normal">About</a></li>
                            <li><a href="#" className="hover:text-primary-cyan hover:font-normal">Out Team</a></li>
                            <li><a href="#" className="hover:text-primary-cyan hover:font-normal">Careers</a></li>
                            <li><a href="#" className="hover:text-primary-cyan hover:font-normal">Contact</a></li>
                        </ul>
                    </div>
                </div>

                {/* social network footer */}
                <div className="flex gap-4">
                    <a href="#" className="w-5 h-5 bg-icon-facebook bg-cover bg-center bg-no-repeat hover:bg-icon-facebook-cyan duration-200" ></a>
                    <a href="#" className="w-5 h-5 bg-icon-twitter bg-cover bg-center bg-no-repeat hover:bg-icon-twitter-cyan duration-200"></a>
                    <a href="#" className="w-5 h-5 bg-icon-pinterest bg-cover bg-center bg-no-repeat hover:bg-icon-pinterest-cyan duration-200"></a>
                    <a href="#" className="w-5 h-5 bg-icon-instagram bg-cover bg-center bg-no-repeat hover:bg-icon-instagram-cyan duration-200"></a>
                </div>

            </div>
        </footer>
    )
}

export default Footer
