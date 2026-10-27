# Website Dr. André Alesi · Sleep to Life

Statische Website im neuen Corporate Design (Markenpositionierung III, Styleguide Oktober 2026).
Farben: Steel Blue, Deep Navy, Warm Copper, Soft Cream, Sky Blue. Schriften: Playfair Display und Poppins.

## Seiten

| Datei | Inhalt |
|---|---|
| `index.html` | Startseite mit Hypnogramm-Header, Säulen, Angeboten, YouTube |
| `ueber-mich.html` | Haltung, Zeitstrahl 2004 bis heute, Arbeitsweise, Zielgruppen, Schwarzwald |
| `schlaftest.html` | Sleep Score (13 Fragen, 5 Dimensionen, E-Mail-Schritt, Ergebnis). Drei Fragen als Regler 1 bis 10 mit Bild (Mond, Sonnenaufgang, Signet), Fortschritt als Testnacht mit 13 Sternen. Reglerwerte zählen linear: 1 = 0, 4 = 33, 7 = 67, 10 = 100 Punkte. |
| `kurs.html` / `kurs-danke.html` | Landingpage „Die Durchschlaf-Formel“ (997 €) und Danke-Seite |
| `webinar.html` / `webinar-danke.html` | Live-Webinar 29. November, 20:00 Uhr, mit Countdown und Kalender-Datei |
| `kontakt.html` / `kontakt-danke.html` | Kontaktformular (Netlify, Spamschutz) |
| `newsletter.html` / `newsletter-danke.html` | Newsletter-Anmeldung |
| `warteliste.html` / `warteliste-danke.html` | Warteliste Schlaf-Masterclass (Netlify-Formular, noindex) |
| `impressum.html`, `datenschutz.html`, `agb.html`, `widerruf.html` | Rechtstexte (Inhalt unverändert, nur neues Design) |
| `styleguide.html` | CI-Seite (noindex) |

Gemeinsames Design und Verhalten der Unterseiten: `assets/sleep.css` und `assets/sleep.js`. Die Startseite bringt ihr CSS selbst mit.
Logo, Signet und Favicon: `brand/`. Seit 27.10. ist das Original-Logo von Rebecca eingebaut (Original-SVGs in `brand/logo-*.svg`): Signet mit Verlauf von links deckend nach innen auslaufend, Wortmarke als Pfade mit den Originalabständen, „SLEEP TO LIFE“ als Text in Poppins. Als Symbole in `index.html` und `_build/common.py`: `#logoW` (negativ, Navigation und Footer), `#logoC` (Farbe, nur für helle Flächen), `#signetW` (weiß, dunkle Flächen), `#signetK` (navy, Kupfer-Laufband), `#signet` (Farbe).

## Hypnogramm

Header der Startseite, Säule 01, Webinar und die Lichtlinien in den Seitenköpfen beruhen auf einer typischen Nacht eines gesunden Erwachsenen (23:00 bis 07:00): 5 Zyklen, Tiefschlaf vor allem in den ersten beiden Zyklen, REM-Phasen werden länger (8 auf 36 Minuten), kurze Wachphasen nach REM, Aufwachen aus dem REM. Anteile: Leichtschlaf 55 %, REM 24 %, Tiefschlaf 21 %. Die Webinar-Seite zeigt dieselbe Nacht mit langem Wachliegen ab 3:12 Uhr.
Die Lichtlinien im Header und in der Sektion „Für wen ich arbeite“ zeigen diese Nacht als lange, runde Wellen: Phasen unter 7 Minuten (kurzes Erwachen, kurzer Tiefschlaf) sind dort zusammengefasst und stark geglättet. Im Header ist die Nacht in die Breite gezogen, sichtbar ist etwa die erste Nachthälfte. Säule 01 zeigt dieselbe Nacht als Stufenkurve mit allen Phasen.
Quellen: AASM-Normwerte, Wikipedia „Hypnogram“, Oura-Leitfaden Schlafphasen.

## Vor dem Livegang ausfüllen (im Code mit ▼ markiert)

