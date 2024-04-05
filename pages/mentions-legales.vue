<template>
  <div class="legal-notice">
    <Menubar />
    <div class="page-title-area">
      <div class="container">
        <ul>
          <li><nuxt-link to="/">Accueil</nuxt-link></li>
          <li>Mentions légales</li>
        </ul>
      </div>
    </div>

    <div class="ptb-60">
      <div class="container">
        <div class="section-title">
          <h2><span class="dot"></span> Mentions légales</h2>
        </div>

        <div class="row">
          <div class="col-12">
            <h3 class="sub-title">Mention légale</h3>
            <p>
              <strong>Nom :</strong> Atypikhouse<br>
              <strong>Adresse :</strong> Rue Napoléon, 60350 Pierrefonds<br>
              <strong>Capital social :</strong> 10 000 EUR<br>
              <strong>Numéro RCS :</strong> Compiègne A 359 733 770<br>
              <strong>Statut :</strong> SARL<br>
              <strong>Code NAF :</strong> 5520Z<br>
              <strong>Date de création :</strong> 03 Septembre 2021
            </p>

            <h3 class="sub-title">Domaine d’expertise</h3>
            <p>
              Hébergement touristique et autre hébergement de courte durée de type insolite
            </p>

            <h3 class="sub-title">Hébergement du site</h3>
            <p>
              Ce site web est hébergé par OVH.<br>
              Siège social : OVH, 2 rue Kellermann - 59100 Roubaix - France.
            </p>

            <h3 class="sub-title">Responsabilité</h3>
            <p>
              Atypikhouse met tout en œuvre pour fournir des informations précises et à jour sur ce site, mais ne peut
              garantir l'exactitude ou l'exhaustivité des informations fournies. Les utilisateurs de ce site sont
              responsables de l'utilisation des informations fournies.
            </p>

            <h3 class="sub-title">Droits d'auteur</h3>
            <p>
              Tous les contenus de ce site web, y compris mais sans s'y limiter, les textes, les images, les graphiques
              et les logos, sont la propriété exclusive d'Atypikhouse, sauf indication contraire. Toute reproduction,
              distribution, modification ou utilisation de ces contenus sans autorisation préalable écrite est
              strictement interdite.
            </p>

            <h3 class="sub-title">Protection des données personnelles</h3>
            <p>
              Atypikhouse s'engage à protéger la vie privée de ses utilisateurs. Les données personnelles collectées sur
              ce site sont traitées conformément à notre politique de confidentialité. En utilisant ce site, vous
              consentez à la collecte et à l'utilisation de vos données personnelles conformément à cette politique.
            </p>

            <h3 class="sub-title">Cookies</h3>
            <p>
              Ce site web utilise des cookies pour améliorer l'expérience de l'utilisateur. En utilisant ce site, vous
              consentez à l'utilisation de cookies conformément à notre politique en matière de cookies.
            </p>

            <h3 class="sub-title">Contact</h3>
            <p>
              Pour toute question ou préoccupation concernant cette mention légale, veuillez nous contacter à l'adresse
              suivante :<br>
              Adresse e-mail : juliusdjossou@gmail.com
            </p>

            <h3 class="sub-title">Mises à jour</h3>
            <p class="update">
              Nous nous réservons le droit de modifier cette mention légale à tout moment. Veuillez consulter régulièrement cette page pour vous tenir informé des mises à jour.
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
import cacheControl from '../middleware/cacheControl'


export default {
  head() {
    return {
      title: 'Atypikhouse - Mentions légales',
      meta: [
        {
          hid: 'title',
          name: 'title',
          content: 'Atypikhouse - Mentions légales',
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: 'Atypikhouse, Mentions Légales, Légales, Sécurité',
        },
        {
          hid: 'description',
          name: 'description',
          content: 'Toute les informations sur nos mentions légales',
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: 'Atypikhouse - Mentions légales',
        },
        { hid: 'og:type', property: 'og:type', content: 'website' },
        {
          hid: 'og:description',
          property: 'og:description',
          content: 'Toute les informations sur nos mentions légales',
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
          content: 'Atypikhouse - Mentions légales',
        },
        {
          hid: 'twitter:description',
          property: 'twitter:description',
          content: 'Toute les informations sur nos mentions légales',
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
  middleware: cacheControl({
    'max-age': 60,
    'stale-when-revalidate': 5
  }),
}
</script>


<style scoped>
/* Style pour la mention légale */
.legal-notice {
  font-size: 16px;
  line-height: 1.6;
  margin-bottom: 30px;
}

/* Style pour les sections principales */
.section-title {
  font-size: 24px;
  font-weight: bold;
  text-decoration: underline;
  margin-bottom: 20px;
}

/* Style pour les sous-titres */
.sub-title {
  color:#8bc34a; /* Couleur des sous-titres */
}

/* Style pour les éléments clés */
.legal-notice strong {
  font-weight: bold;
}

/* Style pour les informations spécifiques */
.legal-notice em {
  font-style: italic;
}

/* Style pour les liens */
.legal-notice a {
  color: #007BFF; /* Couleur des liens (personnalisez selon votre choix) */
  text-decoration: underline;
}

/* Style pour les mises à jour */
.legal-notice .update {
  font-size: 14px;
  font-style: italic;
  margin-top: 20px;
}
</style>