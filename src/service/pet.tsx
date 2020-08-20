import BaseService from "./base";
import DogsService from "./dogs";
import CatsService from "./cats";

class PetService extends BaseService {
    async mockDogs() {
        const data = await DogsService.mockData();

        return data;
    }

    async mockCats() {
        const data = await CatsService.mockData();

        return data;
    }
}

export default new PetService();
