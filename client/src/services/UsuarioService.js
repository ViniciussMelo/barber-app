import {Service} from "./Service";

class UsuarioService extends Service {
    constructor() {
        super("usuarios");
    }
}

export default new UsuarioService();