import { ref, Ref } from "vue";

/**
 * Utility functions for screen size.
 */
export class ScreenUtilities {
	/**
	 * Returns if views should show their desktop layout.
	 */
	public static isDesktopLayout: Ref<boolean> = ref(false);

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
			if (window.innerWidth > 768) {
				this.isDesktopLayout.value = true;
			}
			else {
				this.isDesktopLayout.value = false;
			}
		};
        
		onResize();
        
		window.addEventListener("resize", function() {
			clearTimeout(resize);
			resize = setTimeout(onResize, 50);
		});
	}
}