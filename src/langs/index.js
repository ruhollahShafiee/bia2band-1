import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// languages
import english from "./english.json";
import persian from "./persian.json";

i18n.use(initReactI18next).init({
	resources: {
		fa: { translation: persian },
		en: { translation: english },
	},
	lng: "fa",
	fallbackLng: "fa",
	// react already safes from xss
	interpolation: {
		escapeValue: false,
	},
});

export default i18n;
