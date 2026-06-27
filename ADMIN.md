# KING COLLECTION — панель управления (Decap CMS)

Сайт статический (Next.js `output: export`, деплой на GitHub Pages). Контент товаров и
тексты сайта вынесены в редактируемые файлы, чтобы клиент мог менять их **сам**, без правок кода.

## Как устроено

```
content/products/*.json      ← карточки товаров (источник правды, редактирует клиент в /admin)
content/settings/site.json   ← телефон, соцсети, тексты главной
        │
        ▼  scripts/generate-catalog.mjs   (запускается автоматически в npm run dev/build)
src/data/catalog.generated.json           (производные поля: характеристики, формат цены)
        │
        ▼
сайт (src/data/products.ts, src/config/site.ts)
```

Поток для клиента: правит товар в `/admin` → Decap коммитит изменение в ветку `main` →
GitHub Action пересобирает сайт → изменения появляются на сайте (1–2 минуты).

## Правило цен

- **Диваны, кресла, кровати, пуфы** — с ценой (поле «Цена, ₸»).
- **Шкафы, гардеробные, кухни** — без цены: оставьте поле «Цена» пустым → на сайте будет
  «Цена по запросу» (зависит от размеров проекта).

## Локальное редактирование (для теста, без деплоя)

```bash
npx decap-server      # терминал 1 — локальный backend Decap (порт 8081)
npm run dev           # терминал 2
# открыть http://localhost:3000/admin/  → «Work with Local Backend»
```

## Вход клиента на боевом сайте (нужен 1 раз)

GitHub Pages — статика, поэтому для входа через GitHub нужен бесплатный OAuth-прокси.
Варианты (любой):

1. **Cloudflare Workers** — `sveltia-cms-auth` или `decap-cms-github-oauth` (бесплатно, 10 минут).
2. **Vercel / Netlify functions** — `decap-cms-github-oauth-provider`.

После деплоя прокси:
1. Создать GitHub OAuth App (Settings → Developer settings → OAuth Apps),
   callback = URL прокси.
2. В `public/admin/config.yml` заменить `base_url` на адрес прокси.
3. Дать клиенту доступ (collaborator) к репозиторию `spandiyar7/KING`.
4. Клиент заходит на `https://spandiyar7.github.io/KING/admin/` → «Войти через GitHub».

> Альтернатива без прокси: перенести хостинг на Netlify — там вход работает «из коробки»
> (Netlify Identity + Git Gateway).

## Что ещё нужно от клиента (сейчас стоят заглушки)

- Реальный номер телефона (в `content/settings/site.json` → `phone`/`phoneHref`/WhatsApp).
- Тексты главной (герой, интро) — там же.
- Точные цены, материалы и описания по каждой модели — как на Kaspi (через /admin).
- Фото для шкафов / гардеробных / кухонь (сейчас этих товаров нет, категории показывают
  блок «под заказ»).
