export interface ThemePalette {
  bg: string;
  text: string;
  toggle: string;
  button: string;
  container: string;
}

export const lightPalette: ThemePalette[] = [
  {
    bg: 'bg-lime-200',
    text: 'text-lime-900',
    toggle: 'bg-lime-200 inset-shadow-lime-950',
    button: 'bg-lime-700 text-lime-200 hover:bg-lime-500 hover:text-lime-900',
    container: 'bg-lime-400',
  },
  {
    bg: 'bg-green-200',
    text: 'text-green-900',
    toggle: 'bg-green-200 inset-shadow-green-950',
    button: 'bg-green-700 text-green-200 hover:bg-green-500 hover:text-green-900',
    container: 'bg-green-400',
  },
  {
    bg: 'bg-emerald-200',
    text: 'text-emerald-900',
    toggle: 'bg-emerald-200 inset-shadow-emerald-950',
    button: 'bg-emerald-700 text-emerald-200 hover:bg-emerald-500 hover:text-emerald-900',
    container: 'bg-emerald-400',
  },
  {
    bg: 'bg-red-200',
    text: 'text-red-900',
    toggle: 'bg-red-200 inset-shadow-red-950',
    button: 'bg-red-700 text-red-200 hover:bg-red-500 hover:text-red-900',
    container: 'bg-red-400',
  },
  {
    bg: 'bg-orange-200',
    text: 'text-orange-900',
    toggle: 'bg-orange-200 inset-shadow-orange-950',
    button: 'bg-orange-700 text-orange-200 hover:bg-orange-500 hover:text-orange-900',
    container: 'bg-orange-400',
  },
  {
    bg: 'bg-amber-200',
    text: 'text-amber-900',
    toggle: 'bg-amber-200 inset-shadow-amber-950',
    button: 'bg-amber-700 text-amber-200 hover:bg-amber-500 hover:text-amber-900',
    container: 'bg-amber-400',
  },
  {
    bg: 'bg-yellow-200',
    text: 'text-yellow-900',
    toggle: 'bg-yellow-200 inset-shadow-yellow-950',
    button: 'bg-yellow-700 text-yellow-200 hover:bg-yellow-500 hover:text-yellow-900',
    container: 'bg-yellow-400',
  },
  {
    bg: 'bg-teal-200',
    text: 'text-teal-900',
    toggle: 'bg-teal-200 inset-shadow-teal-950',
    button: 'bg-teal-700 text-teal-200 hover:bg-teal-500 hover:text-teal-900',
    container: 'bg-teal-400',
  },
  {
    bg: 'bg-cyan-200',
    text: 'text-cyan-900',
    toggle: 'bg-cyan-200 inset-shadow-cyan-950',
    button: 'bg-cyan-700 text-cyan-200 hover:bg-cyan-500 hover:text-cyan-900',
    container: 'bg-cyan-400',
  },
  {
    bg: 'bg-sky-200',
    text: 'text-sky-900',
    toggle: 'bg-sky-200 inset-shadow-sky-950',
    button: 'bg-sky-700 text-sky-200 hover:bg-sky-500 hover:text-sky-900',
    container: 'bg-sky-400',
  },
  {
    bg: 'bg-blue-200',
    text: 'text-blue-900',
    toggle: 'bg-blue-200 inset-shadow-blue-950',
    button: 'bg-blue-700 text-blue-200 hover:bg-blue-500 hover:text-blue-900',
    container: 'bg-blue-400',
  },
  {
    bg: 'bg-indigo-200',
    text: 'text-indigo-900',
    toggle: 'bg-indigo-200 inset-shadow-indigo-950',
    button: 'bg-indigo-700 text-indigo-200 hover:bg-indigo-500 hover:text-indigo-900',
    container: 'bg-indigo-400',
  },
  {
    bg: 'bg-violet-200',
    text: 'text-violet-900',
    toggle: 'bg-violet-200 inset-shadow-violet-950',
    button: 'bg-violet-700 text-violet-200 hover:bg-violet-500 hover:text-violet-900',
    container: 'bg-violet-400',
  },
  {
    bg: 'bg-purple-200',
    text: 'text-purple-900',
    toggle: 'bg-purple-200 inset-shadow-purple-950',
    button: 'bg-purple-700 text-purple-200 hover:bg-purple-500 hover:text-purple-900',
    container: 'bg-purple-400',
  },
  {
    bg: 'bg-fuchsia-200',
    text: 'text-fuchsia-900',
    toggle: 'bg-fuchsia-200 inset-shadow-fuchsia-950',
    button: 'bg-fuchsia-700 text-fuchsia-200 hover:bg-fuchsia-500 hover:text-fuchsia-900',
    container: 'bg-fuchsia-400',
  },
  {
    bg: 'bg-pink-200',
    text: 'text-pink-900',
    toggle: 'bg-pink-200 inset-shadow-pink-950',
    button: 'bg-pink-700 text-pink-200 hover:bg-pink-500 hover:text-pink-900',
    container: 'bg-pink-400',
  },
  {
    bg: 'bg-rose-200',
    text: 'text-rose-900',
    toggle: 'bg-rose-200 inset-shadow-rose-950',
    button: 'bg-rose-700 text-rose-200 hover:bg-rose-500 hover:text-rose-900',
    container: 'bg-rose-400',
  },
];

