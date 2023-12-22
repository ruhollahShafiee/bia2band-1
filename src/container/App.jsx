import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Suspense } from "react";
import { I18nextProvider } from "react-i18next";
import { Provider } from "react-redux";

import store from "../store";
import i18n from "../langs";

import ContextApi from "@/context/ContextApi";
// layout
import MainLayout from "@/layout/MainLayouts";
// pages
import HomePage from "@/pages/home";
import AboutPage from "@/pages/about";

const router = createBrowserRouter([
	{
		path: "/",
		element: <MainLayout />,
		children: [
			{
				index: true,
				id: "home",
				element: <HomePage />,
			},
			{
				path: "/about",
				id: "about",
				element: (
					<Suspense fallback={<>loading</>}>
						<AboutPage />
					</Suspense>
				),
			},
		],
	},
]);

function App() {
	// return
	return (
		<Provider store={store}>
			<I18nextProvider i18n={i18n}>
				<ContextApi>
					<RouterProvider router={router} />
				</ContextApi>
			</I18nextProvider>
		</Provider>
	);
}

export default App;
