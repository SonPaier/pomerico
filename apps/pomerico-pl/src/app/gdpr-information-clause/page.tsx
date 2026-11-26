import type { Metadata } from "next";
import { withOgImage } from "@/lib/og-image";

// Tłumaczenie klauzuli informacyjnej RODO z pomerico.com. Tekst prawny – przed
// publikacją powinien go zweryfikować prawnik / osoba odpowiedzialna za RODO.

const TITLE = "Klauzula informacyjna RODO | Pomerico";
const DESCRIPTION =
  "Klauzula informacyjna RODO Pomerico Group: administrator danych, cele i podstawy prawne przetwarzania, okresy przechowywania oraz Twoje prawa.";

export const metadata: Metadata = withOgImage({
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: "/gdpr-information-clause" },
  openGraph: { title: TITLE, description: DESCRIPTION },
});

const td = "border border-dark/20 px-3 py-2";

const processingRows = [
  {
    purpose: "Wykonanie umowy/usługi",
    basis: "art. 6 ust. 1 lit. b RODO",
    period: "Do czasu wykonania umowy/usługi",
  },
  {
    purpose: "Podjęcie działań przed zawarciem umowy, np. w celu przedstawienia oferty handlowej",
    basis: "art. 6 ust. 1 lit. b RODO",
    period: "Do czasu zrealizowania działań związanych z zawarciem umowy",
  },
  {
    purpose: "Wypełnienie obowiązków wynikających z powszechnie obowiązujących przepisów prawa",
    basis: "art. 6 ust. 1 lit. c RODO",
    period: "Przez okres wskazany w przepisach prawa",
  },
  {
    purpose: "Realizacja prawnie uzasadnionych interesów naszej spółki, np. archiwizacja dokumentów księgowych zawierających Dane Osobowe",
    basis: "art. 6 ust. 1 lit. f RODO",
    period: "Do czasu zrealizowania prawnie uzasadnionego interesu, tj. przechowywania dokumentów księgowych przez 5 lat, licząc od końca roku kalendarzowego, w którym upłynął termin płatności podatku związanego z wykonaną usługą",
  },
  {
    purpose: "Realizacja prawnie uzasadnionych interesów naszej spółki, takich jak: ustalenie, dochodzenie i obrona wzajemnych roszczeń",
    basis: "art. 6 ust. 1 lit. f RODO",
    period: "Do czasu zrealizowania prawnie uzasadnionego interesu, np. do upływu okresu przedawnienia w zakresie ustalenia, dochodzenia i obrony wzajemnych roszczeń",
  },
  {
    purpose: "Realizacja prawnie uzasadnionych interesów naszej spółki, takich jak: marketing bezpośredni własnych usług",
    basis: "art. 6 ust. 1 lit. f RODO",
    period: "Do czasu wniesienia sprzeciwu",
  },
  {
    purpose: "Realizacja innych uzgodnionych celów",
    basis: "art. 6 ust. 1 lit. a RODO",
    period: "Do czasu osiągnięcia celu lub wycofania zgody",
  },
];

