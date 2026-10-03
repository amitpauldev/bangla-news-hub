import Link from "next/link";
import MarqueeText from "react-marquee-text";
import "react-marquee-text/dist/styles.css";

interface Headlines {
	id: string;
	title: string;
}

const Marquee = async () => {
	const res = await fetch("https://news-api-v2.vercel.app/api/news?limit=10", {
		next: { revalidate: 60 * 60 * 12 }, // revalidate every 12 hours
	});
	const data = await res.json();
	const headlines: Headlines[] = data.data;
	return (
		<div className="sticky top-0 z-10 bg-primary text-white text-sm">
			<div className="flex wrapper">
				<div className="bg-blue-800 py-2 px-3 font-bold">সর্বশেষ</div>

				<MarqueeText
					className="py-2"
					direction="right"
					duration={10}
					pauseOnHover={true}
				>
					{headlines.map((h) => (
						<Link className="hover:underline" href={`/news/${h.id}`} key={h.id}>
							<span>{h.title}</span>
							<span className="mx-4 text-blue-300">•</span>
						</Link>
					))}
				</MarqueeText>
			</div>
		</div>
	);
};

export default Marquee;
