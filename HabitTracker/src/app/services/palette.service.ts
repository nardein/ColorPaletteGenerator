import { Injectable, signal } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Color } from '../models/color.model';

@Injectable({
  providedIn: 'root',
})
export class PaletteService {
  private readonly _palette = new BehaviorSubject<Color[]>([]);

  readonly palette$: Observable<Color[]> = this._palette.asObservable();

  constructor() {
    this.generateRandomPalette();
  }

  // genera un colore esadecimale casuale
  randomHex() {
    const hexChar = '0123456789abcdef';
    let result = '';
    for (let i = 0; i < 6; i++) {
      result += hexChar.charAt(Math.floor(Math.random() * 16));
    }
    return '#' + result;
  }

  // converte esadecimale in RGB
  hexToRgb(hex: string): { r: number; g: number; b: number } {
    const bigint = parseInt(hex.slice(1), 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
    return { r, g, b };
  }

  // converte esadecimale in HSL
  hexToHsl(hex: string): { h: number; s: number; l: number } {
    const { r, g, b } = this.hexToRgb(hex);
    const rNorm = r / 255;
    const gNorm = g / 255;
    const bNorm = b / 255;
    const max = Math.max(rNorm, gNorm, bNorm);
    const min = Math.min(rNorm, gNorm, bNorm);
    let h = 0,
      s = 0,
      l = (max + min) / 2;

    if (max !== min) {
      const d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      switch (max) {
        case rNorm:
          h = (gNorm - bNorm) / d + (gNorm < bNorm ? 6 : 0);
          break;
        case gNorm:
          h = (bNorm - rNorm) / d + 2;
          break;
        case bNorm:
          h = (rNorm - gNorm) / d + 4;
          break;
      }
      h /= 6;
    }
    return { h: Math.round(h * 360), s: Math.round(s * 100), l: Math.round(l * 100) };
  }

  hslToHex(h: number, s: number, l: number): string {
    s /= 100;
    l /= 100;

    const c = (1 - Math.abs(2 * l - 1)) * s;
    const x = c * (1 - Math.abs(((h / 60) % 2) - 1));
    const m = l - c / 2;
    let r = 0,
      g = 0,
      b = 0;

    if (0 <= h && h < 60) {
      r = c;
      g = x;
      b = 0;
    } else if (60 <= h && h < 120) {
      r = x;
      g = c;
      b = 0;
    } else if (120 <= h && h < 180) {
      r = 0;
      g = c;
      b = x;
    } else if (180 <= h && h < 240) {
      r = 0;
      g = x;
      b = c;
    } else if (240 <= h && h < 300) {
      r = x;
      g = 0;
      b = c;
    } else if (300 <= h && h < 360) {
      r = c;
      g = 0;
      b = x;
    }

    const toHex = (v: number) => {
      const hex = Math.round((v + m) * 255).toString(16);
      return hex.length === 1 ? '0' + hex : hex;
    };

    return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
  }

  /** genera una nuova palette random */
  generateRandomPalette(count: number = 5, mode: string = 'random'): void {
    const newPalette: Color[] = [];
    for (let i = 0; i < count; i++) {
      const hex = this.randomHex();
      newPalette.push({
        hex,
        rgb: this.hexToRgb(hex),
        hsl: this.hexToHsl(hex),
        locked: false,
        copied: signal(false),
      });
    }
    this._palette.next(newPalette);
  }

  //Genera una palette monocromatica
  generateMonoPalette(count: number): void {
    const hue = Math.random() * 360;
    const baseS = 60 + Math.random() * 20; // saturazione base 60-80%
    const minL = 15; // luminosità più scura
    const maxL = 80; // luminosità più chiara
    const step = (maxL - minL) / (count - 1);

    const newPalette: Color[] = [];

    for (let i = 0; i < count; i++) {
      const l = minL + i * step;
      const s = baseS + (Math.random() * 10 - 5); // variazione ±5%

      const hex = this.hslToHex(hue, s, l);
      const hsl = { h: hue, s, l };

      newPalette.push({
        hex,
        rgb: this.hexToRgb(hex),
        hsl,
        locked: false,
        copied: signal(false),
      });
    }
    newPalette.sort((a, b) => a.hsl.l - b.hsl.l);

    this._palette.next(newPalette);
  }

  //Genera una palette analoga
  generateAnalogousPalette(count: number): void {
    const baseHue = Math.random() * 360;
    const baseS = 60 + Math.random() * 20; // saturazione 60–80%
    const baseL = 50; // luminosità di partenza
    const angle = 30; // distanza tra i colori analoghi
    const half = Math.floor(count / 2);

    const newPalette: Color[] = [];

    for (let i = -half; i <= half; i++) {
      if (newPalette.length >= count) break;

      const h = (baseHue + i * angle + 360) % 360;
      const s = baseS + (Math.random() * 10 - 5); // piccola variazione
      const l = baseL + (Math.random() * 20 - 10); // ±10% sulla luminosità

      const hex = this.hslToHex(h, s, l);
      const hsl = { h, s, l };

      newPalette.push({
        hex,
        rgb: this.hexToRgb(hex),
        hsl,
        locked: false,
        copied: signal(false),
      });
    }

    this._palette.next(newPalette);
  }

  generateComplementaryPalette(count: number) {
    const baseHue = Math.random() * 360;
    const complHue = (baseHue + 180) % 360;
    const baseS = 60 + Math.random() * 20;
    const baseL = 40 + Math.random() * 2;

    const newPalette: Color[] = [];

    // esempio distribuzione su 5 colori
    const variations = [
      { h: baseHue, s: baseS, l: baseL - 15 }, // base più scuro
      { h: baseHue, s: baseS, l: baseL }, // base puro
      { h: complHue, s: baseS, l: baseL }, // complementare puro
      { h: complHue, s: baseS, l: baseL + 15 }, // complementare più chiaro
      { h: baseHue, s: baseS - 10, l: baseL + 10 }, // base con variazione
    ];

    for (let v of variations.slice(0, count)) {
      const hex = this.hslToHex(v.h, v.s, v.l);
      newPalette.push({
        hex,
        rgb: this.hexToRgb(hex),
        hsl: v,
        locked: false,
        copied: signal(false),
      });
    }

    newPalette.sort((a, b) => a.hsl.h - b.hsl.h);
    this._palette.next(newPalette);
  }

  /** blocca/sblocca un colore */
  toggleLock(index: number): void {
    // TODO: implementare lock/unlock
  }

  /** aggiorna manualmente un colore */
  updateColor(index: number, newColor: Color): void {
    // TODO: implementare update colore
  }

  /** snapshot dello stato corrente */
  getPalette(): Color[] {
    return this._palette.value;
  }
}
