$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("com.cucumber.example/home/belly.feature");
formatter.feature({
  "line": 2,
  "name": "Belly",
  "description": "",
  "id": "belly",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@portal"
    }
  ]
});
formatter.scenario({
  "line": 4,
  "name": "a few cukes",
  "description": "",
  "id": "belly;a-few-cukes",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "I have 42 cukes in my belly",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I wait 1 hour",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "my belly should growl",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "42",
      "offset": 7
    }
  ],
  "location": "BellyStepDefs.i_have_cukes_in_my_belly(int)"
});
formatter.result({
  "duration": 73795097,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 7
    }
  ],
  "location": "BellyStepDefs.i_wait_hour(int)"
});
formatter.result({
  "duration": 2491812,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "growl",
      "offset": 16
    }
  ],
  "location": "BellyStepDefs.my_belly_should_growl(String)"
});
formatter.result({
  "duration": 697773,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "a few cukes",
  "description": "",
  "id": "belly;a-few-cukes",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 10,
  "name": "I have 42 cukes in my belly",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "I wait 2 hour",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "my belly should growl",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "42",
      "offset": 7
    }
  ],
  "location": "BellyStepDefs.i_have_cukes_in_my_belly(int)"
});
formatter.result({
  "duration": 78598,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 7
    }
  ],
  "location": "BellyStepDefs.i_wait_hour(int)"
});
formatter.result({
  "duration": 1043333,
  "error_message": "java.lang.AssertionError: \nExpected: is \u003c1\u003e\n     but: was \u003c2\u003e\n\tat org.hamcrest.MatcherAssert.assertThat(MatcherAssert.java:20)\n\tat org.junit.Assert.assertThat(Assert.java:956)\n\tat org.junit.Assert.assertThat(Assert.java:923)\n\tat com.cucumber.example.home.BellyStepDefs.i_wait_hour(BellyStepDefs.java:24)\n\tat ✽.When I wait 2 hour(com.cucumber.example/home/belly.feature:11)\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "growl",
      "offset": 16
    }
  ],
  "location": "BellyStepDefs.my_belly_should_growl(String)"
});
formatter.result({
  "status": "skipped"
});
});