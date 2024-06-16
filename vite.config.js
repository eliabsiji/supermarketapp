import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import viteReact from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [
        viteReact(), // React plugin that we installed for vite.js
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.js'],
            refresh: true,
        }),
    ],
});
