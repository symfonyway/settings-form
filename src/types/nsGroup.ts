import { INsGroupItem } from "./nsGroupItem";

export interface INsGroup {
    variantId: string,
    variantName: string,
    variantLabel: string,
    variantFields?: INsGroupItem[],
    controlId?: string,
    enabled?: boolean
}