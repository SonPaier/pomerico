import type { Metadata } from "next";
import { withOgImage } from "@/lib/og-image";

// Tłumaczenie polityki prywatności z pomerico.com. Tekst prawny – przed
// publikacją powinien go zweryfikować prawnik / osoba odpowiedzialna za RODO.

const TITLE = "Polityka prywatności | Pomerico";
const DESCRIPTION =
  "Polityka prywatności Pomerico Group: jak zbieramy, przetwarzamy i chronimy Twoje dane osobowe zgodnie z RODO i polskimi przepisami o ochronie danych.";

export const metadata: Metadata = withOgImage({
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: "/privacy-policy" },
  openGraph: { title: TITLE, description: DESCRIPTION },
});

const td = "border border-dark/20 px-3 py-2";

export default function PrivacyPolicyPage() {
  return (
    <>
      <section className="bg-primary-blue py-16 text-center text-white">
        <div className="mx-auto max-w-7xl px-6">
          <h1 className="font-heading text-3xl font-bold">Polityka prywatności</h1>
        </div>
      </section>
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-6 prose prose-lg max-w-none text-dark/80 [&_a]:break-words [&_h2]:font-heading [&_h2]:text-primary-blue [&_h2]:text-2xl [&_h2]:mt-12 [&_h2]:mb-4 [&_h3]:font-heading [&_h3]:text-dark [&_h3]:text-lg [&_h3]:mt-8 [&_h3]:mb-3">
          <p>
            Niniejsza informacja o prywatności <strong>Pomerico Group Sp. z o.o.</strong> (&bdquo;Spółka&rdquo;, &bdquo;my&rdquo;, &bdquo;nas&rdquo;, &bdquo;nasz&rdquo;) opisuje, w jaki sposób i w jakim celu możemy zbierać, przechowywać, wykorzystywać i/lub udostępniać (&bdquo;przetwarzać&rdquo;) Twoje dane, gdy korzystasz z naszych usług (&bdquo;Usługi&rdquo;), na przykład gdy odwiedzasz naszą stronę internetową pod adresem <a href="https://pomerico.pl">pomerico.pl</a> lub <a href="https://pomerico.com">pomerico.com</a> albo kontaktujesz się z nami w inny sposób, w tym w związku z działaniami sprzedażowymi, marketingowymi lub wydarzeniami.
          </p>
          <p><strong>Pytania lub wątpliwości?</strong> Lektura niniejszej informacji o prywatności pomoże Ci zrozumieć przysługujące Ci prawa i możliwości wyboru w zakresie prywatności. Jeśli nie zgadzasz się z naszymi zasadami i praktykami, prosimy nie korzystać z naszych Usług. Jeżeli nadal masz pytania lub wątpliwości, skontaktuj się z nami pod adresem <a href="mailto:office@pomerico.com">office@pomerico.com</a>.</p>

          <h2>Podsumowanie najważniejszych informacji</h2>
          <p><em>Poniższe podsumowanie przedstawia najważniejsze informacje zawarte w niniejszej informacji o prywatności. Więcej szczegółów na każdy z tych tematów znajdziesz w pełnej treści dokumentu poniżej.</em></p>
          <p><strong>Jakie dane osobowe przetwarzamy?</strong> Gdy odwiedzasz nasze Usługi, korzystasz z nich lub się po nich poruszasz, możemy przetwarzać dane osobowe w zależności od tego, w jaki sposób kontaktujesz się z Pomerico Group i korzystasz z Usług, jakich wyborów dokonujesz oraz z jakich produktów i funkcji korzystasz.</p>
          <p><strong>Czy przetwarzamy szczególne kategorie danych osobowych (dane wrażliwe)?</strong> Nie przetwarzamy danych wrażliwych.</p>
          <p><strong>Czy otrzymujemy dane od podmiotów trzecich?</strong> Możemy otrzymywać dane z publicznych baz danych, od partnerów marketingowych, z platform mediów społecznościowych oraz z innych źródeł zewnętrznych.</p>
          <p><strong>W jaki sposób przetwarzamy Twoje dane?</strong> Przetwarzamy Twoje dane w celu świadczenia, ulepszania i administrowania naszymi Usługami, komunikowania się z Tobą, zapewnienia bezpieczeństwa i zapobiegania nadużyciom oraz wypełniania obowiązków wynikających z przepisów prawa. Za Twoją zgodą możemy również przetwarzać Twoje dane w innych celach. Przetwarzamy Twoje dane wyłącznie wtedy, gdy mamy ku temu ważną podstawę prawną.</p>
          <p><strong>W jakich sytuacjach i komu udostępniamy dane osobowe?</strong> Możemy udostępniać dane w określonych sytuacjach i określonym podmiotom trzecim.</p>
          <p><strong>Jakie prawa Ci przysługują?</strong> W zależności od miejsca, w którym się znajdujesz, właściwe przepisy o ochronie prywatności mogą przyznawać Ci określone prawa w odniesieniu do Twoich danych osobowych.</p>
          <p><strong>Jak możesz skorzystać ze swoich praw?</strong> Najprościej jest skontaktować się z nami. Każde żądanie rozpatrzymy i podejmiemy w związku z nim działania zgodnie z obowiązującymi przepisami o ochronie danych.</p>

          <h2>Spis treści</h2>
          <ol>
            <li>Jakie dane zbieramy?</li>
            <li>W jaki sposób przetwarzamy Twoje dane?</li>
            <li>Na jakich podstawach prawnych przetwarzamy Twoje dane osobowe?</li>
            <li>Kiedy i komu udostępniamy Twoje dane osobowe?</li>
            <li>Jakie jest nasze stanowisko wobec stron internetowych podmiotów trzecich?</li>
            <li>Czy używamy plików cookie i innych technologii śledzących?</li>
            <li>Jak postępujemy w przypadku logowania przez media społecznościowe?</li>
            <li>Jak długo przechowujemy Twoje dane?</li>
            <li>Czy zbieramy dane od osób niepełnoletnich?</li>
            <li>Jakie prawa przysługują Ci w zakresie prywatności?</li>
            <li>Ustawienia funkcji Do-Not-Track</li>
            <li>Czy mieszkańcom Kalifornii przysługują szczególne prawa w zakresie prywatności?</li>
            <li>Czy aktualizujemy niniejszą informację?</li>
            <li>Jak możesz się z nami skontaktować w sprawie niniejszej informacji?</li>
            <li>Jak możesz przejrzeć, zaktualizować lub usunąć zebrane od Ciebie dane?</li>
          </ol>

          <h2>1. Jakie dane zbieramy?</h2>
          <h3>Dane osobowe, które nam przekazujesz</h3>
          <p><strong>W skrócie:</strong> zbieramy dane osobowe, które nam przekazujesz.</p>
          <p>Zbieramy dane osobowe, które dobrowolnie nam przekazujesz, gdy wyrażasz zainteresowanie uzyskaniem informacji o nas lub o naszych produktach i Usługach, gdy bierzesz udział w aktywnościach w ramach Usług lub w inny sposób się z nami kontaktujesz.</p>
          <p><strong>Dane osobowe przekazywane przez Ciebie.</strong> Zakres zbieranych przez nas danych osobowych zależy od kontekstu Twoich interakcji z nami i z Usługami, dokonywanych przez Ciebie wyborów oraz produktów i funkcji, z których korzystasz. Zbierane przez nas dane osobowe mogą obejmować:</p>
          <ul>
            <li>imiona i nazwiska,</li>
            <li>numery telefonów,</li>
            <li>adresy e-mail.</li>
          </ul>
          <p><strong>Dane wrażliwe.</strong> Nie przetwarzamy danych wrażliwych.</p>
          <p>Wszystkie przekazywane nam dane osobowe muszą być prawdziwe, kompletne i dokładne, a o wszelkich ich zmianach należy nas informować.</p>
          <h3>Dane zbierane automatycznie</h3>
          <p><strong>W skrócie:</strong> niektóre dane – takie jak adres IP (Internet Protocol) i/lub charakterystyka przeglądarki i urządzenia – są zbierane automatycznie podczas korzystania z naszych Usług.</p>
          <p>Automatycznie zbieramy określone informacje, gdy odwiedzasz Usługi, korzystasz z nich lub się po nich poruszasz. Informacje te nie ujawniają Twojej tożsamości (takiej jak imię i nazwisko czy dane kontaktowe), ale mogą obejmować informacje o urządzeniu i sposobie korzystania z Usług, takie jak adres IP, charakterystyka przeglądarki i urządzenia, system operacyjny, preferencje językowe, adresy URL stron odsyłających, nazwa urządzenia, kraj, lokalizacja, informacje o tym, jak i kiedy korzystasz z naszych Usług, oraz inne informacje techniczne. Informacje te są nam potrzebne przede wszystkim do zapewnienia bezpieczeństwa i działania naszych Usług oraz do celów wewnętrznych analiz i raportowania.</p>
          <p>Podobnie jak wiele innych firm, zbieramy także informacje za pomocą plików cookie i podobnych technologii.</p>
          <p>Zbierane przez nas informacje obejmują:</p>
          <p><strong>Dane z logów i dane o korzystaniu z Usług.</strong> Dane z logów i dane o korzystaniu z Usług to informacje serwisowe, diagnostyczne, dotyczące użytkowania i wydajności, które nasze serwery zbierają automatycznie, gdy uzyskujesz dostęp do Usług lub z nich korzystasz, i które zapisujemy w plikach dziennika (logach). W zależności od sposobu Twojej interakcji z nami dane te mogą obejmować adres IP, informacje o urządzeniu, typ i ustawienia przeglądarki oraz informacje o Twojej aktywności w ramach Usług (takie jak data i godzina korzystania, przeglądane strony i pliki, wyszukiwania oraz inne podejmowane działania, np. z jakich funkcji korzystasz), informacje o zdarzeniach na urządzeniu (takie jak aktywność systemu, raporty o błędach – czasem nazywane &bdquo;zrzutami awaryjnymi&rdquo; (crash dumps) – oraz ustawienia sprzętowe).</p>
          <p><strong>Dane o urządzeniu.</strong> Zbieramy dane o urządzeniu, takie jak informacje o komputerze, telefonie, tablecie lub innym urządzeniu, z którego korzystasz, aby uzyskać dostęp do Usług. W zależności od używanego urządzenia dane te mogą obejmować m.in. adres IP (lub serwer proxy), numery identyfikacyjne urządzenia i aplikacji, lokalizację, typ przeglądarki, model sprzętu, dostawcę usług internetowych i/lub operatora sieci komórkowej, system operacyjny oraz informacje o konfiguracji systemu.</p>
          <p><strong>Dane o lokalizacji.</strong> Zbieramy dane o lokalizacji, takie jak informacje o położeniu Twojego urządzenia, które mogą być dokładne lub przybliżone. Zakres zbieranych informacji zależy od typu i ustawień urządzenia, z którego korzystasz, aby uzyskać dostęp do Usług. Możemy na przykład wykorzystywać GPS i inne technologie do zbierania danych geolokalizacyjnych, które wskazują Twoją bieżącą lokalizację (na podstawie adresu IP). Możesz zrezygnować z udostępniania nam tych informacji, odmawiając dostępu do nich lub wyłączając ustawienia lokalizacji na swoim urządzeniu. W takim przypadku korzystanie z niektórych funkcji Usług może jednak nie być możliwe.</p>
          <h3>Dane zbierane z innych źródeł</h3>
          <p>Aby lepiej dopasowywać kierowane do Ciebie działania marketingowe, oferty i usługi oraz aktualizować nasze rejestry, możemy pozyskiwać informacje o Tobie z innych źródeł, takich jak publiczne bazy danych, partnerzy prowadzący z nami wspólne działania marketingowe, programy partnerskie, dostawcy danych oraz inne podmioty trzecie. Informacje te obejmują adresy korespondencyjne, stanowiska, adresy e-mail, numery telefonów, dane o intencjach (dane o zachowaniach użytkowników), adresy IP, profile w mediach społecznościowych, adresy URL profili w mediach społecznościowych oraz profile niestandardowe – w celu prowadzenia reklamy ukierunkowanej i promocji wydarzeń.</p>

          <h2>2. W jaki sposób przetwarzamy Twoje dane?</h2>
          <p><strong>W skrócie:</strong> przetwarzamy Twoje dane w celu świadczenia, ulepszania i administrowania naszymi Usługami, komunikowania się z Tobą, zapewnienia bezpieczeństwa i zapobiegania nadużyciom oraz wypełniania obowiązków wynikających z przepisów prawa. Za Twoją zgodą możemy również przetwarzać Twoje dane w innych celach.</p>
          <p>Przetwarzamy Twoje dane osobowe z różnych powodów – w zależności od tego, w jaki sposób korzystasz z naszych Usług – w tym:</p>
          <ul>
            <li><strong>W celu świadczenia usług na rzecz użytkownika i ułatwienia ich świadczenia.</strong> Możemy przetwarzać Twoje dane, aby świadczyć na Twoją rzecz usługę, o którą prosisz.</li>
            <li><strong>W celu odpowiadania na zapytania użytkowników i udzielania im wsparcia.</strong> Możemy przetwarzać Twoje dane, aby odpowiadać na Twoje zapytania i rozwiązywać ewentualne problemy związane z zamówioną usługą.</li>
            <li><strong>W celu przesyłania Ci informacji administracyjnych.</strong> Możemy przetwarzać Twoje dane, aby przesyłać Ci szczegółowe informacje o naszych produktach i usługach, zmianach naszych regulaminów i zasad oraz inne podobne informacje.</li>
            <li><strong>W celu realizacji Twoich zamówień i zarządzania nimi.</strong> Możemy przetwarzać Twoje dane, aby realizować Twoje zamówienia, płatności, zwroty i wymiany dokonywane za pośrednictwem Usług oraz zarządzać nimi.</li>
            <li><strong>W celu umożliwienia komunikacji między użytkownikami.</strong> Możemy przetwarzać Twoje dane, jeśli zdecydujesz się skorzystać z naszych rozwiązań umożliwiających komunikację z innym użytkownikiem.</li>
            <li><strong>W celu przesyłania Ci komunikatów marketingowych i promocyjnych.</strong> Możemy przetwarzać przekazane nam dane osobowe do naszych celów marketingowych, jeżeli jest to zgodne z Twoimi preferencjami marketingowymi. Z otrzymywania naszych wiadomości marketingowych możesz zrezygnować w dowolnym momencie.</li>
            <li><strong>W celu wyświetlania Ci reklam ukierunkowanych.</strong> Możemy przetwarzać Twoje dane, aby opracowywać i wyświetlać spersonalizowane treści i reklamy dopasowane do Twoich zainteresowań, lokalizacji i innych czynników.</li>
            <li><strong>W celu ochrony naszych Usług.</strong> Możemy przetwarzać Twoje dane w ramach działań mających na celu zapewnienie bezpieczeństwa naszych Usług, w tym monitorowania nadużyć i zapobiegania im.</li>
            <li><strong>W celu identyfikowania trendów w korzystaniu z Usług.</strong> Możemy przetwarzać informacje o tym, jak korzystasz z naszych Usług, aby lepiej zrozumieć sposób ich wykorzystania i móc je ulepszać.</li>
            <li><strong>W celu oceny skuteczności naszych kampanii marketingowych i promocyjnych.</strong> Możemy przetwarzać Twoje dane, aby lepiej zrozumieć, jak prowadzić kampanie marketingowe i promocyjne najbardziej dla Ciebie trafne.</li>
            <li><strong>W celu ochrony żywotnych interesów osoby fizycznej.</strong> Możemy przetwarzać Twoje dane, gdy jest to niezbędne do ochrony żywotnych interesów osoby fizycznej, np. w celu zapobieżenia szkodzie.</li>
          </ul>

          <h2>3. Na jakich podstawach prawnych przetwarzamy Twoje dane?</h2>
          <p><strong>W skrócie:</strong> przetwarzamy Twoje dane osobowe wyłącznie wtedy, gdy uważamy to za niezbędne i mamy ważną podstawę prawną przewidzianą w obowiązujących przepisach, np. Twoją zgodę, obowiązek wynikający z przepisów prawa, konieczność świadczenia na Twoją rzecz usług w celu zawarcia lub wykonania umowy, ochronę Twoich praw lub realizację naszych prawnie uzasadnionych interesów biznesowych.</p>
          <p><strong>Jeśli znajdujesz się w UE lub w Wielkiej Brytanii, ta sekcja dotyczy Ciebie.</strong></p>
          <p>Ogólne rozporządzenie o ochronie danych (RODO) oraz brytyjskie RODO (UK GDPR) zobowiązują nas do wyjaśnienia, na jakich podstawach prawnych opieramy przetwarzanie Twoich danych osobowych. W związku z tym możemy przetwarzać Twoje dane osobowe na następujących podstawach prawnych:</p>
          <ul>
            <li><strong>Zgoda (art. 6 ust. 1 lit. a RODO).</strong> Możemy przetwarzać Twoje dane, jeśli wyraziłeś(-aś) zgodę na wykorzystanie Twoich danych osobowych w określonym celu. Zgodę możesz wycofać w dowolnym momencie.</li>
            <li><strong>Wykonanie umowy (art. 6 ust. 1 lit. b RODO).</strong> Możemy przetwarzać Twoje dane osobowe, gdy uważamy to za niezbędne do wykonania naszych zobowiązań umownych wobec Ciebie, w tym do świadczenia naszych Usług, lub do podjęcia działań na Twoje żądanie przed zawarciem z Tobą umowy.</li>
            <li>
              <strong>Prawnie uzasadnione interesy (art. 6 ust. 1 lit. f RODO).</strong> Możemy przetwarzać Twoje dane, gdy uważamy to za racjonalnie niezbędne do realizacji naszych prawnie uzasadnionych interesów biznesowych, a interesy te nie są nadrzędne wobec Twoich interesów oraz podstawowych praw i wolności. Możemy na przykład przetwarzać Twoje dane osobowe w niektórych z opisanych celów, aby:
              <ul>
                <li>przesyłać użytkownikom informacje o ofertach specjalnych i rabatach na nasze produkty i usługi,</li>
                <li>opracowywać i wyświetlać naszym użytkownikom spersonalizowane i trafne treści reklamowe,</li>
                <li>analizować sposób korzystania z naszych usług, aby je ulepszać oraz angażować i utrzymywać użytkowników,</li>
                <li>wspierać nasze działania marketingowe,</li>
                <li>diagnozować problemy i/lub zapobiegać nadużyciom.</li>
              </ul>
            </li>
            <li><strong>Obowiązki prawne (art. 6 ust. 1 lit. c RODO).</strong> Możemy przetwarzać Twoje dane, gdy uważamy to za niezbędne do wypełnienia ciążących na nas obowiązków prawnych, np. w celu współpracy z organami ścigania lub organami nadzoru, ustalenia, dochodzenia lub obrony naszych roszczeń albo ujawnienia Twoich danych jako dowodu w postępowaniu sądowym, w którym uczestniczymy.</li>
            <li><strong>Żywotne interesy (art. 6 ust. 1 lit. d RODO).</strong> Możemy przetwarzać Twoje dane, gdy uważamy to za niezbędne do ochrony Twoich żywotnych interesów lub żywotnych interesów osoby trzeciej, np. w sytuacjach potencjalnego zagrożenia bezpieczeństwa jakiejkolwiek osoby.</li>
          </ul>
          <p><strong>Jeśli znajdujesz się w Kanadzie, ta sekcja dotyczy Ciebie.</strong></p>
          <p>Możemy przetwarzać Twoje dane, jeśli wyraziłeś(-aś) wyraźną zgodę (express consent) na wykorzystanie Twoich danych osobowych w określonym celu lub w sytuacjach, w których Twoją zgodę można domniemywać (implied consent). Zgodę możesz wycofać w dowolnym momencie.</p>
          <p>W niektórych wyjątkowych przypadkach obowiązujące przepisy mogą zezwalać nam na przetwarzanie Twoich danych bez Twojej zgody, w tym na przykład:</p>
          <ul>
            <li>jeżeli zbieranie danych leży w oczywistym interesie danej osoby, a uzyskanie zgody w odpowiednim czasie nie jest możliwe,</li>
            <li>na potrzeby postępowań wyjaśniających oraz wykrywania nadużyć i zapobiegania im,</li>
            <li>na potrzeby transakcji biznesowych, pod warunkiem spełnienia określonych warunków,</li>
            <li>jeżeli dane są zawarte w zeznaniu świadka, a ich zebranie jest niezbędne do oceny, rozpatrzenia lub likwidacji szkody ubezpieczeniowej,</li>
            <li>w celu identyfikacji osób rannych, chorych lub zmarłych oraz komunikacji z ich najbliższymi krewnymi,</li>
            <li>jeżeli mamy uzasadnione podstawy, by sądzić, że dana osoba padła, pada lub może paść ofiarą nadużycia finansowego,</li>
            <li>jeżeli można racjonalnie oczekiwać, że zbieranie i wykorzystywanie danych za zgodą zagroziłoby dostępności lub dokładności informacji, a zbieranie danych jest uzasadnione celami związanymi z wyjaśnianiem naruszenia umowy lub naruszenia prawa Kanady lub prowincji,</li>
            <li>jeżeli ujawnienie danych jest wymagane w celu wykonania wezwania, nakazu, postanowienia sądu lub przepisów sądowych dotyczących udostępniania dokumentów,</li>
            <li>jeżeli dane zostały wytworzone przez daną osobę w ramach jej zatrudnienia, działalności gospodarczej lub wykonywanego zawodu, a ich zbieranie jest zgodne z celami, w jakich zostały wytworzone,</li>
            <li>jeżeli dane są zbierane wyłącznie do celów dziennikarskich, artystycznych lub literackich,</li>
            <li>jeżeli dane są publicznie dostępne i zostały określone w przepisach wykonawczych.</li>
          </ul>

          <h2>4. Kiedy i komu udostępniamy Twoje dane osobowe?</h2>
          <p><strong>W skrócie:</strong> możemy udostępniać dane w określonych sytuacjach opisanych w tej sekcji i/lub następującym podmiotom trzecim.</p>
          <p>Udostępnienie Twoich danych osobowych może być konieczne w następujących sytuacjach:</p>
          <ul>
            <li><strong>Przeniesienie przedsiębiorstwa.</strong> Możemy udostępnić lub przekazać Twoje dane w związku z fuzją, sprzedażą aktywów spółki, finansowaniem lub przejęciem całości lub części naszej działalności przez inną spółkę albo w trakcie negocjacji w tym zakresie.</li>
            <li><strong>Podmioty powiązane.</strong> Możemy udostępniać Twoje dane podmiotom z nami powiązanym – w takim przypadku będziemy wymagać, aby przestrzegały one niniejszej informacji o prywatności. Podmioty powiązane obejmują naszą spółkę dominującą oraz wszelkie spółki zależne, partnerów wspólnych przedsięwzięć (joint venture) lub inne spółki, które kontrolujemy lub które znajdują się z nami pod wspólną kontrolą.</li>
            <li><strong>Partnerzy biznesowi.</strong> Możemy udostępniać Twoje dane naszym partnerom biznesowym w celu zaoferowania Ci określonych produktów, usług lub promocji.</li>
            <li><strong>Inni użytkownicy.</strong> Gdy udostępniasz dane osobowe lub w inny sposób korzystasz z publicznie dostępnych obszarów Usług, dane te mogą być widoczne dla wszystkich użytkowników i bezterminowo publicznie dostępne poza Usługami. Jeżeli kontaktujesz się z innymi użytkownikami naszych Usług i rejestrujesz się w naszych Usługach za pośrednictwem serwisu społecznościowego (np. Facebook), Twoje kontakty w tym serwisie zobaczą Twoje imię i nazwisko, zdjęcie profilowe oraz opisy Twojej aktywności. Podobnie inni użytkownicy będą mogli przeglądać opisy Twojej aktywności, komunikować się z Tobą w ramach naszych Usług i wyświetlać Twój profil.</li>
          </ul>

          <h2>5. Jakie jest nasze stanowisko wobec stron internetowych podmiotów trzecich?</h2>
          <p><strong>W skrócie:</strong> nie odpowiadamy za bezpieczeństwo informacji, które udostępniasz podmiotom trzecim niepowiązanym z naszymi Usługami, do których możemy kierować za pomocą linków lub które zamieszczają reklamy w naszych Usługach.</p>
          <p>Usługi mogą zawierać linki do stron internetowych, usług online lub aplikacji mobilnych podmiotów trzecich i/lub reklamy podmiotów trzecich, które nie są z nami powiązane i które mogą zawierać linki do innych stron internetowych, usług lub aplikacji. W związku z tym nie udzielamy żadnych gwarancji dotyczących takich podmiotów trzecich i nie ponosimy odpowiedzialności za jakiekolwiek straty lub szkody wynikające z korzystania z takich stron internetowych, usług lub aplikacji podmiotów trzecich. Zamieszczenie linku do strony internetowej, usługi lub aplikacji podmiotu trzeciego nie oznacza, że ją rekomendujemy. Nie możemy zagwarantować bezpieczeństwa i prywatności danych przekazywanych podmiotom trzecim. Dane zbierane przez podmioty trzecie nie są objęte niniejszą informacją o prywatności. Nie odpowiadamy za treści ani za praktyki i zasady dotyczące prywatności i bezpieczeństwa jakichkolwiek podmiotów trzecich, w tym innych stron internetowych, usług lub aplikacji, do których lub z których prowadzą linki z Usług. Zalecamy zapoznanie się z zasadami tych podmiotów i kontaktowanie się z nimi bezpośrednio w razie pytań.</p>

          <h2>6. Czy używamy plików cookie i innych technologii śledzących?</h2>
          <p><strong>W skrócie:</strong> możemy używać plików cookie i innych technologii śledzących do zbierania i przechowywania Twoich danych.</p>
          <p>Możemy używać plików cookie i podobnych technologii śledzących (takich jak sygnalizatory WWW i piksele), aby uzyskiwać dostęp do informacji lub je przechowywać. Szczegółowe informacje o tym, jak korzystamy z takich technologii i jak możesz odmówić zgody na niektóre pliki cookie, znajdziesz w naszej Informacji o plikach cookie.</p>

          <h2>7. Jak postępujemy w przypadku logowania przez media społecznościowe?</h2>
          <p><strong>W skrócie:</strong> jeśli zdecydujesz się zarejestrować lub zalogować do naszych Usług za pomocą konta w mediach społecznościowych, możemy uzyskać dostęp do określonych informacji o Tobie.</p>
          <p>Nasze Usługi umożliwiają rejestrację i logowanie za pomocą danych konta w zewnętrznym serwisie społecznościowym (np. danych logowania do Facebooka lub Twittera). Jeśli z tego skorzystasz, otrzymamy od dostawcy serwisu społecznościowego określone informacje z Twojego profilu. Zakres otrzymywanych informacji może się różnić w zależności od dostawcy, ale często obejmuje imię i nazwisko, adres e-mail, listę znajomych i zdjęcie profilowe, a także inne informacje, które zdecydujesz się upublicznić na takiej platformie.</p>
          <p>Informacje te będziemy wykorzystywać wyłącznie w celach opisanych w niniejszej informacji o prywatności lub w inny sposób jasno wskazanych w ramach danej Usługi. Pamiętaj, że nie kontrolujemy innych sposobów wykorzystywania Twoich danych osobowych przez zewnętrznego dostawcę serwisu społecznościowego i nie ponosimy za nie odpowiedzialności. Zalecamy zapoznanie się z jego informacją o prywatności, aby zrozumieć, jak zbiera, wykorzystuje i udostępnia Twoje dane osobowe oraz jak możesz ustawić preferencje prywatności w jego serwisach i aplikacjach.</p>

          <h2>8. Jak długo przechowujemy Twoje dane?</h2>
          <p><strong>W skrócie:</strong> przechowujemy Twoje dane tak długo, jak jest to niezbędne do realizacji celów opisanych w niniejszej informacji o prywatności, chyba że przepisy prawa wymagają inaczej.</p>
          <p>Przechowujemy Twoje dane osobowe wyłącznie przez okres niezbędny do realizacji celów określonych w niniejszej informacji o prywatności, chyba że przepisy prawa wymagają lub zezwalają na dłuższy okres przechowywania (np. przepisy podatkowe, rachunkowe lub inne wymogi prawne).</p>
          <p>Gdy nie będziemy już mieć bieżącej, prawnie uzasadnionej potrzeby biznesowej przetwarzania Twoich danych osobowych, usuniemy je lub zanonimizujemy, a jeśli nie będzie to możliwe (np. dlatego, że Twoje dane osobowe są przechowywane w archiwach kopii zapasowych), bezpiecznie je przechowamy i odizolujemy od dalszego przetwarzania do czasu, gdy ich usunięcie będzie możliwe.</p>

          <h2>9. Czy zbieramy dane od osób niepełnoletnich?</h2>
          <p><strong>W skrócie:</strong> nie zbieramy świadomie danych od dzieci poniżej 18. roku życia ani nie kierujemy do nich działań marketingowych.</p>
          <p>Nie pozyskujemy świadomie danych od dzieci poniżej 18. roku życia ani nie kierujemy do nich działań marketingowych. Korzystając z Usług, oświadczasz, że masz ukończone 18 lat albo że jesteś rodzicem lub opiekunem takiej osoby niepełnoletniej i wyrażasz zgodę na korzystanie przez nią z Usług. Jeśli dowiemy się, że zebraliśmy dane osobowe użytkowników poniżej 18. roku życia, dezaktywujemy konto i podejmiemy uzasadnione działania w celu niezwłocznego usunięcia tych danych z naszych rejestrów. Jeśli wiesz o jakichkolwiek danych, które mogliśmy zebrać od dzieci poniżej 18. roku życia, skontaktuj się z nami pod adresem <a href="mailto:office@pomerico.com">office@pomerico.com</a>.</p>

          <h2>10. Jakie prawa przysługują Ci w zakresie prywatności?</h2>
          <p><strong>W skrócie:</strong> w niektórych regionach, takich jak Europejski Obszar Gospodarczy (EOG), Wielka Brytania i Kanada, przysługują Ci prawa zapewniające szerszy dostęp do Twoich danych osobowych i większą kontrolę nad nimi. W każdej chwili możesz przejrzeć lub zmienić swoje konto albo z niego zrezygnować.</p>
          <p>W niektórych regionach (np. w EOG, Wielkiej Brytanii i Kanadzie) przysługują Ci określone prawa na mocy obowiązujących przepisów o ochronie danych. Mogą one obejmować prawo (i) do żądania dostępu do danych osobowych i uzyskania ich kopii, (ii) do żądania ich sprostowania lub usunięcia, (iii) do ograniczenia przetwarzania Twoich danych osobowych oraz (iv) w stosownych przypadkach – do przenoszenia danych. W określonych okolicznościach przysługuje Ci również prawo do wniesienia sprzeciwu wobec przetwarzania Twoich danych osobowych. Z tych praw możesz skorzystać, kontaktując się z nami za pomocą danych kontaktowych podanych poniżej w sekcji &bdquo;JAK MOŻESZ SIĘ Z NAMI SKONTAKTOWAĆ W SPRAWIE NINIEJSZEJ INFORMACJI?&rdquo;.</p>
          <p>Każde żądanie rozpatrzymy i podejmiemy w związku z nim działania zgodnie z obowiązującymi przepisami o ochronie danych.</p>
          <p>Jeśli znajdujesz się w EOG lub w Wielkiej Brytanii i uważasz, że przetwarzamy Twoje dane osobowe niezgodnie z prawem, masz również prawo wnieść skargę do właściwego organu nadzorczego ds. ochrony danych (w Polsce – do Prezesa Urzędu Ochrony Danych Osobowych). Dane kontaktowe tych organów znajdziesz tutaj: <a href="https://ec.europa.eu/justice/data-protection/bodies/authorities/index_en.htm">https://ec.europa.eu/justice/data-protection/bodies/authorities/index_en.htm</a>.</p>
          <p>Jeśli znajdujesz się w Szwajcarii, dane kontaktowe organów ochrony danych są dostępne tutaj: <a href="https://www.edoeb.admin.ch/edoeb/en/home.html">https://www.edoeb.admin.ch/edoeb/en/home.html</a>.</p>
          <p><strong>Wycofanie zgody:</strong> jeśli przetwarzamy Twoje dane osobowe na podstawie Twojej zgody – która w zależności od właściwych przepisów może być wyraźna i/lub domniemana – masz prawo wycofać ją w dowolnym momencie. Możesz to zrobić, kontaktując się z nami za pomocą danych kontaktowych podanych poniżej w sekcji &bdquo;JAK MOŻESZ SIĘ Z NAMI SKONTAKTOWAĆ W SPRAWIE NINIEJSZEJ INFORMACJI?&rdquo;.</p>
          <p>Wycofanie zgody nie wpływa jednak na zgodność z prawem przetwarzania, którego dokonano na podstawie zgody przed jej wycofaniem, ani – jeśli pozwalają na to właściwe przepisy – na przetwarzanie Twoich danych osobowych prowadzone na innych niż zgoda podstawach prawnych.</p>
          <p><strong>Pliki cookie i podobne technologie:</strong> większość przeglądarek internetowych domyślnie akceptuje pliki cookie. Jeśli wolisz, zwykle możesz tak skonfigurować przeglądarkę, aby usuwała i odrzucała pliki cookie. Usunięcie lub odrzucenie plików cookie może wpłynąć na działanie niektórych funkcji lub usług w ramach naszych Usług. Aby zrezygnować z reklam opartych na zainteresowaniach wyświetlanych przez reklamodawców w naszych Usługach, odwiedź stronę <a href="http://www.aboutads.info/choices/">http://www.aboutads.info/choices/</a>.</p>
          <p>Jeśli masz pytania lub uwagi dotyczące swoich praw w zakresie prywatności, napisz do nas na adres <a href="mailto:office@pomerico.com">office@pomerico.com</a>.</p>

          <h2>11. Ustawienia funkcji Do-Not-Track</h2>
          <p>Większość przeglądarek internetowych oraz niektóre mobilne systemy operacyjne i aplikacje mobilne mają funkcję lub ustawienie Do-Not-Track (&bdquo;DNT&rdquo;), które możesz włączyć, aby zasygnalizować, że nie chcesz, by dane o Twojej aktywności w internecie były monitorowane i zbierane. Na obecnym etapie nie wypracowano jednolitego standardu technologicznego rozpoznawania i obsługi sygnałów DNT. W związku z tym obecnie nie reagujemy na sygnały DNT z przeglądarek ani na żaden inny mechanizm automatycznie przekazujący Twoją decyzję o niewyrażeniu zgody na śledzenie w internecie. Jeśli w przyszłości zostanie przyjęty standard śledzenia w internecie, którego będziemy zobowiązani przestrzegać, poinformujemy Cię o tej praktyce w zaktualizowanej wersji niniejszej informacji o prywatności.</p>

          <h2>12. Czy mieszkańcom Kalifornii przysługują szczególne prawa w zakresie prywatności?</h2>
          <p><strong>W skrócie:</strong> tak – jeśli mieszkasz w Kalifornii, przysługują Ci szczególne prawa w zakresie dostępu do Twoich danych osobowych.</p>
          <p>Sekcja 1798.83 Kodeksu cywilnego Kalifornii (California Civil Code), znana również jako ustawa &bdquo;Shine The Light&rdquo;, uprawnia naszych użytkowników będących mieszkańcami Kalifornii do żądania od nas – raz w roku i bezpłatnie – informacji o kategoriach danych osobowych (jeśli takie istnieją), które ujawniliśmy podmiotom trzecim do celów marketingu bezpośredniego, oraz o nazwach i adresach wszystkich podmiotów trzecich, którym udostępniliśmy dane osobowe w bezpośrednio poprzedzającym roku kalendarzowym. Jeśli mieszkasz w Kalifornii i chcesz złożyć takie żądanie, prześlij je do nas na piśmie, korzystając z danych kontaktowych podanych poniżej.</p>
          <p>Jeśli masz mniej niż 18 lat, mieszkasz w Kalifornii i masz zarejestrowane konto w Usługach, masz prawo żądać usunięcia niechcianych danych, które publicznie zamieszczasz w Usługach. Aby złożyć takie żądanie, skontaktuj się z nami, korzystając z danych kontaktowych podanych poniżej, i podaj adres e-mail powiązany z Twoim kontem oraz oświadczenie, że mieszkasz w Kalifornii. Zadbamy o to, aby dane te nie były publicznie wyświetlane w Usługach, pamiętaj jednak, że mogą nie zostać całkowicie lub w pełni usunięte ze wszystkich naszych systemów (np. z kopii zapasowych).</p>
          <h3>Informacja o prywatności zgodna z CCPA</h3>
          <p>Kalifornijski Kodeks Przepisów Wykonawczych (California Code of Regulations) definiuje &bdquo;mieszkańca&rdquo; (resident) jako:</p>
          <ol>
            <li>każdą osobę fizyczną przebywającą w stanie Kalifornia w celu innym niż tymczasowy lub przejściowy oraz</li>
            <li>każdą osobę fizyczną mającą miejsce zamieszkania w stanie Kalifornia, która przebywa poza stanem Kalifornia w celu tymczasowym lub przejściowym.</li>
          </ol>
          <p>Wszystkie pozostałe osoby fizyczne są określane jako &bdquo;niebędące mieszkańcami&rdquo; (non-residents).</p>
          <p>Jeśli powyższa definicja &bdquo;mieszkańca&rdquo; ma do Ciebie zastosowanie, jesteśmy zobowiązani przestrzegać określonych praw i obowiązków dotyczących Twoich danych osobowych.</p>
          <p><strong>Jakie kategorie danych osobowych zbieramy?</strong></p>
          <p>W ciągu ostatnich dwunastu (12) miesięcy zbieraliśmy następujące kategorie danych osobowych:</p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-primary-blue/5">
                  <th className={`${td} text-left`}>Kategoria</th>
                  <th className={`${td} text-left`}>Przykłady</th>
                  <th className={`${td} text-left`}>Zbierane</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className={td}>A. Identyfikatory</td><td className={td}>Dane kontaktowe, takie jak imię i nazwisko, pseudonim, adres pocztowy, numer telefonu stacjonarnego lub komórkowego, unikalny identyfikator osobowy, identyfikator internetowy, adres IP, adres e-mail i nazwa konta</td><td className={td}>NIE</td></tr>
                <tr><td className={td}>B. Kategorie danych osobowych wymienione w kalifornijskiej ustawie o rejestrach klientów (California Customer Records statute)</td><td className={td}>Imię i nazwisko, dane kontaktowe, wykształcenie, zatrudnienie, historia zatrudnienia i informacje finansowe</td><td className={td}>NIE</td></tr>
                <tr><td className={td}>C. Cechy podlegające ochronie na mocy prawa Kalifornii lub prawa federalnego</td><td className={td}>Płeć i data urodzenia</td><td className={td}>NIE</td></tr>
                <tr><td className={td}>D. Informacje handlowe</td><td className={td}>Informacje o transakcjach, historia zakupów, dane finansowe i informacje o płatnościach</td><td className={td}>TAK</td></tr>
                <tr><td className={td}>E. Dane biometryczne</td><td className={td}>Odciski palców i próbki głosu</td><td className={td}>NIE</td></tr>
                <tr><td className={td}>F. Aktywność w internecie lub innej podobnej sieci</td><td className={td}>Historia przeglądania, historia wyszukiwania, zachowania online, dane o zainteresowaniach oraz interakcje z naszymi i innymi stronami internetowymi, aplikacjami, systemami i reklamami</td><td className={td}>NIE</td></tr>
                <tr><td className={td}>G. Dane geolokalizacyjne</td><td className={td}>Lokalizacja urządzenia</td><td className={td}>TAK</td></tr>
                <tr><td className={td}>H. Informacje dźwiękowe, elektroniczne, wizualne, termiczne, zapachowe lub podobne</td><td className={td}>Obrazy oraz nagrania audio, wideo lub rozmów tworzone w związku z naszą działalnością gospodarczą</td><td className={td}>NIE</td></tr>
                <tr><td className={td}>I. Informacje zawodowe lub związane z zatrudnieniem</td><td className={td}>Służbowe dane kontaktowe – w celu świadczenia naszych Usług na poziomie biznesowym – lub stanowisko, historia zatrudnienia i kwalifikacje zawodowe, jeśli ubiegasz się u nas o pracę</td><td className={td}>TAK</td></tr>
                <tr><td className={td}>J. Informacje o wykształceniu</td><td className={td}>Dokumentacja przebiegu nauki i dane katalogowe uczniów/studentów</td><td className={td}>NIE</td></tr>
                <tr><td className={td}>K. Wnioski wyciągnięte z innych danych osobowych</td><td className={td}>Wnioski wyciągnięte z dowolnych zebranych danych osobowych wymienionych powyżej w celu utworzenia profilu lub podsumowania dotyczącego np. preferencji i cech danej osoby</td><td className={td}>NIE</td></tr>
              </tbody>
            </table>
          </div>
          <p>Możemy również zbierać inne dane osobowe spoza tych kategorii w sytuacjach, gdy kontaktujesz się z nami osobiście, online, telefonicznie lub pocztą w związku z:</p>
          <ul>
            <li>uzyskiwaniem pomocy za pośrednictwem naszych kanałów obsługi klienta,</li>
            <li>udziałem w ankietach lub konkursach dla klientów oraz</li>
            <li>ułatwianiem świadczenia naszych Usług i odpowiadaniem na Twoje zapytania.</li>
          </ul>
          <p><strong>W jaki sposób wykorzystujemy i udostępniamy Twoje dane osobowe?</strong></p>
          <p>Więcej informacji o naszych praktykach w zakresie zbierania i udostępniania danych znajdziesz w niniejszej informacji o prywatności.</p>
          <p>Możesz się z nami skontaktować, korzystając z danych kontaktowych podanych na końcu niniejszego dokumentu.</p>
          <p>Jeśli w celu skorzystania z prawa do rezygnacji (opt-out) działasz przez upoważnionego przedstawiciela, możemy odrzucić żądanie, jeżeli przedstawiciel nie przedstawi dowodu, że został należycie upoważniony do działania w Twoim imieniu.</p>
          <p><strong>Czy Twoje dane zostaną udostępnione komukolwiek innemu?</strong></p>
          <p>Możemy ujawniać Twoje dane osobowe naszym usługodawcom na podstawie pisemnej umowy zawartej między nami a każdym z nich. Każdy usługodawca jest podmiotem nastawionym na zysk, który przetwarza dane w naszym imieniu.</p>
          <p>Możemy wykorzystywać Twoje dane osobowe do własnych celów biznesowych, np. do prowadzenia wewnętrznych badań na potrzeby rozwoju i prezentacji technologii. Nie jest to uznawane za &bdquo;sprzedaż&rdquo; Twoich danych osobowych.</p>
          <p>Pomerico Group Sp. z o.o. w ciągu ostatnich dwunastu (12) miesięcy nie ujawniła ani nie sprzedała żadnych danych osobowych podmiotom trzecim w celach biznesowych lub handlowych. Pomerico Group Sp. z o.o. nie będzie w przyszłości sprzedawać danych osobowych należących do osób odwiedzających stronę, użytkowników i innych konsumentów.</p>
          <p><strong>Twoje prawa w odniesieniu do Twoich danych osobowych</strong></p>
          <p><strong>Prawo do żądania usunięcia danych – żądanie usunięcia</strong></p>
          <p>Możesz zażądać usunięcia swoich danych osobowych. Jeśli to zrobisz, uszanujemy Twoje żądanie i usuniemy Twoje dane osobowe, z zastrzeżeniem określonych wyjątków przewidzianych prawem, takich jak (między innymi) korzystanie przez innego konsumenta z jego prawa do wolności wypowiedzi, nasze wymogi w zakresie zgodności wynikające z obowiązku prawnego lub przetwarzanie, które może być niezbędne do ochrony przed działaniami niezgodnymi z prawem.</p>
          <p><strong>Prawo do informacji – żądanie informacji</strong></p>
          <p>W zależności od okoliczności masz prawo wiedzieć:</p>
          <ul>
            <li>czy zbieramy i wykorzystujemy Twoje dane osobowe,</li>
            <li>jakie kategorie danych osobowych zbieramy,</li>
            <li>w jakich celach wykorzystujemy zebrane dane osobowe,</li>
            <li>czy sprzedajemy Twoje dane osobowe podmiotom trzecim,</li>
            <li>jakie kategorie danych osobowych sprzedaliśmy lub ujawniliśmy w celach biznesowych,</li>
            <li>jakim kategoriom podmiotów trzecich dane osobowe zostały sprzedane lub ujawnione w celach biznesowych oraz</li>
            <li>jaki jest biznesowy lub handlowy cel zbierania lub sprzedaży danych osobowych.</li>
          </ul>
          <p>Zgodnie z obowiązującymi przepisami nie jesteśmy zobowiązani do udostępniania ani usuwania danych konsumentów, które zostały pozbawione cech identyfikujących, w odpowiedzi na żądanie konsumenta, ani do ponownej identyfikacji danych w celu weryfikacji żądania konsumenta.</p>
          <p><strong>Prawo do niedyskryminacji w związku z korzystaniem przez konsumenta z praw w zakresie prywatności</strong></p>
          <p>Nie będziemy Cię dyskryminować z powodu korzystania przez Ciebie z praw w zakresie prywatności.</p>
          <p><strong>Proces weryfikacji</strong></p>
          <p>Po otrzymaniu Twojego żądania będziemy musieli zweryfikować Twoją tożsamość, aby ustalić, czy jesteś tą samą osobą, której dane posiadamy w naszym systemie. Weryfikacja wymaga, abyś przekazał(a) nam informacje, które pozwolą nam dopasować je do informacji przekazanych nam wcześniej. Przykładowo, w zależności od rodzaju składanego żądania, możemy poprosić Cię o podanie określonych informacji, abyśmy mogli porównać je z informacjami, które już posiadamy, lub skontaktować się z Tobą za pośrednictwem kanału komunikacji (np. telefonu lub e-maila), który wcześniej nam podałeś(-aś). W zależności od okoliczności możemy również stosować inne metody weryfikacji.</p>
          <p>Dane osobowe podane w Twoim żądaniu wykorzystamy wyłącznie do weryfikacji Twojej tożsamości lub uprawnienia do złożenia żądania. W miarę możliwości będziemy unikać proszenia Cię o dodatkowe informacje na potrzeby weryfikacji. Jeśli jednak nie będziemy w stanie zweryfikować Twojej tożsamości na podstawie posiadanych już informacji, możemy poprosić Cię o przekazanie dodatkowych informacji w celu weryfikacji tożsamości oraz w celach bezpieczeństwa lub zapobiegania nadużyciom. Takie dodatkowo przekazane informacje usuniemy niezwłocznie po zakończeniu weryfikacji.</p>
          <p><strong>Inne prawa w zakresie prywatności</strong></p>
          <ul>
            <li>Możesz wnieść sprzeciw wobec przetwarzania Twoich danych osobowych.</li>
            <li>Możesz zażądać sprostowania swoich danych osobowych, jeśli są nieprawidłowe lub nieaktualne, albo zażądać ograniczenia przetwarzania tych informacji.</li>
            <li>Możesz wyznaczyć upoważnionego przedstawiciela do złożenia w Twoim imieniu żądania na podstawie CCPA. Możemy odrzucić żądanie upoważnionego przedstawiciela, który nie przedstawi dowodu, że został należycie upoważniony do działania w Twoim imieniu zgodnie z CCPA.</li>
            <li>Możesz zażądać rezygnacji z przyszłej sprzedaży Twoich danych osobowych podmiotom trzecim (opt-out). Po otrzymaniu takiego żądania zrealizujemy je tak szybko, jak będzie to możliwe, nie później jednak niż w ciągu piętnastu (15) dni od daty jego złożenia.</li>
          </ul>
          <p>Aby skorzystać z tych praw, skontaktuj się z nami, korzystając z danych kontaktowych podanych na końcu niniejszego dokumentu. Jeśli masz zastrzeżenia do sposobu, w jaki postępujemy z Twoimi danymi, chcemy o tym wiedzieć.</p>

          <h2>13. Czy aktualizujemy niniejszą informację?</h2>
          <p><strong>W skrócie:</strong> tak – będziemy aktualizować niniejszą informację w razie potrzeby, aby zachować zgodność z właściwymi przepisami.</p>
          <p>Możemy od czasu do czasu aktualizować niniejszą informację o prywatności. Zaktualizowana wersja zostanie oznaczona zaktualizowaną datą &bdquo;Zmieniono&rdquo; i zacznie obowiązywać z chwilą jej udostępnienia. Jeśli wprowadzimy istotne zmiany w niniejszej informacji o prywatności, możemy powiadomić Cię o nich, zamieszczając w widocznym miejscu stosowną informację lub przesyłając Ci bezpośrednie powiadomienie. Zachęcamy do regularnego zapoznawania się z niniejszą informacją o prywatności, aby wiedzieć, w jaki sposób chronimy Twoje dane.</p>

          <h2>14. Jak możesz się z nami skontaktować w sprawie niniejszej informacji?</h2>
          <p>Jeśli masz pytania lub uwagi dotyczące niniejszej informacji, możesz napisać do nas na adres <a href="mailto:office@pomerico.com">office@pomerico.com</a> lub pocztą na adres:</p>
          <p>
            <strong>Pomerico Group Sp. z o.o.</strong><br />
            Szafarnia 11/F8<br />
            80-755 Gdańsk<br />
            Polska
          </p>

          <h2>15. Jak możesz przejrzeć, zaktualizować lub usunąć zebrane od Ciebie dane?</h2>
          <p>Zgodnie z przepisami obowiązującymi w Twoim kraju możesz mieć prawo do żądania dostępu do zebranych od Ciebie danych osobowych, ich zmiany lub usunięcia. Aby złożyć żądanie przejrzenia, zaktualizowania lub usunięcia swoich danych osobowych, skontaktuj się z nami pod adresem <a href="mailto:office@pomerico.com">office@pomerico.com</a>.</p>
        </div>
      </section>
    </>
  );
}
