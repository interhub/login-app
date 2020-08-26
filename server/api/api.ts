import login from "./metod/login";
import registration from "./metod/registration";
import getCode from "./metod/getCode";
import verifyUserByCode from "./metod/verifyUserByCode";
import checkToken from "./metod/checkToken";
import updateToken from "./metod/updateToken";

class API {
    public login: typeof login
    public registration: typeof registration
    public getCode: typeof getCode
    public verifyUserByCode: typeof verifyUserByCode
    public updateToken: typeof updateToken
    public checkToken: typeof checkToken

    constructor() {
        this.login = login
        this.registration = registration
        this.getCode = getCode
        this.verifyUserByCode = verifyUserByCode
        this.checkToken = checkToken
        this.updateToken = updateToken
    }

}

export default new API()

