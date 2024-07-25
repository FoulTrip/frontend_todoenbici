// utils/localeUtils.ts

export const localesMap: Record<string, string[]> = {
  pt: ["pt-BR", "pt-PT"],
  es: ["es"],
  // Agrega aquí más idiomas y sus variantes
};

/**
 * Obtiene el locale correspondiente en el mapa de locales.
 * @param language - El idioma actual.
 * @param targetLocale - El locale objetivo al que deseas cambiar.
 * @returns La ruta en el idioma objetivo.
 */
export function convertLocaleToPath(
  language: string,
  targetLocale: string,
  path: string
): string {
  const languagePrefix = Object.keys(localesMap).find((locale) =>
    localesMap[locale].some((code) => language.startsWith(code))
  );

  if (languagePrefix && targetLocale in localesMap) {
    return `/${targetLocale}${path}`;
  }

  // Si no se puede determinar el locale de origen o destino, retorna la ruta original.
  return path;
}
