# Build prompt

The generation prompt used to scaffold the Recovery module in an AI app builder (Lovable). Kept for reproducibility — if the module is regenerated from scratch, start here, then reconcile against `SPEC.md`, which is the source of truth if the two ever disagree.

---


Build the **Recovery** module of a mobile-first web app called **Tralune**.

Tralune is a personal life-operating-system app. Recovery is one of six tabs. It is a **logging and time-structuring tool** — a place for someone recovering from injury, illness, trauma, or addiction/withdrawal to record what's happening and fill their day with gentle, suitable activities. It never generates, recommends, or calculates doses, taper schedules, or dosing intervals. Build nothing that does.

Design for a phone screen first. Everything must be comfortable one-handed.

---

## Visual style

Warm, fresh, and welcoming. Colourful without being loud — the palette should feel like morning light, not a hospital and not a children's app. Medium-saturation colours on a warm cream base. Nothing neon, nothing muddy.

**Palette (use these exact values):**

| Role | Hex | Where |
|---|---|---|
| Page background | `#FFF8F0` | warm cream, everywhere |
| Card surface | `#FFFFFF` | all cards and sheets |
| Primary | `#1F9E8C` | jade — filled buttons, selected chips, active nav, slider fills |
| Primary hover/pressed | `#17877700` → use `#178877` | |
| Accent | `#F2884B` | apricot — the TRALUNE eyebrow, small highlights, current-hour marker |
| Secondary accent | `#8B5E9E` | plum — used sparingly, mainly in charts |
| Text primary | `#2A2724` | |
| Text secondary | `#736C64` | |
| Borders / inactive chips | `#F4EFE7` fill, `#E3D9CC` border | |
| Alert surface | `#FDEBE6` with `#D9482F` text and icons | red-flag card, emergency card |

Chart series colours: Sleep `#1F9E8C`, Tremor `#F2884B`, Anxiety `#8B5E9E`, Jaw tension `#3E8ACC`, Nausea `#E0719A`.

- Cards: generously rounded (~20px), very soft shadow, thin `#EFE7DC` border
- Colour carries meaning — jade for anything the user is doing or has chosen, apricot for orientation and emphasis, red only for genuine urgency. Don't scatter colour decoratively.
- **Headings use a serif** (something like Fraunces, Newsreader, or Lora). **Body and form labels use a clean sans-serif** (Inter or similar). This contrast is a big part of the identity — keep it.
- Icons: thin line style, single colour, sage green
- Generous vertical spacing. Let things breathe.

---

## App shell

Fixed bottom navigation, six tabs, icon above label:

**Recovery · Finances · Tasks · Journal · Fitness · Vision**

Only Recovery needs to be built out for now. The other five can be simple placeholder screens. Recovery is the active tab.

---

## The selector pattern (use this everywhere)

This is important — do not use native `<select>` dropdowns anywhere in this module.

Wherever the user picks from a set of categories, show the options as a **horizontal scrolling row of pill-shaped chips near the top of the view**. Tapping a chip selects it and immediately reveals the next level of choices below it, in the same style. Nothing is pre-selected — the user must choose.

So a two-level choice looks like:

```
[ Depressants ] [ Opioids ] [ Stimulants ] [ Hallucinogens ] [ Dissociatives ]
        ↓ (tap Depressants — chip stays visible and highlighted)
[ Alcohol ] [ Benzodiazepines ] [ Cannabis ] [ GHB/GBL/1,4-BD ] [ Other ]
```

Selected chips stay filled in sage green with white text. Unselected chips are pale with a thin border. The parent row stays on screen after selection so the user can change their mind without going backwards. Tapping an already-selected chip clears the levels below it.

---

## Screen 1 — Recovery hub

- Small terracotta eyebrow: `TRALUNE`
- Serif H1: **Recovery**
- Subtitle: "A calm place to log, track and structure your day. One step at a time."
- Four large tappable cards, each with a line icon on the left, a serif title, and a sentence underneath:

| Icon | Title | Sub-copy |
|---|---|---|
| pill | Substance log | Record what you took and when to see your pattern. |
| pulse line | Symptom tracker | Rate sleep, tremor, anxiety and more over time. |
| calendar+clock | Day scheduler | Fill empty hours with gentle, suitable activities. |
| document | Clinician summary | Export a readable summary for your GP or detox service. |

- Below the cards, a full-width **Emergency card** button — pale pink fill, red border, red text, siren icon
- Footer line, small and grey, phone icon: "In an emergency now, call 000 (Australia)"

