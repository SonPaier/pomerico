---
allowedTools:
  - Bash(npx tsc*)
  - Bash(npx next*)
  - Bash(npm install*)
  - Bash(npm run*)
  - Bash(mkdir*)
  - Bash(rm *)
  - Bash(ls*)
  - Bash(wc*)
  - Bash(tail*)
  - Bash(kill*)
  - Bash(curl*)
  - Read
  - Write
  - Edit
  - Glob
  - Grep
  - Agent
  - mcp__chrome-devtools__take_screenshot
  - mcp__chrome-devtools__navigate_page
  - mcp__chrome-devtools__evaluate_script
---

@AGENTS.md

## Git

Nie wykonujesz `git commit` ani `git push` bez wyraźnej zgody właścicielki projektu. Zawsze pytaj przed commitem i pushem, nawet jeśli zadanie wydaje się zakończone.

## Obrazki / Images

Żaden plik graficzny w projekcie nie może przekraczać **200 KB**. Jeśli dodajesz, zamieniasz lub napotykasz obraz większy niż 200 KB — zoptymalizuj go przed commitem (np. przez `sharp`, `squoosh-cli`, `imagemin` lub odpowiednik). Sprawdzaj rozmiar każdego obrazu, który edytujesz lub tworzysz.
