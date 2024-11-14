import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faTimes,
    faExclamationCircle,
    faCheck,
    faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";

const VARIANTS = {
    Info: {
        base: "bg-white border-blue-500",
        iconstyle: "text-blue-500 ",
        icon: faInfoCircle,
        name: "Info",
    },

    Error: {
        base: "bg-white border-red-500 ",
        iconstyle: "text-red-500 ",
        icon: faExclamationCircle,
        name: "Error",
    },

    Warning: {
        base: "bg-white border-yellow-500",
        iconstyle: "text-yellow-500 ",
        icon: faExclamationCircle,
        name: "Warning",
    },

    Success: {
        base: "bg-white border-green-500",
        iconstyle: "text-green-500 ",
        icon: faCheck,
        name: "Success",
    },
};


export default function ToastMessage({ id, header, message, lifetime, onRemove, truncate = "truncate-1-lines", icon, type, }) {
    const Var = type ? VARIANTS[type] : {
        base: "bg-white border-gray-600 ",
        iconstyle: "",
        icon: icon,
        name: header,
    };

    useEffect(() => {
        if (lifetime && onRemove) {
            setTimeout(() => {
                onRemove(id);
            }, lifetime);
        }
    }, [lifetime]);

    return (
        <div className={`flex w-full visible flex-row shadow-lg border-l-4 rounded-md duration-100 cursor-pointer transform transition-all hover:scale-102 ${Var.base} ${type && "max-h-40"}`}>
            <div className="flex flex-row p-2 flex-no-wrap w-full">
                {Var.icon && (
                    <div className="flex items-center h-12 w-12 mx-auto text-xl select-none">
                        <FontAwesomeIcon
                            className={`mx-auto ${Var.iconstyle}`}
                            icon={Var.icon}
                        />
                    </div>
                )}

                <div className="flex flex-col flex-no-wrap px-1 w-full">
                    <div className="flex my-auto font-bold select-none">{Var.name}</div>
                    <p className={`-mt-0.5 my-auto break-all flex text-gray-600 text-sm ${typeof message === "string" && truncate}`}>
                        {message}
                    </p>
                </div>
                <div
                    onClick={() => onRemove && onRemove(id)}
                    className="w-10 h-12 mr-2 items-center mx-auto text-center leading-none text-lg"
                >
                    <FontAwesomeIcon
                        className={"mx-auto my-auto h-1/2 text-center text-gray-600 cursor-pointer hover:scale-125 transform "}
                        icon={faTimes}
                    />
                </div>
            </div>
        </div>
    );
}

ToastMessage.propTypes = {
    id: PropTypes.string.isRequired,
    header: PropTypes.string,
    message: PropTypes.string.isRequired,
    lifetime: PropTypes.number,
    onRemove: PropTypes.func,
    truncate: PropTypes.string,
    icon: PropTypes.object,
    type: PropTypes.string,
};