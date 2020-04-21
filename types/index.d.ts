import Vue, { PluginFunction, VueConstructor } from 'vue';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
interface InstallFunction extends PluginFunction<any> {
  installed?: boolean;
}

declare const Vuexen: { install: InstallFunction };
export default Vuexen;

export const VxRoot: VueConstructor<Vue>;
export const VxTag: VueConstructor<Vue>;
export const VxText: VueConstructor<Vue>;
export const VxContainer: VueConstructor<Vue>;
export const VxCenter: VueConstructor<Vue>;
export const VxRow: VueConstructor<Vue>;
export const VxCol: VueConstructor<Vue>;
export const VxPanel: VueConstructor<Vue>;
export const VxStack: VueConstructor<Vue>;
export const VxStackItem: VueConstructor<Vue>;
export const VxBlock: VueConstructor<Vue>;
export const VxHeading: VueConstructor<Vue>;
