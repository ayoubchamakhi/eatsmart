# Localization and RTL

Launch locales are French (`fr`) and Tunisian-influenced Arabic written in Arabic script (`ar-TN`). French is not a fallback for Arabic UI; every production string must have both translations before release.

Use locale-aware formatting for numbers, dates, quantities, and currency. Product facts retain their recorded source language plus normalized/search aliases. Never concatenate translated fragments into sentences.

Set document/screen direction from locale. Test bidirectional layout, logical CSS properties, icon mirroring only where semantic, focus order, navigation order, charts/score indicators, and mixed Arabic/French product labels. Production Arabic UI and educational copy requires Tunisian-editor approval.
