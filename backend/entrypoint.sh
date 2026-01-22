#!/bin/sh
set -e
cd /app
uv run python core/manage.py migrate
exec uv run python core/manage.py runserver 0.0.0.0:8000

