import type { CSSProperties } from "react";

/**
 * Soft fade at the bottom of a brand-blue hero, so it melts into the section
 * below instead of ending in a hard edge.
 *
 * The fade is a long, eased gradient (no visible edge) that happens only in
 * the bottom `HERO_FADE_REM` of the section, so the section needs at least
 * that much bottom padding (`pb-44`) to keep the text on solid blue.
 */
export const HERO_FADE_REM = 11;
const EASED_ALPHAS = [0.97, 0.91, 0.82, 0.7, 0.57, 0.43, 0.3, 0.19, 0.1, 0.04];

/** Gradient stops of `rgb(r g b / alpha)` from solid at the top to clear at the bottom. */
function fadeStops(rgb: string): string {
  return [
    `rgb(${rgb}) 0%`,
    `rgb(${rgb}) calc(100% - ${HERO_FADE_REM}rem)`,
    ...EASED_ALPHAS.map(
      (a, i) => `rgb(${rgb} / ${a}) calc(100% - ${HERO_FADE_REM - (i + 1)}rem)`,
    ),
    `rgb(${rgb} / 0) 100%`,
  ].join(", ");
}

/**
 * Solid brand-blue background that fades out at the bottom.
 * `fadeTo` is the colour of the section underneath (white by default, or the
 * light grey `var(--color-gray-bg)`), so there is no seam where they meet.
 */
export function heroFadeStyle(fadeTo?: string): CSSProperties {
  return {
    ...(fadeTo ? { backgroundColor: fadeTo } : {}),
    backgroundImage: `linear-gradient(to bottom, ${fadeStops("54 85 158")})`,
  };
}

/**
 * Same fade as a mask, for a hero whose background is a photo under a blue
 * overlay: put it on the layer holding both, and the page shows through below.
 */
export function heroFadeMaskStyle(): CSSProperties {
  const mask = `linear-gradient(to bottom, ${fadeStops("0 0 0")})`;
  return { maskImage: mask, WebkitMaskImage: mask };
}
