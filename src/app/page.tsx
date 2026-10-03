import MainNews from "@/components/ui/MainNews";
import OtherNews from "@/components/ui/OtherNews";
import { NewsSectionType, NewsType } from "@/types/NewsType";
import MostReadNews from "@/components/ui/MostReadNews";

export default async function Home() {
	const res = await fetch("https://news-api-v2.vercel.app/api/news/sections", {
		next: { revalidate: 60 * 60 * 6 }, // revalidate every 6 hours
	});
	const data = await res.json();
	const allData: NewsSectionType[] = data.data.filter(
		(n: NewsType) => !n.title.includes("বিবিসি"),
	);

	const mainNews = allData[0].articles;

	return (
		<main className="wrapper px-5 sm:px-15 md:px-10 lg:px-5">
			<div className="grid grid-cols-3 gap-4 py-7">
				<div className="col-span-3 lg:col-span-2">
					{/* Main News */}
					<MainNews mainNews={mainNews} />

					{/* Others News  */}
					<OtherNews allData={allData} />
				</div>

				{/* Most Read News  */}
				<div className="col-span-3 lg:col-span-1">
					<MostReadNews />
				</div>
			</div>
		</main>
	);
}
