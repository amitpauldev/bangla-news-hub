"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
interface NavListType {
	slug: string;
	title: string;
	scrapable: boolean;
}

const NavList = ({
	filteredCategories,
}: {
	filteredCategories: NavListType[];
}) => {
	const pathname = usePathname();

	return (
		<nav className="flex items-center justify-center">
			<ul className="flex items-center flex-wrap gap-3 sm:gap-10 text-sm font-medium">
				<li className="flex items-center">
					<Link
						href="/"
						className={`${pathname === "/" ? "text-primary" : "text-dark"} hover:text-primary`}
					>
						হোম
					</Link>
				</li>
				{filteredCategories.map((category) => (
					<li key={category.slug} className="flex items-center">
						<Link
							href={`/category/${category.slug}`}
							className={`${pathname.endsWith(category.slug) ? "text-primary" : "text-dark"} hover:text-primary`}
						>
							{category.title}
						</Link>
					</li>
				))}
			</ul>
		</nav>
	);
};

export default NavList;
