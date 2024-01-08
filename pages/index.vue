<template>
  <div>
    <TopHeader />
    <Menubar />
    <Banner />
    <AlowYourStyle
      :yourtCount="yourtTypeCount"
      :tenteCount="tenteTypeCount"
      :cubeCount="cubeTypeCount"
      :tinyCount="tinyHouseTypeCount"
    />
    <BestSellers :provData="products" />
    <Offer />
    <Testimonials></Testimonials>
    <Facility></Facility>
  </div>
</template>

<script>
import TopHeader from '../layouts/TopHeader'
import Menubar from '../layouts/Menubar'
import Banner from '../components/diction-two/Banner'
import AlowYourStyle from '../components/diction-two/AlowYourStyle'
import Offer from '../components/diction-two/Offer'
import Facility from '../components/common/Facility'
import BestSellers from '../components/diction-two/BestSellers'
import Testimonials from '../components/common/Testimonials'
// import Subscribe from '../components/common/Subscribe'
import cacheControl from '../middleware/cacheControl'

export default {
  components: {
    TopHeader,
    Menubar,
    Banner,
    AlowYourStyle,
    Offer,
    Facility,
    Testimonials,
    BestSellers,
    // Subscribe,
  },
  head() {
    return {
      title: "Découvrez l'Originalité d'Atypikhouse - Réservez Votre Séjour dans une Maison Insolite - Evadez-vous dans une cabane insolite - Profitez de bons moments sous des tentes - Dormez dans une cabane dans les arbres - Il est temps d'aller sur le yourte",
      meta: [
        { hid: 'title', name: 'title', content: 'Atypikhouse' },
        {
          hid: 'keywords',
          name: 'keywords',
          content: "maison atypique, hébergement original, séjour insolite, logement unique, vacances inédites, expérience de voyage hors du commun, hébergement hors normes, escapade originale, nuitée atypique, logement insolite, destination hors du commun, séjour inoubliable, hébergement distinctif, vacances extraordinaires",
        },
        {
          hid: 'description',
          name: 'description',
          content: `Bienvenue dans l'Univers d'AtypiqueHouse.
Découvrez un monde où le voyage devient une aventure unique et mémorable. Chez AtypiqueHouse, nous vous invitons à explorer des logements qui transcendent l'ordinaire, offrant une expérience d'hébergement incomparable. Chaque maison que nous proposons est soigneusement sélectionnée pour son caractère atypique, son charme distinctif et son ambiance exceptionnelle.
Logements Uniques pour des Vacances Inoubliables
Que vous recherchiez une escapade romantique, une retraite en famille ou une expérience solo inédite, nos maisons insolites offrent le cadre parfait pour des vacances extraordinaires. Plongez dans l'inattendu avec nos hébergements originaux, des cabanes perchées dans les arbres aux yourtes traditionnelles, en passant par des logements conçus pour émerveiller.
Pourquoi Choisir Atypikhouse :
Originalité Garantie : Chacun de nos logements est choisi pour son caractère unique, offrant une expérience que vous ne trouverez nulle part ailleurs.
Confort et Authenticité : Profitez du confort moderne dans un cadre authentique, mariant l'insolite au bien-être.
Séjours Personnalisés : Nous vous offrons la possibilité de personnaliser votre séjour pour qu'il réponde à toutes vos attentes.
Service Exceptionnel : Notre équipe dévouée est là pour rendre votre séjour mémorable, de la réservation à votre départ.
Réservez dès maintenant votre séjour atypique avec Atypikhouse et laissez-vous emporter par l'aventure.`,
        },
        { hid: 'og:title', property: 'og:title', content: 'Atypikhouse' },
        { hid: 'og:type', property: 'og:type', content: 'website' },
        {
          hid: 'og:description',
          property: 'og:description',
          content: `Bienvenue dans l'Univers d'AtypiqueHouse.
Découvrez un monde où le voyage devient une aventure unique et mémorable. Chez AtypiqueHouse, nous vous invitons à explorer des logements qui transcendent l'ordinaire, offrant une expérience d'hébergement incomparable. Chaque maison que nous proposons est soigneusement sélectionnée pour son caractère atypique, son charme distinctif et son ambiance exceptionnelle.
Logements Uniques pour des Vacances Inoubliables
Que vous recherchiez une escapade romantique, une retraite en famille ou une expérience solo inédite, nos maisons insolites offrent le cadre parfait pour des vacances extraordinaires. Plongez dans l'inattendu avec nos hébergements originaux, des cabanes perchées dans les arbres aux yourtes traditionnelles, en passant par des logements conçus pour émerveiller.
Pourquoi Choisir Atypikhouse :
Originalité Garantie : Chacun de nos logements est choisi pour son caractère unique, offrant une expérience que vous ne trouverez nulle part ailleurs.
Confort et Authenticité : Profitez du confort moderne dans un cadre authentique, mariant l'insolite au bien-être.
Séjours Personnalisés : Nous vous offrons la possibilité de personnaliser votre séjour pour qu'il réponde à toutes vos attentes.
Service Exceptionnel : Notre équipe dévouée est là pour rendre votre séjour mémorable, de la réservation à votre départ.
Réservez dès maintenant votre séjour atypique avec Atypikhouse et laissez-vous emporter par l'aventure.`,
        },
        { hid: 'og:image', property: 'og:image', content: '/icon.png' },
        {
          hid: 'twitter:card',
          property: 'twitter:card',
          content: 'summary_large_image',
        },
        {
          hid: 'twitter:title',
          property: 'twitter:title',
          content: 'Atypikhouse',
        },
        {
          hid: 'twitter:description',
          property: 'twitter:description',
          content: `Bienvenue dans l'Univers d'AtypiqueHouse.
Découvrez un monde où le voyage devient une aventure unique et mémorable. Chez AtypiqueHouse, nous vous invitons à explorer des logements qui transcendent l'ordinaire, offrant une expérience d'hébergement incomparable. Chaque maison que nous proposons est soigneusement sélectionnée pour son caractère atypique, son charme distinctif et son ambiance exceptionnelle.
Logements Uniques pour des Vacances Inoubliables
Que vous recherchiez une escapade romantique, une retraite en famille ou une expérience solo inédite, nos maisons insolites offrent le cadre parfait pour des vacances extraordinaires. Plongez dans l'inattendu avec nos hébergements originaux, des cabanes perchées dans les arbres aux yourtes traditionnelles, en passant par des logements conçus pour émerveiller.
Pourquoi Choisir Atypikhouse :
Originalité Garantie : Chacun de nos logements est choisi pour son caractère unique, offrant une expérience que vous ne trouverez nulle part ailleurs.
Confort et Authenticité : Profitez du confort moderne dans un cadre authentique, mariant l'insolite au bien-être.
Séjours Personnalisés : Nous vous offrons la possibilité de personnaliser votre séjour pour qu'il réponde à toutes vos attentes.
Service Exceptionnel : Notre équipe dévouée est là pour rendre votre séjour mémorable, de la réservation à votre départ.
Réservez dès maintenant votre séjour atypique avec Atypikhouse et laissez-vous emporter par l'aventure.`,
        },
        {
          hid: 'twitter:image',
          property: 'twitter:image',
          content: '/icon.png',
        },
      ],
    }
  },
  middleware: cacheControl({
    'max-age': 60,
    'stale-when-revalidate': 5
  }),
  async asyncData({ error, $axios, store }) {
    let { success, data } = await $axios.$get(
        `${store.state.apiBaseUrl}/api/v1/houses/`
      ),
      returned = {
        products: [],
        yourtTypeCount: 0,
        tenteTypeCount: 0,
        tinyHouseTypeCount: 0,
        cubeTypeCount: 0,
      }
    if (success) {
      let publishHouse = data.filter((item) => {
        return item.status == 'publish'
      })
      returned.products = publishHouse.slice(
        Math.max(publishHouse.length - 4, 0)
      )
      returned.yourtTypeCount = data.filter((item) => {
        return (
          item.status == 'publish' && item.type.toLowerCase().includes('yourt')
        )
      }).length
      returned.tenteTypeCount = data.filter((item) => {
        return (
          item.status == 'publish' && item.type.toLowerCase().includes('tente')
        )
      }).length
      returned.tinyHouseTypeCount = data.filter((item) => {
        return (
          item.status == 'publish' && item.type.toLowerCase().includes('tiny')
        )
      }).length
      returned.cubeTypeCount = data.filter((item) => {
        return (
          item.status == 'publish' && item.type.toLowerCase().includes('cube')
        )
      }).length
    }
    return returned
  },
}
</script>