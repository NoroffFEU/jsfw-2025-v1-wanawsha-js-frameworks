export type ApiImage = {
    url: string;
    alt?: string;
};

export type Review = {
    id: string;
    username: string;
    rating: number;
    description: string;
};

export type Product = {
    id: string;
    title: string;
    description: string;
    price: number;
    discountedPrice: number;
    image: ApiImage;
    rating: number;
    tags: string[];
    reviews: Review[];
};

export type ApiListResponse<T> = {
    data: T[];
    meta: unknown;
};

export type ApiItemResponse<T> = {
    data: T;
    meta: unknown;
};

export type CartItem = {
    id: string;
    title: string;
    price: number;
    discountedPrice: number;
    imageUrl: string;
    imageAlt?: string;
    quantity: number;
};