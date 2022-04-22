export default {
    data() {
        return {
            baseUrl: process.env.APIBASEURI
        }
    },
    methods: {
        async getHouses() {
            const result = await this.$axios.$get(
                `${this.baseUrl}/api/v1/houses`,
                {
                    withCredentials: false,
                    headers: {
                        'Access-Control-Allow-Origin': '*',
                    }
                }
            )
            if (result.success) {
                return result.data
            }
            return false
        }
    }
}
