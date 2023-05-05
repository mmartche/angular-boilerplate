import { User, Location } from "./thought.interface"

export class ThoughtInfo {
    name?: string;
    slug?: string;
    description?: string;
    createdAt?: Date;
    startDates?: Date[];
    secretThought?: boolean;
    startLocation?: Location;
    locations?: Location[];
    guides?: User[];
    createdBy?: User;

    constructor(item) {
        this.name = item?.name;
        this.slug = item?.slug;
        this.description = item?.description;
        this.createdAt = item?.createdAt;
        this.startDates = item?.startDates;
        this.secretThought = item?.secretThought;
        this.startLocation = item?.startLocation;
        this.locations = item?.locations;
        this.guides = item?.guides;
        this.createdBy = item?.createdBy;
    }
}