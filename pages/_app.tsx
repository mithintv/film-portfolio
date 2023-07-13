import { useState, useEffect } from "react";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import Script from "next/script";

import * as gtag from "../src/connection/gtag.js";

import useMediaQuery from "@mui/material/useMediaQuery";
import Theme from "../src/theme";
import Navigation from "../src/layout/Navigation";
import Social from "../src/layout/Social";

export default function App({ Component, pageProps }: AppProps) {
	const desktop = useMediaQuery("(min-width:900px)");
	const tablet = useMediaQuery("(max-width:900px)");
	const mobile = useMediaQuery("(max-width:600px)");
	const mini = useMediaQuery("(max-width:480px)");

	const [socialDelay, setSocialDelay] = useState(false);

	const router = useRouter();
	useEffect(() => {
		const handleRouteChange = (url: string) => {
			gtag.pageview(url);
		};
		router.events.on("routeChangeComplete", handleRouteChange);
		return () => {
			router.events.off("routeChangeComplete", handleRouteChange);
		};
	}, [router.events]);

	useEffect(() => {
		setTimeout(() => {
			setSocialDelay(true);
		}, 750);
	}, []);

	return (
		<Theme>
			<div
				css={{
					minHeight: "100vh",
					maxHeight: "100%",
					display: "flex",
					flexDirection: "column",
					justifyContent: "start",
					alignItems: "center",
				}}
			>
				<Script
					strategy="afterInteractive"
					src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
				/>
				<Script
					id="gtag-init"
					strategy="afterInteractive"
					dangerouslySetInnerHTML={{
						__html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gtag.GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
					}}
				/>
				<Navigation desktop={desktop} tablet={tablet} mobile={mobile}>
					<Component
						desktop={desktop}
						tablet={tablet}
						mobile={mobile}
						mini={mini}
						{...pageProps}
					/>
				</Navigation>
				{socialDelay && <Social mobile={mobile} />}
			</div>
		</Theme>
	);
}
