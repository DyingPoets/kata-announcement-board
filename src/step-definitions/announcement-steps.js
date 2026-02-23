/**
 * Announcement Board — Step Definitions
 *
 * RULES:
 * 1. Steps call AnnouncementPage methods ONLY — no direct DOM access here
 * 2. Each step does ONE thing
 * 3. Step text must match the .feature file exactly
 */

import { Given, When, Then } from '@cucumber/cucumber'
import { AnnouncementPage } from '../pages/AnnouncementPage.js'

let page

Given('the announcement board application is running', async () => {
  // TODO: initialise the test environment / browser
})

Given('no announcements exist', async () => {
  // TODO: use AnnouncementPage to clear all announcements
})

Given('an HR manager is logged in', async () => {
  // TODO: use AnnouncementPage to log in as HR manager
})

When('they publish an announcement titled {string}', async (title) => {
  // TODO: use AnnouncementPage.publishAnnouncement(title)
})

Then('all employees can see {string} on the board', async (title) => {
  // TODO: use AnnouncementPage.getVisibleAnnouncementTitles()
  // Assert: result includes title
})

Given('a standard announcement {string} exists', async (title) => {
  // TODO: use AnnouncementPage.publishAnnouncement(title)
})

When('an HR manager publishes an urgent announcement {string}', async (title) => {
  // TODO: use AnnouncementPage.publishUrgentAnnouncement(title)
})

Then('{string} appears above {string}', async (first, second) => {
  // TODO: use AnnouncementPage.getAnnouncementOrder()
  // Assert: indexOf(first) < indexOf(second)
})

Given('an announcement {string} with an expiry of yesterday exists', async (title) => {
  // TODO: use AnnouncementPage.publishAnnouncementWithExpiry(title, yesterday)
})

When('an employee views the announcement board', async () => {
  // TODO: use AnnouncementPage.viewBoardAsEmployee()
})

Then('{string} is not visible', async (title) => {
  // TODO: use AnnouncementPage.getVisibleAnnouncementTitles()
  // Assert: result does NOT include title
})

Then('they see a message indicating no announcements are available', async () => {
  // TODO: use AnnouncementPage.getEmptyStateMessage()
  // Assert: message is truthy
})
