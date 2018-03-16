export = PersonalityConsumptionPreferences;

declare type Locale = 'en' | 'es' | 'ja' | 'ko';
declare type Version = 'v3';

declare class PersonalityConsumptionPreferences {
  constructor(options?: { locale?: Locale, version?: Version });

  defaultOptions(): { locale: Locale, version: Version };

  description(consumption_preference_id: string): string;

  descriptions(): string[];
}
