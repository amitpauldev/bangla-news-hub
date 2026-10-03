import { NewsType } from "@/types/NewsType";
import Image from "next/image";
import React from "react";

const MainNews = ({ mainNews }: { mainNews: NewsType[] }) => {
	return (
		<div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
			<div className="group overflow-hidden rounded-xl border border-gray-200 bg-white transition-all duration-300">
				{/* Image */}
				<div className="relative h-60 w-full overflow-hidden">
					<Image
						src={mainNews[0].imageUrl}
						alt={mainNews[0].imageAlt}
						fill
						className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
					/>
				</div>

				{/* Content */}
				<div className="p-5">
					{/* Category */}
					<span className="mb-2 block text-[12px] font-medium text-primary">
						প্রধান খবর
					</span>

					{/* Title */}
					<h2 className="mb-3 text-xl font-semibold leading-[1.45] group-hover:text-primary">
						{mainNews[0].title}
					</h2>

					{/* Description */}
					<p className="mb-2 line-clamp-3 leading-5 text-gray-600">
						{mainNews[0].description}
					</p>

					{/* Published time */}
					<span className="text-sm text-muted">
						{new Date(mainNews[0].lastPublished).toLocaleString("bn-BD", {
							day: "numeric",
							month: "long",
							year: "numeric",
							hour: "numeric",
							minute: "2-digit",
							hour12: true,
						})}
					</span>
				</div>
			</div>

			{/* Other News */}
			<div className="h-full overflow-hidden rounded-xl border border-gray-200 bg-white">
				{mainNews.slice(1, 5).map((news, index) => (
					<div
						key={news.id}
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
				))}
			</div>
		</div>
	);
};

export default MainNews;
