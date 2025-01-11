import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
	plugins: [react()],
	server: {
		open: true,
	},
	css: {
		modules: {
			// Настраиваем формат генерируемых имен классов
			localsConvention: 'camelCase', // Преобразует имена классов в camelCase
			generateScopedName: '[name]__[local]__[hash:base64:5]', // Формат: Имя файла + имя класса + хэш
		},
	},
});