**Do not put a long medical disclaimer block on this screen or on any sub-screen.** The full disclaimer lives in Terms & Conditions and at the bottom of the Clinician summary only (see below).

---

## Screen 2 — Substance log

Header: back link, serif H1 **Substance log**, subtitle "A personal record of what you took and when."

Full-width sage button: **+ Add an entry**. Tapping it expands an inline form card:

1. **Type** — chip row (the pattern above), five options: Depressants, Opioids, Stimulants, Hallucinogens, Dissociatives. Nothing pre-selected.
2. **Substance** — once a type is chosen, a second chip row of common substances for that type, plus an "Other" chip that reveals a free-text field:
   - Depressants: Alcohol · Benzodiazepines · Cannabis · GHB/GBL/1,4-BD
   - Opioids: Morphine · Oxycodone · Codeine · Heroin
   - Stimulants: Caffeine · Nicotine · Cocaine · Amphetamines
   - Hallucinogens: LSD · Psilocybin
   - Dissociatives: Ketamine · Nitrous oxide
3. **Amount / note (optional)** — text input, placeholder "Your own description"
4. **When** — date and time picker, **defaulting to the current date and time in the device's local timezone**
5. **Notes (optional)** — textarea
6. Buttons: Cancel (pale) and Save (sage, filled)

Below: section heading **Your log** (serif), listing saved entries newest first — substance name, type tag, relative time ("2 hours ago"), and any note. Each entry is swipe-to-delete or has a small delete affordance. Empty state: "No entries yet. Add one above."

---

## Screen 3 — Symptom tracker

Header: back link, serif H1 **Symptom tracker**, subtitle "How are you feeling right now?"

A card containing five sliders, each 0–10, with the current value shown in sage on the right of the label. All start at 0.

- Sleep quality
- Tremor
- Anxiety
- Jaw / muscle tension
- Nausea

Then:
- **Heart rate (bpm, optional)** — number input, placeholder "e.g. 80"
- **Notes (optional)** — textarea

Then a pale pink alert card, warning triangle icon, red heading: **"Any serious symptoms right now?"**

Five toggleable chips: Confusion · Hallucinations · Fever · Agitation · Racing heart. Selected ones fill red.

**Tapping any of these immediately opens a modal**, before saving anything — headline "This can be serious", body explaining that these symptoms during withdrawal can need urgent medical care, and two buttons: **Call 000** (red, filled, tel: link) and "I understand, continue logging". The symptom stays selected and is recorded either way.

Below: full-width sage **Save check-in** button. Each check-in is timestamped in local time.

Then section **Over time** (serif) — a line chart of all five symptom scores over time, y-axis 0–10, x-axis by date. Five series, each a distinct colour, with a legend: Sleep, Tremor, Anxiety, Jaw tension, Nausea. Plot every series that has data; join points with lines once there is more than one check-in. Show markers so a single check-in is still visible.

---

## Screen 4 — Day scheduler

Header: back link, serif H1 **Day scheduler**, subtitle "Tap a time, choose what fills it."

Section: **Today's timeline** — a **full 24-hour list, 00:00 through 23:00**, one row per hour. This matters: the hardest hours in withdrawal are often between 2am and 5am, and those slots must be there.

Empty rows show a dashed border and "+ Add an activity". Auto-scroll so the current hour is near the top on load, with earlier hours reachable by scrolling up. Highlight the current hour subtly. Filled rows show the activity name and its category tag, with a way to remove it.

Tapping an empty row opens a bottom sheet. The sheet header always shows "Scheduling 06:00" (the chosen hour) in small grey text with the current question as a serif heading underneath, a back chevron on the left and an X on the right.

**Step 1 — "What's this for?"**
Four large icon tiles in a 2×2 grid: Recovery (heart-pulse) · Personal (person) · Education (graduation cap) · Business (briefcase)

**Step 2, if Recovery — "What are you recovering from?"**
Four rows, each with icon, title, sub-copy, chevron:

| Title | Sub-copy |
|---|---|
| Injury | Rest and gentle mobility support healing. |
| Illness | Rest, hydration, and nourishment. |
| Trauma | Grounding and a sense of safety first. |
| Addiction / Withdrawal | Gentle activities suited to your withdrawal state. |

**Step 3, if Addiction / Withdrawal — "Which drug class?"**
Use the chip-row selector pattern with the five classes and their example substances listed underneath the row as small grey text for the selected class.

**Step 4 — "Pick an activity"**
A list of suggested activities for whatever was chosen. Each row: activity name (medium weight), a small grey category tag underneath, and an "Add" button on the right. Adding places it in the chosen hour and closes the sheet.

