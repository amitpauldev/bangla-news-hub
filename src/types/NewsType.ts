export type NewsType = {
	id: string;
	title: string;
	description: string;
	link: string;
	imageUrl: string;
	imageAlt: string;
	category: string;
	type: string;
	isLive: boolean;
	firstPublished: string;
	lastPublished: string;
	source: string;
};

export type NewsSectionType = {
	title: string;
	curationId: string;
	curationType: string;
	link: null | string;
	count: number;
	articles: NewsType[];
};
