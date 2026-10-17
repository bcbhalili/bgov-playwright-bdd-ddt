// Generated from: e2e\features\navigation\philippines.feature
import { test } from "playwright-bdd";

test.describe('BGovPH Philippines Navigation Bar', () => {

  test('Navigate to About the Philippines', async ({ Given, When, Then, And, page }) => { 
    await Given('the user is in BetterGovPH home page', null, { page }); 
    await When('the user hovers on the Philippines navigation bar', null, { page }); 
    await And('the user clicks on the "About the Philippines" submenu', null, { page }); 
    await Then('the header "About the Philippines" should be visible', null, { page }); 
    await And('the sub-URL should be "/philippines/about"', null, { page }); 
    await And('the user moves the mouse in the top-left corner of the screen', null, { page }); 
    await And('the submenu should not be visible', null, { page }); 
    await And('the "Philippine landscape" heading image should be visible', null, { page }); 
  });

  test('Navigate to History', async ({ Given, When, Then, And, page }) => { 
    await Given('the user is in BetterGovPH home page', null, { page }); 
    await When('the user hovers on the Philippines navigation bar', null, { page }); 
    await And('the user clicks on the "History" submenu', null, { page }); 
    await Then('the header "History of the Philippines" should be visible', null, { page }); 
    await And('the sub-URL should be "/philippines/history"', null, { page }); 
    await And('the user moves the mouse in the top-left corner of the screen', null, { page }); 
    await And('the submenu should not be visible', null, { page }); 
    await And('the "Historical Philippines" heading image should be visible', null, { page }); 
  });

  test('Navigate to Culture', async ({ Given, When, Then, And, page }) => { 
    await Given('the user is in BetterGovPH home page', null, { page }); 
    await When('the user hovers on the Philippines navigation bar', null, { page }); 
    await And('the user clicks on the "Culture" submenu', null, { page }); 
    await Then('the header "Filipino Culture" should be visible', null, { page }); 
    await And('the sub-URL should be "/philippines/culture"', null, { page }); 
    await And('the user moves the mouse in the top-left corner of the screen', null, { page }); 
    await And('the submenu should not be visible', null, { page }); 
    await And('the "Filipino Culture" heading image should be visible', null, { page }); 
  });

  test('Navigate to Regions', async ({ Given, When, Then, And, page }) => { 
    await Given('the user is in BetterGovPH home page', null, { page }); 
    await When('the user hovers on the Philippines navigation bar', null, { page }); 
    await And('the user clicks on the "Regions" submenu', null, { page }); 
    await Then('the header "Regions of the Philippines" should be visible', null, { page }); 
    await And('the sub-URL should be "/philippines/regions"', null, { page }); 
    await And('the user moves the mouse in the top-left corner of the screen', null, { page }); 
    await And('the submenu should not be visible', null, { page }); 
    await And('the "Philippine Regions" heading image should be visible', null, { page }); 
  });

  test('Navigate to Map', async ({ Given, When, Then, And, page }) => { 
    await Given('the user is in BetterGovPH home page', null, { page }); 
    await When('the user hovers on the Philippines navigation bar', null, { page }); 
    await And('the user clicks on the "Map" submenu', null, { page }); 
    await Then('the BGovPH home button should be visible', null, { page }); 
    await And('the search region field should be visible', null, { page }); 
    await And('the sub-URL should be "/philippines/map"', null, { page }); 
  });

  test('Navigate to Hotlines', async ({ Given, When, Then, And, page }) => { 
    await Given('the user is in BetterGovPH home page', null, { page }); 
    await When('the user hovers on the Philippines navigation bar', null, { page }); 
    await And('the user clicks on the "Hotlines" submenu', null, { page }); 
    await Then('the header "Philippines Emergency Hotlines" should be visible', null, { page }); 
    await And('the sub-URL should be "/philippines/hotlines"', null, { page }); 
    await And('the user moves the mouse in the top-left corner of the screen', null, { page }); 
    await And('the submenu should not be visible', null, { page }); 
  });

  test('Navigate to Holidays', async ({ Given, When, Then, And, page }) => { 
    await Given('the user is in BetterGovPH home page', null, { page }); 
    await When('the user hovers on the Philippines navigation bar', null, { page }); 
    await And('the user clicks on the "Holidays" submenu', null, { page }); 
    await Then('the header "Philippine Public Holidays 2026" should be visible', null, { page }); 
    await And('the sub-URL should be "/philippines/holidays"', null, { page }); 
    await And('the user moves the mouse in the top-left corner of the screen', null, { page }); 
    await And('the submenu should not be visible', null, { page }); 
  });

  test('Navigate to Forex', async ({ Given, When, Then, And, page }) => { 
    await Given('the user is in BetterGovPH home page', null, { page }); 
    await When('the user hovers on the Philippines navigation bar', null, { page }); 
    await And('the user clicks on the "Forex" submenu', null, { page }); 
    await Then('the header "Currencies" should be visible', null, { page }); 
    await And('the sub-URL should be "/data/forex"', null, { page }); 
    await And('the user moves the mouse in the top-left corner of the screen', null, { page }); 
    await And('the submenu should not be visible', null, { page }); 
  });

  test('Navigate to Weather', async ({ Given, When, Then, And, page }) => { 
    await Given('the user is in BetterGovPH home page', null, { page }); 
    await When('the user hovers on the Philippines navigation bar', null, { page }); 
    await And('the user clicks on the "Weather" submenu', null, { page }); 
    await Then('the header "Cities" should be visible', null, { page }); 
    await And('"manila" city should be visible', null, { page }); 
    await And('"cebu" city should be visible', null, { page }); 
    await And('"davao" city should be visible', null, { page }); 
    await And('"baguio" city should be visible', null, { page }); 
    await And('the sub-URL should be "/data/weather"', null, { page }); 
    await And('the user moves the mouse in the top-left corner of the screen', null, { page }); 
    await And('the submenu should not be visible', null, { page }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('e2e\\features\\navigation\\philippines.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":23,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":24,"keywordType":"Context","textWithKeyword":"Given the user is in BetterGovPH home page","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":25,"keywordType":"Action","textWithKeyword":"When the user hovers on the Philippines navigation bar","stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":26,"keywordType":"Action","textWithKeyword":"And the user clicks on the \"About the Philippines\" submenu","stepMatchArguments":[{"group":{"start":23,"value":"\"About the Philippines\"","children":[{"start":24,"value":"About the Philippines","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":10,"gherkinStepLine":27,"keywordType":"Outcome","textWithKeyword":"Then the header \"About the Philippines\" should be visible","stepMatchArguments":[{"group":{"start":11,"value":"\"About the Philippines\"","children":[{"start":12,"value":"About the Philippines","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":11,"gherkinStepLine":28,"keywordType":"Outcome","textWithKeyword":"And the sub-URL should be \"/philippines/about\"","stepMatchArguments":[{"group":{"start":22,"value":"\"/philippines/about\"","children":[{"start":23,"value":"/philippines/about","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":12,"gherkinStepLine":29,"keywordType":"Outcome","textWithKeyword":"And the user moves the mouse in the top-left corner of the screen","stepMatchArguments":[]},{"pwStepLine":13,"gherkinStepLine":30,"keywordType":"Outcome","textWithKeyword":"And the submenu should not be visible","stepMatchArguments":[]},{"pwStepLine":14,"gherkinStepLine":31,"keywordType":"Outcome","textWithKeyword":"And the \"Philippine landscape\" heading image should be visible","stepMatchArguments":[{"group":{"start":4,"value":"\"Philippine landscape\"","children":[{"start":5,"value":"Philippine landscape","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":17,"pickleLine":33,"tags":[],"steps":[{"pwStepLine":18,"gherkinStepLine":34,"keywordType":"Context","textWithKeyword":"Given the user is in BetterGovPH home page","stepMatchArguments":[]},{"pwStepLine":19,"gherkinStepLine":35,"keywordType":"Action","textWithKeyword":"When the user hovers on the Philippines navigation bar","stepMatchArguments":[]},{"pwStepLine":20,"gherkinStepLine":36,"keywordType":"Action","textWithKeyword":"And the user clicks on the \"History\" submenu","stepMatchArguments":[{"group":{"start":23,"value":"\"History\"","children":[{"start":24,"value":"History","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":21,"gherkinStepLine":37,"keywordType":"Outcome","textWithKeyword":"Then the header \"History of the Philippines\" should be visible","stepMatchArguments":[{"group":{"start":11,"value":"\"History of the Philippines\"","children":[{"start":12,"value":"History of the Philippines","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":22,"gherkinStepLine":38,"keywordType":"Outcome","textWithKeyword":"And the sub-URL should be \"/philippines/history\"","stepMatchArguments":[{"group":{"start":22,"value":"\"/philippines/history\"","children":[{"start":23,"value":"/philippines/history","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":23,"gherkinStepLine":39,"keywordType":"Outcome","textWithKeyword":"And the user moves the mouse in the top-left corner of the screen","stepMatchArguments":[]},{"pwStepLine":24,"gherkinStepLine":40,"keywordType":"Outcome","textWithKeyword":"And the submenu should not be visible","stepMatchArguments":[]},{"pwStepLine":25,"gherkinStepLine":41,"keywordType":"Outcome","textWithKeyword":"And the \"Historical Philippines\" heading image should be visible","stepMatchArguments":[{"group":{"start":4,"value":"\"Historical Philippines\"","children":[{"start":5,"value":"Historical Philippines","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":28,"pickleLine":43,"tags":[],"steps":[{"pwStepLine":29,"gherkinStepLine":44,"keywordType":"Context","textWithKeyword":"Given the user is in BetterGovPH home page","stepMatchArguments":[]},{"pwStepLine":30,"gherkinStepLine":45,"keywordType":"Action","textWithKeyword":"When the user hovers on the Philippines navigation bar","stepMatchArguments":[]},{"pwStepLine":31,"gherkinStepLine":46,"keywordType":"Action","textWithKeyword":"And the user clicks on the \"Culture\" submenu","stepMatchArguments":[{"group":{"start":23,"value":"\"Culture\"","children":[{"start":24,"value":"Culture","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":32,"gherkinStepLine":47,"keywordType":"Outcome","textWithKeyword":"Then the header \"Filipino Culture\" should be visible","stepMatchArguments":[{"group":{"start":11,"value":"\"Filipino Culture\"","children":[{"start":12,"value":"Filipino Culture","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":33,"gherkinStepLine":48,"keywordType":"Outcome","textWithKeyword":"And the sub-URL should be \"/philippines/culture\"","stepMatchArguments":[{"group":{"start":22,"value":"\"/philippines/culture\"","children":[{"start":23,"value":"/philippines/culture","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":34,"gherkinStepLine":49,"keywordType":"Outcome","textWithKeyword":"And the user moves the mouse in the top-left corner of the screen","stepMatchArguments":[]},{"pwStepLine":35,"gherkinStepLine":50,"keywordType":"Outcome","textWithKeyword":"And the submenu should not be visible","stepMatchArguments":[]},{"pwStepLine":36,"gherkinStepLine":51,"keywordType":"Outcome","textWithKeyword":"And the \"Filipino Culture\" heading image should be visible","stepMatchArguments":[{"group":{"start":4,"value":"\"Filipino Culture\"","children":[{"start":5,"value":"Filipino Culture","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":39,"pickleLine":53,"tags":[],"steps":[{"pwStepLine":40,"gherkinStepLine":54,"keywordType":"Context","textWithKeyword":"Given the user is in BetterGovPH home page","stepMatchArguments":[]},{"pwStepLine":41,"gherkinStepLine":55,"keywordType":"Action","textWithKeyword":"When the user hovers on the Philippines navigation bar","stepMatchArguments":[]},{"pwStepLine":42,"gherkinStepLine":56,"keywordType":"Action","textWithKeyword":"And the user clicks on the \"Regions\" submenu","stepMatchArguments":[{"group":{"start":23,"value":"\"Regions\"","children":[{"start":24,"value":"Regions","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":43,"gherkinStepLine":57,"keywordType":"Outcome","textWithKeyword":"Then the header \"Regions of the Philippines\" should be visible","stepMatchArguments":[{"group":{"start":11,"value":"\"Regions of the Philippines\"","children":[{"start":12,"value":"Regions of the Philippines","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":44,"gherkinStepLine":58,"keywordType":"Outcome","textWithKeyword":"And the sub-URL should be \"/philippines/regions\"","stepMatchArguments":[{"group":{"start":22,"value":"\"/philippines/regions\"","children":[{"start":23,"value":"/philippines/regions","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":45,"gherkinStepLine":59,"keywordType":"Outcome","textWithKeyword":"And the user moves the mouse in the top-left corner of the screen","stepMatchArguments":[]},{"pwStepLine":46,"gherkinStepLine":60,"keywordType":"Outcome","textWithKeyword":"And the submenu should not be visible","stepMatchArguments":[]},{"pwStepLine":47,"gherkinStepLine":61,"keywordType":"Outcome","textWithKeyword":"And the \"Philippine Regions\" heading image should be visible","stepMatchArguments":[{"group":{"start":4,"value":"\"Philippine Regions\"","children":[{"start":5,"value":"Philippine Regions","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":50,"pickleLine":63,"tags":[],"steps":[{"pwStepLine":51,"gherkinStepLine":64,"keywordType":"Context","textWithKeyword":"Given the user is in BetterGovPH home page","stepMatchArguments":[]},{"pwStepLine":52,"gherkinStepLine":65,"keywordType":"Action","textWithKeyword":"When the user hovers on the Philippines navigation bar","stepMatchArguments":[]},{"pwStepLine":53,"gherkinStepLine":66,"keywordType":"Action","textWithKeyword":"And the user clicks on the \"Map\" submenu","stepMatchArguments":[{"group":{"start":23,"value":"\"Map\"","children":[{"start":24,"value":"Map","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":54,"gherkinStepLine":67,"keywordType":"Outcome","textWithKeyword":"Then the BGovPH home button should be visible","stepMatchArguments":[]},{"pwStepLine":55,"gherkinStepLine":68,"keywordType":"Outcome","textWithKeyword":"And the search region field should be visible","stepMatchArguments":[]},{"pwStepLine":56,"gherkinStepLine":69,"keywordType":"Outcome","textWithKeyword":"And the sub-URL should be \"/philippines/map\"","stepMatchArguments":[{"group":{"start":22,"value":"\"/philippines/map\"","children":[{"start":23,"value":"/philippines/map","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":59,"pickleLine":71,"tags":[],"steps":[{"pwStepLine":60,"gherkinStepLine":72,"keywordType":"Context","textWithKeyword":"Given the user is in BetterGovPH home page","stepMatchArguments":[]},{"pwStepLine":61,"gherkinStepLine":73,"keywordType":"Action","textWithKeyword":"When the user hovers on the Philippines navigation bar","stepMatchArguments":[]},{"pwStepLine":62,"gherkinStepLine":74,"keywordType":"Action","textWithKeyword":"And the user clicks on the \"Hotlines\" submenu","stepMatchArguments":[{"group":{"start":23,"value":"\"Hotlines\"","children":[{"start":24,"value":"Hotlines","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":63,"gherkinStepLine":75,"keywordType":"Outcome","textWithKeyword":"Then the header \"Philippines Emergency Hotlines\" should be visible","stepMatchArguments":[{"group":{"start":11,"value":"\"Philippines Emergency Hotlines\"","children":[{"start":12,"value":"Philippines Emergency Hotlines","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":64,"gherkinStepLine":76,"keywordType":"Outcome","textWithKeyword":"And the sub-URL should be \"/philippines/hotlines\"","stepMatchArguments":[{"group":{"start":22,"value":"\"/philippines/hotlines\"","children":[{"start":23,"value":"/philippines/hotlines","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":65,"gherkinStepLine":77,"keywordType":"Outcome","textWithKeyword":"And the user moves the mouse in the top-left corner of the screen","stepMatchArguments":[]},{"pwStepLine":66,"gherkinStepLine":78,"keywordType":"Outcome","textWithKeyword":"And the submenu should not be visible","stepMatchArguments":[]}]},
  {"pwTestLine":69,"pickleLine":80,"tags":[],"steps":[{"pwStepLine":70,"gherkinStepLine":81,"keywordType":"Context","textWithKeyword":"Given the user is in BetterGovPH home page","stepMatchArguments":[]},{"pwStepLine":71,"gherkinStepLine":82,"keywordType":"Action","textWithKeyword":"When the user hovers on the Philippines navigation bar","stepMatchArguments":[]},{"pwStepLine":72,"gherkinStepLine":83,"keywordType":"Action","textWithKeyword":"And the user clicks on the \"Holidays\" submenu","stepMatchArguments":[{"group":{"start":23,"value":"\"Holidays\"","children":[{"start":24,"value":"Holidays","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":73,"gherkinStepLine":84,"keywordType":"Outcome","textWithKeyword":"Then the header \"Philippine Public Holidays 2026\" should be visible","stepMatchArguments":[{"group":{"start":11,"value":"\"Philippine Public Holidays 2026\"","children":[{"start":12,"value":"Philippine Public Holidays 2026","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":74,"gherkinStepLine":85,"keywordType":"Outcome","textWithKeyword":"And the sub-URL should be \"/philippines/holidays\"","stepMatchArguments":[{"group":{"start":22,"value":"\"/philippines/holidays\"","children":[{"start":23,"value":"/philippines/holidays","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":75,"gherkinStepLine":86,"keywordType":"Outcome","textWithKeyword":"And the user moves the mouse in the top-left corner of the screen","stepMatchArguments":[]},{"pwStepLine":76,"gherkinStepLine":87,"keywordType":"Outcome","textWithKeyword":"And the submenu should not be visible","stepMatchArguments":[]}]},
  {"pwTestLine":79,"pickleLine":89,"tags":[],"steps":[{"pwStepLine":80,"gherkinStepLine":90,"keywordType":"Context","textWithKeyword":"Given the user is in BetterGovPH home page","stepMatchArguments":[]},{"pwStepLine":81,"gherkinStepLine":91,"keywordType":"Action","textWithKeyword":"When the user hovers on the Philippines navigation bar","stepMatchArguments":[]},{"pwStepLine":82,"gherkinStepLine":92,"keywordType":"Action","textWithKeyword":"And the user clicks on the \"Forex\" submenu","stepMatchArguments":[{"group":{"start":23,"value":"\"Forex\"","children":[{"start":24,"value":"Forex","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":83,"gherkinStepLine":93,"keywordType":"Outcome","textWithKeyword":"Then the header \"Currencies\" should be visible","stepMatchArguments":[{"group":{"start":11,"value":"\"Currencies\"","children":[{"start":12,"value":"Currencies","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":84,"gherkinStepLine":94,"keywordType":"Outcome","textWithKeyword":"And the sub-URL should be \"/data/forex\"","stepMatchArguments":[{"group":{"start":22,"value":"\"/data/forex\"","children":[{"start":23,"value":"/data/forex","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":85,"gherkinStepLine":95,"keywordType":"Outcome","textWithKeyword":"And the user moves the mouse in the top-left corner of the screen","stepMatchArguments":[]},{"pwStepLine":86,"gherkinStepLine":96,"keywordType":"Outcome","textWithKeyword":"And the submenu should not be visible","stepMatchArguments":[]}]},
  {"pwTestLine":89,"pickleLine":98,"tags":[],"steps":[{"pwStepLine":90,"gherkinStepLine":99,"keywordType":"Context","textWithKeyword":"Given the user is in BetterGovPH home page","stepMatchArguments":[]},{"pwStepLine":91,"gherkinStepLine":100,"keywordType":"Action","textWithKeyword":"When the user hovers on the Philippines navigation bar","stepMatchArguments":[]},{"pwStepLine":92,"gherkinStepLine":101,"keywordType":"Action","textWithKeyword":"And the user clicks on the \"Weather\" submenu","stepMatchArguments":[{"group":{"start":23,"value":"\"Weather\"","children":[{"start":24,"value":"Weather","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":93,"gherkinStepLine":102,"keywordType":"Outcome","textWithKeyword":"Then the header \"Cities\" should be visible","stepMatchArguments":[{"group":{"start":11,"value":"\"Cities\"","children":[{"start":12,"value":"Cities","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":94,"gherkinStepLine":103,"keywordType":"Outcome","textWithKeyword":"And \"manila\" city should be visible","stepMatchArguments":[{"group":{"start":0,"value":"\"manila\"","children":[{"start":1,"value":"manila","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":95,"gherkinStepLine":104,"keywordType":"Outcome","textWithKeyword":"And \"cebu\" city should be visible","stepMatchArguments":[{"group":{"start":0,"value":"\"cebu\"","children":[{"start":1,"value":"cebu","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":96,"gherkinStepLine":105,"keywordType":"Outcome","textWithKeyword":"And \"davao\" city should be visible","stepMatchArguments":[{"group":{"start":0,"value":"\"davao\"","children":[{"start":1,"value":"davao","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":97,"gherkinStepLine":106,"keywordType":"Outcome","textWithKeyword":"And \"baguio\" city should be visible","stepMatchArguments":[{"group":{"start":0,"value":"\"baguio\"","children":[{"start":1,"value":"baguio","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":98,"gherkinStepLine":107,"keywordType":"Outcome","textWithKeyword":"And the sub-URL should be \"/data/weather\"","stepMatchArguments":[{"group":{"start":22,"value":"\"/data/weather\"","children":[{"start":23,"value":"/data/weather","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":99,"gherkinStepLine":108,"keywordType":"Outcome","textWithKeyword":"And the user moves the mouse in the top-left corner of the screen","stepMatchArguments":[]},{"pwStepLine":100,"gherkinStepLine":109,"keywordType":"Outcome","textWithKeyword":"And the submenu should not be visible","stepMatchArguments":[]}]},
]; // bdd-data-end