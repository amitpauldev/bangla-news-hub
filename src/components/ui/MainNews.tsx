import { NewsType } from "@/types/NewsType";
import NewsCard from "./NewsCard";
import Link from "next/link";

const MainNews = ({ mainNews }: { mainNews: NewsType[] }) => {
	return (
		<div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
			<NewsCard news={mainNews[0]} desc="line-clamp-3" />

			{/* Other News */}
			<div className="h-full overflow-hidden rounded-xl border border-gray-200 bg-white">
				{mainNews.slice(1, 5).map((news, index) => (
					<Link key={news.id} href={`/news/${news.id}`}>
						<div
							className={`cursor-pointer p-4 transition-colors duration-300 hover:bg-gray-50 ${
								index !== mainNews.slice(1, 5).length - 1
									? "border-b border-gray-200"
									: ""
							}`}
						>
							<span className="mb-1 block text-[12px] font-medium text-primary">
								প্রধান খবর
							</span>

							<h3 className="text-[16px] font-medium text-gray-900 transition-colors duration-300">
								{news.title}
							</h3>
						</div>
					</Link>
				))}
			</div>
		</div>
	);
};

export default MainNews;
