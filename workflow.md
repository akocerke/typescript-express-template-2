
```
+----------------------------------------------------------+
|                      ESLint and Prettier                 |
+----------------------------------------------------------+
|                                                          |
|  +------------------+     +-------------------------+    |
|  |   Trigger:       |     |   Jobs:                 |    |
|  |  on:             |     |  eslint-prettier:       |    |
|  |   push:          |     |  runs-on: ubuntu-latest |    |
|  |    branches:     |     |  ---------------------  |    |
|  |     - main       |     |   +----------------+    |    |
|  |   pull_request:  |     |   |  Steps:        |    |    |
|  |    branches:     |     |   |  - Checkout... |    |    |
|  |     - main       |     |   |  - Set up...   |    |    |
|  +------------------+     |   |  - Install...  |    |    |
|                           |   |  - ESLint...   |    |    |
|                           |   |  - Prettier... |    |    |
|                           |   +----------------+    |    |
+----------------------------------------------------------+
```

Diese Darstellung visualisiert den Ablauf deines GitHub Actions Workflows:

- **Trigger:** Der Workflow wird ausgelöst durch Push-Events auf dem Branch "main" und durch Pull Requests, die auf dem Branch "main" basieren.

- **Jobs:** Es gibt einen Job mit dem Namen `eslint-prettier`, der auf einem Ubuntu-Latest-Runner läuft.

- **Steps (Schritte):** Innerhalb des Jobs werden mehrere Schritte ausgeführt, die nacheinander abgearbeitet werden:
  1. "Checkout repository": Klonen des Repositorys.
  2. "Set up Node.js": Einrichten von Node.js Version 21.
  3. "Install dependencies": Installation der Projektabhängigkeiten mit `npm install`.
  4. "ESLint check": Ausführen der ESLint-Überprüfung mit `npm run lint`.
  5. "Prettier check": Ausführen der Prettier-Formatierungsprüfung mit `npm run prettier`.

Der Workflow ist so konfiguriert, dass er nur dann erfolgreich ist (✅), wenn die lokalen Code-Checks wie ESLint und Prettier durchgeführt und bestanden wurden. Falls diese Checks fehlschlagen oder lokal nicht durchgeführt wurden, wird der Workflow mit einem Fehler (❌) markiert. Dies stellt sicher, dass Änderungen auf den Haupt-Branch "main" nur integriert werden können, wenn der Code den definierten Qualitätsstandards entspricht, wodurch die Konsistenz und Qualitätssicherung des Projekts gewährleistet wird.

**Hinweis:** Ein Commit in das Hauptrepository wird unabhängig vom Workflow durchgeführt. Es ist wichtig, vor einem Commit sicherzustellen, dass alle lokalen Tests und Code-Checks erfolgreich durchgeführt wurden, um die Qualität der eingereichten Änderungen zu gewährleisten.