"use client";

import Link from "next/link";

export default function GlobalError({
	error,
	reset,
}: {
	error: Error & { digest?: string };
	reset: () => void;
}) {
	return (
		<html lang="bn">
			<body>
				<main className="min-h-screen bg-[#f8fafc] flex items-center justify-center px-4">
					<div className="w-full max-w-lg text-center">
						<div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-[#155EEF] text-4xl font-bold text-white shadow-lg">
							B
						</div>

						<p className="mb-2 text-sm font-semibold uppercase tracking-wider text-[#155EEF]">
							কিছু একটা সমস্যা হয়েছে
						</p>

						<h1 className="mb-4 text-3xl font-bold text-[#0B1F3A] sm:text-4xl">
							পেজটি লোড করা যাচ্ছে না
						</h1>

						<p className="mb-8 text-base leading-7 text-gray-600">
							দুঃখিত, একটি অপ্রত্যাশিত সমস্যা হয়েছে। আবার চেষ্টা করুন অথবা
							হোমপেজে ফিরে যান।
						</p>

						<div className="flex flex-col justify-center gap-3 sm:flex-row">
							<button
								onClick={() => reset()}
								className="rounded-lg bg-[#155EEF] px-6 py-3 font-semibold text-white transition hover:bg-[#0d4dcc]"
							>
								আবার চেষ্টা করুন
							</button>

							<Link
								href="/"
								className="rounded-lg border border-gray-300 bg-white px-6 py-3 font-semibold text-[#0B1F3A] transition hover:bg-gray-50"
							>
								হোমপেজে যান
							</Link>
						</div>

						<p className="mt-8 text-xs text-gray-400">Bangla News Hub</p>
					</div>
				</main>
			</body>
		</html>
	);
}
