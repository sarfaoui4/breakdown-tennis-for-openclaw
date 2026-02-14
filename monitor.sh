#!/bin/bash
# Monitoring Tennis Breakdown -état des opérations

echo "=== Tennis Breakdown - État en temps réel ==="
echo "Date: $(date '+%Y-%m-%d %H:%M:%S')"
echo ""

# Vérifier les processus
echo "── Processus en cours ──"
ps aux | grep -E "node|next|npm" | grep -v grep | awk '{print $1, $2, $11}' | head -5
echo ""

# Vérifier le dernier build log
echo "── Derniers logs de build ──"
if [ -f "build-*.log" ]; then
    tail -20 $(ls -t build-*.log | head -1) 2>/dev/null || echo "Aucun log trouvé"
else
    echo "Aucun log de build trouvé"
fi
echo ""

# Vérifier le port 3000
echo "── Port 3000 ──"
if lsof -i :3000 >/dev/null 2>&1; then
    echo "✅ Serveur en écoute sur port 3000"
    lsof -i :3000 | grep LISTEN
else
    echo "❌ Aucun serveur sur port 3000"
fi
echo ""

# Espace disque
echo "── Espace disque ──"
df -h . | tail -1 | awk '{print "Utilisé: " $5 " (" $3 "/" $2 ")"}'
echo ""
