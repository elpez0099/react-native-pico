1) Instalar Expo
2) Proporcionar credenciales - npx expo login
3) crear proyecto de expo con npx create-expo-app@latest [project-name] -template blank@latest o npx create-expo-app@latest project-name -t blank

4) instalar librerias
npx expo install expo-router react-native-safe-area-context react-native-screens expo-linking expo-constants expo-status-bar


5) Abrir Package.json y reemplazar 
  "main": "expo/AppEntry.js" 

  por:

  "main": "expo-router/entry"

  Lo anterior sirve para proporcionar un router similar a NextJs donde usaremos carpetas para las rutas

5) Crear nueva carpeta en root llamada "app"
6) Copiar contenido de app.js y crear un nuevo archivo dentro de "app/" llamado "_layout.jsx" y pegar el contenido de app.js

7) Eliminar el archivo "app.js"
8) Editar "app.json" y agregar una entrada despues de "name" y agregar lo siguiente:
  "scheme": "nombre-de-la-app"

9) crear un archivo "index.jsx" dentro de "app/" y copiar el contenido de "_layout.jsx" y pegarlo.

10) borrar contenido de "_layout.jsx" y usar el snippet "rfnes" para agregar un componente de react native con estilos. (En caso de no funcionar el snippet instalar "ES7 + React/Redux/ReactNative Snippets")

11) Instalar NativeWind para usar Tailwind classes como se hace en React
  11.1) npm install nativewind
  11.2) npm install --save-dev tailwindcss@3.3.2
  11.3) Debemos configurar nativewind corriendo el siguiente comando:
      npx tailwindcss init

      Con esto se creara un nuevo archivo llamado tailwind.config.js
  11.4) Edita el archivo y reemplaza la directiva "content" con:
    content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],

  11.5) Edita el archivo babel.config.js y agrega lo siguiente a continuación de "presets":
  plugins: ["nativewind/babel"],

  11.6) Remover los estilos de index.jsx
