import Link from "next/link";

const NotFound = () => {
	return (
		<main className="min-h-[70vh] flex items-center justify-center px-4 py-16">
			<div className="w-full max-w-xl text-center">
				<div className="mb-6 text-8xl font-extrabold tracking-tight text-[#155EEF] sm:text-9xl">
					404
				</div>

				<h1 className="mb-4 text-2xl font-bold text-[#0B1F3A] sm:text-3xl">
					পৃষ্ঠা খুঁজে পাওয়া যায়নি
				</h1>

				<p className="mx-auto mb-8 max-w-md text-gray-600 leading-7">
					দুঃখিত, আপনি যে পৃষ্ঠাটি খুঁজছেন সেটি হয়তো সরিয়ে ফেলা হয়েছে, নাম
					পরিবর্তন করা হয়েছে অথবা আর পাওয়া যাচ্ছে না।
				</p>

				<Link
					href="/"
					className="inline-flex items-center justify-center rounded-lg bg-[#155EEF] px-6 py-3 font-semibold text-white transition-colors hover:bg-[#0d4dcc]"
				>
					হোমপেজে ফিরে যান
				</Link>
			</div>
		</main>
	);
};

export default NotFound;