1. **Bilder:** Überall, wo André zu sehen ist, liegen jetzt echte Fotos aus dem Shooting (Ordner `fotos/`, Originale A740xxxx):
   `andre-hero.webp` Startseiten-Header (A7402405) · `andre-bett-hoch.webp` Über-mich-Header (A7402322) · `andre-sessel.webp` Warteliste, Startseite „Über mich“ (A7402114) · `andre-blazer.webp` Kurs, Newsletter, Warteliste (A7402137) · `andre-bomber.webp` Startseite „Was mich antreibt“ (A7402225, Bomberjacke, lächelnd; vorher A7402126 `andre-blazer-blick.webp`, liegt noch im Ordner) · `andre-vortrag.webp` Über mich „Heute“, Webinar, Startseite Unternehmens-Karte (A7402224) · `andre-workshop.webp` Über mich 2015 (A7402404) · `andre-sakko.webp` Startseite Säule 2 (A7402141, Sakko, lächelnd; Alternativen aus derselben Serie: A7402131 ernst zuhörend, A7402137, A7402142) · `andre-bett.webp` Über mich 2020 (A7402333; die Kurs-Karte auf der Startseite zeigt stattdessen das gezeichnete Mockup `kurs-mockup.webp`, Skript `_build/kurs_mockup.py`, kein Foto) · `andre-kurs.webp` Kurs-Header (A7402377) · `andre-wecker.webp` Webinar-Header (desigraphie 07327, Wecker in den Händen; `andre-webinar.webp` A7402412 als Alternative) · `andre-forschung.webp` Über mich 2021 (A7402441, Laptop-Komposition, Skript `_build/laptop_comp3.py`) · `andre-portrait.webp` Kontakt (A7402342) · `andre-schwarzwald.webp` Über mich, Abschnitt Schramberg (Foto 20260811_desigraphie_07862, Ausschnitt).
   Noch KI (ohne André): Schlafzimmer bei Nacht (CTA-Hintergründe), „erholt aufwachen“ (Startseite Säule 3, Kurs-CTA), die sechs Zielgruppen-Bilder in „Für wen“, Bühnen- und Publikumsbilder im Header. Zuordnung in `_build/common.py` (`IMG`), Export-Zuschnitte in `_build/patch18.py`. Wunsch von André: keine Fotos, auf denen er nur das weiße Hemd trägt (A7402230 bis A7402306).