export default function GDPRPage() {
  return (
    <>
      <section className="bg-primary-blue py-16 text-center text-white">
        <div className="mx-auto max-w-7xl px-6">
          <h1 className="font-heading text-3xl font-bold">Klauzula informacyjna RODO</h1>
        </div>
      </section>
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-6 prose prose-lg max-w-none text-dark/80 [&_h2]:font-heading [&_h2]:text-primary-blue [&_h2]:text-2xl [&_h2]:mt-12 [&_h2]:mb-4 [&_h3]:font-heading [&_h3]:text-dark [&_h3]:text-lg [&_h3]:mt-8 [&_h3]:mb-3">
          <p>
            Szanowni Państwo, w związku z przepisami Rozporządzenia Parlamentu Europejskiego i Rady (UE) 2016/679 z dnia 27 kwietnia 2016 r. w sprawie ochrony osób fizycznych w związku z przetwarzaniem danych osobowych i w sprawie swobodnego przepływu takich danych oraz uchylenia dyrektywy 95/46/WE (dalej: &bdquo;RODO&rdquo;), a także z troski o właściwe wykorzystywanie danych osobowych naszych pracowników, partnerów biznesowych (w tym danych osobowych ich pracowników/współpracowników) oraz innych osób zainteresowanych współpracą z nami w różnych obszarach działalności gospodarczej, uprzejmie informujemy, co następuje.
          </p>

          <ol>
            <li>
              Administratorem Państwa danych osobowych (dalej: Dane Osobowe) jest <strong>Pomerico Group Sp. z o. o.</strong> z siedzibą w Gdańsku (80-755), przy ul. Szafarnia 11/F8, wpisana do Krajowego Rejestru Sądowego pod numerem 0000586439, VAT UE: 5842745186.
            </li>
            <li>
              W sprawach związanych z przetwarzaniem Danych Osobowych przez naszą spółkę prosimy o kontakt drogą elektroniczną. Nasz adres e-mail: <a href="mailto:office@pomerico.com">office@pomerico.com</a>
            </li>
            <li>
              W zależności od konkretnej sytuacji Dane Osobowe mogą być przez nas przetwarzane w różnych, prawnie uzasadnionych celach i przez różny okres. Informacje o celach, podstawach prawnych i okresach przetwarzania Danych Osobowych przedstawiamy poniżej:
              <div className="overflow-x-auto not-prose my-6">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr className="bg-primary-blue/5">
                      <th className={`${td} text-left`}>Lp.</th>
                      <th className={`${td} text-left`}>Cel przetwarzania</th>
                      <th className={`${td} text-left`}>Podstawa prawna przetwarzania</th>
                      <th className={`${td} text-left`}>Okres przetwarzania</th>
                    </tr>
                  </thead>
                  <tbody>
                    {processingRows.map((row, i) => (
                      <tr key={i}>
                        <td className={td}>{i + 1}.</td>
                        <td className={td}>{row.purpose}</td>
                        <td className={td}>{row.basis}</td>
                        <td className={td}>{row.period}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </li>
            <li>
              W celu realizacji prawnie uzasadnionych celów wskazanych w tabeli Dane Osobowe mogą być udostępniane następującym współpracującym z nami podmiotom: pracownikom, bankom, ubezpieczycielom, kancelariom prawnym, dostawcom usług poczty elektronicznej, firmom zapewniającym nam wsparcie informatyczne lub archiwizacyjne, biegłym rewidentom oraz firmom audytorskim.
            </li>
            <li>
              W związku z przetwarzaniem Danych Osobowych przez naszą spółkę przysługuje Państwu prawo do:
              <ul>
                <li>dostępu do Danych Osobowych, w tym prawo do uzyskania ich kopii,</li>
                <li>żądania sprostowania Danych Osobowych – w przypadku gdy są nieprawidłowe lub niekompletne,</li>
                <li>wniesienia sprzeciwu wobec przetwarzania Danych Osobowych,</li>
                <li>
                  żądania usunięcia Danych Osobowych w przypadku, gdy:
                  <ol>
                    <li>Dane Osobowe nie są już niezbędne do celów, w których zostały zebrane lub w inny sposób przetwarzane,</li>
                    <li>osoba, której dane dotyczą, wniosła sprzeciw wobec przetwarzania Danych Osobowych,</li>
                    <li>osoba, której dane dotyczą, wycofała zgodę na przetwarzanie Danych Osobowych, która jest podstawą przetwarzania danych, i nie ma innej podstawy prawnej przetwarzania danych,</li>
                    <li>Dane Osobowe przetwarzane są niezgodnie z prawem,</li>
                    <li>Dane Osobowe muszą zostać usunięte w celu wywiązania się z obowiązków wynikających z przepisów prawa,</li>
                  </ol>
                </li>
                <li>żądania przeniesienia Danych Osobowych,</li>
                <li>cofnięcia zgody na przetwarzanie Danych Osobowych w dowolnym momencie, bez wpływu na zgodność z prawem przetwarzania, którego dokonano na podstawie zgody przed jej cofnięciem, chyba że istnieje inna podstawa prawna ich przetwarzania.</li>
              </ul>
            </li>
            <li>W przypadku uzyskania informacji o przetwarzaniu Danych Osobowych niezgodnie z prawem przysługuje Państwu prawo wniesienia skargi do Prezesa Urzędu Ochrony Danych Osobowych.</li>
            <li>Podanie Danych Osobowych jest dobrowolne, jednak ich niepodanie uniemożliwia zawarcie/wykonanie Umowy, a także nawiązanie i rozwijanie potencjalnej współpracy.</li>
            <li>Nasza spółka nie przetwarza Danych Osobowych w celu zautomatyzowanego podejmowania decyzji, w tym tzw. profilowania.</li>
            <li>Ponieważ korzystamy z usług Google LLC, tj. systemu G Suite opartego na technologii tzw. chmury obliczeniowej, istnieje możliwość przekazania Państwa danych do państw trzecich.</li>
          </ol>

          <p>Nasza spółka dokłada wszelkich starań, aby zapewnić wszelkie środki fizycznej, technicznej i organizacyjnej ochrony Danych Osobowych przed ich przypadkowym lub umyślnym zniszczeniem, przypadkową utratą, zmianą, nieuprawnionym ujawnieniem, wykorzystaniem lub dostępem, zgodnie ze wszystkimi obowiązującymi przepisami prawa.</p>

          <hr className="my-12" />

          <h2>Klauzula informacyjna – REKRUTACJA</h2>

          <ol>
            <li>Aplikując do <strong>Pomerico Group Sp. z o. o.</strong>, przekazują nam Państwo swoje dane osobowe, w związku z czym stajemy się ich administratorem.</li>
            <li>Kontakt z nami: Pomerico Group Sp. z o. o. z siedzibą w Gdańsku (80-755), przy ul. Szafarnia 11/F8, wpisana do Krajowego Rejestru Sądowego pod numerem 0000586439, adres e-mail: <a href="mailto:recruitment@pomerico.com">recruitment@pomerico.com</a></li>
            <li>Jako agencja zatrudnienia przetwarzamy Państwa dane osobowe w celu prowadzenia rekrutacji na rzecz naszych Klientów – Państwa potencjalnych pracodawców – lub na potrzeby rekrutacji wewnętrznych.</li>
            <li>Podstawą prawną przetwarzania Państwa danych przez nas i naszych Klientów jest art. 22<sup>1</sup> § 1 Kodeksu pracy, a w zakresie wykraczającym poza ten przepis – dobrowolnie wyrażona przez Państwa zgoda.</li>
            <li>Państwa dane osobowe będą przetwarzane wyłącznie w celu przeprowadzenia przez nas procesu rekrutacji na stanowisko, na które Państwo aplikowali.</li>
            <li>Jeżeli jednak wyrazili Państwo zgodę na przetwarzanie danych na potrzeby przyszłych rekrutacji, oznacza to, że jako agencja rekrutacyjna jesteśmy uprawnieni do przechowywania Państwa danych osobowych w naszej bazie i przedstawiania ich w przyszłych rekrutacjach innym potencjalnym pracodawcom.</li>
            <li>Prosimy pamiętać, że naszym Klientom przedstawiani są wyłącznie wybrani kandydaci, a dane osobowe pozostałych kandydatów zostaną usunięte po zakończeniu procesu rekrutacji, chyba że wyrazili oni tzw. &bdquo;zgodę na przyszłe rekrutacje&rdquo;.</li>
            <li>Wyrażenie zgody nie jest obowiązkowe, jednak jej brak uniemożliwi nam przetwarzanie Państwa danych, a w konsekwencji wykorzystanie Państwa dokumentów aplikacyjnych w jakichkolwiek przyszłych rekrutacjach.</li>
            <li>Mają Państwo prawo w dowolnym momencie wycofać zgodę w całości i bez ponoszenia kosztów, co skutkuje usunięciem Państwa danych, chyba że przepisy prawa zezwalają nam na ich dalsze przetwarzanie. Oświadczenie o wycofaniu zgody mogą Państwo złożyć, wysyłając wiadomość e-mail na ten sam adres, na który przesłali Państwo dokumenty aplikacyjne, lub kontaktując się z nami pod adresem <a href="mailto:recruitment@pomerico.com">recruitment@pomerico.com</a></li>
            <li>Jeżeli wyrazili Państwo zgodę wyłącznie na potrzeby konkretnego procesu rekrutacyjnego, wówczas – jak wspomniano wcześniej – Państwa dane zostaną usunięte niezwłocznie po zakończeniu tego procesu. Jeżeli natomiast wyrazili Państwo zgodę na potrzeby przyszłych rekrutacji, będziemy uprawnieni do przetwarzania Państwa danych do momentu wycofania zgody lub wniesienia sprzeciwu, chyba że przepisy prawa zezwalają nam na ich dalsze przetwarzanie.</li>
            <li>
              W celach rekrutacyjnych będziemy uprawnieni do udostępniania Państwa danych:
              <ul>
                <li>potencjalnym pracodawcom,</li>
                <li>dostawcom usług poczty elektronicznej,</li>
                <li>dostawcom wsparcia informatycznego,</li>
                <li>Google LLC – dostawcy systemu informatycznego wykorzystywanego do przetwarzania Państwa danych.</li>
              </ul>
            </li>
            <li>Ponieważ korzystamy z usług Google LLC, tj. systemu G Suite opartego na tzw. chmurze obliczeniowej, istnieje możliwość przekazania Państwa danych do państw trzecich.</li>
            <li>Mają Państwo prawo żądać od nas (a także od potencjalnego pracodawcy) dostępu do swoich danych, ich sprostowania, przeniesienia, usunięcia oraz ograniczenia przetwarzania. Przysługuje Państwu również prawo wniesienia sprzeciwu wobec przetwarzania przez nas Państwa danych.</li>
            <li>Jeżeli uznają Państwo, że przetwarzamy Państwa dane niezgodnie z prawem, przysługuje Państwu prawo wniesienia skargi do Prezesa Urzędu Ochrony Danych Osobowych.</li>
          </ol>

          <p>Nie będziemy podejmować wobec Państwa żadnych zautomatyzowanych decyzji na podstawie Państwa danych osobowych, w szczególności decyzji wynikających z tzw. profilowania.</p>
        </div>
      </section>
    </>
  );
}
