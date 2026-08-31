# Tralune

A calm, mobile-first life operating system. Six modules — Recovery, Finances, Tasks, Journal, Fitness, Vision — in one app, built for people who want everything in one place without being nagged by it.

This repository currently contains the **Recovery** module.

---

## ⚠️ Before anything else

Tralune is a **logging and time-structuring tool only**. It does not generate, recommend, or calculate taper schedules, doses, or dosing intervals, and nothing in this repository should ever be built to do so.

Withdrawal can be dangerous and can be fatal. Tralune is not a substitute for medical care.

If you are contributing code, read [`docs/SAFETY.md`](docs/SAFETY.md) before you read anything else. It is short, and it is not optional.

---

## What Recovery does

A place to record what's happening and to fill empty hours with gentle, suitable activities — whether someone is recovering from an injury, an illness, trauma, or addiction and withdrawal.

| Screen | What it does |
|---|---|
| **Substance log** | Records what was taken and when. Type → substance → optional note → timestamp. |
| **Symptom tracker** | Five 0–10 sliders (sleep, tremor, anxiety, jaw/muscle tension, nausea), optional heart rate and notes, plus a red-flag panel for serious symptoms. Charts scores over time. |
| **Day scheduler** | A full 24-hour timeline. Tap an empty hour, answer two or three short questions, and get a list of suitable activities to drop into it. |
| **Clinician summary** | Exports a plain, readable record of logs and check-ins as PDF or .txt, for a GP or detox service. |
| **Emergency card** | 000, Australian support lines, and the user's own saved contacts, one tap away. |

## What Recovery deliberately does not do

- No dose, quantity, taper, or timing calculations or suggestions
- No AI-generated substance-specific guidance
- No "safe amount", "next dose", or countdown-to-next-use logic
- No streaks, sobriety counters, or anything that punishes a relapse
- No gamification, no congratulating, no shaming

---

## Tech

Assumed stack — adjust this section once the build is generated:

- React + Vite
- Tailwind CSS
- Recharts (or similar) for the symptom chart
- Browser `localStorage` for all persistence — no backend, no accounts, no telemetry

## Getting started

```bash
npm install
npm run dev
```

The app is mobile-first. Test it in a phone viewport (390 × 844 or similar), not a desktop window.

## Project structure

```
src/
  components/      shared UI — chip selectors, cards, sheets
  screens/
    recovery/      hub, substance log, symptom tracker, scheduler, summary, emergency
  data/
    activities.js  the activity libraries
  lib/
    storage.js     localStorage read/write
    export.js      clinician summary generation
docs/              specs, design system, safety rules
```

---

## Data and privacy

Everything a user enters — substance entries, symptom check-ins, scheduled activities, emergency contacts — is stored **locally in their own browser**. Nothing is uploaded. Nothing is shared. Clearing browser data deletes it.

This is health data plus substance-use data, which is about as sensitive as personal data gets. Any future change that moves this off-device is a significant decision and needs explicit, informed consent from the user, not a checkbox.

## Documentation

| Document | What's in it |
|---|---|
| [`docs/SAFETY.md`](docs/SAFETY.md) | Safety rules and hard non-goals. Read first. |
| [`docs/SPEC.md`](docs/SPEC.md) | Full functional spec — every screen, flow, field and activity list. |
| [`docs/DESIGN.md`](docs/DESIGN.md) | Colour palette, typography, components, tone of voice. |
| [`docs/BUILD-PROMPT.md`](docs/BUILD-PROMPT.md) | The generation prompt used to scaffold the module. |
| [`docs/AUDIT-2026-08-31.md`](docs/AUDIT-2026-08-31.md) | Review of the first preview build and what it changed. |
| [`TERMS.md`](TERMS.md) | Terms, disclaimer, and privacy statement shown in-app. |
| [`CONTRIBUTING.md`](CONTRIBUTING.md) | How to work on this. |

## Roadmap

- [ ] Recovery module built to spec
- [ ] Emergency card contacts
- [ ] PDF export
- [ ] Terms & Conditions screen
- [ ] Remaining five tabs: Finances, Tasks, Journal, Fitness, Vision

## Licence

See [`LICENSE`](LICENSE).
