import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { ConfigProvider, theme } from "antd";

import callApi from "@/service";
import useLanguage from "@/hooks/useLanguage";
import useTheme from "@/hooks/useTheme";

import { getCurrentUser } from "../store/auth/action";

import AppContext from "./index";

function ContextApi({ children }) {
	// hooks
	const dispatch = useDispatch();
	// language
	const { language, changeLanguage, direction, locale, placement } = useLanguage();
	// theme
	const { themeAntMode, fontAntMode, fontMode, selectedToken, tokens, ...handles } = useTheme(theme);
	// initialize context
	useEffect(() => {
		const userPromise = dispatch(getCurrentUser({ callApi }));
		// cleanUp
		return () => {
			userPromise.abort();
		};
	}, [locale, dispatch]);
	// return
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
					token: tokens[selectedToken],
				}}
			>
				{children}
			</ConfigProvider>
		</AppContext.Provider>
	);
}

export default ContextApi;
