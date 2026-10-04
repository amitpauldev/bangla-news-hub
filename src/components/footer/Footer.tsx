import Link from "next/link";
import React from "react";
import Logo from "../logo/Logo";

const Footer = () => {
	return (
		<footer className="mt-16 bg-[#0B1F3A] text-white">
			<div className="wrapper px-5 py-12 sm:px-6 lg:px-8">
				<div className="grid grid-cols-1 gap-10 md:grid-cols-2">
					{/* Brand */}
					<div className="">
						<Logo color="text-white" />

						<p className="max-w-sm text-sm mt-3 leading-6 text-white/65">
							দেশ ও বিশ্বের সর্বশেষ সংবাদ, গুরুত্বপূর্ণ ঘটনা এবং নির্ভরযোগ্য
							তথ্য এক জায়গায়।
						</p>
					</div>

					<div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-5">
						{/* Quick Links */}
						<div>
							<h3 className="mb-4 text-base font-semibold">দ্রুত লিংক</h3>

							<ul className="space-y-3 text-sm text-white/65">
								<li>
									<a href="/" className="transition-colors hover:text-primary">
										হোম
									</a>
								</li>

								<li>
									<a
										href={"/"}
										className="transition-colors hover:text-primary"
									>
										নির্বাচিত খবর
									</a>
								</li>

								<li>
									<a href="/" className="transition-colors hover:text-primary">
										জাতীয়
									</a>
								</li>

								<li>
									<a
										href="/category/world"
										className="transition-colors hover:text-primary"
									>
										আন্তর্জাতিক
									</a>
								</li>
							</ul>
						</div>

						{/* Categories */}
						<div>
							<h3 className="mb-4 text-base font-semibold">বিভাগ</h3>

							<ul className="space-y-3 text-sm text-white/65">
								<li>
									<Link
										href="/category/politics"
										className="transition-colors hover:text-primary"
									>
										রাজনীতি
									</Link>
								</li>

								<li>
									<Link
										href="/category/sports"
										className="transition-colors hover:text-primary"
									>
										খেলাধুলা
									</Link>
								</li>

								<li>
									<Link
										href="/category/technology"
										className="transition-colors hover:text-primary"
									>
										প্রযুক্তি
									</Link>
								</li>

								<li>
									<Link
										href="/category/economy"
										className="transition-colors hover:text-primary"
									>
										অর্থনীতি
									</Link>
								</li>
							</ul>
						</div>

						{/* Contact / Newsletter */}
						<div className="mt-5 sm:mt-0">
							<h3 className="mb-4 text-base font-semibold">যোগাযোগ</h3>

							<p className="mb-4 text-sm leading-6 text-white/65">
								সংবাদ ও অন্যান্য বিষয়ে আমাদের সঙ্গে যোগাযোগ করুন।
							</p>

							<a
								href="mailto:info@example.com"
								className="text-sm text-white transition-colors hover:text-primary"
							>
								info@example.com
							</a>

							{/* Social Links */}
							<div className="mt-5 flex items-center gap-3">
								<a
									href="#"
									aria-label="Facebook"
									className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-sm transition-all hover:border-primary hover:bg-primary"
								>
									f
								</a>

								<a
									href="#"
									aria-label="X"
									className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-sm transition-all hover:border-primary hover:bg-primary"
								>
									𝕏
								</a>

								<a
									href="#"
									aria-label="YouTube"
									className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-sm transition-all hover:border-primary hover:bg-primary"
								>
									▶
								</a>
							</div>
						</div>
					</div>
				</div>

				{/* Bottom */}
				<div className="mt-10 flex flex-col gap-4 border-t border-white/10 pt-6 text-sm text-white/50 sm:flex-row sm:items-center sm:justify-between">
					<p>
						© {new Date().getFullYear()} Amit Paul | Bangla News Hub. সর্বস্বত্ব
						সংরক্ষিত।
					</p>

					<div className="flex gap-5">
						<a href="/privacy" className="transition-colors hover:text-primary">
							গোপনীয়তা নীতি
						</a>

						<a href="/terms" className="transition-colors hover:text-primary">
							শর্তাবলি
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
