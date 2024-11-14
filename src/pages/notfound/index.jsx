import { Link } from "react-router-dom";
import StyledLogo from "src/components/atoms/styledlogo";
import { HOME } from "src/routingpaths";

export default function NotFoundPage() {
    return (
        <div className="h-screen w-full bg-gray-100 flex items-center">
            <div className="container mx-auto flex flex-col items-center justify-center px-5 text-gray-700 ">
                <h1 className="my-5 text-5xl text-center">
                    <StyledLogo />
                </h1>
                <div className="max-w-md">
                    <div className="text-5xl font-dark font-bold text-center">404</div>
                    <p className="text-2xl md:text-3xl font-light leading-normal text-center">Sorry we couldn't find this page. </p>
                    <p className="mb-8 text-center">But dont worry, you can find plenty of other things on our homepage.</p>

                </div>
                <Link to={HOME} className="mx-auto px-4 inline py-2 text-sm font-medium leading-5 shadow text-white transition-colors duration-150 border border-transparent rounded-lg focus:outline-none focus:shadow-outline-blue bg-blue-600 active:bg-blue-600 hover:bg-blue-700">back to homepage</Link>

                <div className="max-w-lg">
                    {/* import catflower.svg from src/assets/svg */}
                    <img src="catflower.svg" />
                </div>

            </div>
        </div>
    )
}