import Place from './Location'

export default interface Location {
    "post code": string;
    "country": string;
    "country abbreviation": string;
    "places": Place[];
}