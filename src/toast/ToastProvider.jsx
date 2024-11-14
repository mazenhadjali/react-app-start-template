import React, { useCallback, useContext, useState } from "react";
import ToastContainer from "./ToastContainer";
import { v4 as uuidv4 } from 'uuid';
import PropTypes from "prop-types";


export const ToastContext = React.createContext(
    undefined
);

export const useToast = () => useContext(ToastContext);

const DEFAULT_INTERVAL = 2500;

export default function ToastProvider({ children, variant }) {
    const [data, setData] = useState([]);

    const Push = useCallback(
        (
            message,
            type,
            lifetime,
            truncate,
        ) => {
            if (message) {
                const new_item = {
                    id: uuidv4(),
                    message: message,
                    type: type,
                    lifetime: lifetime ? lifetime : DEFAULT_INTERVAL,
                    truncate: truncate,
                };

                setData((prevState) => [...prevState, new_item]);
            }
        },
        [setData, data]
    );

    const PushCustom = useCallback(
        (
            message,
            lifetime,
            truncate,
            icon,
        ) => {
            if (message) {
                const new_item = {
                    id: uuidv4(),
                    message: message,
                    lifetime: lifetime ? lifetime : DEFAULT_INTERVAL,
                    truncate: truncate,
                    icon: icon,
                    type: undefined,
                };

                setData((prevState) => [...prevState, new_item]);
            }
        },
        [setData, data]
    );

    const PushError = useCallback(
        (message, lifetime, truncate) =>
            Push(message, "Error", lifetime, truncate),
        [Push]
    );
    const PushWarning = useCallback(
        (message, lifetime, truncate) =>
            Push(message, "Warning", lifetime, truncate),
        [Push]
    );
    const PushSuccess = useCallback(
        (message, lifetime, truncate) =>
            Push(message, "Success", lifetime, truncate),
        [Push]
    );
    const PushInfo = useCallback(
        (message, lifetime, truncate) =>
            Push(message, "Info", lifetime, truncate),
        [Push]
    );

    const ToastContexd = useCallback(() => {
        return {
            data: data,
            pushError: PushError,
            pushWarning: PushWarning,
            pushSuccess: PushSuccess,
            pushInfo: PushInfo,
            push: Push,
            pushCustom: PushCustom,

            async remove(id) {
                setData((prevState) => prevState.filter((e) => e.id != id));
            },
        };
    }, [
        data,
        setData,
        PushError,
        PushWarning,
        PushSuccess,
        PushInfo,
        Push,
        PushCustom,
    ]);

    return (
        <ToastContext.Provider value={ToastContexd()}>
            <ToastContainer variant={variant} />
            {children}
        </ToastContext.Provider>
    );
}

// propstype
ToastProvider.propTypes = {
    children: PropTypes.node.isRequired,
    variant: PropTypes.string,
};