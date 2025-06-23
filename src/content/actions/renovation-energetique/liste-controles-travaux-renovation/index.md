---
slug: renovation-energetique/liste-controles-travaux-renovation
titre: Liste des contrôles de travaux de rénovation énergétique
description: |
  Proposition de données publiques des contrôles de travaux de rénovation énergétique.
etat: investigation
publie: true
tags: [batiment, renovation, controle, open-data, schema]
programmes:
  - batiment/renovation-energetique
contributeurs: []
actions:
  - renovation-energetique/referentiel-national-travaux-renovation
  - renovation-energetique/liste-organismes-evaluation-conformite
  - renovation-energetique/guichet-unique-controle-renovation
liens:
  - href: https://github.com/action-21/liste-controles-travaux-renovation
    icon: github
    label: GitHub
---

## 🎯 Quoi ?

Un open data sur data.gouv.fr des contrôles des travaux de rénovation énergétique réalisés dans le cadre des dispositifs soumis à une obligation de contrôle (Ma Prime Rénov', Certificats d'Economies d'Energie, RGE...).

## 💬 Pourquoi ?

Le développement des obligations de contrôle propres à chaque dispositif de soutient à la politique publique de rénovation énergétique. Une opération de rénovation peut ainsi faire l'objet de plusieurs contrôles dans le cadre de dispositifs différents. Ce manque de coordination limite la production de données nécessaires à l'évaluation des politiques publiques mises en oeuvre, et retarde la détection des malfaçons et des fraudes.

### Cas d'usages

- Améliorer le suivi des politiques publiques de rénovation énergétique ;
- Optimiser l'organisation des contrôles entre les dispositifs concernés ;
- Renforcer les capacités de lutte contre la fraude.

## 🤝 Pour et avec qui ?

- Observatoire national de la rénovation énergétique
- Agence Nationale de l'Habitat
- Pôle National des Certificats d'Economies d'Energie (PNCEE)
- Obligés et délégataires au titre du dispositif des Certificats d'Economies d'Energie
- Organismes de contrôle agréés
- Direction interministérielle du numérique (DINUM)

## 🚀 Comment ?

### Prérequis

- Uniformisation des référentiels de contrôle
- Système d'identification des travaux de rénovation énergétique
- Identification des organismes d'évaluation de la conformité

### Roadmap

1. Définir et valider les schémas de données publiques de contrôle
2. Publier des schémas de données publiques sur [schema.data.gouv.fr](https://schema.data.gouv.fr/)
3. Définir et valider une stratégie de production des données publiques
4. Publier les données publiques sur [data.gouv.fr](https://data.gouv.fr/)

### Description des données

- id: Identifiant unique du contrôle
- date_publication: Date de publication du contrôle dans l'open data
- operation_id: Identifiant unique de l'opération de travaux
- travaux: Nature des travaux contrôlés
- adresse: Adresse au format Base Adresse Nationale
- rnb_id: Identifiant du bâtiment du Référentiel National des Bâtiments
- organisme_controle: Identification de l'organisme de contrôle
  - raison_sociale
  - siren
- non_conformites: Liste des non conformités constatées
  - type: Type de non conformité (mineur / majeur)
  - nature: Nature de la non conformité

### Production des données

Nous édutions deux approches :

- La production de données à la source ;
- La production de données centralisée (Guichet unique).

### Diffusion

Données publiées sur [data.gouv.fr](https://data.gouv.fr).

## ❣️ Contribuer

- [Sur GitHub](https://github.com/action-21/liste-controles-travaux-renovation)