### Activity libraries

**Injury** — Rest the injured area *(Rest)* · Ice or heat as advised *(Care)* · Elevate the injury *(Care)* · Drink water *(Nutrition)* · Eat a nourishing meal *(Nutrition)* · Gentle movement if cleared *(Movement)* · Nap / sleep *(Rest)*

**Illness** — Rest / sleep *(Rest)* · Sip warm fluids *(Nutrition)* · Drink water *(Nutrition)* · Eat light nourishing food *(Nutrition)* · Fresh air by a window *(Calm)* · Gentle movement if able *(Movement)* · Warm shower *(Sensory)*

**Trauma** — 5-4-3-2-1 grounding *(Grounding)* · Slow deep breathing *(Calm)* · Box breathing *(Calm)* · Journal one feeling *(Mental health)* · Safe-space visualization *(Calm)* · Hold something warm *(Sensory)* · Reach out to a safe person *(Connection)*

**Addiction / Withdrawal** (same list for every drug class — gentle, non-medical, no substance-specific instructions) — Drink water *(Nutrition)* · Eat something small *(Nutrition)* · Rest / lie down *(Rest)* · Slow deep breathing *(Calm)* · Warm shower *(Sensory)* · Step outside for air *(Movement)* · Message a support person *(Connection)* · Distract with something easy *(Distraction)* · Log a symptom check-in *(Tracking)*

**Personal** — Read a book *(Personal)* · Tidy one small space *(Personal)* · Call a friend or family *(Connection)* · Walk outside *(Movement)* · Cook a nourishing meal *(Nutrition)* · Rest / do nothing *(Rest)*

**Education** — Focused study session *(Study)* · Watch a tutorial *(Study)* · Read an article *(Study)* · Practice a skill *(Practice)* · Review notes *(Study)* · Plan learning goals *(Planning)*

**Business** — Triage email *(Admin)* · Plan the day / priorities *(Planning)* · Deep work block *(Focus)* · Team check-in *(Meeting)* · Review goals *(Planning)* · Admin task *(Admin)*

Every activity list also ends with a **"Something else"** row that opens a free-text field so the user can name their own activity.

---

## Screen 5 — Clinician summary

Header: back link, serif H1 **Clinician summary**, subtitle "A readable record to share with your care team."

- A date-range selector: Last 7 days / Last 30 days / All time
- Two buttons: **Download PDF** (sage, filled) and **Download .txt** (outlined)
- Section **Preview** (serif) — a monospace card showing the generated summary:

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

- **At the bottom of this screen, and included in both exports**, in small italic text:

> Tralune is a logging and time-structuring tool only. It does not generate, recommend, or calculate taper schedules, doses, or dosing intervals. Withdrawal can be dangerous — please manage it under medical supervision. In an emergency call 000 (Australia).

This is the only screen where that paragraph appears.

---

## Screen 6 — Emergency card

Opened from the hub. A single calm screen, no scrolling if possible:

- Large **Call 000** button (red, filled, `tel:000`)
- Below it, a short list of Australian support lines as tappable rows: National Alcohol and Other Drug Hotline (1800 250 015), Lifeline (13 11 14), Beyond Blue (1300 22 4636)
- A "My people" section where the user can save one or two personal emergency contacts (name + number), shown as tappable call rows
- One line: "If you are unsure, call. It is always okay to call."

---

## Data model

Store everything locally in the browser for now — no backend, no accounts.

- `substanceEntries`: id, type, substance, amountNote, timestamp, notes
- `symptomCheckins`: id, timestamp, sleep, tremor, anxiety, jawTension, nausea, heartRate, redFlags[], notes
- `scheduledActivities`: id, date, hour, activityName, category, context (recovery/personal/education/business), subContext
- `emergencyContacts`: id, name, phone

All timestamps in device local time.

---

## Terms & Conditions

Add a Terms & Conditions page, linked from a small footer link in Settings or the hub footer. It contains the full medical disclaimer paragraph plus a short, plain-language privacy section explaining that all data is stored locally on the user's own device, is not uploaded anywhere, and is deleted if they clear their browser data.

---

## Do not build

- Any dose, quantity, taper, or timing calculation or recommendation
- Any AI feature that generates substance-specific guidance
- Any "safe amount", "next dose", or countdown-to-next-use logic
- Streak counters, sobriety day counts, or anything that punishes a relapse

Keep the tone throughout gentle and non-judgemental. No gamification, no congratulating, no shaming.