2. **Checkout-Link** in `kurs.html` (`href="#checkout"`), danach Weiterleitung auf `kurs-danke.html`.
3. **Link zum Kursbereich** in `kurs-danke.html` (`href="#kursbereich"`).
4. **WebinarJam-Formular** in `webinar.html` (Platzhalter im Anmeldebereich).
5. **Newsletter-Formular** in `newsletter.html` (z. B. ActiveCampaign).
6. **Schlaftest:** E-Mail-Schritt an CRM oder Newsletter-Tool anbinden.
7. **Testimonials** auf Kurs- und Webinar-Seite sind Platzhalter.
8. **Rechtstexte:** Platzhalter-Felder ausfüllen und prüfen lassen.
9. **Pressezeile „Bekannt aus“:** Schriftzüge durch offizielle Logos ersetzen (`img/presse/`).
10. **Social-Media-Karten (Startseite, „Folge mir“):** YouTube und Instagram laufen auf `@dr.andre.schlafen`, TikTok auf `@dr.andre.alesi` (https://www.tiktok.com/@dr.andre.alesi). Die Profilbilder sind die aktuellen Bilder der jeweiligen Plattform. Instagram- und TikTok-Karte zeigen oben je drei Kurzvideos als Mini-Feed (Instagram Stand 24.10.2026, TikTok Stand 25.10.2026, jeweils als Bildstreifen auf dem Higgsfield-CDN gesichert, kein Live-Feed). Das Standbild der YouTube-Karte kommt direkt von YouTube (`i.ytimg.com`). Bewusst ohne Follower-Zahlen. Für einen automatisch aktuellen Feed wäre ein Feed-Dienst mit Zugang zu Andrés Konten nötig.

## Webinar-Termin ändern

`webinar.html`: Datum im Header, in der Sticky-Leiste und im Anmeldebereich sowie `data-countdown`.
`webinar-danke.html`: Datum und Kalender-Datei. Der Schlaftest nennt den Termin im Ergebnis.

## Alte Dateien

Nicht mehr im Paket und auf GitHub löschen: `index-neu.html`, `index-v2.html`, `site.css`, `site-v2.css`, `site.js`, `favicon.svg`, `logo-header-*.svg`, `logo-lockup-*.svg`, `logo-zeichen-*.svg`, `styleguide-neu.html` (heißt jetzt `styleguide.html`) und der Ordner `img/` mit den alten Fotos.

## Bühne im Hero (Startseite)

Damit André nicht ausgeschnitten wirkt, liegt hinter und vor ihm eine leichte Bühne. Die Hypnogramm-Linien bleiben immer obenauf.
Die Variante steht als `data-stage` am Hero (`<section class="hero" data-stage="10">`). 0 ist der alte Zustand ohne Bühne.
Alle 21 Zustände lassen sich in `hero-varianten.html` durchklicken (Zahlen unten oder Pfeiltasten, Link mit `?v=5` usw.). Die Seite ist auf noindex gestellt.

1 Gegenlicht-Spot · 2 LED-Wand · 3 Bühnenkante · 4 Rückwand mit Schatten · 5 Saal unscharf · 6 Lichttraverse · 7 Bühnenvorhang · 8 Konferenzbühne · 9 Publikum in zwei Reihen · 10 Kombination 1

11 Keynote-Saal mit LED-Wand · 12 Theater mit Applaus · 13 Auditorium · 14 Publikum mit Handys · 15 Stehendes Publikum, Applaus · 16 Bühnenlicht auf André · 17 Lichtstrahlen vor der Bühne · 18 Gegenlicht-Flare · 19 Projektion auf die Rückwand · 20 Kombination 2 (aktuell auf der Startseite)

`hero-uebersicht.html` zeigt alle 21 Zustände nebeneinander (noindex, nur zur Abstimmung).

Die Varianten 11 bis 20 nutzen zwei freigestellte Publikumsfotos (KI, von hinten, keine Gesichter) vor André und ganze Bühnenfotos ohne Personen dahinter. Variante 16 und 20 legen zusätzlich ein weiches Bühnenlicht auf Haaransatz und Schultern (`.hero-person .key`, nur additiv, das Gesicht bleibt ausgespart).

Die Bühnenfotos (5 bis 8) sind KI-Platzhalter ohne Personen auf dem Higgsfield-CDN. André selbst ist in keiner Variante verändert, nur Schatten, Licht und Publikum drumherum. CSS-Quelle: `_build/hero_stage.css`, eingebaut mit `_build/patch16.py`.

## Bild-Overlays

Alle Porträt- und Inhaltsbilder tragen den Editorial-Rahmen (Variante 6): ein Wrapper `<div class="frame">` um `.imgbox` oder `.ph`, die versetzte Kupferlinie kommt aus `.frame::after` (CSS in `assets/sleep.css`, auf der Startseite inline). Glas-Etiketten (Variante 8, `<div class="tag"><i></i><b>…</b>…</div>`) sitzen dort, wo das Bild sonst keinen Namen oder Ort trägt: Kurs-Header, Webinar-Header, Newsletter-Header, Warteliste-Header, Schwarzwald auf Über mich, dazu die bestehenden Etiketten auf Startseite und Kurs. Alle zehn geprüften Varianten liegen zur Ansicht in `bild-overlays.html` (noindex). Eingebaut mit `_build/patch19.py`.

## Statement-Sektion (Startseite)

Der Schlusssatz bleibt zusammen: zwischen „müssen wir ansetzen.“ stehen geschützte Leerzeichen, dazu `text-wrap: pretty`. So steht „ansetzen.“ in keiner Breite allein.
Der Hintergrund hat Varianten über `data-bg` an `.statement` (0 = schlicht): 1 Spot + Korn · 2 Hypnogramm-Linie · 3 Signet-Wasserzeichen · 4 Raster · 5 Kupfer-Ränder · 6 Aurora · 7 Sternenhimmel (aktuell) · 8 Anführungszeichen · 9 Nacht zu Tag · 10 Ring + Korn. Alle in `statement-varianten.html` durchklickbar (noindex, Link mit `?b=4` usw.). CSS in `_build/statement_bg.css`, eingebaut mit `_build/patch20.py`.
