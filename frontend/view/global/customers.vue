<template>
            <div id="customers">
                <an-customer v-for="customer in customers" 
                                    :customer="customer" 
                                    :index.sync="indexCustomer">
                </an-customer>
            </div>    
</template>

<script>
import getData from '../../service/getData';
import Customer from '../../model/customer';

export default {
	data() {
        return {
            customers: [],
            indexCustomer: {}
        };
    },
    ready() {
        getData
            .getCustomers()
            .then(
                data => {
                    if (data.forEach) {
                        data.forEach(customer => {
                            this.customers.push(new Customer(customer));
                        });
                        return;
                    }
                    console.log(data);
                },
                err => { console.log(err); }
            );
    }
};
</script>

<style lang="sass">
#customers {

}
</style>