# Descriptions for Consumption Preferences
![last-release](https://img.shields.io/github/tag/personality-insights/consumption-preferences.svg)
[![npm-version](https://img.shields.io/npm/v/personality-consumption-preferences.svg)](https://www.npmjs.com/package/personality-consumption-preferences)
[![npm-license](https://img.shields.io/npm/l/personality-consumption-preferences.svg)](https://www.npmjs.com/package/personality-trait-descriptions)
[![Build Status](https://travis-ci.org/personality-insights/consumption-preferences.svg?branch=master)](https://travis-ci.org/personality-insights/consumption-preferences)
[![codecov.io](https://codecov.io/github/personality-insights/consumption-preferences/coverage.svg?branch=master)](https://codecov.io/github/personality-insights/consumption-preferences?branch=master)
[![npm-downloads](https://img.shields.io/npm/dm/personality-consumption-preferences.svg)](https://www.npmjs.com/package/personality-consumption-preferences)

Obtain descriptions for Personality Insights' consumption preferences.

## Installation

```sh
$ npm install personality-consumption-preferences
```

## Usage

```JavaScript
  var PersonalityConsumptionPreferences = require('personality-consumption-preferences');

  // locale refers to the language to use - en, es or ja
  var consumptionPreferences = new PersonalityConsumptionPreferences({ locale: 'es'});

  // retrieve the consumption preference description for a specified consumption preference id (e.g., 'consumption_preferences_clothes_style')
  var clothesStylePreference  = consumptionPreferences.description('consumption_preferences_clothes_style');
  console.log('The preference description for consumption preference id consumption_preferences_clothes_style is ' + clothesStylePreference);

  ```

## License

This library is licensed under Apache 2.0. Full license text is
available in [LICENSE](LICENSE).
