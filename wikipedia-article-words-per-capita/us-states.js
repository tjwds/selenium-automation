const webdriver = require('selenium-webdriver');
const driver = new webdriver.Builder().forBrowser('chrome').build();
const delay = ms => new Promise(res => setTimeout(res, ms));

const usStates = ['Alabama','Alaska','American Samoa','Arizona','Arkansas','California','Colorado','Connecticut','Delaware','District of Columbia','Federated States of Micronesia','Florida','Georgia','Guam','Hawaii','Idaho','Illinois','Indiana','Iowa','Kansas','Kentucky','Louisiana','Maine','Marshall Islands','Maryland','Massachusetts','Michigan','Minnesota','Mississippi','Missouri','Montana','Nebraska','Nevada','New Hampshire','New Jersey','New Mexico','New York','North Carolina','North Dakota','Northern Mariana Islands','Ohio','Oklahoma','Oregon','Palau','Pennsylvania','Puerto Rico','Rhode Island','South Carolina','South Dakota','Tennessee','Texas','Utah','Vermont','Virgin Island','Virginia','Washington','West Virginia','Wisconsin','Wyoming'];

const processStates = async () => {
    for (let usState of usStates) {
        await driver.get(`https://en.wikipedia.org/wiki/${usState}`);
        const stateLength = await driver.executeScript("return document.getElementById('mw-content-text').textContent.split(/\\s/).length");
        console.log(usState, stateLength);
        await delay(3000);
    }
}

processStates()
