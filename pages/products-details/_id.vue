<template>
  <div>
    <TopHeader />
    <Menubar />
    <!-- Start Page Title Area -->
    <div class="page-title-area">
      <div class="container">
        <ul>
          <li><nuxt-link to="/">Accueil</nuxt-link></li>
          <li>{{ house.title }}</li>
        </ul>
      </div>
    </div>
    <!-- End Page Title Area -->

    <!-- Start Products Details Area -->
    <div class="products-details-area ptb-60">
      <div class="container">
        <div class="row">
          <ProductImages :images="house.photos" />
          <Details
            :house="house"
          />
          <DetailsInfo :description="house.description" />
          <RelatedProducts :type="house.type" />
        </div>
      </div>
    </div>
  </div>
</template>



<script>
import TopHeader from '../../layouts/TopHeader'
import Menubar from '../../layouts/Menubar'
import ProductImages from '../../components/products/ProductImages'
import Details from '../../components/products/Details'
import DetailsInfo from '../../components/products/DetailsInfo'
import RelatedProducts from '../../components/products/RelatedProducts'
import users from '../../mixins/users'
export default {
  validate({ params }) {
    return !isNaN(+params.id)
  },
  head() {
    return {
      title: 'Atypikhouse - '+ this.house.title,
      meta: [
        {
          hid: 'keywords',
          name: 'keywords',
          content:
            'Atypikhouse, Locations, Habitation, En location, Réinitialisation',
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
    ProductImages,
    Details,
    DetailsInfo,
    RelatedProducts,
  },
  mixins: [users],
  async asyncData({ params, error, $axios, store }) {
    const data = await $axios.$get(
      `${store.state.apiBaseUrl}/api/v1/houses/${params.id}`
    )
    if (data.success) {
      return {
        house: data.data,
        house_id: params.id,
      }
    } else {
      error({ statusCode: 404, message: 'Biens non trouvé' })
    }
  },
}
</script>