export const darkPalette: ThemePalette[] = [
  {
    bg: 'bg-lime-900',
    text: 'text-lime-200',
    toggle: 'bg-lime-900 inset-shadow-lime-200',
    button: 'bg-lime-600 text-lime-200 hover:bg-lime-400',
    container: 'bg-lime-700',
  },
  {
    bg: 'bg-green-900',
    text: 'text-green-200',
    toggle: 'bg-green-900 inset-shadow-green-200',
    button: 'bg-green-600 text-green-200 hover:bg-green-400',
    container: 'bg-green-700',
  },
  {
    bg: 'bg-emerald-900',
    text: 'text-emerald-200',
    toggle: 'bg-emerald-900 inset-shadow-emerald-200',
    button: 'bg-emerald-600 text-emerald-200 hover:bg-emerald-400',
    container: 'bg-emerald-700',
  },
  {
    bg: 'bg-red-900',
    text: 'text-red-200',
    toggle: 'bg-red-900 inset-shadow-red-200',
    button: 'bg-red-600 text-red-200 hover:bg-red-400',
    container: 'bg-red-700',
  },
  {
    bg: 'bg-orange-900',
    text: 'text-orange-200',
    toggle: 'bg-orange-900 inset-shadow-orange-200',
    button: 'bg-orange-600 text-orange-200 hover:bg-orange-400',
    container: 'bg-orange-700',
  },
  {
    bg: 'bg-amber-900',
    text: 'text-amber-200',
    toggle: 'bg-amber-900 inset-shadow-amber-200',
    button: 'bg-amber-600 text-amber-200 hover:bg-amber-400',
    container: 'bg-amber-700',
  },
  {
    bg: 'bg-yellow-900',
    text: 'text-yellow-200',
    toggle: 'bg-yellow-900 inset-shadow-yellow-200',
    button: 'bg-yellow-600 text-yellow-200 hover:bg-yellow-400',
    container: 'bg-yellow-700',
  },
  {
    bg: 'bg-teal-900',
    text: 'text-teal-200',
    toggle: 'bg-teal-900 inset-shadow-teal-200',
    button: 'bg-teal-600 text-teal-200 hover:bg-teal-400',
    container: 'bg-teal-700',
  },
  {
    bg: 'bg-cyan-900',
    text: 'text-cyan-200',
    toggle: 'bg-cyan-900 inset-shadow-cyan-200',
    button: 'bg-cyan-600 text-cyan-200 hover:bg-cyan-400',
    container: 'bg-cyan-700',
  },
  {
    bg: 'bg-sky-900',
    text: 'text-sky-200',
    toggle: 'bg-sky-900 inset-shadow-sky-200',
    button: 'bg-sky-600 text-sky-200 hover:bg-sky-400',
    container: 'bg-sky-700',
  },
  {
    bg: 'bg-blue-900',
    text: 'text-blue-200',
    toggle: 'bg-blue-900 inset-shadow-blue-200',
    button: 'bg-blue-600 text-blue-200 hover:bg-blue-400',
    container: 'bg-blue-700',
  },
  {
    bg: 'bg-indigo-900',
    text: 'text-indigo-200',
    toggle: 'bg-indigo-900 inset-shadow-indigo-200',
    button: 'bg-indigo-600 text-indigo-200 hover:bg-indigo-400',
    container: 'bg-indigo-700',
  },
  {
    bg: 'bg-violet-900',
    text: 'text-violet-200',
    toggle: 'bg-violet-900 inset-shadow-violet-200',
    button: 'bg-violet-600 text-violet-200 hover:bg-violet-400',
    container: 'bg-violet-700',
  },
  {
    bg: 'bg-purple-900',
    text: 'text-purple-200',
    toggle: 'bg-purple-900 inset-shadow-purple-200',
    button: 'bg-purple-600 text-purple-200 hover:bg-purple-400',
    container: 'bg-purple-700',
  },
  {
    bg: 'bg-fuchsia-900',
    text: 'text-fuchsia-200',
    toggle: 'bg-fuchsia-900 inset-shadow-fuchsia-200',
    button: 'bg-fuchsia-600 text-fuchsia-200 hover:bg-fuchsia-400',
    container: 'bg-fuchsia-700',
  },
  {
    bg: 'bg-pink-900',
    text: 'text-pink-200',
    toggle: 'bg-pink-900 inset-shadow-pink-200',
    button: 'bg-pink-600 text-pink-200 hover:bg-pink-400',
    container: 'bg-pink-700',
  },
  {
    bg: 'bg-rose-900',
    text: 'text-rose-200',
    toggle: 'bg-rose-900 inset-shadow-rose-200',
    button: 'bg-rose-600 text-rose-200 hover:bg-rose-400',
    container: 'bg-rose-700',
  },
];

export const defaultLightPalette: ThemePalette = {
  bg: 'bg-gray-200',
  text: 'text-gray-900',
  toggle: 'bg-gray-200 inset-shadow-gray-950',
  button: 'bg-gray-700 text-gray-200 hover:bg-gray-500 hover:text-gray-900',
  container: 'bg-gray-400',
};

export const defaultDarkPalette: ThemePalette = {
  bg: 'bg-gray-900',
  text: 'text-gray-200',
  toggle: 'bg-gray-900 inset-shadow-gray-200',
  button: 'bg-gray-600 text-gray-200 hover:bg-gray-400 hover:text-gray-900',
  container: 'bg-gray-700',
};
