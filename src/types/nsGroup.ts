import { INsGroupItem } from "./nsGroupItem";

export interface INsGroup {
    variantId: string,
    variantName: string,
    variantLabel: string,
    variantFields?: INsGroupItem[],
    isEnabled?: boolean,
    controlId?: string,
    isChecked?: boolean
    event?: any
}