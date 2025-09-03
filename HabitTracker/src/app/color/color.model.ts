export interface Color {
    hex: string;
    hsl: { h: number; s: number; l: number };
    rgb: { r: number; g: number; b: number };
    locked: boolean;
}
