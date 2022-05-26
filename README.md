# pjecz-plataforma-web-front-end-react

Front-End hecho en React de Plataforma Web

## Configuracion

Crear un archivo `.env` con las variables de entorno

    REACT_APP_URL_BASE=http://127.0.0.1:8002

Para hacer la instalacion a partir de `package.json`

    npm install

Ejecutar con

    npm start

Es util crear un archivo `.bashrc` para cargar en Konsole

    if [ -f ~/.bashrc ]; then
        source ~/.bashrc
    fi

    if [ -f .env ]; then
        export $(grep -v '^#' .env | xargs)
    fi

    figlet Plataforma Web front-end React
    echo

    echo "-- Variables de entorno"
    echo "   REACT_APP_URL_BASE: $REACT_APP_URL_BASE"
    echo

    alias arrancar="npm start"
    echo "-- React development"
    echo "   npm start"
    echo

## Comandos para crear la app e instalar los paquetes

Crear la app con

    npx create-react-app pjecz-plataforma-web-front-end-react
    cd pjecz-plataforma-web-front-end-react

Luego los paquetes que se usan

    npm install axios --save
    npm install react-router-dom --save
    npm install @mui/material @mui/icons-material @emotion/react @emotion/styled --save
    npm install @mdi/react @mdi/js --save

## Requerimientos en Fedora Linux

Instalar NodeJS

    sudo dnf install nodejs npm

Revise que tenga la version **16** de NodeJS

    nodejs --version
    npx --version

Para bajar, instalar y ejecutar

1. Clone el repositorio `git clone https://github.com/PJECZ/pjecz-citas-v2-cliente.git`
1. Cambie al directorio `cd pjecz-citas-v2-cliente`
1. Ejecute `npm install` para descargar e instalar
1. Ejecute `npm start` para probar y desarrollar

## Pasos para subir a produccion

Para subir a Google Cloud

1. Ejecute `npm run build`
1. Escriba el archivo `app.yaml` de no tenerlo
1. Suba a Google Cloud con `gcloud app deploy`

## Archivo app.yaml

Con este contenido

    runtime: nodejs16
    service: citas-cliente
    handlers:
    # Serve all static files with url ending with a file extension
    - url: /(.*\..+)$
      static_files: build/\1
      upload: build/(.*\..+)$
    # Catch all handler to index.html
    - url: /.*
      static_files: build/index.html
      upload: build/index.html
