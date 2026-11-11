// Generated from: e2e\features\search.feature
import { test } from "playwright-bdd";

test.describe('Search for Services and Directory Items', () => {

  test('Search to Apply for NBI Multipurpose Clearance', async ({ Given, When, Then, And, page }) => { 
    await Given('the user is in BetterGovPH home page', null, { page }); 
    await And('the search field should be visible', null, { page }); 
    await When('the user provides a search term "Apply for NBI Multipurpose Clearance"', null, { page }); 
    await Then('the result "Apply for NBI Multipurpose Clearance" should be visible', null, { page }); 
    await When('the user clicks on the result "Apply for NBI Multipurpose Clearance"', null, { page }); 
    await Then('the user should be redirected to "https://clearance.nbi.gov.ph/"', null, { page }); 
  });

  test('Search to Register for a Taxpayer Identification Number (TIN)', async ({ Given, When, Then, And, page }) => { 
    await Given('the user is in BetterGovPH home page', null, { page }); 
    await And('the search field should be visible', null, { page }); 
    await When('the user provides a search term "Register for a Taxpayer Identification Number (TIN)"', null, { page }); 
    await Then('the result "Register for a Taxpayer Identification Number (TIN)" should be visible', null, { page }); 
    await When('the user clicks on the result "Register for a Taxpayer Identification Number (TIN)"', null, { page }); 
    await Then('the user should be redirected to "https://orus.bir.gov.ph/"', null, { page }); 
  });

  test('Search to Check Patient\'s PhilHealth Eligibility Status upon Admission', async ({ Given, When, Then, And, page }) => { 
    await Given('the user is in BetterGovPH home page', null, { page }); 
    await And('the search field should be visible', null, { page }); 
    await When('the user provides a search term "Check Patient\'s PhilHealth Eligibility Status upon Admission"', null, { page }); 
    await Then('the result "Check Patient\'s PhilHealth Eligibility Status upon Admission" should be visible', null, { page }); 
    await When('the user clicks on the result "Check Patient\'s PhilHealth Eligibility Status upon Admission"', null, { page }); 
    await Then('the user should be redirected to "https://cec.philhealth.gov.ph"', null, { page }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('e2e\\features\\search.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":17,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":18,"keywordType":"Context","textWithKeyword":"Given the user is in BetterGovPH home page","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":19,"keywordType":"Context","textWithKeyword":"And the search field should be visible","stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":20,"keywordType":"Action","textWithKeyword":"When the user provides a search term \"Apply for NBI Multipurpose Clearance\"","stepMatchArguments":[{"group":{"start":32,"value":"\"Apply for NBI Multipurpose Clearance\"","children":[{"start":33,"value":"Apply for NBI Multipurpose Clearance","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":10,"gherkinStepLine":21,"keywordType":"Outcome","textWithKeyword":"Then the result \"Apply for NBI Multipurpose Clearance\" should be visible","stepMatchArguments":[{"group":{"start":11,"value":"\"Apply for NBI Multipurpose Clearance\"","children":[{"start":12,"value":"Apply for NBI Multipurpose Clearance","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":11,"gherkinStepLine":22,"keywordType":"Action","textWithKeyword":"When the user clicks on the result \"Apply for NBI Multipurpose Clearance\"","stepMatchArguments":[{"group":{"start":30,"value":"\"Apply for NBI Multipurpose Clearance\"","children":[{"start":31,"value":"Apply for NBI Multipurpose Clearance","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":12,"gherkinStepLine":23,"keywordType":"Outcome","textWithKeyword":"Then the user should be redirected to \"https://clearance.nbi.gov.ph/\"","stepMatchArguments":[{"group":{"start":33,"value":"\"https://clearance.nbi.gov.ph/\"","children":[{"start":34,"value":"https://clearance.nbi.gov.ph/","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":15,"pickleLine":25,"tags":[],"steps":[{"pwStepLine":16,"gherkinStepLine":26,"keywordType":"Context","textWithKeyword":"Given the user is in BetterGovPH home page","stepMatchArguments":[]},{"pwStepLine":17,"gherkinStepLine":27,"keywordType":"Context","textWithKeyword":"And the search field should be visible","stepMatchArguments":[]},{"pwStepLine":18,"gherkinStepLine":28,"keywordType":"Action","textWithKeyword":"When the user provides a search term \"Register for a Taxpayer Identification Number (TIN)\"","stepMatchArguments":[{"group":{"start":32,"value":"\"Register for a Taxpayer Identification Number (TIN)\"","children":[{"start":33,"value":"Register for a Taxpayer Identification Number (TIN)","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":19,"gherkinStepLine":29,"keywordType":"Outcome","textWithKeyword":"Then the result \"Register for a Taxpayer Identification Number (TIN)\" should be visible","stepMatchArguments":[{"group":{"start":11,"value":"\"Register for a Taxpayer Identification Number (TIN)\"","children":[{"start":12,"value":"Register for a Taxpayer Identification Number (TIN)","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":20,"gherkinStepLine":30,"keywordType":"Action","textWithKeyword":"When the user clicks on the result \"Register for a Taxpayer Identification Number (TIN)\"","stepMatchArguments":[{"group":{"start":30,"value":"\"Register for a Taxpayer Identification Number (TIN)\"","children":[{"start":31,"value":"Register for a Taxpayer Identification Number (TIN)","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":21,"gherkinStepLine":31,"keywordType":"Outcome","textWithKeyword":"Then the user should be redirected to \"https://orus.bir.gov.ph/\"","stepMatchArguments":[{"group":{"start":33,"value":"\"https://orus.bir.gov.ph/\"","children":[{"start":34,"value":"https://orus.bir.gov.ph/","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":24,"pickleLine":33,"tags":[],"steps":[{"pwStepLine":25,"gherkinStepLine":34,"keywordType":"Context","textWithKeyword":"Given the user is in BetterGovPH home page","stepMatchArguments":[]},{"pwStepLine":26,"gherkinStepLine":35,"keywordType":"Context","textWithKeyword":"And the search field should be visible","stepMatchArguments":[]},{"pwStepLine":27,"gherkinStepLine":36,"keywordType":"Action","textWithKeyword":"When the user provides a search term \"Check Patient's PhilHealth Eligibility Status upon Admission\"","stepMatchArguments":[{"group":{"start":32,"value":"\"Check Patient's PhilHealth Eligibility Status upon Admission\"","children":[{"start":33,"value":"Check Patient's PhilHealth Eligibility Status upon Admission","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":28,"gherkinStepLine":37,"keywordType":"Outcome","textWithKeyword":"Then the result \"Check Patient's PhilHealth Eligibility Status upon Admission\" should be visible","stepMatchArguments":[{"group":{"start":11,"value":"\"Check Patient's PhilHealth Eligibility Status upon Admission\"","children":[{"start":12,"value":"Check Patient's PhilHealth Eligibility Status upon Admission","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":29,"gherkinStepLine":38,"keywordType":"Action","textWithKeyword":"When the user clicks on the result \"Check Patient's PhilHealth Eligibility Status upon Admission\"","stepMatchArguments":[{"group":{"start":30,"value":"\"Check Patient's PhilHealth Eligibility Status upon Admission\"","children":[{"start":31,"value":"Check Patient's PhilHealth Eligibility Status upon Admission","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":30,"gherkinStepLine":39,"keywordType":"Outcome","textWithKeyword":"Then the user should be redirected to \"https://cec.philhealth.gov.ph\"","stepMatchArguments":[{"group":{"start":33,"value":"\"https://cec.philhealth.gov.ph\"","children":[{"start":34,"value":"https://cec.philhealth.gov.ph","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]}]},
]; // bdd-data-end