import { INControl } from "./INsControl";

export interface INsGroup {
    name: string,
    defaultCheckbox: string,
    additionalCheckbox: string,
    fields: INControl[],
}