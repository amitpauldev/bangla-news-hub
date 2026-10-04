import NewsCard from "@/components/ui/NewsCard";
import { NewsType } from "@/types/NewsType";

const CategoryItem = async ({
	params,
}: {
	params: Promise<{ slug: string }>;
}) => {
	const { slug } = await params;

	const res = await fetch(
		`https://news-api-v2.vercel.app/api/category/${slug}`,
		{
			next: { revalidate: 60 * 60 * 6 }, // revalidate every 6 hours
		},
	);
	const data = await res.json();
	const allNews: NewsType[] = data.data;

	return (
		<div className="wrapper mt-5 px-3">
			<h1 className="text-3xl font-semibold border-b-2 border-primary pb-4">
				{data.title}
			</h1>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-4">
				{allNews.map((news) => (
					<NewsCard news={news} key={news.id} />
				))}
			</div>
		</div>
	);
};

export default CategoryItem;
