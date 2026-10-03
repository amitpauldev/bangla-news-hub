import type { Metadata } from "next";
import { Noto_Serif_Bengali } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import Marquee from "@/components/header/Marquee";

const noto_serif_bengali = Noto_Serif_Bengali({
	subsets: ["latin", "bengali"],
});

export const metadata: Metadata = {
	title: "Bangla News Hub",
	description:
		"The Bangla News Hub is a platform that provides you with the latest news and updates in Bangla language.",
	keywords: "Bangla News Hub, Bangla, News, Updates, Latest News, Amit Paul",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
	return (
		<html lang="en" className={`${noto_serif_bengali.className} antialiased`}>
			<body>
				<Header />
				<Marquee />
				{children}
				<Footer />
			</body>
		</html>
	);
}
