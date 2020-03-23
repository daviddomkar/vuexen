import vue from 'rollup-plugin-vue';
import typescript from 'rollup-plugin-typescript2';
import renameExtensions from '@betit/rollup-plugin-rename-extensions';
import commonjs from 'rollup-plugin-commonjs';

export default {
  input: 'index.ts',
  output: {
    format: 'esm',
    dir: 'dist/esm',
  },
  external: ['vue', '@vue/composition-api'],
  plugins: [
    typescript({ rollupCommonJSResolveHack: true, clean: true }),
    commonjs(),
    // This extension renames all .vue and .ts to .js
    // (and updates the imports)
    renameExtensions({
      include: ['**/*.ts', '**/*.vue'],
      mappings: { '.vue': '.vue.js', '.ts': '.js' },
    }),
    vue(),
  ],
  // Prevents bundling, but doesn’t rename files
  preserveModules: true,
};
