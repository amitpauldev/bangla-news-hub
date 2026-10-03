import Image from "next/image";
import logo from "@/assets/bangla-news-hub-logo.png";

interface LogoProps {
	className?: string;
	logoSize?: string;
	textSize?: string;
}

const Logo = ({ className, logoSize, textSize }: LogoProps) => {
	const date = new Date().toLocaleDateString("bn-BD", {
		weekday: "long",
		day: "numeric",
		month: "long",
		year: "numeric",
	});
	return (
		<div className={`${className}`}>
			<div className="flex items-center gap-2">
				<Image
					src={logo}
					alt="Logo"
					width={40}
					height={40}
					className={`${logoSize}`}
				/>
				<div>
					<h1
						className={`text-2xl font-bold tracking-tighter text-secondary ${textSize}`}
					>
						Bangla <span className="text-primary">News</span> Hub
					</h1>
					<p className="text-sm text-muted">{date}</p>
				</div>
			</div>
		</div>
	);
};

export default Logo;
