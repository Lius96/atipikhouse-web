<template>
  <div>
    <TopHeader />
    <Menubar />
    <CheckoutItem v-if="payIntent.length > 0" :intentKey="payIntent" :user="$store.state.authUser" />
  </div>
</template>

<script>
import TopHeader from '../layouts/TopHeader'
import Menubar from '../layouts/Menubar'
import CheckoutItem from '../components/cart/CheckoutItem'
export default {
  head() {
    return {
      title: 'Atypikhouse - Panier',
      meta: [
        {
          hid: 'keywords',
          name: 'keywords',
          content:
            'Atypikhouse, Locations, Habitation, En location, Paiement sécuriser, Votre panier, Panier AtypikHouse',
        },
        {
          hid: 'description',
          name: 'description',
          content: 'Atypikhouse louez vos biens en ligne!',
        },
        { property: 'og:type', content: 'website' },
        {
          property: 'og:description',
          content: 'Atypikhouse louez vos biens en ligne!',
        },
        { property: 'og:image', content: '/icon.png' },
      ],
    }
  },
  components: {
    TopHeader,
    Menubar,
    CheckoutItem,
  },
  data(){
    return{
      payIntent: '',
    }
  },
  methods:{
    async generatePaymentIntent() {
      const getTokken = this.$store.state.authUser.login_session_token
      let data = {
        amount: this.$store.getters.totalAmount,
        currency: 'eur',
        paymentType: 'card',
      }
      const result = await this.$axios.$post(
        `${process.env.APIBASEURI}/api/v1/booking/payintentment/`,
        data,
        {
          withCredentials: false,
          headers: {
            'Access-Control-Allow-Origin': '*',
            authorization: getTokken,
          },
        }
      )
      if (result.success) {
       return  result.data
      }else{
        return false
      }
    },
  },
  async created(){
    this.payIntent = await this.generatePaymentIntent();
    console.log(this.payIntent)
  }
}
</script>