# pjecz-plataforma-web-front-end-react

Front-End hecho en React de Plataforma Web

## Instalacion y configuracion

Para hacer la instalacion a partir de `package.json`

    npm install

Ejecutar con

    npm start

Es util crear un archivo `.bashrc` para cargar en Konsole

    if [ -f ~/.bashrc ]; then
        source ~/.bashrc
    fi

    figlet Plataforma Web front-end React
    echo

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
