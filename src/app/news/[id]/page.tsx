import Image from "next/image";
import { notFound } from "next/navigation";

type NewsImage = {
	type: "image";
	altText: string;
	caption: string | null;
	copyrightHolder: string;
	height: number;
	url: string;
	width: number;
};

type NewsText = {
	type: "text" | "subheading";
	text: string;
};

type NewsDetailsType = {
	body: (NewsText | NewsImage)[];
	tags: string[];
	title: string;
	lastPublished: string;
};

const NewsDetails = async ({ params }: { params: Promise<{ id: string }> }) => {
	const { id } = await params;
	const res = await fetch(`https://news-api-v2.vercel.app/api/article/${id}`, {
		next: { revalidate: 60 * 60 * 6 }, // revalidate every 6 hours
	});
	const data = await res.json();
	const news: NewsDetailsType = data.data;

	if (!news?.title) return notFound();

	return (
		<div className="max-w-4xl mx-auto px-3 sm:px-6 mt-5 mb-4">
			<h1 className="text-3xl font-bold">{news.title}</h1>
			<p className="text-sm text-gray-500 my-2">
				{new Date(news.lastPublished).toLocaleString("bn-BD", {
					day: "numeric",
					month: "long",
					year: "numeric",
					hour: "numeric",
					minute: "2-digit",
					hour12: true,
				})}
			</p>

			<div>
				{news.body.map((item, index) => {
					switch (item.type) {
						case "text":
							return <p key={index}>{item.text}</p>;

						case "subheading":
							return (
								<h2 key={index} className="text-xl font-bold my-2">
									{item.text}
								</h2>
							);

						case "image":
							return (
								<div key={index} className="my-3">
									<Image
										src={item.url}
										alt={item.altText}
										width={item.width}
										height={item.height}
										className="w-full h-auto object-cover"
									/>

									{item.caption && (
										<p className="text-sm mt-1 text-gray-500">{item.caption}</p>
									)}
								</div>
							);

						default:
							return null;
					}
				})}
			</div>
		</div>
	);
};

export default NewsDetails;
