# 株式会社 拓乃 — Design System

足場（足場工事）を軸とする総合外装工事会社、**株式会社 拓乃（TAKUNO CO.,LTD.）** のブランド／デザインシステム。

- 所在地 〒470-2104 愛知県知多郡東浦町生路上坪釜23-1
- 代表取締役 岡田 拓磨 ／ TEL 0562-85-9488 ／ FAX 0562-22-5296 ／ okada.tmrkn@outlook.jp
- 建設業許可 愛知県知事許可（般-7）第85337号
- 事業内容 足場工事一式・外壁塗装・屋根工事・防水工事・各種リフォーム
- ブランドステートメント **足元から未来を支える** — 確かな技術と信頼で、安心・安全な足場を。

## Sources used

There was **no codebase**. The folder mounted as `HP/` contained three brand artefacts, nothing executable:

| Source | What it is | Where it went |
| --- | --- | --- |
| `HP/S__72106047.jpg` (also `uploads/S__72106047.jpg`) | A full-page design mockup of the corporate site — hero, 業務内容, 代表取締役の想い, 施工現場のご紹介. **The ground truth for the site design.** | `ui_kits/website/`, plus every photo and glyph in `assets/` |
| `HP/S__72106060.jpg` (also `uploads/S__72106060.jpg`) | The vertical logo — crest (a figure raising a roof/scaffold frame inside a circle) above 株式会社拓乃 | `assets/logo-vertical.png` |
| `HP/名刺修正版.pdf` (also `uploads/名刺修正版.pdf`) | Revised business card, both sides identical. Navy field, ghosted crest, mincho name, contact block, licence number | `guidelines/brand-card.card.html`, contact values throughout |

No Figma file, no GitHub repository, no font binaries, and no existing HTML/CSS were provided. Everything in `tokens/` was sampled pixel-by-pixel from those three artefacts.

**One product surface exists: the corporate website.** No app, no docs site, no slide template — so no slide samples were authored.

## Index

| Path | What |
| --- | --- |
| `styles.css` | Global entry point — `@import` lines only. Consumers link this. |
| `tokens/` | `fonts.css`, `colors.css`, `typography.css`, `spacing.css`, `elevation.css`, `motion.css`, `base.css` |
| `assets/` | Logos, the five service glyphs, and the site photography |
| `components/core/` | Button, Logo, SectionHeading, ServiceIcon, PhotoTile, ContactRow, Statement |
| `components/forms/` | Input, Textarea, Select, Checkbox |
| `components/layout/` | Section, SiteHeader, SiteFooter |
| `guidelines/*.card.html` | Foundation specimen cards (Colors, Type, Spacing, Brand) |
| `ui_kits/website/` | The corporate-site recreation — see its own `README.md` |
| `thumbnail.html` | Homepage tile |
| `SKILL.md` | Agent Skills front matter for use outside this project |

### Components

**core** — `Button`, `Logo`, `SectionHeading`, `ServiceIcon`, `PhotoTile`, `ContactRow`, `Statement`
**forms** — `Input`, `Textarea`, `Select`, `Checkbox`
**layout** — `Section`, `SiteHeader`, `SiteFooter`

Every component has a sibling `.d.ts` (props contract) and `.prompt.md` (what & when + usage). Each directory has one `@dsCard` HTML showing its states.

#### Intentional additions

No source defined a component inventory, so the set above was authored from what the mockup and business card actually contain, plus the minimum a contractor site needs:

- **`components/forms/*`** — the mockup has no form, but a 足場 site cannot ship without お問い合わせ. Styled from the tokens: hairline border, 2px radius, navy focus ring.
- **`--state-danger` / `--state-success`** — no semantic colour appears anywhere in the source. Added only so form validation can be expressed.
- **`ContactRow` glyphs** — Unicode dingbats (✆ ✉ ◆ ✇) standing in for the filled navy pictograms on the business card, which were never supplied as vectors. See ICONOGRAPHY.

Deliberately **not** built: Toast, Modal, Avatar, Tabs, Accordion, Breadcrumb, Pagination. Nothing in the source suggests them.

## Content fundamentals

**Language is Japanese throughout.** Latin appears only as the company's own romanisation (`TAKUNO CO.,LTD.`) and as small letterspaced section eyebrows (`SERVICE`, `COMPANY`, `WORKS`).

