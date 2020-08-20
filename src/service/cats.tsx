import BaseService from "./base";
import {IPet} from "../containers/PetsList";

class CatsService extends BaseService {
    async mockData() {
        let rawItems:Array<IPet> = [];

        await this.timeout(500);

        rawItems = [{
            id: 0,
            name: "Lira",
            imagePath: "https://i.pinimg.com/736x/33/32/6d/33326dcddbf15c56d631e374b62338dc.jpg"
        }, {
            id: 1,
            name: "Euphoria",
            imagePath: "https://i.ytimg.com/vi/SQJrYw1QvSQ/maxresdefault.jpg"
        }]

        return rawItems;
    }
}

export default new CatsService();
