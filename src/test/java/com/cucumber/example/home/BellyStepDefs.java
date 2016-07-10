package com.cucumber.example.home;

import com.cucumber.example.Belly;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

import static org.hamcrest.CoreMatchers.is;
import static org.junit.Assert.assertThat;

public class BellyStepDefs {
    private Belly belly;
    private int waitingTime;

    @Given("^I have (\\d+) cukes in my belly$")
    public void i_have_cukes_in_my_belly(int cukes) {
        belly = new Belly();
        belly.eat(cukes);
    }

    @When("^I wait (\\d+) hour$")
    public void i_wait_hour(int waitingTime) {
        this.waitingTime = waitingTime;
        assertThat(waitingTime, is(1));
    }

    @Then("^my belly should (.*)$")
    public void my_belly_should_growl(String expectedSound) {
        String actualSound = belly.getSound(waitingTime);
        assertThat(actualSound, is(expectedSound));
    }
}