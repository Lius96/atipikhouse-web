<template>
    <div>
        <TopHeader />
        <Menubar />
        <Banner />
        <div class="row">
            <div class="col-md-7">
                <img src="../assets/img/qui.jpg" alt="">
            </div>
            <div class="col-md-5 p-4 p-xs-0">
              <h3>QUI SOMMES-NOUS ?</h3>

              <p>Basée dans le Sud de la France, Atypikhouse est leader sur le marché de l'insolite et référence des hébergements atypiques partout sur son territoire, et même à l'étranger !</p>
              <h6>NOS VALEURS</h6>
              <p>Chez AbracadaRoom, nous plaçons la relation avec les propriétaires au cœur du partenariat. Notre collaboration avec les hébergeurs est basée sur le respect des intérêts de chacun, tout en laissant la liberté et l'indépendance nécessaires à leur activité. Une équipe de professionnels du tourisme, spécialisés dans le secteur de l'insolite, vous propose un service réactif et efficace qui se veut humain, qualitatif et adapté.</p>
            </div>
        </div>
        <Facility />
        <Testimonials />
    </div>
</template>
<script>
import TopHeader from '../layouts/TopHeader'
import Menubar from '../layouts/Menubar'
import Banner from '../components/diction-two/Banner2'
import Facility from '../components/common/Facility'
import Testimonials from '../components/common/Testimonials'

import cacheControl from '../middleware/cacheControl'

export default {
  head() {
    return {
      title: 'Commercialisez vos hébergements insolites sur AbracadaRoom !',
      meta: [
        {
          hid: 'title',
          name: 'title',
          content:
            'Commercialisez vos hébergements insolites sur Atypikhouse !',
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: 'Atypikhouse, Locations, Habitation, Devenir partenaire',
        },
        {
          hid: 'description',
          name: 'description',
          content:
            'Commercialisez vos hébergements insolites sur Atypikhouse !',
        },
        { hid: 'og:title', property: 'og:title', content: 'Atypikhouse' },
        { hid: 'og:type', property: 'og:type', content: 'website' },
        {
          hid: 'og:description',
          property: 'og:description',
          content: 'Atypikhouse louez vos biens en ligne!',
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
          content: 'Atypikhouse louez vos biens en ligne!',
        },
        {
          hid: 'twitter:image',
          property: 'twitter:image',
          content: '/icon.png',
        },
      ],
    }
  },
  components:{
    TopHeader,
    Menubar,
    Banner,
    Facility,
    Testimonials
  },
  middleware: cacheControl({
    'max-age': 60,
    'stale-when-revalidate': 5
  }),
}
</script>