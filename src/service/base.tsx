export default class BaseService {
    timeout(ms: number) {
        return new Promise(resolve => setTimeout(resolve, ms));

    }
}
