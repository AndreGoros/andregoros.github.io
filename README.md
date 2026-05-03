# Página personal (GitHub Pages)

Sitio minimalista construido con **React**, **Vite** y ESLint (`andregoros.github.io`). El CI publica **`dist/`** a **GitHub Pages** en cada `push` a **`main`** (workflow `.github/workflows/deploy-pages.yml`).

**URL esperada:** `https://andregoros.github.io/` (tras configurar Pages y ejecutar el workflow al menos una vez).

## Desarrollo local

Ejecuta los comandos **desde WSL/Linux** en la carpeta del repo (`~/.../andregoros.github.io`), no desde `\\wsl.localhost\...` en PowerShell, para evitar problemas de `npm` y MIME con archivos JSX:

```bash
npm install
npm run dev
```

## GitHub Pages (primera vez)

1. Repo → **Settings** → **Pages** → fuente **GitHub Actions**.
2. Asegurate de tener **Workflow permissions** habituales permitidas (**Settings → Actions → General**).
3. **Repositorio público**: en la capa gratuita, Pages típicamente necesita repo público para sitios públicos.
4. Hacé `push` a `main`; en **Actions** revisá que el workflow verde sirva la URL anterior.

Elige **una** estrategia de despliegue en Settings → Pages:

- **Recomendada:** GitHub Actions (este repo).
- **Alternativa:** `npm run deploy` (paquete `gh-pages`), que publica a la rama `gh-pages`. No mezcles ambas fuentes sin revisar Pages.
