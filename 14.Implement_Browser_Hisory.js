
/**
 * Simulates browser navigation with back/forward support.
 *
 * Uses a doubly linked list:
 * - `back`  → previous page
 * - `front` → next page
 * - `currentPage` → page currently being viewed
 */
class HistoryPage {
  constructor(value) {
    this.value = value;
    this.front = null;
    this.back = null;
  }
}

class BrowserHistory {
  /**
   * @param {string} homepage - The initial URL
   */
  constructor(homepage) {
    // The homepage is the first node in our history.
    this.currentPage = new HistoryPage(homepage);
  }

  /**
   * @param {string} url - The URL to visit
   */
  visit(url) {
    // Create a new page and link it after the current page.
    const newPage = new HistoryPage(url);

    newPage.back = this.currentPage;
    this.currentPage.front = newPage;

    // Move the current page pointer to the newly visited page.
    this.currentPage = newPage;
  }

  /**
   * @param {number} steps - Number of steps to go back
   * @returns {string} The current URL after moving back
   */
  back(steps) {
    let currentPage = this.currentPage;

    // Move backwards until steps are exhausted or history ends.
    while (steps > 0 && currentPage.back !== null) {
      currentPage = currentPage.back;
      steps--;
    }

    this.currentPage = currentPage;

    return currentPage.value;
  }

  /**
   * @param {number} steps - Number of steps to go forward
   * @returns {string} The current URL after moving forward
   */
  forward(steps) {
    let currentPage = this.currentPage;

    // Move forwards until steps are exhausted or history ends.
    while (steps > 0 && currentPage.front !== null) {
      currentPage = currentPage.front;
      steps--;
    }

    this.currentPage = currentPage;

    return currentPage.value;
  }
}

// --- Smoke tests ---

const bh = new BrowserHistory("frontprep.com");

bh.visit("google.com");
bh.visit("facebook.com");
bh.visit("youtube.com");

console.log(bh.back(1)); // Expected: "facebook.com"
console.log(bh.back(1)); // Expected: "google.com"
console.log(bh.forward(1)); // Expected: "facebook.com"

bh.visit("linkedin.com");

console.log(bh.forward(2)); // Expected: "linkedin.com" (no forward history)
console.log(bh.back(2)); // Expected: "google.com"
console.log(bh.back(7)); // Expected: "frontprep.com" (clamped)
