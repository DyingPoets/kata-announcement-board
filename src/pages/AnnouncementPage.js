/**
 * AnnouncementPage — Abstraction Layer
 *
 * This is the ONLY place that talks to the DOM or HTTP.
 * Step definitions call these methods; they never touch selectors directly.
 *
 * Pattern: Freeman & Pryce, "Growing Object-Oriented Software, Guided by Tests"
 */

export class AnnouncementPage {

  /**
   * Log in with the given role.
   * @param {'hr_manager' | 'employee'} role
   */
  async loginAs(role) {
    // TODO: implement
  }

  /**
   * Publish a standard announcement.
   * @param {string} title
   */
  async publishAnnouncement(title) {
    // TODO: implement
  }

  /**
   * Publish an urgent announcement (appears at top, visually distinct).
   * @param {string} title
   */
  async publishUrgentAnnouncement(title) {
    // TODO: implement
  }

  /**
   * Publish an announcement with a specific expiry date.
   * @param {string} title
   * @param {Date} expiryDate
   */
  async publishAnnouncementWithExpiry(title, expiryDate) {
    // TODO: implement
  }

  /**
   * Returns titles of all currently visible announcements, in display order.
   * @returns {Promise<string[]>}
   */
  async getVisibleAnnouncementTitles() {
    // TODO: implement
    return []
  }

  /**
   * Switch to employee view (read-only).
   */
  async viewBoardAsEmployee() {
    // TODO: implement
  }

  /**
   * Returns the empty state message, or null if announcements exist.
   * @returns {Promise<string | null>}
   */
  async getEmptyStateMessage() {
    // TODO: implement
    return null
  }

  /**
   * Remove all announcements (test teardown helper).
   */
  async clearAllAnnouncements() {
    // TODO: implement
  }
}
