# Cesta půstem

[![Gitpod ready-to-code](https://img.shields.io/badge/Gitpod-ready--to--code-blue?logo=gitpod)](https://gitpod.io/#https://github.com/petrkucerak/cestapustem)

## O projektu

Cílem tohoto projektu je připravit progresivní webovou aplikaci pro DCM v Hradci Králové, díky které bude možno překlopit postní brožuru 2022 do online podoby.

## Architektura projektu

Aplikace je postavená na Next.js a o to, aby vypadala dobře se stará Tailwind. Obsah stránek s textem je kompilovaný z jsonu, který generuje speciální formulář, který najdete na stránce: https://cestapustem.cz/form.

Na pozadí běží service worker, který umožňuje:

1. fungování offline a agresivní caching
2. využití push notifikací

## Příkazy

```
yarn
yarn dev
```

## Jak přidat texty

1. přejdi na stránku https://cestapustem.cz/form/
2. vyplň formulář dle popisů
3. stáhni si data ve formátu json
4. pokud chceš přiložit k textu obrázek, použij stejné jméno jako je využito u vygenerovaného json souboru
5. json soubory nahraj sem https://github.com/petrkucerak/cestapustem/tree/Content/_days
6. obrázek nahraj sem https://github.com/petrkucerak/cestapustem/tree/Content/public/images

## Notifikace

Push notifikace jsou spouštěny pomocí služby https://app.onesignal.com/apps.

Momentálně jsou nastaveny 2 templaty:

1. upozornění, pokud uživatel nenavštíví stránku více jak 13h - notifikace slouží k připomínání denních čtení
2. upozornění, pokud uživatel nenavštíví stránku více jak týden - notifikace slouží k agresivnějšímu připomenutí

_Push notifikace podporují všechny platformy kromě mobilního safari._

## Audionahrávky

V aplikaci jsou generovány audionahrávky k textům pomocí služby Azure Speech Serivces.

Více o této části si můžete přečíst zde: https://blog.petrkucerak.cz/post/Jak-z-blogu-vytvorit-podcast-pomoci-AI.

## Privacy

### Provozovatel

Provozovatelem webové aplikace je držitel domény [cestapustem.cz](https://www.nic.cz/whois/domain/cestapustem.cz/)

### Cookies

Cookies je krátký textový soubor, který si navštívený web ukládá ve vašem prohlížeči.

Aplikace používá pouze technické soubory cookies, bez kterých by nemohla správně fungovat.

### Analytics

K zkvalitnění produktu shromažďujeme anonymizované údaje pomocí služeb:

1. **Microsoft Clarity**
    - nástroj sleduje chování uživatelů na webové aplikace
    - zpracovatelem údajů je společnost Microsoft
    - více informací najdete na adresách
      - https://privacy.microsoft.com/cs-cz/privacystatement
      - https://clarity.microsoft.com/terms
      - https://clarity.microsoft.com/projects
2. **CloudFlare Web Analytics**
    - nástroj monitoruje návštěvnost webové aplikace
    - zpracovatelem údajů je společnost CloudFlare, Inc.
    - více informací na jdete na adresách
      - https://www.cloudflare.com/web-analytics/
      - https://www.cloudflare.com/privacypolicy/


**_Soukromí je velice důležité a proto používáme služby, které jsou plně anonymní!_**

### Notifikace

K správě Push Notifikací využíváme službu OneSignal. Nástroj analyzuje manipulaci s notifikačními bannery. Zpracovatelem je společnost OneSignal.

Více informací najdete na stránkách:
- https://onesignal.com/privacy
- https://onesignal.com/privacy_policy
- https://onesignal.com/


### Infrastruktura

Shromažďujeme anonymizované údaje a identifikovatelné údaje obsahující IP adresu pomocí služeb CloudFlare. Tento nástroj sleduje přístupy uživatelů na naše webové stránkách především za účelem zabezpečení služby a prevence podvodů.

Zpracovatelem je společnost CloudFlare, Inc. Toto zpracování je oprávněným zájmem Provozovatele, neboť se jedná o zabezpečení infrastruktury.

Další informace o CloudFlare naleznete na adresách:
- https://www.cloudflare.com/privacypolicy/
- https://www.cloudflare.com/website-terms/
- https://www.cloudflare.com/cookie-policy/

### Zpracování osobních údajů

Z výše poskytnutých informací jasně vyplývá, že provozovatel webové aplikace není správcem žádných osobních údajů.