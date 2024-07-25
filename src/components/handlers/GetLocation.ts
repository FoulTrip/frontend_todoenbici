type LocalesMap = {
  [locale: string]: string[];
};

export const localesMap: LocalesMap = {
  pt: ["pt-BR", "pt-PT"], // Portugués
  es: ["es"], // Español
  // Agrega aquí más idiomas y sus variantes
};

export const getLocaleFromLanguage = (language: string): string => {
  // Itera sobre las entradas del objeto localesMap
  for (const [locale, codes] of Object.entries(localesMap)) {
    // Si el idioma del navegador comienza con uno de los códigos en el array, retorna el locale
    if (codes.some((code) => language.startsWith(code))) {
      return locale;
    }
  }
  // Retorna un valor por defecto si no se encuentra una coincidencia
  return "es";
};
