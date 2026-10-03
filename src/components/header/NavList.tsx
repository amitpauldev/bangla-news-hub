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
			<ul className="flex items-center gap-6 text-sm font-medium">
				<li className="flex items-center gap-2">
					<Link
						href="/"
						className={`${pathname === "/" ? "text-primary" : "text-dark"} hover:text-primary`}
					>
						হোম
					</Link>
				</li>
				{filteredCategories.map((category) => (
					<li key={category.slug} className="flex items-center gap-2">
						<Link
							href={category.slug}
							className={`${pathname === category.slug ? "text-primary" : "text-dark"} hover:text-primary`}
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
