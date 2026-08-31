# Recovery module — functional spec

Read [`SAFETY.md`](SAFETY.md) first. Visual rules live in [`DESIGN.md`](DESIGN.md).

## App shell

Fixed bottom navigation, six tabs, icon above label:

**Recovery · Finances · Tasks · Journal · Fitness · Vision**

Only Recovery is built. The other five are placeholder screens.

---

## 1. Recovery hub

- Eyebrow: `TRALUNE` (uppercase, apricot, wide letter-spacing)
- Serif H1: **Recovery**
- Subtitle: "A calm place to log, track and structure your day. One step at a time."
- Four tappable cards — line icon left, serif title, one sentence beneath:

| Icon | Title | Sub-copy |
|---|---|---|
| pill | Substance log | Record what you took and when to see your pattern. |
| pulse line | Symptom tracker | Rate sleep, tremor, anxiety and more over time. |
| calendar + clock | Day scheduler | Fill empty hours with gentle, suitable activities. |
| document | Clinician summary | Export a readable summary for your GP or detox service. |

- Full-width **Emergency card** button — alert surface fill, alert border and text, siren icon
- Footer, small and grey, phone icon: "In an emergency now, call 000 (Australia)"

No disclaimer block on this screen.

---

## 2. Substance log

Header: back link, serif H1 **Substance log**, subtitle "A personal record of what you took and when."

Full-width primary button **+ Add an entry** expands an inline form card:

1. **Type** — chip row. Depressants · Opioids · Stimulants · Hallucinogens · Dissociatives. Nothing pre-selected.
2. **Substance** — second chip row, populated by the selected type, plus an **Other** chip revealing a free-text field:

| Type | Substances |
|---|---|
| Depressants | Alcohol · Benzodiazepines · Cannabis · GHB/GBL/1,4-BD |
| Opioids | Morphine · Oxycodone · Codeine · Heroin |
| Stimulants | Caffeine · Nicotine · Cocaine · Amphetamines |
| Hallucinogens | LSD · Psilocybin |
| Dissociatives | Ketamine · Nitrous oxide |

3. **Amount / note (optional)** — text, placeholder "Your own description"
4. **When** — date and time picker, defaulting to now in the **device's local timezone**
5. **Notes (optional)** — textarea
6. **Cancel** (secondary) and **Save** (primary)

Below: serif section heading **Your log**. Entries newest first — substance name, type tag, relative time ("2 hours ago"), any note. Each entry deletable. Empty state: "No entries yet. Add one above."

---

## 3. Symptom tracker

Header: back link, serif H1 **Symptom tracker**, subtitle "How are you feeling right now?"

Card with five sliders, 0–10, value shown in jade to the right of each label. All start at 0.

- Sleep quality
- Tremor
- Anxiety
- Jaw / muscle tension
- Nausea

Then:
- **Heart rate (bpm, optional)** — number input, placeholder "e.g. 80"
- **Notes (optional)** — textarea

### Red-flag panel

Alert-surface card, warning triangle, heading **"Any serious symptoms right now?"**

Five toggleable chips: Confusion · Hallucinations · Fever · Agitation · Racing heart. Selected chips fill with the alert colour.

**Tapping any chip immediately opens a modal**, before saving:

- Heading: "This can be serious"
- Body: these symptoms during withdrawal can need urgent medical care
- **Call 000** (alert-filled button, `tel:000`) and "I understand, continue logging"

The symptom is recorded either way. See `SAFETY.md` — this behaviour is not configurable.

### Save and chart

Full-width **Save check-in**. Each check-in timestamped in local time.

Serif section **Over time** — line chart of all five scores, y-axis 0–10, x-axis by date. Five series with a legend. Plot every series that has data; join points once there is more than one check-in; show markers so a single check-in is still visible.

---

## 4. Day scheduler

Header: back link, serif H1 **Day scheduler**, subtitle "Tap a time, choose what fills it."

Serif section **Today's timeline** — a **full 24-hour list, 00:00 to 23:00**, one row per hour.

This is not negotiable: the hardest hours in withdrawal are often between 2am and 5am, and those slots must exist. On load, auto-scroll so the current hour sits near the top with earlier hours reachable above. Mark the current hour subtly in apricot.

Empty rows: dashed border, "+ Add an activity". Filled rows: activity name, category tag, remove affordance.

### Booking flow

Tapping an empty row opens a bottom sheet. Header shows "Scheduling 06:00" in small grey with the current question as a serif heading, back chevron left, X right.

**Step 1 — "What's this for?"** — 2×2 icon tiles: Recovery (heart-pulse) · Personal (person) · Education (graduation cap) · Business (briefcase)

**Step 2, Recovery — "What are you recovering from?"**

