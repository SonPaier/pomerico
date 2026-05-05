# Instrukcja: edycja strony pomerico.com przez Claude

## Co to jest
Claude to asystent AI, który będzie edytował kod strony przez rozmowę po polsku. Nie musisz znać programowania. Mówisz co zmienić, on robi i pokazuje wynik. Każdą zmianę przed wgraniem na żywo Ci pokaże i zapyta o zgodę.

---

## Co zainstalować jednorazowo (~15 min)

### 1. Node.js (potrzebne do uruchomienia Claude)

**Mac:**
1. Wejdź na https://nodejs.org
2. Kliknij duży zielony przycisk po lewej (z napisem **„LTS"**)
3. Otwórz pobrany plik `.pkg`, klikaj **Continue → Install** do końca
4. Otwórz **Terminal** (Cmd+Spacja → wpisz `terminal` → Enter)
5. Wpisz `node --version` i naciśnij Enter — powinieneś zobaczyć np. `v20.x.x`

**Windows:**
1. https://nodejs.org → pobierz **LTS** dla Windows (plik `.msi`)
2. Otwórz pobrany plik, klikaj **Next** do końca, **Finish**
3. Otwórz **PowerShell** (klawisz Windows → wpisz `powershell` → Enter)
4. Wpisz `node --version` — powinno pokazać np. `v20.x.x`

### 2. GitHub CLI (do logowania i pobierania repo z terminala)

**Mac:**
1. Wejdź na https://cli.github.com
2. Kliknij **Download for macOS** → pobierz `.pkg`
3. Otwórz, klikaj **Continue → Install** do końca
4. W Terminalu wpisz `gh --version` — powinno pokazać numer wersji

**Windows:**
1. https://cli.github.com → **Download for Windows** (plik `.msi`)
2. Otwórz, klikaj **Next** do końca
3. **WAŻNE:** zamknij PowerShell i otwórz nowe okno (żeby załapał nową instalację)
4. W PowerShell wpisz `gh --version`

### 3. Logowanie do GitHub

W terminalu wpisz:
```
gh auth login
```

Następnie odpowiadaj strzałkami i Enter:
- **What account do you want to log into?** → `GitHub.com`
- **What is your preferred protocol for Git operations?** → `HTTPS`
- **Authenticate Git with your GitHub credentials?** → `Yes`
- **How would you like to authenticate GitHub CLI?** → `Login with a web browser`
- Pokaże się **kod jednorazowy** (np. `XXXX-XXXX`) — skopiuj go
- Naciśnij Enter — otworzy się przeglądarka
- Wklej kod i zaloguj się swoim kontem GitHub (tym z dostępem do repo)
- Wróć do terminala — powinno być `✓ Authentication complete`

Sprawdź:
```
gh auth status
```
Powinno pokazać Twój login GitHub.

### 4. Pobranie projektu

Mac:
```
cd ~/Documents
gh repo clone SonPaier/pomerico
```

Windows:
```
cd $env:USERPROFILE\Documents
gh repo clone SonPaier/pomerico
```

Pobranie trwa kilka minut, zajmie ~500 MB.

### 5. Claude Code

W terminalu wklej i Enter:
```
npm install -g @anthropic-ai/claude-code
```

Po zakończeniu sprawdź:
```
claude --version
```

### 6. Logowanie do Claude (jednorazowo)

W terminalu:
```
claude
```

Otworzy się przeglądarka — zaloguj się kontem Anthropic. Jeśli nie masz, załóż na https://console.anthropic.com.

Po zalogowaniu zamknij przeglądarkę i wróć do terminala. Wciśnij **Ctrl+C** dwa razy żeby wyjść — zostawiamy konfigurację na potem.

---

## Codzienna praca

### Otwarcie projektu

**Mac (Terminal):**
```
cd ~/Documents/pomerico
claude
```

**Windows (PowerShell):**
```
cd $env:USERPROFILE\Documents\pomerico
claude
```

### 📋 Pierwsza wiadomość — wklej dokładnie ten tekst:

```
Cześć! Pracujemy nad stroną pomerico.com.

Jestem właścicielem firmy, nie programistą. Mów do mnie po polsku, prosto, bez żargonu. Jeśli musisz użyć technicznego słowa — wyjaśnij co znaczy.

ZASADY:
1. Pracujemy bezpośrednio na branchu main. Nie twórz nowych branchy ani Pull Requestów — robisz commit od razu na main.
2. NIGDY nie pushuj automatycznie. Po commitcie poczekaj aż wyraźnie Ci powiem "wypchnij" / "wyślij na serwer" / "tak, opublikuj". System i tak zapyta mnie o zgodę przed każdym pushem — odpowiadaj zgodnie z moją decyzją.
3. Push na main = strona idzie na żywo na pomerico.com w ciągu 2 minut. Zawsze przypomnij mi o tym przed pushem i daj szansę się rozmyślić.
4. Nigdy nie usuwaj plików, folderów, sekcji ani treści bez zapytania mnie najpierw. Nawet jeśli wydaje się oczywiste.
5. Nie zmieniaj plików konfiguracyjnych (next.config.ts, vercel.json, package.json, .env*) bez wyraźnej zgody — w razie wątpliwości zapytaj.
6. Po każdej zmianie napisz po polsku co zostało zmienione, w którym pliku, i jak to wygląda na stronie.
7. Przed wgraniem dużej zmiany (np. nowa sekcja, zmiana układu, usunięcie czegoś) pokaż mi screenshot albo opis jak to będzie wyglądać.
8. Jeśli coś co proszę może coś popsuć (np. usunięcie sekcji, zmiana adresu URL, zmiana danych firmy) — najpierw zapytaj "Czy na pewno?" i wyjaśnij konsekwencje.
9. Nie dotykaj plików w folderze .claude — to ustawienia bezpieczeństwa.
10. Nigdy nie używaj flag --force, --no-verify, -f. Jeśli git odmawia push — powiedz mi, nie wymuszaj.
11. Jeśli nie wiesz jak coś zrobić lub coś nie działa — powiedz mi, nie zgaduj.

WORKFLOW dla każdej zmiany:
1. Edytuj pliki według mojej prośby.
2. Zrób commit (git add + git commit z opisem co zmieniłeś).
3. NIE pushuj automatycznie. Napisz mi: "Zrobione lokalnie. Co zmieniłem: [...]. Czy wypychać na serwer (idzie na żywo na pomerico.com)?"
4. Jeśli powiem "tak, wypchnij" — wtedy zrób git push origin main. System poprosi mnie o potwierdzenie — kliknę "yes".
5. Po pushcie powiedz mi: "Wypchnięto. Vercel za ~2 minuty zbuduje i wgra zmiany na pomerico.com."

Co chcę dziś zmienić: [TUTAJ NAPISZ CO]
```

### Przykłady poleceń

**Dobre (konkretne):**
- „Zmień na stronie głównej tytuł sekcji 'Executive Voices' na 'Co mówią klienci'"
- „W stopce zmień email na kontakt@pomerico.com"
- „Na stronie /contact zmień numer telefonu z +48 794 165 506 na +48 123 456 789"
- „Dodaj na stronie /about-us nowy paragraf po pierwszym akapicie z tekstem: '...'"
- „Zmień zdjęcie w sekcji hero na stronie głównej — używaj pliku images/nowe-zdjecie.jpg"

**Złe (Claude będzie zgadywać):**
- „Popraw stronę główną" → powiedz CO konkretnie
- „Dodaj coś o naszych usługach" → daj tekst albo wskaż gdzie i co
- „Niech będzie ładniej" → opisz konkretny cel

### Zakończenie sesji
W terminalu wciśnij **Ctrl+C** dwa razy. Albo zamknij okno terminala.

---

## Co się dzieje gdy zatwierdzisz push

1. Claude robi `git push origin main`
2. Twoje zmiany trafiają do GitHub
3. Vercel (system hostingowy) automatycznie wykrywa nowe zmiany
4. W ciągu ~2 minut buduje stronę i wgrywa na pomerico.com
5. Sprawdź na https://pomerico.com — zmiana powinna być widoczna

**Jeśli coś poszło nie tak po wgraniu na żywo:**
Powiedz Claude: „cofnij ostatnią zmianę" — on zrobi nowy commit z odwróceniem (revert) i poprosi o zgodę na push. Strona wróci do poprzedniego stanu w ciągu 2 minut.

---

## Czego NIE robić
- ❌ Nie wpisuj sam komend `git` w terminalu — niech Claude robi
- ❌ Nie edytuj plików `.env*`, `vercel.json`, `package.json` ręcznie
- ❌ Nie usuwaj folderu `node_modules` (Claude go odtworzy jeśli trzeba)
- ❌ Nie wklejaj do Claude haseł, kluczy API, danych klientów ani danych osobowych
- ❌ Nie pushuj zmian o których nie jesteś pewien — najpierw daj znać Tomaszowi

## Co robić w razie problemów
1. Pokaż Claudemu komunikat błędu — przekleisz cały tekst, on zazwyczaj naprawi
2. Jeśli błąd się powtarza — zrób screenshot okna terminala i wyślij Tomaszowi
3. Jeśli widzisz słowo „error", „fatal", „cannot" — zatrzymaj się, nie kontynuuj klikania

---

## Automatyczne zabezpieczenia w repo (już aktywne)

W repozytorium jest plik `.claude/settings.json`, który **automatycznie blokuje** następujące komendy — Claude nie będzie ich w stanie wykonać nawet gdyby chciał:
- `git push --force` / `-f` (wymuszony push)
- `git reset --hard` (kasowanie zmian na zawsze)
- `git clean -f` (usuwanie nieśledzonych plików)
- `rm -rf` (rekurencyjne kasowanie folderów)
- `sudo` (komendy administratora)
- `vercel deploy/promote/rollback/remove`
- Edycja plików `.env*`

Komendy które wymagają **Twojego potwierdzenia** (Claude zapyta, Ty klikasz „yes"/„no"):
- `git push` (wgrywanie na serwer)
- `git merge`
- `pnpm install` / `npm install`
- Edycja `vercel.json`, `next.config.ts`, `package.json`, `.gitignore`

Możesz spokojnie pracować — system Cię obroni przed katastrofalnymi błędami.
