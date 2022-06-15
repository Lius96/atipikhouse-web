<template>
  <div>
    <TopHeader />
    <Menubar />
    <div class="page-title-area">
      <div class="container">
        <ul>
          <li><nuxt-link to="/">Accueil</nuxt-link></li>
          <li>CGV</li>
        </ul>
      </div>
    </div>

    <div class="ptb-60">
      <div class="container">
        <div class="section-title">
          <h2><span class="dot"></span> Conditions générales de ventes</h2>
        </div>

        <div class="row">
          <div class="col-12">
            <p>
              Nom: Atypik House <br /><br />

              Adresse: Rue Napoléon, 60350 Pierrefonds <br /><br />

              Capital: 10 000 EUR <br /><br />

              N° RCS: Compiègne A 359 733 770 <br /><br />

              Statut: SARL <br /><br />

              Code NAF: 5520Z <br /><br />

              Date de création: 03 Septembre 2021 <br /><br />

              Domaine d’expertise Hébergement touristique et autre hébergement
              de courte durée
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TopHeader from '../layouts/TopHeader'
import Menubar from '../layouts/Menubar'

export default {
  head() {
    return {
      title: 'Atypikhouse - CGV',
      meta: [
        { hid: 'title', name: 'title', content: 'Atypikhouse - CGV' },
        {
          hid: 'keywords',
          name: 'keywords',
          content:
            'Atypikhouse, Conditions générales de ventes, Conditions de ventes',
        },
        {
          hid: 'description',
          name: 'description',
          content: 'Conditions générales de ventes',
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: 'Atypikhouse - Caisse',
        },
        { hid: 'og:type', property: 'og:type', content: 'website' },
        {
          hid: 'og:description',
          property: 'og:description',
          content: 'Conditions générales de ventes',
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
          content: 'Atypikhouse - CGV',
        },
        {
          hid: 'twitter:description',
          property: 'twitter:description',
          content: 'Conditions générales de ventes',
        },
        {
          hid: 'twitter:image',
          property: 'twitter:image',
          content: '/icon.png',
        },
      ],
    }
  },
  components: {
    TopHeader,
    Menubar,
  },
}
</script>