import { LearnGuideModel } from "@/data/models/learn-guide-model";

/**
 * Utility functions for the learn functionality.
 */
export class LearnUtilities {
	/**
	 * Converts learn guides into an up-to-date format.
	 */
	public static formatLearnGuides(guides: Array<LearnGuideModel>): Array<LearnGuideModel> {
		return guides.map((guide: LearnGuideModel) => {
			guide.image = `https://edublocks.org/learnimages/${guide.id}.png`;

			switch (guide.category[0]) {
				case "python3":
					guide.mode = "python";
					break;
				case "micro:bit":
					guide.mode = "microbit";
					break;
				case "raspberrypi":
					guide.mode = "raspberry-pi";
					break;
				default:
					guide.mode = guide.category[0];
					break;
			}

			return guide;
		});
	}
}