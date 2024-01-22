import type de from "@/messages/de.json";
import type en from "@/messages/en.json";

export const locales = ["de", "en"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export type Messages = typeof en;

export interface Schema {
	message: Messages;
}

export function isValidLocale(value: string): value is Locale {
	return locales.includes(value as Locale);
}

export interface Translations extends Record<Locale, Messages> {
	de: typeof de;
	en: typeof en;
}
