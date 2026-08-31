# Safety rules

Read this before writing code for Tralune Recovery. It is short on purpose.

Some people using this module will be in withdrawal. Some will be alone. Some will open the app at 3am because they cannot sleep and do not know what to do with themselves. The product's job is to be a calm place to log things and to fill the next hour. That is all it is.

## Hard rules

These are not preferences. They do not have exceptions, and a feature request that requires breaking one should be declined, not negotiated.

1. **Never output a dose, quantity, taper schedule, or dosing interval.** Not as a suggestion, not as a default, not as a "typical" value, not as an example, not in a placeholder.
2. **Never calculate anything from what the user logged that could read as dosing guidance.** No "you usually take X at this time", no time-since-last-use countdown, no trend line that implies a next step.
3. **Never generate substance-specific advice with an LLM inside this module.** Activity suggestions come from the static libraries in `src/data/activities.js`. They are the same for every drug class by design.
4. **Never imply a substance or amount is safe.**
5. **Never build streaks, sober-day counters, or anything that visibly resets on a relapse.** A relapse is a data point, not a failure state.
6. **Never hide or delay the emergency path.** 000 and the emergency card must be reachable from anywhere in the module.

## Red flags

The symptom tracker's red-flag chips — confusion, hallucinations, fever, agitation, racing heart — can indicate a medical emergency during withdrawal.

Tapping one **must** open the emergency modal immediately, before saving, with a working `tel:000` link. Do not move this behind a Save press, a confirmation, or a settings toggle. The symptom is still recorded either way.

## Tone

- Never congratulate, never scold, never use exclamation marks in system copy
- No "you've got this", no motivational language
- Plain, warm, and short. Say the thing and stop.
- Copy is sentence case throughout

## The disclaimer

The full medical disclaimer lives in two places only: `TERMS.md` (rendered as the in-app Terms screen) and the bottom of the Clinician summary screen, where it is also included in both exports.

It is deliberately not repeated on every screen — in the first build it consumed a third of every view and people stop reading text that appears five times. The emergency footer and the red-flag modal carry the urgent safety burden instead.

If a change removes either of those two safety paths, the disclaimer needs to come back onto the relevant screens.

## If you're unsure

Ship the quieter option. A feature that is slightly less helpful is recoverable. A feature that implies medical guidance is not.
