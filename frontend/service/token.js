let storage = window.localStorage;

export default {
    getToken() {
        return storage.getItem('password');
    },
    setToken(token){
    	storage.setItem('password', token);
    	return this.getToken();
    },
    removeToken(){
    	storage.removeItem('password');
    }
};
