export interface ITourDetails {
    id?: number;
    name: string;
    event: boolean;
    dateOfStart: `${bigint}-${bigint}-${bigint}`;
    dateOfEnd?: `${bigint}-${bigint}-${bigint}`;
    numberOfRounds: number;
    format: string;
    pairingStyle: string;
    organisator: string;
    contact: string;
    capacity: number;
    firstPrice?: number;
    secondPrice?: number;
    thirdPrice?: number;
    registerFeeSenior?: number;
    registerFeeJunior?: number;
    description: string;
};
