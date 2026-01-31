## 2025-02-12 - Vite Config Secret Injection
**Vulnerability:** API keys were injected into the client bundle via `define` in `vite.config.ts`, making them accessible via `process.env`.
**Learning:** Developers might use `define` to shim `process.env` for legacy compatibility, inadvertently exposing secrets if they just pass the entire env or specific secrets without filtering.
**Prevention:** Use `import.meta.env` for client-side variables and ensure only `VITE_` prefixed variables are exposed. Never use `define` to pass secrets.
