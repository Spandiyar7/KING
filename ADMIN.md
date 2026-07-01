# KING ATELIER — админка и заявки (через Netlify)

Сайт — статический (Next.js `output: export`). Чтобы работал **вход в админку** и **сбор заявок**,
сайт размещается на **Netlify** (тот же репозиторий и код).

## Что даёт Netlify
- **Вход в админку** по email + пароль (Netlify Identity) — без GitHub-аккаунта.
- **Редактирование всего** (товары, коллекции, тексты, фото) через Decap CMS на `/admin/`.
- **Заявки** (имя + телефон) с форм сайта собираются автоматически — Netlify → **Forms** + письмо на почту.

## Разовая настройка (10 минут)

1. Зарегистрироваться на **netlify.com** (можно через GitHub).
2. **Add new site → Import an existing project → GitHub →** выбрать репозиторий `Spandiyar7/KING`.
   Netlify сам прочитает `netlify.toml` (build: `npm run build`, publish: `out`). Нажать **Deploy**.
3. **Site configuration → Identity → Enable Identity.**
4. Identity → **Registration preferences → Invite only** (чтобы входить могли только приглашённые).
5. Identity → **Services → Git Gateway → Enable** (чтобы админка могла сохранять изменения в сайт).
6. Identity → **Invite users →** ввести свой email → прийдёт письмо → задать пароль.
7. Открыть `https://<ваш-сайт>.netlify.app/admin/` → войти по email/паролю → редактировать.

## Заявки
- Все заявки: Netlify → **Forms** → формы `callback` (имя+телефон) и `contact`.
- Уведомления на почту: Forms → **Form notifications → Add notification → Email** → указать email.

## Свой домен (по желанию)
Netlify → Domain management → добавить свой домен (например kingatelier.kz).

## Локальное редактирование (тест без Netlify)
```bash
npx decap-server      # терминал 1
npm run dev           # терминал 2 → http://localhost:3000/admin/ → «Work with Local Backend»
```

## Что редактируется в админке
- **Товары** (`content/products/*.json`): название, цена, размеры, обивка, фото, коллекция, категория — всё. Можно добавлять и удалять.
- **Настройки** (`content/settings/site.json`): телефон, WhatsApp, Instagram, тексты главной, адрес мастерской.
