@echo off
set /p nombre_proyecto=Nombre del proyecto:

:: Clona template
call npx degit brutalkingran/plantilla-vite-react-tailwind %nombre_proyecto%
cd %nombre_proyecto%
call npm install

:: Inicializa git
git init

:: Abre VScode
code .
