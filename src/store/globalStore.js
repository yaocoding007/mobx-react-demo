const { observable, action } = require("mobx");


class GlobalStore {

    @observable 
    loading = true;

    @action
    setLoading(flag = false) {
        this.loading = flag;
    }

}

export default GlobalStore;