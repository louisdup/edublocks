import { ref, Ref } from "vue";

/**
 * Utility functions for screen size.
 */
export class ScreenUtilities {
	/**
	 * Returns current screen size in pixels.
	 */
	public static size: Ref<number> = ref(0);

	/**
	 * Event listener to change layout on screen size change.
	 */
	public static listenForScreenSizeChange(): void {
		let resize: number | undefined;
    
		const onResize: Function = () => {
			this.size.value = window.innerWidth;
		};
        
		onResize();
        
		window.addEventListener("resize", function() {
			clearTimeout(resize);
			resize = setTimeout(onResize, 50);
		});
	}

	/**
	 * True if screen size is below or equal to 768px (Mobile).
	 */
	public static isMobile(): boolean {
		return this.size.value <= 768;
	}

	/**
	 * True if screen size is more than 769px (Desktop).
	 */
	public static isDesktop(): boolean {
		return this.size.value >= 769;
	}
}