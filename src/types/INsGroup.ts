import { INsControl } from "./INsControl";

export interface INsGroup {
    name: string,
    defaultCheckbox: string,
    additionalCheckbox: string,
    fields: INsControl[],
    closed?: boolean
}