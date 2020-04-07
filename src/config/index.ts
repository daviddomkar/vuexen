export type Color = {
  foreground?: string;
  background?: string;
};

export type Configuration = {
  themes?: { [name: string]: Theme };
  options?: Options;
};

export type Options = {
  extractProperties?: boolean | Array<string> | false;
};

export type Theme = {
  colors: { [name: string]: string | Color };
  elevation: Elevation;
};

export type Elevation = {
  color: string;
  levels: Array<ElevationLevel>;
};

export type ElevationLevel = {
  blur: string;
  x: string;
  y: string;
};
