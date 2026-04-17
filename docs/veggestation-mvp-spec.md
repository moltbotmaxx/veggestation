# Veggestation MVP Spec

## 1. Objetivo del MVP

Construir una PWA mobile-first que acompane al usuario de forma simple desde la siembra hasta la cosecha de una planta comestible incluida en un kit fisico.

El MVP debe demostrar tres cosas:

- que las personas activan el kit,
- que completan la siembra,
- y que vuelven a la app para seguir el cuidado.

## 2. Usuario principal

Perfil:

- principiante total,
- usa el celular como dispositivo principal,
- no quiere leer demasiado,
- necesita instrucciones concretas y visuales.

## 3. Flujos principales

### Flujo 1. Activacion

1. Usuario abre la PWA.
2. Ingresa codigo del kit.
3. Crea cuenta o acceso rapido.
4. Ve bienvenida y explicacion corta.

### Flujo 2. Registro de siembra

1. Elige una de las 4 opciones.
2. Marca "ya sembre".
3. Registra fecha de siembra.
4. Activa recordatorios.

### Flujo 3. Seguimiento

1. Abre la pantalla principal.
2. Ve etapa actual.
3. Ve tarea de hoy.
4. Marca accion completada.
5. Puede subir foto o registrar novedad.

### Flujo 4. Ayuda

1. Usuario nota algo raro.
2. Entra a "Mi planta no se ve bien".
3. Elige un sintoma simple.
4. Recibe explicacion y accion sugerida.

## 4. Pantallas del MVP

### 4.1 Landing de acceso

Objetivo:

- explicar en una frase que hace Veggestation,
- pedir codigo del kit,
- llevar rapido al onboarding.

Contenido:

- logo,
- claim corto,
- input de codigo,
- CTA principal,
- CTA secundario para login.

### 4.2 Onboarding

Objetivo:

- reducir ansiedad,
- explicar que la app guiara el proceso,
- pedir permisos para notificaciones.

Slides sugeridos:

- "Te guiaremos paso a paso."
- "Te avisaremos cuando regar y que revisar."
- "Cada planta tiene su propio ritmo."

### 4.3 Seleccion de cultivo

Objetivo:

- confirmar que planta sembro el usuario.

Cards:

- rabano,
- lechuga de hoja,
- albahaca,
- frijol de mata.

Cada card debe mostrar:

- dificultad,
- tiempo a germinar,
- tiempo aproximado a cosecha,
- necesidad de sol.

### 4.4 Confirmacion de siembra

Objetivo:

- registrar el punto de partida exacto.

Campos:

- fecha de siembra,
- lugar donde esta la maceta,
- cuanta luz recibe aprox.

### 4.5 Home principal

La pantalla mas importante.

Debe mostrar:

- nombre de la planta,
- dias desde siembra,
- etapa actual,
- tarea de hoy,
- estado de riego,
- tip rapido,
- acceso a bitacora,
- acceso a ayuda.

### 4.6 Timeline de crecimiento

Objetivo:

- hacer visible el progreso.

Etapas base:

- semilla,
- germinacion,
- brote,
- crecimiento,
- pre-cosecha,
- cosecha.

Cada etapa debe tener:

- descripcion corta,
- que deberia ver el usuario,
- que cuidados importan mas.

### 4.7 Bitacora

Objetivo:

- aumentar engagement,
- dejar evidencia de progreso,
- ayudar a soporte o futuros ajustes del producto.

Elementos:

- fotos,
- notas cortas,
- check-ins como "ya broto" o "las hojas se ven caidas".

### 4.8 Centro de ayuda

Objetivo:

- resolver problemas comunes sin abrumar.

Sintomas iniciales:

- no germina,
- hojas amarillas,
- hojas caidas,
- tallo debil,
- tierra muy seca,
- tierra muy humeda.

## 5. Sistema de reglas del MVP

La v1 debe usar reglas simples por cultivo y etapa.

Cada cultivo necesita una ficha con:

- rango estimado de germinacion,
- rango estimado a cosecha,
- necesidad de sol,
- frecuencia orientativa de riego,
- tareas especiales,
- problemas comunes.

### Ejemplo de estructura de datos

```json
{
  "plantId": "radish",
  "name": "Rabano",
  "germinationDays": [4, 10],
  "harvestDays": [25, 40],
  "sun": "4-6 horas de luz o mas",
  "wateringHint": "Mantener humedad pareja sin encharcar",
  "stages": [
    {
      "id": "seed",
      "startDay": 0,
      "endDay": 4,
      "headline": "Semilla sembrada",
      "task": "Revisar humedad del sustrato"
    }
  ]
}
```

