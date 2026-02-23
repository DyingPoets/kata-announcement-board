# BDD Scenario Quality Checklist
*Based on Dave Farley, "Modern Software Engineering" and Gojko Adzic, "Specification by Example"*

Apply this checklist to every scenario before considering it done.

---

## ✅ Declarative (not imperative)

The scenario describes WHAT the system does, not HOW the user does it.

**Fail:** `When the user clicks the "Post" button`
**Pass:** `When an HR manager publishes an announcement`

Ask: Could this step be implemented with a completely different UI and still make sense?

---

## ✅ One behaviour per scenario

Each scenario tests exactly ONE observable outcome.

**Fail:** Scenario that tests both posting AND expiry in the same flow
**Pass:** Separate scenarios for posting, expiry, and urgent flagging

Ask: If I split this into two scenarios, would both still make sense?

---

## ✅ Business language throughout

No technical terms: no field names, no API endpoints, no CSS selectors.

**Fail:** `Given the announcement table has status = "active"`
**Pass:** `Given a published announcement exists`

Ask: Would a business stakeholder understand every word?

---

## ✅ Meaningful failure message

If this scenario fails, would the failure message tell a human what went wrong?

Ask: What would the error message say? Is it useful?

---

## ✅ Edge cases covered

Happy path is not enough. Consider:
- Zero state (no announcements)
- Boundary conditions (announcement expiring today vs. yesterday)
- Error states (posting with no title, setting expiry in the past)
