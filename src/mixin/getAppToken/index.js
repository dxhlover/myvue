
export const getAppToken = {
    mounted() {
        window.app2h5 = this.app2h5;
    },
    methods: {
        // 接收原生传入的 token
        app2h5(msg) {
            if(!msg.token) return;
            this.$store.dispatch('STORE_TOKEN', msg.token);
        }
    }
}
