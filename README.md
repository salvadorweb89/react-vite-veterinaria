# react-vite-veterinaria
A simple React Vite project with the following features:

### Technology.

- Docker container based on official Node 18 Docker Image, to keep isolated all project files and dependencies.
- Vite 4 as build tool.
- ReactJS 18 as JS Framework.
- TailwindCSS 3 as CSS Framework for styles.
- LocalStorage from browser to keep app details.
- Hosted and deployed in Netlitfy.

### Features

- Allows main CRUD operations over 'patient' entity.
- Implements up to 5 components to split code and functionality related to each component.
- Uses React useState and useEffect Hooks to manage State and spread Ojects reactiviry through application.
- Responsive design with TailwindCSS to display properly in main device types (mobile and desktop).


### Preview

A live demo of this project is available [here](https://react-vite-veterinaria-salvadorweb89.netlify.app)

![image](https://github.com/salvadorweb89/react-vite-veterinaria/assets/9569430/32f7bcbc-fcfa-4547-81e8-b7ac4632ad7d)

![image](https://github.com/salvadorweb89/react-vite-veterinaria/assets/9569430/ee20f0bb-7116-42e2-95af-e89463d5d32d)

***

### How to run

Follow this steps to run and preview this project:

#### Create .env file
Create .env file specifying desired ports to run app container

### Run docker container
Run 'docker-compose up' to launch docker container and run app in dev mode.

The app should be available in (http://localhost:3000)[http://localhost:3000]


