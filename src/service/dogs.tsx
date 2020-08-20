import BaseService from "./base";
import {IPet} from "../containers/PetsList";

class DogsService extends BaseService {
    async mockData() {
        let rawItems:Array<IPet> = [];

        await this.timeout(500);

        rawItems = [{
            id: 0,
            name: "Rex",
            imagePath: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1.00xw:0.669xh;0,0.190xh&resize=1200:*"
        }, {
            id: 1,
            name: "Labus",
            imagePath: "https://thehappypuppysite.com/wp-content/uploads/2017/10/Cute-Dog-Names-HP-long.jpg"
        }]

        return rawItems;
    }
}

export default new DogsService()
