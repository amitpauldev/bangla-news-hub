const NewsDetails = async ({ params }: { params: Promise<{ id: string }> }) => {
	const { id } = await params;
	const res = await fetch(`https://news-api-v2.vercel.app/api/article/${id}`, {
		next: { revalidate: 60 * 60 * 6 }, // revalidate every 6 hours
	});
	const data = await res.json();

	return <div>NewsDetails</div>;
};

export default NewsDetails;
