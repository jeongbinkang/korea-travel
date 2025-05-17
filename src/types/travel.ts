export type  TravelInfo = {
    id: number;
    name: string;
    description: string;
    image:string;
    details:TravelDetails;
}

 export type TravelDetails = {
    intro: string; 
    hashtag: string[];
    places:{
        name: string;
        image: string;
    }[];
    restaurant: Restaurant[];
 };

 export type Restaurant = {
    name: string;
    menu: string;
    tag: string;
    url: string;
    image: string;
 }
