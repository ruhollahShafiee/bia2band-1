import { ConfigProvider, theme } from "antd";

import callApi from "@/service";
import useLanguage from "@/langs/useLanguage";
import useTheme from "@/theme/useTheme";

import AppContext from "./index";

function ContextApi({ children }) {
	// language
	const { language, changeLanguage, direction, locale, placement } = useLanguage();
	// theme
	const { themeAntMode, fontAntMode, fontMode, selectedToken, tokens, ...handles } = useTheme(theme);
	// return
	const themColorObject = tokens[selectedToken];
	return (
		<AppContext.Provider
			value={{
				language,
				placement,
				direction,
				// themeHandlers
				...handles,
				changeLanguage,
				fontMode,
				tokens,
				selectedToken,
				// callApi
				callApi,
			}}
		>
			<ConfigProvider
				locale={locale}
				direction={direction}
				theme={{
					algorithm: [themeAntMode, ...fontAntMode],
					token: themColorObject,
					components: {
						Carousel: {
							colorBgContainer: themColorObject?.colorPrimary,
							dotWidth: 8,
							dotHeight: 8,
						},
					},
				}}
			>
				{children}
			</ConfigProvider>
		</AppContext.Provider>
	);
}

export default ContextApi;
