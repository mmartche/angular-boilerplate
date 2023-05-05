export interface User {
    name?: string,
    email?: string,
    role?: string,
    password?: string,
    passwordConfirm?: string,
    photo?: string,
    passwordChangedAt?: Date,
    passwordResetToken?: string,
    passwordResetExpires?: Date,
    active?: boolean
}

export interface Thought {
    id?: number
    description?: string
    author?: string
    model?: string
    favorite?: boolean
    slug?: string
}

export interface Location {
    type?: {
        type: String,
        default: 'Point'
    },
    coordinates?: Number[],
    address?: String,
    description?: String,
    day?: Number
}

export interface FullThought {
    name?: string,
    slug?: string,
    description?: string,
    createdAt?: Date,
    startDates?: Date[],
    secretThought?: boolean,
    startLocation?: Location,
    locations?: Location[],
    guides?: User[],
    createdBy?: User,
    favorite?: boolean
}

export interface ThoughtAPIResultado {
    data: ThoughtAPI
    results: number
}

export interface ThoughtAPI {
    data: Thought[]
}
