export interface Iproduct{
    pName : string;
    pDesc : string;
    pCatg : Icatg;
}

export type Icatg = "Catlog" | "Product"