# Announcement Board — BDD Writing for PMs

> **Branch:** `skill/bdd-writing-pm`
> **Skills:** R3 · BDD Writing (Farley Principles)
> **Audience:** PM

---

## For the Facilitator

### Session Overview

| | |
|---|---|
| **Kata** | 3: Announcement Board |
| **Session** | BDD Writing for PMs |
| **Skills** | R3 · BDD Writing (Farley Principles) |
| **Duration** | 2 hours (facilitated) + self-directed extension |
| **Slide Deck** | https://gamma.app/docs/am9xkgjhddaraw9 |
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

- Imperative steps: "clicks the Submit button", "selects from dropdown" — rewrite as outcomes
- Scenarios testing more than one behaviour — split them
- Missing edge cases: what happens when an expired announcement is viewed? When there are zero announcements?

### Facilitation Tips

- Read the first scenario aloud. Ask: "Could a non-technical stakeholder understand this?" If not, it's too imperative.
- Enforce the Farley checklist as a physical review — one person reads, one checks each criterion
- Three Amigos in action: pair a PM with an engineer to stress-test the language

### Extension / Coaching Office Hours

Participants can continue extension work independently and bring it to **Coaching Office Hours**.
At Office Hours, focus on: what decision did they make, why, and what would they change?

---

## For Participants (Developer · PM · UX)

### Getting Started

```bash
git clone https://github.com/DyingPoets/kata-announcement-board
git checkout skill/bdd-writing-pm
```

Open the Miro board and the Gamma slide deck — have both visible during the session.

- **Slides:** https://gamma.app/docs/am9xkgjhddaraw9
- **Miro Board:** https://miro.com/app/board/uXjVG8QBtV8%3D/

### What You'll Practice

- R3
- BDD Writing (Farley Principles)

### Your Starting State

You have:
- `user-stories/announcement-board-stories.md` — 3 rough user stories from the product spec
- `reference/farley-checklist.md` — the BDD quality checklist you'll apply

Your goal: write Gherkin scenarios that are declarative, single-behaviour, and stakeholder-readable.

### Step by Step

**Step 1:** Read the user stories. For each one, identify: what is the single observable behaviour? What are the edge cases?

**Step 2:** Write Gherkin scenarios using Given/When/Then. Apply the Farley checklist to each one before moving on.

**Step 3:** Anti-pattern hunt: find any imperative language ("clicks", "navigates to", "selects") and rewrite it declaratively.

### What Good Looks Like

Scenarios where the Given/When/Then reads like a business rule, not a test script. A PM, engineer, and QA person should all agree they describe the same behaviour.

See the `solutions/` directory for reference examples — but try the exercise first.

### Extension Work

- Write scenarios for: admin editing a published announcement, and role-based visibility (all staff vs managers only)
- Write a one-page "BDD for PMs" guide explaining the declarative principle to someone who's never seen it
- Your `.feature` file output will be used as the starting state for Session 2 (Eng BDD Implementation)

Bring your extension work to **Coaching Office Hours**. You'll get 15 minutes of focused feedback.

---

Part of the [PDLC Training Katas](https://github.com/DyingPoets) series.
