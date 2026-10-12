# Saboria — arquitectura futura segura

La versión pública actual es estática y gratuita. No tiene cuentas, pagos, anuncios ni claves privadas.

## Camino recomendado

1. **Frontend estático:** GitHub Pages sirve el catálogo y las funciones locales.
2. **Backend:** una API pequeña debe validar la sesión, límites de uso, preferencias y estado PRO. Nunca se debe confiar en `localStorage` o en una variable enviada por el navegador.
3. **Chef generativo:** el navegador enviaría solo ingredientes y preferencias mínimas a un endpoint. La clave del proveedor viviría exclusivamente en variables secretas del backend, con límites diarios, registro de errores sin datos sensibles y protección contra abuso.
4. **Pagos:** crear la preferencia o suscripción desde el servidor, recibir el webhook, verificar el evento con el proveedor y actualizar el estado PRO en la base de datos. Nunca guardar tarjetas.
5. **Privacidad:** separar identificadores de cuenta de métricas de uso, recoger solo lo necesario y permitir eliminar la cuenta.

## Estado PRO

`free` y `pro` deben ser estados emitidos por el backend. El frontend solo los muestra después de una respuesta autenticada. Una cookie o bandera editable en DevTools nunca debe conceder acceso.

## Proveedor investigado

Mercado Pago documenta Checkout Pro, Checkout API, Checkout Bricks y Suscripciones para Chile. La integración futura requiere un Access Token privado en servidor y webhooks verificables. No se activó ninguna integración ni cobro.

## Variables futuras

```text
PAYMENT_ACCESS_TOKEN       # solo backend
PAYMENT_WEBHOOK_SECRET     # solo backend
AI_PROVIDER_API_KEY        # solo backend
DATABASE_URL               # solo backend
SESSION_SECRET             # solo backend
```

Esta lista es diseño, no una instrucción para crear secretos todavía.