| Title | Sub-copy |
|---|---|
| Injury | Rest and gentle mobility support healing. |
| Illness | Rest, hydration, and nourishment. |
| Trauma | Grounding and a sense of safety first. |
| Addiction / Withdrawal | Gentle activities suited to your withdrawal state. |

**Step 3, Addiction / Withdrawal — "Which drug class?"** — chip row of the five classes, with example substances shown as small grey text beneath the row for the selected class.

**Step 4 — "Pick an activity"** — list rows: activity name, grey category tag beneath, **Add** button right. Adding places it in the chosen hour and closes the sheet.

### Activity libraries

Static data in `src/data/activities.js`. Never LLM-generated.

**Injury** — Rest the injured area *(Rest)* · Ice or heat as advised *(Care)* · Elevate the injury *(Care)* · Drink water *(Nutrition)* · Eat a nourishing meal *(Nutrition)* · Gentle movement if cleared *(Movement)* · Nap / sleep *(Rest)*

**Illness** — Rest / sleep *(Rest)* · Sip warm fluids *(Nutrition)* · Drink water *(Nutrition)* · Eat light nourishing food *(Nutrition)* · Fresh air by a window *(Calm)* · Gentle movement if able *(Movement)* · Warm shower *(Sensory)*

**Trauma** — 5-4-3-2-1 grounding *(Grounding)* · Slow deep breathing *(Calm)* · Box breathing *(Calm)* · Journal one feeling *(Mental health)* · Safe-space visualization *(Calm)* · Hold something warm *(Sensory)* · Reach out to a safe person *(Connection)*

**Addiction / Withdrawal** — identical for every drug class, by design. Drink water *(Nutrition)* · Eat something small *(Nutrition)* · Rest / lie down *(Rest)* · Slow deep breathing *(Calm)* · Warm shower *(Sensory)* · Step outside for air *(Movement)* · Message a support person *(Connection)* · Distract with something easy *(Distraction)* · Log a symptom check-in *(Tracking)*

**Personal** — Read a book *(Personal)* · Tidy one small space *(Personal)* · Call a friend or family *(Connection)* · Walk outside *(Movement)* · Cook a nourishing meal *(Nutrition)* · Rest / do nothing *(Rest)*

**Education** — Focused study session *(Study)* · Watch a tutorial *(Study)* · Read an article *(Study)* · Practice a skill *(Practice)* · Review notes *(Study)* · Plan learning goals *(Planning)*

**Business** — Triage email *(Admin)* · Plan the day / priorities *(Planning)* · Deep work block *(Focus)* · Team check-in *(Meeting)* · Review goals *(Planning)* · Admin task *(Admin)*

Every list ends with a **Something else** row opening a free-text field.

---

## 5. Clinician summary

Header: back link, serif H1 **Clinician summary**, subtitle "A readable record to share with your care team."

- Date range: Last 7 days / Last 30 days / All time
- **Download PDF** (primary) and **Download .txt** (secondary)
- Serif section **Preview** — monospace card:

```
TRALUNE — RECOVERY SUMMARY
For a GP or detox service. Patient-generated, self-reported data.
Period: 24 Aug 2026 – 31 Aug 2026
Generated: 31 Aug 2026 at 03:38 pm

NOTE: This tool does not record or recommend doses or taper schedules.

=== SUBSTANCE LOG ===
- 30 Aug 2026 at 09:15 pm | Depressants | Alcohol | note: ...

=== SYMPTOM LOG ===
- 31 Aug 2026 at 03:26 pm | Sleep quality: 3/10 | Tremor: 3/10 |
  Anxiety: 8/10 | Jaw / muscle tension: 8/10 | Nausea: 3/10 |
  RED FLAGS: confusion

Emergency contacts: 000 (Australia)
```

At the bottom of this screen — and inside both exports — the full disclaimer in small italics. This is the only screen where it appears.

---

## 6. Emergency card

One calm screen, no scrolling if possible.

- Large **Call 000** button (`tel:000`)
- Australian support lines as tappable call rows: National Alcohol and Other Drug Hotline (1800 250 015) · Lifeline (13 11 14) · Beyond Blue (1300 22 4636)
- **My people** — one or two user-saved contacts (name + number) as call rows
- One line: "If you are unsure, call. It is always okay to call."

---

## Data model

All local. No backend, no accounts, no telemetry. All timestamps in device local time.

```js
substanceEntries   { id, type, substance, amountNote, timestamp, notes }
symptomCheckins    { id, timestamp, sleep, tremor, anxiety, jawTension,
                     nausea, heartRate, redFlags[], notes }
scheduledActivities{ id, date, hour, activityName, category, context, subContext }
emergencyContacts  { id, name, phone }
```

`context` is one of `recovery` / `personal` / `education` / `business`. `subContext` holds the recovery type and drug class where relevant.

---

## Terms & Conditions screen

Linked from the hub footer. Renders the contents of `TERMS.md` — the full medical disclaimer plus a plain-language privacy statement.
