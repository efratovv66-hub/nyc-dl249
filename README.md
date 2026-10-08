# NYC & New Jersey · DL249

אתר הטיול המשפחתי: ספירה לאחור, מסלולים ומפות, קניות, לינה, אוכל כשר ורשימות הכנה. כולל עברית ואנגלית וסרטון פתיחה.

**אתר ציבורי:** https://efratovv66-hub.github.io/nyc-dl249/

## מבנה הפרויקט

- `src/App.tsx` — עמודי האתר, המקומות ורכיבי המפה.
- `src/language.ts` — בחירת שפה ותרגומים.
- `src/styles.css` — עיצוב ורקעים.
- `src/main.tsx` — נקודת הכניסה של React.
- `src/favicon.svg` — סמל האתר.
- `welcome.mp4` — סרטון הפתיחה.
- `build.cjs` — בנייה ותצוגה מקומית ללא שרת חיצוני.
- `index.html` — האתר המוכן, שנוצר מחדש בבנייה ומפורסם ב־GitHub Pages.

## עבודה ב־VS Code

פתחו את `NYC Trip.code-workspace`. ההתקנה המקומית של Node ו־npm כבר מוגדרת במשימות הפרויקט. דרך Terminal → Run Task בחרו Preview website או Build website. אחרי עריכה שמרו ורעננו את התצוגה המקומית.

במחשב אחר עם Node 22 ומעלה:

```sh
npm ci
npm run dev
```

התצוגה המקומית: http://127.0.0.1:5174

## עדכון האתר באינטרנט

1. ערכו את קובצי `src` ושמרו.
2. הריצו Build website (או `npm run build`).
3. בצעו Commit ו־Push לענף `main` דרך Source Control ב־VS Code.
4. GitHub Pages מפרסם את `index.html` מתיקיית השורש. הפרסום עשוי לקחת כמה דקות.

מאגר GitHub: https://github.com/efratovv66-hub/nyc-dl249

ב־Push הראשון VS Code עשוי לבקש כניסה לחשבון GitHub. כתובת האתר אינה תלויה בכך ש־VS Code או המחשב פתוחים. סטטוס ביקורים ורשימות נשמרים בדפדפן המקומי; אין סנכרון בין מכשירים. הרקעים ושירותי המפה ומזג האוויר דורשים חיבור לאינטרנט.