**Register: 丁寧語, first-person plural, never 敬体の押し売り.** The company writes as 私たち / 弊社 and addresses the reader as お客様 — never あなた, never 君. Sentences close on ます／です and on humble forms in the representative's voice: 「…お約束します」「…貢献してまいります」. The 〜てまいります form is a signature of the brand's voice and should be preserved.

Real examples from the source, to imitate:

> 足元から未来を支える
> 確かな技術と信頼で、安心・安全な足場を。
> 私たちは、各分野の専門業者と強固に連携し、足場工事をはじめとする多様な工事に一括で対応。お客様のご要望に合わせた最適なご提案と、高品質な施工をお約束します。
> 足場は、建物をつくるための土台であり、すべての工事の基盤です。

**Casing and punctuation.** Headings are noun phrases with no trailing punctuation (業務内容, 施工現場のご紹介, 代表取締役の想い). Taglines may end in a 句点 as a rhetorical close (安心・安全な足場を。). Middle dots (・) join paired virtues: 安心・安全, 組立・解体. Full-width brackets 「」 quote the company's own words. Full-width 〜 and ｜ separate phone from FAX: `0562-85-9488 ｜ FAX 0562-22-5296`.

**Line breaks are authored, not automatic.** The representative's message in the source sets one clause per line, breaking after 読点. Keep those breaks — do not reflow to justify. `text-wrap: pretty` is fine for body paragraphs, but not for the display headline.

**Length.** Display headlines are 5–7 characters per line, two lines. Section headings are 4–8 characters. Body paragraphs run 80–160 characters. Nothing is longer.

**No emoji, ever.** No exclamation marks. No 「!」, no 「?」. No superlatives (業界No.1, 最安, 絶対) — the brand's claim is competence and 信頼, not excitement. No numbers-as-proof (施工実績〇〇件, 満足度98%) unless the company supplies real figures.

**Vibe:** grounded, plain-spoken, 職人 pride without swagger. Trust language over sales language.

## Visual foundations

**Colour is one navy and its tints.** `--navy-900 #00183e` is the logo ink; `--navy-800 #062242` is the business-card field and every dark band; `--blue-500 #034683` (sampled from the TC mark) is the only accent, used for links, hovers and category labels. Neutrals are cool, blue-cast greys — `--sky-100 #f2f5fa` for muted bands, `--line-200 #d8dfe8` for hairlines, `--ink-700 #354a5e` for body copy. There is **no warm colour anywhere**, no second brand colour, and no gradient used as decoration. A page carries white plus one muted band plus the navy band — never a third tone.

**Type is a mincho/gothic pair.** Mincho (serif) for all display and heading type, set semibold with generous `0.06–0.08em` tracking — this is where the brand's formality lives. Gothic (sans) for body, navigation, labels and forms, at `1.9` line-height so Japanese text breathes. Latin caps get `0.28em` tracking, always. Never set a Japanese heading in gothic; never set body copy in mincho.

**Backgrounds.** Photography is the only imagery: real scaffolding, real sites, real people. Cool daylight, high blue skies, low sun; no filters, no duotone, no grain, no black-and-white. Photos run full-bleed in the hero and bleed off the left edge in the navy message band. There are **no illustrations, no patterns, no textures, no repeating motifs**. The only gradients in the system are the two functional scrims (`--scrim-hero`, `--scrim-portrait`) whose job is to make type legible over a photograph — type never sits on bare photography, and never inside a translucent capsule.

**Corners.** Photographs are square-cornered, always (`--radius-none`). Controls take a barely-there `2px` (`--radius-sm`). Service glyph chips are perfect circles (`--radius-pill`). Nothing in between — no 8px/12px card radius.

**Cards.** There are almost none. Content is separated by 1px hairlines and whitespace, not by boxes. Where a panel is needed (the contact aside, the sent-state notice) it is a flat `--surface-muted` rectangle with no border and no shadow. Definition lists use top/bottom hairlines rather than table borders.

**Shadows.** Three only: `--shadow-card` (1px, barely visible), `--shadow-raised` (8/24 for the rare floating element), `--shadow-photo` (2/12 under an unframed image). The header uses `--shadow-header`, a single 1px navy-tinted line rather than a blur. No inner shadows anywhere.

**Borders.** 1px, `--line-200` for dividers inside content, `--line-300` for control outlines and the rules that flank a section heading. On navy, `--border-on-inverse` (white at 14%). Never 2px, never dashed, never a coloured left-border accent.

**Transparency and blur** appear in exactly two places: the header when it overlays the hero (`rgba(255,255,255,.86)` + backdrop blur), and the white-on-navy text tints (80% / 60% / 14%). Nowhere else — no frosted cards, no glassmorphism.

