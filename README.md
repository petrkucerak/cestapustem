# Cestapustem

[![Gitpod ready-to-code](https://img.shields.io/badge/Gitpod-ready--to--code-blue?logo=gitpod)](https://gitpod.io/#https://github.com/petrkucerak/cestapustem)

## O projektu

Cílem tohoto projektu je připravit progresivní webovou aplikaci pro DCM v Hradci Králové, díky které bude možno překlopit postní brožuru 2022 do online podoby.

## Architektura projektu

Aplikace je postavená na Next.js a o to, aby vypadal dobře se stará Tailwind. Obsah stránek s textem je kompilovaný z jsonu, který generuje speciální formulář, který najdete na stránce: https://cestapustem.cz/form.

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
