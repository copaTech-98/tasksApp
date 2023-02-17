# Usa la última imagen de Node.js
FROM node:latest

# Establece el directorio de trabajo para la aplicación
WORKDIR /app

# Copia los archivos de la aplicación a la imagen Docker
COPY . .

# Instala las dependencias
RUN npm i -g @ionic/cli && npm install 

# Compila la aplicación
RUN ionic build

# Especifica el comando para ejecutar la aplicación
CMD ["ionic", "serve"]

