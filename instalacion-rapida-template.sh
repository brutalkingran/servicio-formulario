#!/bin/bash

read -p "Nombre del proyecto: " nombre_proyecto

npx degit brutalkingran/plantilla-vite-react-tailwind "$nombre_proyecto"
cd "$nombre_proyecto"
npm install
git init
code .