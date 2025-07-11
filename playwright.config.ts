import {defineConfig, devices} from '@playwright/test';

export let baseUrl = process.env.BASE_URL || 'https://testautomationpractice.blogspot.com/';

export default defineConfig({
  globalSetup: require.resolve('./support/global-setup'),
  globalTeardown: require.resolve('./support/global-teardown'),
  testDir: './tests',
  timeout: 500_00,
  expect: {
    timeout: 500_00
  },
  workers: 3,
  retries: 1,
  reporter: 'html',
  // ---------------------------------
  use: {
    baseURL: baseUrl,
    headless: false,
    viewport: {width: 1280, height: 720},
    screenshot: 'only-on-failure',
    trace: 'retain-on-failure',
  },
  // ----------------------------------
  projects: [
    {name: 'Chromium', use: {...devices['Desktop Chrome']}}
  ]
});