## 6. Recordatorios y notificaciones

La PWA debe permitir:

- recordatorio de revisar riego,
- recordatorio de revisar brotes,
- tareas puntuales por etapa,
- mensaje de motivacion semanal.

Regla base:

- no notificar demasiado,
- priorizar utilidad real,
- permitir posponer.

Frecuencia recomendada:

- primeros 14 dias: mayor acompanamiento,
- despues: 2 a 4 notificaciones por semana segun cultivo.

## 7. Contenido minimo por cultivo

Cada cultivo necesita:

- descripcion corta,
- tiempo de germinacion,
- tiempo a cosecha,
- luz recomendada,
- como regar sin complicar,
- que se considera normal,
- 5 problemas frecuentes,
- accion sugerida para cada problema.

## 8. Arquitectura funcional sugerida

### Frontend

- PWA responsive,
- mobile-first,
- instalable,
- soporte offline parcial para contenido ya cargado.

### Backend

Para MVP puede ser simple:

- autenticacion,
- validacion de codigo,
- perfil de usuario,
- planta activa,
- bitacora,
- scheduler o reglas para notificaciones.

### Datos base

Entidades minimas:

- User
- Kit
- PlantProfile
- UserPlant
- CareEvent
- JournalEntry

## 9. Modelo de datos inicial

### User

- id
- name
- email
- createdAt

### Kit

- id
- accessCode
- status
- assignedPlantOptions

### UserPlant

- id
- userId
- plantId
- sowingDate
- currentStage
- notificationEnabled
- status

### CareEvent

- id
- userPlantId
- type
- dueDate
- completedAt

### JournalEntry

- id
- userPlantId
- type
- note
- imageUrl
- createdAt

## 10. Stack sugerido

Si queremos rapidez de salida:

- `Next.js` o `Vite + React` para frontend,
- `Supabase` para auth, base de datos y storage,
- web push mas adelante si se complica en primera entrega,
- primera version de contenido en JSON local o base de datos sencilla.

Mi recomendacion pragmatica:

- `Next.js` si quieres una base mas robusta para crecer.
- `Vite + React` si quieres lanzar muy rapido una app cliente con logica simple.

## 11. UI y tono

La marca debe sentirse:

- amigable,
- optimista,
- tierna sin verse infantil,
- limpia,
- con progreso muy visible.

Direccion visual sugerida:

- verdes calidos,
- tonos tierra,
- crema claro,
- ilustraciones sencillas,
- tarjetas redondeadas,
- timeline muy visual.

## 12. Roadmap de construccion

### Sprint 1. Definicion

- cerrar 4 cultivos,
- definir fichas de cultivo,
- definir modelo de negocio basico,
- bosquejar arquitectura.

### Sprint 2. UX

- mapa de pantallas,
- wireframes mobile,
- copy principal,
- flujo de onboarding y home.

### Sprint 3. MVP tecnico

- auth o acceso por codigo,
- seleccion de cultivo,
- home,
- timeline,
- bitacora,
- contenido de ayuda.

### Sprint 4. Recordatorios

- configuracion de notificaciones,
- tareas programadas,
- logs de interaccion.

### Sprint 5. Prueba real

- test con usuarios reales del kit,
- medir activacion y retencion,
- ajustar cultivos y reglas.

## 13. Criterios de exito del MVP

Se considera exitoso si:

- la activacion del kit es sencilla,
- el usuario entiende que hacer hoy sin pensar mucho,
- el contenido reduce dudas comunes,
- y una parte relevante de usuarios llega a germinar y seguir usando la app.

## 14. Prioridades del equipo

Si hay que cortar alcance, proteger esto:

1. Onboarding claro.
2. Home diaria clara.
3. Recordatorios utiles.
4. Fichas de cultivo buenas.
5. Centro de ayuda simple.

Antes que esto:

- features sociales,
- diagnostico complejo,
- personalizacion excesiva,
- contenido para muchas especies.

## 15. Siguiente paso recomendado

Pasar de idea a definicion ejecutable con estos entregables:

1. Brief visual de marca.
2. Wireframes mobile de 5 pantallas clave.
3. Dataset inicial de las 4 plantas.
4. Decidir stack.
5. Construir el MVP sobre una sola planta activa por usuario.
