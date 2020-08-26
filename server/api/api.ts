import login from "./method/login";
import registration from "./method/registration";
import getCode from "./method/getCode";
import verifyUserByCode from "./method/verifyUserByCode";
import checkToken from "./method/checkToken";
import updateToken from "./method/updateToken";
import checkUser from "./method/checkUser";

class API {
    public login: typeof login;
    public registration: typeof registration;
    private getCode: typeof getCode;
    public updateToken: typeof updateToken;
    public checkToken: typeof checkToken;
    public verifyUserByCode: typeof verifyUserByCode;
    private checkUser: typeof checkUser;

    constructor() {
        this.login = login.bind(this)
        this.registration = registration.bind(this)
        this.getCode = getCode.bind(this)
        this.verifyUserByCode = verifyUserByCode.bind(this)
        this.updateToken = updateToken.bind(this)
        this.checkToken = checkToken.bind(this)
        this.checkUser = checkUser.bind(this)
    }
}

export default new API()

