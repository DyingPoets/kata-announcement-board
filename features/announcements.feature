# Announcement Board — Acceptance Scenarios
# Generated from Session 1 (BDD Writing for PMs)
# These scenarios are the contract — do not modify them during implementation

Feature: Announcement Board

  Background:
    Given the announcement board application is running
    And no announcements exist

  Scenario: HR manager publishes an announcement
    Given an HR manager is logged in
    When they publish an announcement titled "Office Closed Monday"
    Then all employees can see "Office Closed Monday" on the board

  Scenario: Urgent announcements appear at the top
    Given a standard announcement "Cafeteria Menu Update" exists
    When an HR manager publishes an urgent announcement "Building Evacuation Drill"
    Then "Building Evacuation Drill" appears above "Cafeteria Menu Update"

  Scenario: Expired announcement is not visible to employees
    Given an announcement "Summer Picnic" with an expiry of yesterday exists
    When an employee views the announcement board
    Then "Summer Picnic" is not visible

  Scenario: Employee sees empty state when no announcements exist
    When an employee views the announcement board
    Then they see a message indicating no announcements are available
