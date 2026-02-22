# Workflow de Déploiement Tennis Breakdown

**Objectif** : Partir du code local (`client/`) jusqu'à l'application en production sur Vercel, en passant par GitHub.

---

## 📦 Prérequis

- **Dossier local** : `/home/ycce/.openclaw/workspace/tennis-breakdown/`
- **Structure** : `vercel.json` à la racine + `/client` comme rootDirectory
- **Git remote** : `https://github.com/sarfaoui4/breakdown-tennis-for-openclaw.git`
- **Vercel token** : À stocker dans une variable d'environnement locale (`$VERCEL_TOKEN`)
- **Team Vercel ID** : À récupérer depuis Vercel (`team_...`)

---

## 🔄 Workflow Complet

### Étape 1 – Préparer le dépôt local

```bash
cd /home/ycce/.openclaw/workspace/tennis-breakdown
git status
git add -A
git commit -m "votre message"
```

---

### Étape 2 – Pousser sur GitHub (déclencheur)

```bash
git push origin master:main
```

Le remote peut être configuré avec token GitHub dans l'URL pour automatiser.

---

### Étape 3 – Créer le projet Vercel (première fois)

```bash
curl -X POST \
  -H "Authorization: Bearer $VERCEL_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "tennis-breakdown-production",
    "framework": "nextjs",
    "gitRepository": {
      "type": "github",
      "repo": "breakdown-tennis-for-openclaw",
      "org": "sarfaoui4"
    },
    "rootDirectory": "client"
  }' \
  "https://api.vercel.com/v9/projects?teamId=YOUR_TEAM_ID"
```

Note : Si le projet existe déjà, passer à l'étape 4.

---

### Étape 4 – Ajouter les variables d'environnement

Utiliser les valeurs de `client/.env.local`. Exemple pour une clé :

```bash
curl -X POST \
  -H "Authorization: Bearer $VERCEL_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "key": "NEXT_PUBLIC_SUPABASE_URL",
    "value": "https://tzdypqpexlwugehsscec.supabase.co",
    "type": "plain",
    "target": ["production","preview","development"]
  }' \
  "https://api.vercel.com/v9/projects/<PROJECT_ID>/env"
```

Répéter pour chaque variable (Supabase, Stripe, prices).

---

### Étape 5 – Désactiver la protection SSO

Éviter la page d'authentification Vercel :

```bash
curl -X PATCH \
  -H "Authorization: Bearer $VERCEL_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"ssoProtection": null}' \
  "https://api.vercel.com/v9/projects/<PROJECT_ID>"
```

---

### Étape 6 – Déclencher un déploiement

- Soit pousser un commit (le webhook Vercel build automatiquement)
- Soit utiliser l'API pour forcer un déploiement (avancé)

Exemple de commit trigger simple :

```bash
echo "deploy $(date +%s)" > deploy-trigger.txt
git add deploy-trigger.txt
git commit -m "trigger: fresh deploy"
git push origin master:main
```

---

### Étape 7 – Surveiller le déploiement

```bash
curl -s -H "Authorization: Bearer $VERCEL_TOKEN" \
  "https://api.vercel.com/v9/projects/<PROJECT_ID>" | python3 -c "
import sys, json
d = json.load(sys.stdin)
print('État:', d.get('latestDeployments', [{}])[0].get('readyState'))
print('URL:', d.get('latestDeployments', [{}])[0].get('url'))
"
```

Attendre `READY`.

---

### Étape 8 – Tester l'URL de production

```
https://<PROJECT_NAME>.vercel.app
```

---

## 🛠️ Commandes Utiles

- Lister projets Vercel :
  ```bash
  curl -H "Authorization: Bearer $VERCEL_TOKEN" "https://api.vercel.com/v9/projects?teamId=YOUR_TEAM_ID" | jq .
  ```

- Récupérer env vars d'un projet :
  ```bash
  curl -H "Authorization: Bearer $VERCELL_TOKEN" "https://api.vercel.com/v9/projects/<PROJECT_ID>" | jq '.env[] | {key, value}'
  ```

---

## ⚠️ Problèmes Communs

- `ssoProtection` activé → désactiver (étape 5)
- Build échoue → vérifier que toutes les env vars sont présentes
- 404 → vérifier `readyState = READY` et `aliasAssigned`

---

## 🔐 Notes de Sécurité

- **Ne jamais commiter** de tokens, clés API, secrets dans le dépôt.
- Stocker les tokens dans des variables d'environnement locales ou dans un gestionnaire de secrets.
- Le fichier `.env.local` ne doit jamais être poussé (il est dans `.gitignore`).

---

**Créé le** : 2026-02-13  
**Par** : Claude Assistant  
**Pour** : Sami – Tennis Breakdown