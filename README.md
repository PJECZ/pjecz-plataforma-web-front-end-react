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

    alias arrancar="npm start"
    echo "-- React development"
    echo "   npm start"
    echo

## Instalacion desde cero

Crear la app recat con

    npx create-react-app pjecz-plataforma-web-front-end-react
    cd pjecz-plataforma-web-front-end-react

Luego los paquetes que se usan

    npm install axios --save
    npm install react-router-dom --save
    npm install @mui/material @mui/icons-material @emotion/react @emotion/styled --save
    npm install @mdi/react @mdi/js --save
