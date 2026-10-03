import Logo from "../logo/Logo";
import Marquee from "./Marquee";
import NavList from "./NavList";

interface NavListType {
	slug: string;
	title: string;
	scrapable: boolean;
}

const Header = async () => {
	const res = await fetch("https://news-api-v2.vercel.app/api/categories");
	const data = await res.json();
	const categories: NavListType[] = data.data;
	const filteredCategories = categories.filter(
		(category) => category.scrapable,
	);

	return (
		<header className="w-full">
			<div className="wrapper relative py-3 flex flex-col items-center gap-4">
				<Logo className="flex items-center justify-center" />
				<NavList filteredCategories={filteredCategories} />
			</div>

			<Marquee />
		</header>
	);
};

export default Header;
