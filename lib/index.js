/**
 * Copyright 2016 IBM Corp. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

const _ = require('underscore');
const extend = _.extend;
const pick = _.pick;
const pairs = _.pairs;

const I18nDataV3 = require('./i18n/v3');
const defaultVersion = 'v3';

class PersonalityConsumptionPreferences {

  constructor(options) {
    this._options = extend(this.defaultOptions(), pick(options, 'locale', 'version'));
    this._version = typeof this._options.version !== 'undefined' ? this._options.version : defaultVersion;
    this._i18n = new I18nDataV3(this._options.locale);
    this._data = this._i18n.data();
  }

  defaultOptions() {
    return {
      locale: 'en',
      version: 'v3'
    };
  }

  description(consumption_preference_id) {
    return this._data[consumption_preference_id];
  }

  descriptions() {
    return pairs(this._data).map(function(p) { return p[1]; });
  }
}

module.exports = PersonalityConsumptionPreferences;
