import { NewsType } from "@/types/NewsType";
import Image from "next/image";
import Link from "next/link";

type Props = {
	news: NewsType;
	desc?: string;
};

const NewsCard = ({ news, desc }: Props) => {
	return (
		<Link href={`/news/${news.id}`}>
			<div className="group overflow-hidden rounded-xl border border-gray-200 bg-white transition-all duration-300">
				{/* Image */}
				<div className="relative h-40 w-auto overflow-hidden">
					<Image
						src={news.imageUrl}
						alt={news.imageAlt}
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
					<h2 className="mb-3 line-clamp-2 text-xl font-semibold leading-[1.45] group-hover:text-primary">
						{news.title}
					</h2>

					{/* Description */}
					<p className={`mb-2 leading-5 text-gray-600 line-clamp-2 ${desc}`}>
						{news.description}
					</p>

					{/* Published time */}
					<span className="text-sm text-muted">
						{new Date(news.lastPublished).toLocaleString("bn-BD", {
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
		</Link>
	);
};

export default NewsCard;
