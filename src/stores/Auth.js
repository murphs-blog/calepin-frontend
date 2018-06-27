import AppState from 'react-app-state';
import cookie from 'js-cookie/src/js.cookie';

export let DefaultState = {
    logged_in: false,
    access_token: null,

    user: {
        first_name: null,
        last_name: null,
        email: null,
    }
};

export default new class extends AppState {
    constructor() {
        super(cookie.getJSON('AuthState') || DefaultState);
    }

    setAndSave(data) {
        super.set(data);
        cookie.set('AuthState', this._propsAndValues, { expires: 7 });
    }
}();