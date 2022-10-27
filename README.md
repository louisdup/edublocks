# EduBlocks V5 

EduBlocks is a visual block based programming tool that helps teachers to introduce text based programming languages, like Python & HTML, to children at an earlier age via a drag and drop programming experience.

## Developing EduBlocks
EduBlocks is written in Typescript using [Vue 3](https://vuejs.org/) bootstrapped with [Vite](https://vitejs.dev/). 

[Tailwind CSS](https://tailwindcss.com/) is used for styling with a custom component library.

[Firebase](https://firebase.google.com/) is used for Authentication, as a database (Firestore) and for cloud storage. For security reasons, this repository does not include keys for firebase, so you'll need to setup your own firebase project and create the following `.env` file in the root of the repository.

```
VITE_API_KEY=FIREBASEAPIKEY
VITE_AUTH_DOMAIN=
VITE_DATABASE_URL=
VITE_PROJECT_ID=
VITE_STORAGE_BUCKET=
VITE_MESSAGING_SENDER_ID=
VITE_APP_ID=
VITE_MEASUREMENT_ID=
VITE_INSTRUMENTATION_KEY=
TAILWIND_MODE=watch
```
We reccommend Visual Studio code with the [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint), [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode), [TailwindCSS](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss) & [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) plugins when developing EduBlocks.

## Building & running EduBlocks

### Install

1. Make sure you have the latest versions of NodeJS and yarn installed.
2. Clone the EduBlocks repository.
3. Install node modules with `yarn install`.

### Run

- To run the development server: `yarn dev`.
- To run Storybook (for testing & documenting components): `yarn storybook`.

### Build

- To build a static version of EduBlocks: `yarn build`.

## Best Practices

### View Structure

All views should have the following folder structure:

```
home/
    home.vue 
    home-model.ts
    routes.ts
    templates/
        home-mobile.vue
        home-desktop.vue
```
- home.vue: The "root" .vue file for each view. It stays the same for every view. It should only contain a mobile and a desktop template for the view, imported as components. `onMounted` can be added to the `<script setup>` block for running logic when the view is mounted.

- home-model.ts: This is where all the logic/typescript code for the view goes. It's best practice to have all logic/typescript code inside of this model file rather than in the .vue files themselves. This is for keeping the codebase clean, easier to understand and to provide a better developer experience with linting tools.

- routes.ts: This exports all of the routes for the view to the router.

- templates/home-mobile: This is where all the markup for the mobile version of the view goes. Views should be made up of **components only and no native HTML elements**. Views also **should not** contain tailwind classes. All styling should be handled by components.

- templates/home-desktop: Same as above but the desktop version of the view.

## Credits

List of notable scientists and hackers for the random filename generator: [Moby](https://github.com/moby/moby).

Loading animation component: [Scratch GUI](https://github.com/LLK/scratch-gui).

