const PrivacyPage = () => {
	return (
		<main className="min-h-screen bg-gray-50 py-12">
			<div className="mx-auto max-w-4xl px-5 sm:px-6 lg:px-8">
				<div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm sm:p-10">
					{/* Header */}
					<div className="mb-8 border-b border-gray-200 pb-6">
						<span className="mb-2 block text-sm font-medium text-primary">
							Legal
						</span>

						<h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
							Privacy Policy
						</h1>

						<p className="mt-3 text-sm text-gray-500">
							Last updated: October 4, 2026
						</p>
					</div>

					{/* Introduction */}
					<section className="space-y-4">
						<p className="leading-7 text-gray-600">
							Welcome to <strong>Bangla News Hub</strong>. We respect your
							privacy and are committed to protecting your personal information.
							This Privacy Policy explains what information we may collect, how
							we use it, and how we protect it when you use our website.
						</p>
					</section>

					{/* Information We Collect */}
					<section className="mt-8">
						<h2 className="mb-3 text-xl font-semibold text-gray-900">
							1. Information We Collect
						</h2>

						<p className="mb-3 leading-7 text-gray-600">
							Depending on how you use our website, we may collect limited
							information such as:
						</p>

						<ul className="list-disc space-y-2 pl-6 leading-7 text-gray-600">
							<li>
								Information you voluntarily provide, such as your name and email
								address.
							</li>
							<li>Information submitted through contact forms.</li>
							<li>
								Basic technical information such as browser, device type, and
								pages visited.
							</li>
							<li>
								Information necessary to maintain the security and functionality
								of our website.
							</li>
						</ul>
					</section>

					{/* How We Use Information */}
					<section className="mt-8">
						<h2 className="mb-3 text-xl font-semibold text-gray-900">
							2. How We Use Your Information
						</h2>

						<p className="mb-3 leading-7 text-gray-600">
							We may use collected information to:
						</p>

						<ul className="list-disc space-y-2 pl-6 leading-7 text-gray-600">
							<li>Provide and maintain our website.</li>
							<li>Respond to your questions and messages.</li>
							<li>Improve our website and user experience.</li>
							<li>Understand how visitors use our website.</li>
							<li>Detect security issues, abuse, or suspicious activity.</li>
						</ul>
					</section>

					{/* Cookies */}
					<section className="mt-8">
						<h2 className="mb-3 text-xl font-semibold text-gray-900">
							3. Cookies
						</h2>

						<p className="leading-7 text-gray-600">
							Our website may use cookies or similar technologies to maintain
							website functionality, remember preferences, and understand how
							visitors use our website. You can manage or disable cookies
							through your browser settings.
						</p>
					</section>

					{/* Third Party */}
					<section className="mt-8">
						<h2 className="mb-3 text-xl font-semibold text-gray-900">
							4. Third-Party Services
						</h2>

						<p className="leading-7 text-gray-600">
							We may use third-party services such as hosting, analytics,
							content delivery, or social media services. These providers may
							process certain information according to their own privacy
							policies.
						</p>
					</section>

					{/* Data Security */}
					<section className="mt-8">
						<h2 className="mb-3 text-xl font-semibold text-gray-900">
							5. Data Security
						</h2>

						<p className="leading-7 text-gray-600">
							We take reasonable measures to protect information from
							unauthorized access, alteration, disclosure, or destruction.
							However, no method of transmitting or storing information online
							can be guaranteed to be completely secure.
						</p>
					</section>

					{/* Data Retention */}
					<section className="mt-8">
						<h2 className="mb-3 text-xl font-semibold text-gray-900">
							6. Data Retention
						</h2>

						<p className="leading-7 text-gray-600">
							We retain personal information only for as long as reasonably
							necessary for the purposes described in this policy, unless a
							longer period is required by applicable law.
						</p>
					</section>

					{/* Your Rights */}
					<section className="mt-8">
						<h2 className="mb-3 text-xl font-semibold text-gray-900">
							7. Your Rights
						</h2>

						<p className="mb-3 leading-7 text-gray-600">
							Depending on applicable laws, you may have the right to:
						</p>

						<ul className="list-disc space-y-2 pl-6 leading-7 text-gray-600">
							<li>Request access to your personal information.</li>
							<li>Request correction of inaccurate information.</li>
							<li>
								Request deletion of your personal information where applicable.
							</li>
							<li>Object to or restrict certain processing.</li>
						</ul>
					</section>

					{/* Changes */}
					<section className="mt-8">
						<h2 className="mb-3 text-xl font-semibold text-gray-900">
							8. Changes to This Privacy Policy
						</h2>

						<p className="leading-7 text-gray-600">
							We may update this Privacy Policy from time to time. Any changes
							will be published on this page with an updated date.
						</p>
					</section>

					{/* Contact */}
					<section className="mt-8 rounded-lg bg-gray-50 p-5">
						<h2 className="mb-3 text-xl font-semibold text-gray-900">
							9. Contact Us
						</h2>

						<p className="leading-7 text-gray-600">
							If you have any questions about this Privacy Policy, please
							contact us at:
						</p>

						<a
							href="info@example.com"
							className="mt-2 inline-block font-medium text-primary hover:underline"
						>
							info@example.com
						</a>
					</section>
				</div>
			</div>
		</main>
	);
};

export default PrivacyPage;
