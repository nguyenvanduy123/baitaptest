import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';
// import styleImport from 'vite-plugin-style-import';
// import { viteWindiCSSPlugin } from 'vite-plugin-windicss';

export default defineConfig({
    plugins: [
        laravel({
            input: 'resources/js/app.jsx',
            refresh: true,
        }),
        react(),
        // styleImport({
        //     libs: [
        //         {
        //             libraryName: 'antd',
        //             resolveStyle: (name) => `antd/es/${name}/style/index`,
        //         },
        //     ],
        // }),
        // viteWindiCSSPlugin(), // Thêm plugin WindiCSS vào đây
    ],
});
