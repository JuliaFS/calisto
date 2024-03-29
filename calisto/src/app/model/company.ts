// export class Company {
//     id?: string;
//     name?: string;
//     country?: string;
//     working_capital?: number;
//     invested_capital?: number;
//     published?: boolean;
//     author?: string;
//   }

export interface Company {
    id: string,
    name: string,
    country: string,
    //likes: number,
    working_capital: number,
    invested_capital: number,
    owner: string,
}

