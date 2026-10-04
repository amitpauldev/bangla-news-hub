import { NewsSectionType } from "@/types/NewsType";
import Image from "next/image";
import React from "react";
import NewsCard from "./NewsCard";

const OtherNews = ({ allData }: { allData: NewsSectionType[] }) => {
	return (
		<div>
			{allData.slice(1).map((otherNews) => (
				<div id={otherNews.title} key={otherNews.curationId} className="my-10">
					<h1 className="text-xl font-semibold border-b-2 border-primary pb-2">
						{otherNews.title}
					</h1>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-4">
						{otherNews.articles.map((news) => (
							<NewsCard news={news} key={news.id} />
						))}
					</div>
				</div>
			))}
		</div>
	);
};

export default OtherNews;
