# Descriptions for Consumption Preferences
[![Build Status](https://travis-ci.org/personality-insights/consumption-preferences.svg?branch=master)](https://travis-ci.org/personality-insights/consumption-preferences)

Obtain descriptions for Personality Insights' consumption preferences.

## Installation

```sh
$ npm install personality-consumption-preferences
```

## Usage

```js
  var PersonalityConsumptionPreferences = require('personality-consumption-preferences');

  // locale refers to the language to use - en, es or ja.  default is a locale of 'en' and a version of 'v3'
  // currently only v3 is supported
  var consumptionPreferences = new PersonalityConsumptionPreferences({ locale: 'es', version: 'v3'});

  // retrieve the consumption preference description for a specified consumption preference id (e.g., 'consumption_preferences_clothes_style')
  var clothesStylePreference  = consumptionPreferences.description('consumption_preferences_clothes_style');
  console.log('The preference description for consumption preference id consumption_preferences_clothes_style is ' + clothesStylePreference);
  ```

## License

This library is licensed under Apache 2.0. Full license text is
available in [LICENSE](LICENSE).