**Animation is restrained.** One easing curve, `--ease-standard cubic-bezier(.22,.61,.36,1)`, and three durations: 160ms for hover and focus, 240ms for chips and nav, 400ms for image scale. Transitions only — no bounce, no spring, no keyframed entrance animations, no scroll-triggered reveals. If something must appear, it fades.

**Hover states darken or lift.** The primary button swaps navy for `--blue-500`; secondary fills to `--sky-100` and darkens its border; nav items grow a 1px navy underline; a service chip lifts 2px and its fill deepens; a photo scales to 1.04 inside a fixed frame. Never an opacity fade, never a glow, never a colour that isn't already in the palette.

**Press states nudge, they don't shrink.** `translateY(1px)`, no scale change. Focus is a `--focus-ring` border plus a 3px `rgba(31,95,168,.14)` halo.

**Layout.** 1120px centred container, 24px gutters, 96px section rhythm (64px compact). Nothing is fixed except the sticky header. Grids: 5-up for the gallery at `gap: 8px`, 3-up for the works index at `gap: 24px`, two-column asymmetric splits (`1fr 1.25fr`, `1fr 340px`) for content bands. Spacing comes off a 4px scale, `--space-1` through `--space-11`.

## Iconography

**There is no icon system, and none should be invented.** The source material contains exactly two kinds of glyph:

1. **The five service pictograms** — 足場工事一式, 外壁塗装, 屋根工事, 防水工事, 各種リフォーム. Solid navy, no stroke, no outline variant, filling a pale circular chip. Copied into `assets/icon-*.png` and exposed as `<ServiceIcon name="…">`. **This is the complete set.** If a sixth service is ever added, commission a matching pictogram — do not substitute a line icon from a CDN library, which would read as a different brand.
2. **Three small contact glyphs on the business card** — a filled handset, a filled envelope, a filled map pin. These were supplied only as raster inside the PDF at business-card size, too small to extract cleanly. `ContactRow` therefore renders Unicode dingbats (`✆ ✉ ◆ ✇`) at 15px in navy. **This is a flagged substitution** — see Caveats.

No icon font is used. No Lucide, Heroicons, Font Awesome or Material set is linked, and adding one is discouraged: the brand's visual density is low enough that a hairline rule or a bolded label usually does the job an icon would. Unicode is used sparingly for functional marks only — `→` as the button's trailing arrow, `▼` as the select chevron, `✓` in the checkbox, `〒` before a postcode. **Emoji are never used.**

## Assets

| File | Notes |
| --- | --- |
| `assets/logo-vertical.png` | Crest above 株式会社拓乃. Print, splash, stamps. Ghosted at 8–10% opacity for backgrounds. |
| `assets/logo-lockup.png` | Horizontal TC mark + 株式会社 拓乃 + TAKUNO CO.,LTD. Headers, footers. Cropped from the mockup. |
| `assets/icon-{scaffold,painting,roof,waterproof,reform}.png` | The five service pictograms, 270px, extracted from the mockup at 3× |
| `assets/photo-hero-scaffold.jpg` | Full-bleed hero: worker on scaffold at sunset over a city |
| `assets/photo-representative.jpg` | Portrait of the representative in company workwear |
| `assets/photo-site-01…05.jpg` | The 施工現場 gallery, 3:4 crops |

Clear space around either logo: at least the cap height of 拓. Minimum lockup height 28px. On navy, knock the mark out to white (`<Logo onDark />`) — never tint it.

## Caveats

- **Fonts are substitutes.** No binaries were supplied. `tokens/fonts.css` loads **Noto Serif JP** (for the mincho display face) and **Noto Sans JP** (for the gothic body face) from Google Fonts. The mockup's actual faces are unknown; the business card's Latin numerals look like a transitional serif rather than Noto's. Send the real licensed families and this file is a one-line change.
- **The contact glyphs are Unicode substitutes**, not the card's own pictograms. Supply them as SVG and `ContactRow` can render the real marks.
- **Photography is cropped from a mockup**, so it is low-resolution and may itself be stock or placeholder imagery. Replace with real 拓乃 site photography before anything ships.
- **The representative's name differs between sources.** The mockup says 拓乃 太郎 (clearly placeholder); the revised business card says 岡田 拓磨. This system uses 岡田 拓磨.
- **Everything past the mockup is extrapolation** — the header, the footer, the page banner, the works filter, the whole contact form. Marked as such in `ui_kits/website/README.md`.
