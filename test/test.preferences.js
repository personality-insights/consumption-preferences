/**
 * Copyright 2015 IBM Corp. All Rights Reserved.
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

const assert = require('chai').assert;
const PersonalityConsumptionPreferences  = require('../lib/index');

describe('preferences', () => {

  it('get default (en locale, v3 version) preference description: consumption_preferences_clothes_style', () => {
    const consumptionPreferences = new PersonalityConsumptionPreferences();
    assert.equal(consumptionPreferences.description('consumption_preferences_clothes_style'), 'prefer style when buying clothes');
    assert.equal(consumptionPreferences.descriptions().length, 52);
    assert.equal(consumptionPreferences.descriptions()[4], 'prefer style when buying clothes');
  });

  it('get English preference description (default version): consumption_preferences_clothes_style', () => {
    const consumptionPreferences = new PersonalityConsumptionPreferences({locale : 'en'});
    assert.equal(consumptionPreferences.description('consumption_preferences_clothes_style'), 'prefer style when buying clothes');
  });

  it('get Spanish preference description (default version): consumption_preferences_clothes_style', () => {
    const consumptionPreferences = new PersonalityConsumptionPreferences({locale : 'es'});
    assert.equal(consumptionPreferences.description('consumption_preferences_clothes_style'), 'prefiera el estilo al comprar ropa');
  });

  it('get Japanese preference description (default version): consumption_preferences_clothes_style', () => {
    const consumptionPreferences = new PersonalityConsumptionPreferences({locale : 'ja'});
    assert.equal(consumptionPreferences.description('consumption_preferences_clothes_style'), '衣服を買うときはスタイルを優先する');
  });

  it('get Korean preference description (default version): consumption_preferences_clothes_style', () => {
    const consumptionPreferences = new PersonalityConsumptionPreferences({locale : 'ko'});
    assert.equal(consumptionPreferences.description('consumption_preferences_clothes_style'), '옷을 살 때 스타일을 선호합니다');
  });

  it('get English preference description (v3 version specified): consumption_preferences_volunteering_time', () => {
    const consumptionPreferences = new PersonalityConsumptionPreferences({locale : 'en', version : 'v3'});
    assert.equal(consumptionPreferences.description('consumption_preferences_volunteering_time'), 'have spent time volunteering');
  });

  it('get Spanish preference description (v3 version specified): consumption_preferences_volunteering_time', () => {
    const consumptionPreferences = new PersonalityConsumptionPreferences({locale : 'es', version : 'v3'});
    assert.equal(consumptionPreferences.description('consumption_preferences_volunteering_time'), 'haya dedicado parte de su tiempo al voluntariado');
  });

  it('get Japanese preference description (v3 version specified): consumption_preferences_volunteering_time', () => {
    const consumptionPreferences = new PersonalityConsumptionPreferences({locale : 'ja', version : 'v3'});
    assert.equal(consumptionPreferences.description('consumption_preferences_volunteering_time'), 'ボランティア活動に参加したことがある');
  });

  it('get Korean preference description (v3 version specified): consumption_preferences_volunteering_time', () => {
    const consumptionPreferences = new PersonalityConsumptionPreferences({locale : 'ko', version : 'v3'});
    assert.equal(consumptionPreferences.description('consumption_preferences_volunteering_time'), '자원봉사활동에 참여한 적이 있습니다');
  });

});
