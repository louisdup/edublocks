/**
 * Data model for a learn guide.
 */
export interface LearnGuideModel {
	id?: string;
	duration?: number;
	title: string;
	mode: string;
	author?: string;
	summary: string;
	theme?: string;
	status?: Array<string>
	category: Array<string>;
	tags?: Array<string>;
	difficulty?: number;
	published?: string;
	image: string;
	url?: string;
	video?: string;
}