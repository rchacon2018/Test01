require('dotenv').config()

fixture(`This is first test`)
    .page(process.env.URL);

test('This is first test', async t => {
    await t
    .click('#remote-testing')
    .click('#tried-test-cafe')
    .click('#macos')
    .typeText('#comments', process.env.NAME)
    .click('#submit-buttont')
});
