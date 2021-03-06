import { IExtensibleProps } from '../util/ExtensionProvider';
import * as React from 'react';
export interface IBaseProps {
    group: string;
    cycleTime?: number;
}
export declare type ExportType = IBaseProps & IExtensibleProps & React.HTMLAttributes<any> & any;
declare const _default: React.ComponentClass<any, React.ComponentState>;
export default _default;
