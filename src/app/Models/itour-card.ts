import { IFormat } from "./iformat"
import { IPairingStyle } from "./ipairing-style"

export interface ITourCard {
    name: string;
    id: number;
    format: IFormat;
    firstPrice: number;
    pairingStyle?: IPairingStyle;
    registerFeeJunior: number;
    registerFeeSenior: number;
    description: String;
};
