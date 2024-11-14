import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enJSON from "./en.json";
import frJSON from "./fr.json";
i18n.use(initReactI18next).init({
    resources: {
        en: {
            translation: {
                ...enJSON
            }
        },
        fr: {
            translation: {
                ...frJSON
            }
        },
    }, // Where we're gonna put translations' files
    lng: "en",     // Set the initial language of the App
    fallbackLng: "en", // Set the fallback language of the App
    debug: true, // Set the debug mode
});
