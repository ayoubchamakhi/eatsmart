#!/bin/sh
set -e

# ============================================================
# Eatsmart VPS Database Automated Backup Script
# Creates a compressed, timestamped PostgreSQL dump
# Rotates backups older than 14 days
# ============================================================

BACKUP_DIR="${BACKUP_DIR:-/backups}"
TIMESTAMP=$(date +"%Y%m%d_%H%M%S")
BACKUP_FILE="${BACKUP_DIR}/eatsmart_backup_${TIMESTAMP}.sql.gz"
RETENTION_DAYS="${RETENTION_DAYS:-14}"

mkdir -p "${BACKUP_DIR}"

echo "[$(date)] Starting Eatsmart PostgreSQL backup..."

# Dump and compress on the fly
PGPASSWORD="${POSTGRES_PASSWORD:-eatsmart_secret}" pg_dump \
  -h "${POSTGRES_HOST:-postgres}" \
  -U "${POSTGRES_USER:-eatsmart}" \
  -d "${POSTGRES_DB:-eatsmart}" \
  --clean --if-exists --no-owner --no-privileges \
  | gzip -9 > "${BACKUP_FILE}"

FILESIZE=$(du -h "${BACKUP_FILE}" | cut -f1)
echo "[$(date)] Backup completed successfully: ${BACKUP_FILE} (${FILESIZE})"

# Rotate old backups
echo "[$(date)] Purging backups older than ${RETENTION_DAYS} days..."
find "${BACKUP_DIR}" -type f -name "eatsmart_backup_*.sql.gz" -mtime +"${RETENTION_DAYS}" -exec rm -f {} \;
echo "[$(date)] Retention rotation finished."
