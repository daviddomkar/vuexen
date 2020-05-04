import Vue, { PluginFunction, VueConstructor } from 'vue';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
interface InstallFunction extends PluginFunction<any> {
  installed?: boolean;
}

declare const Vuexen: { install: InstallFunction };
export default Vuexen;

export const VxTag: VueConstructor<Vue>;

export const VxRoot: VueConstructor<Vue>;
export const VxContainer: VueConstructor<Vue>;
export const VxCenter: VueConstructor<Vue>;
export const VxRow: VueConstructor<Vue>;
export const VxCol: VueConstructor<Vue>;
export const VxPanel: VueConstructor<Vue>;
export const VxStack: VueConstructor<Vue>;
export const VxBlock: VueConstructor<Vue>;

export const VxText: VueConstructor<Vue>;
export const VxHeading: VueConstructor<Vue>;

export const VxAbsolute: VueConstructor<Vue>;
export const VxFixed: VueConstructor<Vue>;
export const VxMargin: VueConstructor<Vue>;
export const VxPadding: VueConstructor<Vue>;
export const VxRounded: VueConstructor<Vue>;
