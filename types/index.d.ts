import Vue, { PluginFunction, VueConstructor } from 'vue';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
interface InstallFunction extends PluginFunction<any> {
  installed?: boolean;
}

declare const Vuexen: { install: InstallFunction };
export default Vuexen;

export const VxContainer: VueConstructor<Vue>;
export const VxCenter: VueConstructor<Vue>;
export const VxRow: VueConstructor<Vue>;
export const VxCol: VueConstructor<Vue>;
