import Vue, { PluginFunction } from 'vue';

import * as coreComponents from '@/components/core/index.ts';
import * as layoutComponents from '@/components/layout/index.ts';
import * as textComponents from '@/components/text/index.ts';
import * as traitComponents from '@/components/traits/index.ts';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
interface InstallFunction extends PluginFunction<any> {
  installed?: boolean;
}

const install: InstallFunction = function installVuexen(vue: typeof Vue) {
  if (install.installed) return;

  install.installed = true;

  Object.entries(coreComponents).forEach(([componentName, component]) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    vue.component(componentName, component as any);
  });

  Object.entries(layoutComponents).forEach(([componentName, component]) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    vue.component(componentName, component as any);
  });

  Object.entries(textComponents).forEach(([componentName, component]) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    vue.component(componentName, component as any);
  });

  Object.entries(traitComponents).forEach(([componentName, component]) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    vue.component(componentName, component as any);
  });
};

const plugin = {
  install,
};

let GlobalVue = null;
if (typeof window !== 'undefined') {
  GlobalVue = window.Vue;
} else if (typeof global !== 'undefined') {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  GlobalVue = (global as any).Vue;
}
if (GlobalVue) {
  (GlobalVue as typeof Vue).use(plugin);
}

export default plugin;
export * from '@/components/core/index.ts';
export * from '@/components/layout/index.ts';
export * from '@/components/text/index.ts';
export * from '@/components/traits/index.ts';
