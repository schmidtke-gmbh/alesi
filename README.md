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
Logo, Signet und Favicon: `brand/`.

## Hypnogramm

Header der Startseite, Säule 01, Webinar und die Lichtlinien in den Seitenköpfen beruhen auf einer typischen Nacht eines gesunden Erwachsenen (23:00 bis 07:00): 5 Zyklen, Tiefschlaf vor allem in den ersten beiden Zyklen, REM-Phasen werden länger (8 auf 36 Minuten), kurze Wachphasen nach REM, Aufwachen aus dem REM. Anteile: Leichtschlaf 55 %, REM 24 %, Tiefschlaf 21 %. Die Webinar-Seite zeigt dieselbe Nacht mit langem Wachliegen ab 3:12 Uhr.
Die Lichtlinien im Header und in der Sektion „Für wen ich arbeite“ zeigen diese Nacht als lange, runde Wellen: Phasen unter 7 Minuten (kurzes Erwachen, kurzer Tiefschlaf) sind dort zusammengefasst und stark geglättet. Im Header ist die Nacht in die Breite gezogen, sichtbar ist etwa die erste Nachthälfte. Säule 01 zeigt dieselbe Nacht als Stufenkurve mit allen Phasen.
Quellen: AASM-Normwerte, Wikipedia „Hypnogram“, Oura-Leitfaden Schlafphasen.

## Vor dem Livegang ausfüllen (im Code mit ▼ markiert)

1. **Bilder:** Das Hero-Foto der Startseite ist echt (`fotos/andre-hero.webp` und `fotos/andre-hero-mobil.webp`, aus dem Shooting-Bild A7402405). Das warme Gegenlicht am rechten Rand ist nur in einer schmalen Zone entlang der Freistellkante ergänzt. Das Gesicht ist unverändert. Alle übrigen Fotos sind noch KI-Platzhalter (Higgsfield-CDN) und werden nach und nach durch echte Fotos ersetzt. Die Zuordnung steht oben in jeder Seite bzw. im Abschnitt `IMG`.
2. **Checkout-Link** in `kurs.html` (`href="#checkout"`), danach Weiterleitung auf `kurs-danke.html`.
3. **Link zum Kursbereich** in `kurs-danke.html` (`href="#kursbereich"`).
4. **WebinarJam-Formular** in `webinar.html` (Platzhalter im Anmeldebereich).
5. **Newsletter-Formular** in `newsletter.html` (z. B. ActiveCampaign).
6. **Schlaftest:** E-Mail-Schritt an CRM oder Newsletter-Tool anbinden.
7. **Testimonials** auf Kurs- und Webinar-Seite sind Platzhalter.
8. **Rechtstexte:** Platzhalter-Felder ausfüllen und prüfen lassen.
9. **Pressezeile „Bekannt aus“:** Schriftzüge durch offizielle Logos ersetzen (`img/presse/`).
10. **Social-Media-Karten (Startseite, „Folge mir“):** TikTok-Profil-Link prüfen, `@andre.schlafen` war beim Bau nicht erreichbar (im Code mit ▼ markiert). Das Profilbild ist das aktuelle Instagram-Profilbild. Instagram- und TikTok-Karte zeigen oben je drei Kurzvideos als Mini-Feed (Stand 24.10.2026, als Bildstreifen auf dem Higgsfield-CDN gesichert, kein Live-Feed). Der TikTok-Streifen ist bis zur Klärung des Profils ein Platzhalter mit drei Instagram-Reels. Das Standbild der YouTube-Karte kommt direkt von YouTube (`i.ytimg.com`). Bewusst ohne Follower-Zahlen. Für einen automatisch aktuellen Feed wäre ein Feed-Dienst mit Zugang zu Andrés Instagram-Konto nötig.

## Webinar-Termin ändern

`webinar.html`: Datum im Header, in der Sticky-Leiste und im Anmeldebereich sowie `data-countdown`.
`webinar-danke.html`: Datum und Kalender-Datei. Der Schlaftest nennt den Termin im Ergebnis.

## Alte Dateien

Nicht mehr im Paket und auf GitHub löschen: `index-neu.html`, `index-v2.html`, `site.css`, `site-v2.css`, `site.js`, `favicon.svg`, `logo-header-*.svg`, `logo-lockup-*.svg`, `logo-zeichen-*.svg`, `styleguide-neu.html` (heißt jetzt `styleguide.html`) und der Ordner `img/` mit den alten Fotos.
