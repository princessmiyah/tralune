# Design system

Mobile-first. Everything must be comfortable one-handed on a phone.

Warm, fresh, welcoming. Colourful without being loud — morning light, not a hospital and not a children's app. Medium-saturation colour on a warm cream base. Nothing neon, nothing muddy.

## Palette

| Role | Hex | Where |
|---|---|---|
| Page background | `#FFF8F0` | warm cream, everywhere |
| Card surface | `#FFFFFF` | all cards and sheets |
| Primary | `#1F9E8C` | jade — filled buttons, selected chips, active nav, slider fills |
| Primary pressed | `#178877` | |
| Accent | `#F2884B` | apricot — the TRALUNE eyebrow, small highlights, current-hour marker |
| Secondary accent | `#8B5E9E` | plum — sparingly, mainly charts |
| Text primary | `#2A2724` | |
| Text secondary | `#736C64` | |
| Inactive chip fill | `#F4EFE7` | |
| Border | `#E3D9CC` | |
| Card border | `#EFE7DC` | |
| Alert surface | `#FDEBE6` | red-flag card, emergency card |
| Alert text and icons | `#D9482F` | |

**Chart series:** Sleep `#1F9E8C` · Tremor `#F2884B` · Anxiety `#8B5E9E` · Jaw tension `#3E8ACC` · Nausea `#E0719A`

### Using colour

Colour carries meaning. Jade means *something you chose or did*. Apricot means *look here*. Red means *this is urgent*. Nothing gets colour for decoration. Plenty of warm white space around everything is what keeps a vivid palette from becoming overstimulating.

An alternative palette — lilac `#6D5BD0` and honey `#F5B740` on `#FAF7FF` — is kept as a backup direction. Softer and dreamier. Not currently in use.

## Typography

- **Headings: serif.** Fraunces, Newsreader, or Lora. This is a large part of the identity.
- **Body, labels, buttons, form fields: sans-serif.** Inter or similar.
- Two weights only: 400 regular, 500 medium.
- Sentence case everywhere. Never Title Case. The one exception is the `TRALUNE` eyebrow, which is uppercase with wide letter-spacing.

## Components

**Cards** — white, ~20px radius, thin `#EFE7DC` border, very soft shadow, generous internal padding.

**Chip selector** — the primary selection pattern. Never use a native `<select>` in this module.

Options appear as a horizontal scrolling row of pills near the top of the view. Tapping one selects it and immediately reveals the next level below, in the same style. Nothing is pre-selected. The parent row stays visible so the user can change their mind without navigating backwards. Tapping a selected chip clears everything below it.

```
[ Depressants ] [ Opioids ] [ Stimulants ] [ Hallucinogens ] [ Dissociatives ]
        ↓
[ Alcohol ] [ Benzodiazepines ] [ Cannabis ] [ GHB/GBL/1,4-BD ] [ Other ]
```

Selected: jade fill, white text. Unselected: `#F4EFE7` fill, `#736C64` text, thin border.

**Buttons** — full-width, ~10px radius, 44px minimum height. Primary is jade with white text; secondary is `#F4EFE7` with dark text; destructive/urgent is `#FDEBE6` fill with `#D9482F` text and border.

**Bottom sheets** — used for the scheduler flow. Header shows the context in small grey text ("Scheduling 06:00") with the current question as a serif heading underneath, a back chevron left and an X right.

**Icons** — thin line style, single colour, jade.

**Bottom navigation** — fixed, six tabs, icon above label. Active tab in jade.

## Tone of voice

- Warm, plain, short. Say the thing and stop.
- Contractions are fine. Corporate filler is not.
- No exclamation marks in system copy.
- Never congratulate, never scold. See `SAFETY.md`.
- Empty states are invitations, not apologies: "No entries yet. Add one above."
