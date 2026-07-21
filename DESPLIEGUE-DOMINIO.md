# Despliegue de fisioymes.com a la web nueva (plan DNS)

## Situación
- Web vieja (WordPress en Arsys) CAÍDA por carpeta `wp-admin` movida a `wp_backup_20260721/`.
- Correo `@fisioymes.com` INTACTO (mismo servidor, servicio aparte). NO tocar.
- Objetivo: apuntar `fisioymes.com` a la web nueva SIN romper el correo.

## Estado actual del DNS (a preservar lo del correo)
```
A     fisioymes.com        82.223.27.213      (web vieja Arsys — se cambia)
A     www.fisioymes.com    82.223.27.213      (se cambia)
MX    fisioymes.com        10 mail.fisioymes.com   ← PRESERVAR (correo)
A     mail.fisioymes.com   82.223.27.213      ← PRESERVAR (correo)
TXT   fisioymes.com        "v=spf1 +a +mx +a:ns17.serveistic.net -all"  ← preservar/ajustar
NS    ns1/ns2.fisioymes.com
```

## Hosting elegido para la web nueva
GitHub Pages con dominio propio (repo `charcoles-hub/fisioymes`, SSL gratis automático).
IPs apex de GitHub Pages:
```
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

## ZONA DNS DE DESTINO (pegar cuando haya acceso al DNS)
```
; --- WEB (nueva, GitHub Pages) ---
A     fisioymes.com        185.199.108.153
A     fisioymes.com        185.199.109.153
A     fisioymes.com        185.199.110.153
A     fisioymes.com        185.199.111.153
CNAME www.fisioymes.com    charcoles-hub.github.io.

; --- CORREO (sin cambios, sigue en Arsys) ---
MX    fisioymes.com        10 mail.fisioymes.com.
A     mail.fisioymes.com   82.223.27.213
TXT   fisioymes.com        "v=spf1 +a:mail.fisioymes.com +mx -all"
```
Nota SPF: se cambia `+a` (que ahora autorizaría las IPs de GitHub a enviar
correo) por `+a:mail.fisioymes.com` para que solo el servidor de correo real
quede autorizado. Si usan Serveistic para envíos, mantener `+a:ns17.serveistic.net`.

## Procedimiento del día D (cuando haya acceso al DNS)
1. En el repo `charcoles-hub/fisioymes`: redeploy con `base:'/'` (astro.config ya listo)
   y añadir fichero `public/CNAME` con contenido `fisioymes.com`.
2. En GitHub → Settings → Pages → Custom domain: `fisioymes.com` (marca "Enforce HTTPS").
3. Aplicar la zona DNS de destino de arriba.
4. Esperar propagación (minutos–2 h). Verificar:
   - `dig fisioymes.com A` → IPs de GitHub Pages
   - `dig fisioymes.com MX` → mail.fisioymes.com (correo intacto)
   - Web carga en https://fisioymes.com, 12 rutas 200, correo sigue entrando.

## Alternativa (si se recupera el acceso a Arsys antes)
Simplemente mover `wp_backup_20260721/wp-admin` → `wp-admin` en la raíz `httpdocs`.
La web vieja vuelve al instante. Luego decidir si migrar a la nueva con calma.
