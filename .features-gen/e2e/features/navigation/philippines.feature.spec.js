// Generated from: e2e\features\navigation\philippines.feature
import { test } from "playwright-bdd";

test.describe('BGovPH Philippines Navigation Bar', () => {

  test('Navigate to About the Philippines', async ({ Given, When, Then, And, page }) => { 
    await Given('the user is in BetterGovPH home page', null, { page }); 
    await When('the user hovers on the Philippines navigation bar', null, { page }); 
    await And('the user clicks on the "About the Philippines" submenu', null, { page }); 
    await Then('the header "About the Philippines" should be visible', null, { page }); 
    await And('the sub-URL should be "/philippines/about"', null, { page }); 
    await And('the user hovers on the BetterGovPH logo', null, { page }); 
  });

  test('Navigate to History', async ({ Given, When, Then, And, page }) => { 
    await Given('the user is in BetterGovPH home page', null, { page }); 
    await When('the user hovers on the Philippines navigation bar', null, { page }); 
    await And('the user clicks on the "History" submenu', null, { page }); 
    await Then('the header "History of the Philippines" should be visible', null, { page }); 
    await And('the sub-URL should be "/philippines/history"', null, { page }); 
    await And('the user hovers on the BetterGovPH logo', null, { page }); 
  });

  test('Navigate to Culture', async ({ Given, When, Then, And, page }) => { 
    await Given('the user is in BetterGovPH home page', null, { page }); 
    await When('the user hovers on the Philippines navigation bar', null, { page }); 
    await And('the user clicks on the "Culture" submenu', null, { page }); 
    await Then('the header "Filipino Culture" should be visible', null, { page }); 
    await And('the sub-URL should be "/philippines/culture"', null, { page }); 
    await And('the user hovers on the BetterGovPH logo', null, { page }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('e2e\\features\\navigation\\philippines.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":23,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":24,"keywordType":"Context","textWithKeyword":"Given the user is in BetterGovPH home page","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":25,"keywordType":"Action","textWithKeyword":"When the user hovers on the Philippines navigation bar","stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":26,"keywordType":"Action","textWithKeyword":"And the user clicks on the \"About the Philippines\" submenu","stepMatchArguments":[{"group":{"start":23,"value":"\"About the Philippines\"","children":[{"start":24,"value":"About the Philippines","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":10,"gherkinStepLine":27,"keywordType":"Outcome","textWithKeyword":"Then the header \"About the Philippines\" should be visible","stepMatchArguments":[{"group":{"start":11,"value":"\"About the Philippines\"","children":[{"start":12,"value":"About the Philippines","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":11,"gherkinStepLine":28,"keywordType":"Outcome","textWithKeyword":"And the sub-URL should be \"/philippines/about\"","stepMatchArguments":[{"group":{"start":22,"value":"\"/philippines/about\"","children":[{"start":23,"value":"/philippines/about","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":12,"gherkinStepLine":29,"keywordType":"Outcome","textWithKeyword":"And the user hovers on the BetterGovPH logo","stepMatchArguments":[]}]},
  {"pwTestLine":15,"pickleLine":31,"tags":[],"steps":[{"pwStepLine":16,"gherkinStepLine":32,"keywordType":"Context","textWithKeyword":"Given the user is in BetterGovPH home page","stepMatchArguments":[]},{"pwStepLine":17,"gherkinStepLine":33,"keywordType":"Action","textWithKeyword":"When the user hovers on the Philippines navigation bar","stepMatchArguments":[]},{"pwStepLine":18,"gherkinStepLine":34,"keywordType":"Action","textWithKeyword":"And the user clicks on the \"History\" submenu","stepMatchArguments":[{"group":{"start":23,"value":"\"History\"","children":[{"start":24,"value":"History","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":19,"gherkinStepLine":35,"keywordType":"Outcome","textWithKeyword":"Then the header \"History of the Philippines\" should be visible","stepMatchArguments":[{"group":{"start":11,"value":"\"History of the Philippines\"","children":[{"start":12,"value":"History of the Philippines","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":20,"gherkinStepLine":36,"keywordType":"Outcome","textWithKeyword":"And the sub-URL should be \"/philippines/history\"","stepMatchArguments":[{"group":{"start":22,"value":"\"/philippines/history\"","children":[{"start":23,"value":"/philippines/history","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":21,"gherkinStepLine":37,"keywordType":"Outcome","textWithKeyword":"And the user hovers on the BetterGovPH logo","stepMatchArguments":[]}]},
  {"pwTestLine":24,"pickleLine":39,"tags":[],"steps":[{"pwStepLine":25,"gherkinStepLine":40,"keywordType":"Context","textWithKeyword":"Given the user is in BetterGovPH home page","stepMatchArguments":[]},{"pwStepLine":26,"gherkinStepLine":41,"keywordType":"Action","textWithKeyword":"When the user hovers on the Philippines navigation bar","stepMatchArguments":[]},{"pwStepLine":27,"gherkinStepLine":42,"keywordType":"Action","textWithKeyword":"And the user clicks on the \"Culture\" submenu","stepMatchArguments":[{"group":{"start":23,"value":"\"Culture\"","children":[{"start":24,"value":"Culture","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":28,"gherkinStepLine":43,"keywordType":"Outcome","textWithKeyword":"Then the header \"Filipino Culture\" should be visible","stepMatchArguments":[{"group":{"start":11,"value":"\"Filipino Culture\"","children":[{"start":12,"value":"Filipino Culture","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":29,"gherkinStepLine":44,"keywordType":"Outcome","textWithKeyword":"And the sub-URL should be \"/philippines/culture\"","stepMatchArguments":[{"group":{"start":22,"value":"\"/philippines/culture\"","children":[{"start":23,"value":"/philippines/culture","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":30,"gherkinStepLine":45,"keywordType":"Outcome","textWithKeyword":"And the user hovers on the BetterGovPH logo","stepMatchArguments":[]}]},
]; // bdd-data-end