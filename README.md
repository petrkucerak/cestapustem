# Cestapustem

[![Gitpod ready-to-code](https://img.shields.io/badge/Gitpod-ready--to--code-blue?logo=gitpod)](https://gitpod.io/#https://github.com/petrkucerak/cestapustem)

## O projektu

Cílem tohoto projektu je připravit progresivní webovou aplikaci pro DCM v Hradci Králové, díky které bude možno překlopit postní brožuru 2022 do online podoby.

## Architektura projektu

Aplikace je postavená na Next.js a o to, aby vypadal dobře se stará Tailwind. Obsah stránek s textem je kompilovaný z jsonu, který generuje speciální formulář, který najdete na stránce: https://cestapustem.cz/form.

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
6. obrazek nahraj sem https://github.com/petrkucerak/cestapustem/tree/Content/public/images

## Notifikace

Push notifikace jsou spouštěny pomocí služby https://app.onesignal.com/apps.

Momentálně jsou nastaveny 2 templaty:

1. upozornění pokud uživatel nenavštíví stránku více jak 13h - notifikace slouží k připomínání denních čtení
2. upozornění pokud uživatel nenavštíví stránku více jak týden - notifikace slouží k agresivnějšímu připomenutí

_Push notifikace podporují všechny platformy kromě mobilního safari._
