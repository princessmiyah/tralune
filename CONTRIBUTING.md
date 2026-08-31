# Contributing

## Read this first

[`docs/SAFETY.md`](docs/SAFETY.md). It is a page long and it governs everything else in this repository. If a change conflicts with it, the change loses.

## Before you start

1. Read `docs/SAFETY.md`
2. Read `docs/SPEC.md` for the screen you're touching
3. Read `docs/DESIGN.md` if you're writing UI

## Working on this

```bash
npm install
npm run dev
```

Build and test in a phone viewport. Desktop is not the target and a layout that only works at 1200px wide is not done.

## Branches and commits

- Branch from `main`: `feature/scheduler-24h`, `fix/timezone-default`, `docs/safety-rules`
- Present-tense commit subjects: `Add 24-hour timeline to scheduler`
- Keep pull requests small enough to review in one sitting

## Pull request checklist

- [ ] Nothing in this change outputs, calculates, or implies a dose, quantity, taper, or dosing interval
- [ ] No LLM generates substance-specific content
- [ ] Emergency paths still work — `tel:000` link, red-flag modal fires on tap not on save
- [ ] Tested at 390px wide
- [ ] Tap targets are at least 44px
- [ ] Colours come from the palette in `docs/DESIGN.md`, not invented
- [ ] Copy is sentence case, no exclamation marks, no congratulating or scolding
- [ ] `docs/SPEC.md` updated if behaviour changed

## Copy

Write it the way you'd say it to someone having a rough day. Short, warm, plain. No "simply", no "just", no "please", no motivational language. Say the thing and stop.

## Adding activities

Activity libraries live in `src/data/activities.js`. Additions should be:

- Doable in under an hour by someone who feels awful
- Free, and possible alone at home
- Non-medical — no supplements, no remedies, no "take a"
- Tagged with an existing category where one fits

## Data

Everything stays on the device. A pull request that adds a backend, an account system, analytics, or any network call carrying user data is a significant product decision, not a technical one. Raise it as an issue first.
