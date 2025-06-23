---
slug: renovation-energetique/dpe-audit
titre: DPE-Audit
description: |
  Un projet de fiabilisation des données des Diagnostics de Performance Energétique et des Audits énergétiques réglementaires.
site: https://github.com/action-21/dpe-audit
etat: construction
publie: true
tags: [batiment, renovation, dpe, audit]
programmes:
  - batiment/renovation-energetique
contributeurs: []
liens:
  - href: https://github.com/action-21/dpe-audit
    icon: github
    label: GitHub
  - href: https://discord.com/channels/1385249065536720966/1386627800978554895
    icon: discord
    label: Discrod
---

## 🎯 Quoi ?

Le projet est structuré en deux parties :

- Un standard de données publiques au format « JSON Schema » qui décrit la manière dont est modélisée un bâtiment pour évaluer sa performance énergétique. Ce standard permet également de valider la cohérence des données d'entrée transmises dans le cadre d'un Diagnostic de Performance Energétique ou d'un Audit réglementaire.

- Une API publique qui couvre le cycle de vie d'un DPE-Audit intégrant un moteur de calcul 3CL-DPE. Cette API permet de :
  - Publier un DPE-Audit dans l'observatoire, cette fonctionnalité est réservée aux éditeurs de logiciels agréés ;
  - Récupérer un DPE-Audit existant ;
  - Calculer les données d'un DPE-Audit sur la base de la méthode 3CL-DPE ;
  - Appliquer des scénarios de travaux à un DPE-Audit existant et recalculer les données 3CL-DPE.

## 💬 Pourquoi ?

La fiabilité des données des Diagnostics de Performance Energétique et des Audits réglementaires est un enjeu central pour le pilotage des politiques publiques de rénovation énergétique et l'accompagnement des ménages.

La donnée DPE-Audit peut être décomposée en deux parties : les données d'entrée renseignées par les diagnostiqueurs et auditeurs, utilisées pour calculer les données de sortie à l'aide d'une méthode de calcul officiel - par exemple la méthode « 3CL-DPE » pour les logements existants.

Ces données sont transmises par l'intermédiaire de logiciels agréés par l'Etat, à un observatoire public – l'observatoire DPE-Audit – pour alimenter un open data de la performance énergétique des bâtiments.

La production des données de sortie est ainsi déléguée au marché sous contrôle de l'Etat. Or pour que ce contrôle soit efficace, il est nécessaire de pouvoir vérifier l'exactitude des données calculées, et donc de disposer d'un moteur de calcul public.

Un tel outil n'existe pas pour le moment. Les données publiques DPE-Audit sont par conséquent supposées fiables, une nuance incompatible avec les ambitions énergie-climat de la France.

## 🤝 Pour et avec qui ?

- Auditeurs énergétiques et Diagnostiqueurs
- Editeurs de logiciels
- Observatoire DPE-Audit

## 🚀 Comment ?

### Feuille de route

1. Publication du standard de données publiques DPE-Audit. La contribution à ce standard est ouverte à toutes et tous, notamment aux éditeurs de logiciel qui auront la charge de l'implémenter.
   Ce standard sera référencé sur Data.gouv.fr pour ensuite être utilisé à des fins de validation de l'open data de la performance énergétique des bâtiments.
2. Publication de correctifs et ajustements de la méthode 3CL-DPE pour améliorer la fiabilité des données calculées.
3. Publication d'une API publique et d'un moteur de calcul 3CL-DPE en open source. Des travaux complémentaires peuvent être nécessaires pour améliorer les contrôles de cohérence.
4. Intégration par les éditeurs de logiciel agréés. Les données d'entrée sont transmises par le logiciel, les données de sortie sont calculées par le moteur de calcul public.
5. Migration des données de l'observatoire DPE-Audit vers le nouveau schéma de données.

### Périmètre

DPE-Audit intègre une version ajustée de la méthode 3CL-DPE applicable sur le territoire métropolitain. Des travaux complémentaires sont prévus pour étendre et adapter cette méthode aux territoires ultra-marins.

### Calendrier

Une version de développement (alpha) est actuellement disponible.

Une version stable est prévue pour septembre 2025.

Une migration des données de l'observatoire DPE-Audit vers le nouveau standard sera possible à cette échéance.

## ❣️ Contribuer

- [Sur GitHub](https://github.com/actoin-21/dpe-audit)
- [Sur Discord](https://discord.com/channels/1385249065536720966/1386627800978554895)
