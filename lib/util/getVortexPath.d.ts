export declare type AppPath = 'base' | 'assets' | 'assets_unpacked' | 'modules' | 'modules_unpacked' | 'bundledPlugins' | 'locales' | 'package';
/**
 * the electron getAppPath function and globals like __dirname
 * or process.resourcesPath don't do a great job of abstracting away
 * how the application is being built, e.g. development or not, asar or not,
 * webpack or not, portable or not.
 * This function aims to provide paths to application data independent
 * of any of that.
 */
declare function getVortexPath(id: AppPath): string;
export default getVortexPath;
