# CONGOBET AVIATOR ANALYZER

Projet autonome ajouté dans Booster sans modifier l’application principale existante.

## Contenu
- `index.html`, `styles.css`, `script.js` : tableau de bord autonome.
- `data/historical-master-147.json` : historique consolidé de 147 observations (117 de l’archive v4 + 30 de la capture du 23/11/2026).
- `data/new-observations-2026-11-23.json` : les 30 observations de la dernière capture.
- `data/snapshots/v1..v4.json` : états historiques des archives, conservés séparément (cumulatifs, ne pas additionner entre eux).

## Lancer localement
Ouvrir `index.html` dans un navigateur. Les données peuvent être ajoutées et exportées en CSV/JSON.

## Limites
Analyse descriptive uniquement. Aucune connexion à CongoBet, aucun pari et aucune prédiction fiable du prochain multiplicateur. Les doublons numériques sont conservés faute d’identifiant de manche.
