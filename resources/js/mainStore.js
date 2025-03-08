
import { defineStore } from 'pinia'
// import axios from 'axios';
// import moment from 'moment'


export const useMainStore = defineStore('store', {
    state: () => {
        return {
            count: 0,
            name: 'Pangalan',
        }
    },
    getters: {
        doubleCount: (state) => state.count * 2,
    },
    actions: {
        increment() {
            this.count++
        },
        // async getCompany() {
        //     try {
        //       const res = await axios.get('api/companies/get_companies');
        //       this.CompanyMainData = res.data.filter((r)=>{
        //           return r.created_at = moment(r.created_at).format('YYYY-MM-DD')
        //       })
        //     } catch (error) {
        //     }
        //   },
    },
    // persist: {
    //     key: 'store'
    // }
})