import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    /**
     * Colors
     */
    cl: {
      background: string;
      primary: string;
      secondary: string;
      white: string;
      gray: string;
      red: string;
    };
    /**
     * Sizes
     */
    sz: {
      /**
       * size: 4px
       */
      xs: string;
      /**
       * size: 8px
       */
      xsm: string;
      /**
       * size: 16px
       */
      sm: string;
      /**
       * size: 24px
       */
      md: string;
      /**
       * size: 32px
       */
      lg: string;
      /**
       * size: 40px
       */
      xlg: string;
      /**
       * size: 48px
       */
      xlg1: string;
      /**
       * size: 56px
       */
      xlg2: string;
      /**
       * size: 64px
       */
      xlg3: string;
      /**
       * size: 72px
       */
      xlg4: string;
      /**
       * size: 80px
       */
      xlg5: string;
      /**
       * size: 88px
       */
      xlg6: string;
      /**
       * size: 96px
       */
      xlg7: string;
    };
    /**
     * Transparencys
     */
    tp: {
      /**
       * transparency: 0%
       */
      tHidden: "00";
      /**
       * transparency: 10%
       */
      t10: "1A";
      /**
       * transparency: 20%
       */
      t20: "33";
      /**
       * transparency: 30%
       */
      t30: "4D";
      /**
       * transparency: 40%
       */
      t40: "66";
      /**
       * transparency: 50%
       */
      t50: "80";
      /**
       * transparency: 60%
       */
      t60: "99";
      /**
       * transparency: 70%
       */
      t70: "B3";
      /**
       * transparency: 80%
       */
      t80: "CC";
      /**
       * transparency: 90%
       */
      t90: "E6";
      /**
       * transparency: 100%
       */
      tVisible: "FF";
    };
    /**
     * Animations
     */
    an: {
      /**
       *transition: 1s cubic-bezier(0.19, 1, 0.22, 1);
       *
       *:hover {
       *   transform: scale(1.1);
       *}
       */
      xsHoverScale: string;
      xsmHoverScale: string;
      smHoverScale: string;
      rotateToRight: string;
    };

    /**
     * Fonts sizes
     */
    tx: {
      /**
       *font-size: 0.75rem; line-height: 1rem;
       */
      xs: string;
      /**
       *font-size: 0.875rem; line-height: 1.25rem;
       */
      xsm: string;
      /**
       *font-size: 1rem; ; line-height: 1.5rem;
       */
      sm: string;
      /**
       *font-size: 1.125rem; line-height: 1.75rem;
       */
      md: string;
      /**
       *font-size: 1.25rem line-height: 1.75rem;
       */
      lg: string;
      /**
       *font-size: 1.5rem; line-height: 2rem;
       */
      xlg: string;
      /**
       *font-size: 1.875rem; line-height: 2.25rem;
       */
      xlg1: string;
      /**
       *font-size: 2.25rem; line-height: 2.5rem;
       */
      xlg2: string;
      /**
       *font-size: 3rem; line-height: 1;
       */
      xlg3: string;
      /**
       *font-size: 3.75rem; line-height: 1;
       */
      xlg4: string;
      /**
       *font-size: 1.5rem; line-height: 1;
       */
      xlg5: string;
    };
    /**
     * Screens sizes
     */
    sc: {
      /**
       * min-width: 640px
       */
      sm: string;
      /**
       * min-width: 768px
       */
      md: string;
      /**
       * min-width: 1024px
       */
      lg: string;
      /**
       * min-width: 1280px
       */
      xlg1: string;
      /**
       * min-width: 1536px
       */
      xlg2: string;
    };
  }
}
