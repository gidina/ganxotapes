export type ISortBy = "restaurant" | "schedule-close" | "schedule-open" | "";

type IGanxoTapaAPI = {
    id: string;
    type: "tapa" | "menu";
    img: string;
    price: string;
    restaurant: string;
    address: string;
    telephone: string;
    telephone2?: string;
    website?: string;
    title?: string;
    schedule2: string;
    schedule: string[][];
    holidays?: string[][];
    allergies2?: string;
    allergies?: Array<"celiac" | "vegetarian" | "vegan">;
    menu?: string;
    coordinates: number[];
};

export type IGanxoTapesAPI = {
    season: string;
    duration: string[];
    menu: IGanxoTapaAPI[];
    cover: string;
    description: string;
    awards?: string;
};

export type IGanxoTapa = IGanxoTapaAPI & { timetable:   Date[][]};
export type IGanxoTapes = {
    season: string;
    duration: string[];
    menu: IGanxoTapa[];
    cover: string;
    description: string;
    awards?: string;
};
