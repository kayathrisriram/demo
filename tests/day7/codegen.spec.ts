import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://accounts.google.com/v3/signin/identifier?continue=https%3A%2F%2Fmail.google.com%2Fmail%2Fu%2F0%2F&emr=1&followup=https%3A%2F%2Fmail.google.com%2Fmail%2Fu%2F0%2F&ifkv=AdBytiOI33oVCMVzkYmLHk8YSGKCEsnSoBogEf2AGqW5bsNwfzercAF5MSro5S_xtH3Ykq41VE1a4g&osid=1&passive=1209600&service=mail&flowName=GlifWebSignIn&flowEntry=ServiceLogin&dsh=S-1189514390%3A1756881873295866');
  await page.getByRole('textbox', { name: 'Email or phone' }).fill('hi');
  await page.getByRole('button', { name: 'Next' }).click();
});
test('test', async ({ page }) => {
  await page.goto('https://accounts.google.com/v3/signin/identifier?continue=https%3A%2F%2Fmail.google.com%2Fmail%2Fu%2F0%2F&emr=1&followup=https%3A%2F%2Fmail.google.com%2Fmail%2Fu%2F0%2F&ifkv=AdBytiOI33oVCMVzkYmLHk8YSGKCEsnSoBogEf2AGqW5bsNwfzercAF5MSro5S_xtH3Ykq41VE1a4g&osid=1&passive=1209600&service=mail&flowName=GlifWebSignIn&flowEntry=ServiceLogin&dsh=S-1189514390%3A1756881873295866');
  await page.getByRole('textbox', { name: 'Email or phone' }).fill('hi');
  await page.getByRole('button', { name: 'Next' }).click();
});