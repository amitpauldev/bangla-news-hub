import { NewsType } from "@/types/NewsType";
import Link from "next/link";
import React from "react";

const MostReadNews = async () => {
	const res = await fetch("https://news-api-v2.vercel.app/api/news/most-read", {
		next: { revalidate: 60 * 60 * 6 }, // revalidate every 6 hours
	});
	const data = await res.json();
	const mostReadNews: NewsType[] = data.data;

	return (
		<div className="bg-white rounded-xl border border-gray-200 p-5">
			<h2 className="text-xl font-bold">সর্বাধিক পঠিত</h2>
			<div className="grid grid-cols-1 gap-1 mt-4">
				{mostReadNews.map((news, index) => (
					<Link key={news.id} href={`/news/${news.id}`}>
						<div className="grid grid-cols-12 gap-2 p-2 transition-colors duration-300 hover:bg-gray-200">
							<span className="col-span-1 text-2xl font-semibold text-primary self-start">
								{index + 1}
							</span>
							<h3 className="col-span-11">{news.title}</h3>
						</div>
					</Link>
				))}
			</div>
		</div>
	);
};

export default MostReadNews;
