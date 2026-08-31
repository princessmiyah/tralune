# Changelog

Notable changes to Tralune Recovery.

## [Unreleased]

### Changed
- Day scheduler timeline covers a full 24 hours instead of starting at 06:00, so the 2am–5am window is available
- Medical disclaimer moved out of every screen — now only in the Terms screen and at the foot of the clinician summary and its exports
- All category dropdowns replaced with the chip-row selector: options sit as pills at the top of the view and reveal the next level when tapped, with the parent row staying visible
- Substance type no longer pre-selects a value
- Colour palette reworked from sage and terracotta to jade and apricot on warm cream — warmer and more approachable without becoming overstimulating

### Added
- Emergency card screen: 000, three Australian support lines, and user-saved personal contacts
- PDF export for the clinician summary alongside the existing .txt, plus a date-range selector
- "Something else" free-text option at the end of every activity list
- Terms and privacy document

### Removed
- "Create new with AI" from the withdrawal flow. Generating substance-specific activities risked producing something that reads as dosing or timing guidance, which the product promises never to do. Replaced with one shared withdrawal activity list.

### Fixed
- Red-flag symptom chips now open the emergency prompt the moment they are tapped, rather than after the check-in is saved

## [0.1.0] — 2026-08-31

First preview build of the Recovery module: substance log, symptom tracker, day scheduler, clinician summary. Reviewed in `docs/AUDIT-2026-08-31.md`.
