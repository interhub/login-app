import login from "./metod/login";
import registration from "./metod/registration";
import getCode from "./metod/getCode";
import verifyUserByCode from "./metod/verifyUserByCode";
import checkToken from "./metod/checkToken";
import updateToken from "./metod/updateToken";

class API {
    public login: typeof login;
    public registration: typeof registration;
    public getCode: typeof getCode;
    private updateToken: typeof updateToken;
    private checkToken: typeof checkToken;
    public verifyUserByCode: typeof verifyUserByCode;

    constructor() {
        this.login = login.bind(this)
        this.registration = registration.bind(this)
        this.getCode = getCode.bind(this)
        this.verifyUserByCode = verifyUserByCode.bind(this)
        this.updateToken = updateToken.bind(this)
        this.checkToken = checkToken.bind(this)
    }
}

export default new API()

