# Announcement Board — BDD Implementation for Engineers

> **Branch:** `skill/bdd-implementation-eng`
> **Skills:** T2 · BDD Implementation (Freeman/Pryce Abstraction Layer)
> **Audience:** Eng

---

## For the Facilitator

### Session Overview

| | |
|---|---|
| **Kata** | 3: Announcement Board |
| **Session** | BDD Implementation for Engineers |
| **Skills** | T2 · BDD Implementation (Freeman/Pryce Abstraction Layer) |
| **Duration** | 2 hours (facilitated) + self-directed extension |
| **Slide Deck** | https://gamma.app/docs/kihjubbo9lv1nsr |
| **Miro Board** | https://miro.com/app/board/uXjVG8QBtV8%3D/ |

### Session Timing

| Time | Activity |
|------|----------|
| 0:00–0:15 | Concept framing — open the Gamma slide deck and walk through each slide |
| 0:15–0:30 | Orient to Miro board + this starting state |
| 0:30–1:05 | Step 1 exercise (Miro — Context frame) |
| 1:05–1:25 | Step 2 exercise (Miro — Exercise frame) |
| 1:25–1:30 | Step 3 wrap-up |
| 1:30–1:50 | Debrief — use Miro Debrief frame prompts |
| 1:50–2:00 | Extension brief — point to Extension Zone in Miro |

### What to Watch For

- Step definitions that contain CSS selectors or raw HTTP calls — redirect to the abstraction layer
- Steps that do too much (long chains of actions) — push for one action per step
- Tests that pass but test the wrong thing — ask "what would make this test fail?"

### Facilitation Tips

- Print the Freeman/Pryce abstraction diagram on the wall — refer to it during exercise
- When someone writes a selector in a step: "Where does that belong? Not here — it belongs in AnnouncementPage."
- At debrief: change one field name in the Page Object and ask who breaks. Nobody should. That's the point.

### Extension / Coaching Office Hours

Participants can continue extension work independently and bring it to **Coaching Office Hours**.
At Office Hours, focus on: what decision did they make, why, and what would they change?

---

## For Participants (Developer · PM · UX)

### Getting Started

```bash
git clone https://github.com/DyingPoets/kata-announcement-board
git checkout skill/bdd-implementation-eng
```

Open the Miro board and the Gamma slide deck — have both visible during the session.

- **Slides:** https://gamma.app/docs/kihjubbo9lv1nsr
- **Miro Board:** https://miro.com/app/board/uXjVG8QBtV8%3D/

### What You'll Practice

- T2
- BDD Implementation (Freeman/Pryce Abstraction Layer)

### Your Starting State

You have:
- `features/announcements.feature` — pre-written Gherkin scenarios (output from Session 1)
- `src/step-definitions/announcement-steps.js` — stubs for each step
- `src/pages/AnnouncementPage.js` — empty page object skeleton

Your goal: implement the steps using the page object as the only bridge to the DOM/API.

### Step by Step

**Step 1:** Read all the step stubs. For each one: implement the step definition to call `AnnouncementPage` — never the DOM directly.

**Step 2:** Build out `AnnouncementPage.js`: methods that encapsulate all UI interaction. Steps should read like business actions.

**Step 3:** Run the test suite. Fix failing tests without editing the `.feature` files — the scenarios are the contract.

### What Good Looks Like

You can rename a CSS class in the component and only `AnnouncementPage.js` needs to change. No step definition file breaks.

See the `solutions/` directory for reference examples — but try the exercise first.

### Extension Work

- Add a full lifecycle test: create → publish → expire → archive
- Add a REST API test layer using the same step definitions but a different page object
- Bring the full test suite run to Coaching Office Hours — run it together

Bring your extension work to **Coaching Office Hours**. You'll get 15 minutes of focused feedback.

---

Part of the [PDLC Training Katas](https://github.com/DyingPoets) series.
