# 🎮 Preguntados

Un juego de preguntas y respuestas.

## ✨ Características

- 🎯 **4 Niveles de Dificultad**: Fácil, Normal, Difícil y Extremo
- 🎨 **Interfaz Visual Atractiva**: Diseño moderno con animaciones y fondos temáticos
- 📊 **Sistema de Puntuación**: Puntos basados en la dificultad seleccionada

## 📦 Instalación

1. Clona el repositorio:
```bash
git clone <url-del-repositorio>
cd unq-ui-francisco-raffin-trabajo-final
```

2. Instala las dependencias:
```bash
npm install
```

3. Inicia el servidor de desarrollo:
```bash
npm start
```

4. Abre tu navegador en `http://localhost:5173`

## 🎮 Uso

1. **Pantalla de Inicio**: Haz clic en "COMENZAR" para iniciar el juego
2. **Selección de Dificultad**: Elige entre Fácil, Normal, Difícil o Extremo
3. **Jugar**: Responde las preguntas seleccionando una de las 4 opciones disponibles
4. **Resultados**: Al finalizar, verás tu puntaje final y respuestas correctas

### Flujo del Juego

- Las preguntas se muestran una a la vez
- Al seleccionar una respuesta, se muestra inmediatamente si es correcta (verde) o incorrecta (rojo)
- Después de 1 segundo, la aplicación avanza automáticamente a la siguiente pregunta
- Al completar todas las preguntas, se muestra la pantalla de resultados con opción para reiniciar

## 🎯 Sistema de Puntuación

El sistema de puntuación funciona de la siguiente manera:

- **Respuesta Correcta**: 
  - Fácil: +1 punto
  - Normal: +2 puntos
  - Difícil: +3 puntos
  - Extremo: +4 puntos

- **Respuesta Incorrecta**: 
  - Se resta el 10% del multiplicador de dificultad
  - Ejemplo: En modo Normal (-0.2 puntos), en modo Extremo (-0.4 puntos)

- **Puntaje Mínimo**: El puntaje nunca puede ser menor a 0
---

