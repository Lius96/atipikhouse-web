<template>
  <div>
    <TopHeader />
    <Menubar />
    <div class="page-title-area">
      <div class="container">
        <ul>
          <li><nuxt-link to="/">Accueil</nuxt-link></li>
          <li>Contactez-nous</li>
        </ul>
      </div>
    </div>

    <div class="contact-area ptb-60">
      <div class="container">
        <div class="section-title">
          <h2><span class="dot"></span> Contactez-nous</h2>
        </div>

        <div class="row">
          <div class="col-lg-5 col-md-12">
            <div class="contact-info">
              <h3>Besoin d'aide?</h3>
              <p>
                Vous avez une question ? Vous pouvez également nous contacter.
              </p>

              <ul class="contact-list">
                <li>
                  <i class="fas fa-map-marker-alt"></i> Adresse: Rue Napoléon,
                  60350 Pierrefonds
                </li>
                <li>
                  <i class="fas fa-phone"></i> Téléphone:
                  <a href="tel:+33 659503087">+33 659503087</a>
                </li>
                <li>
                  <i class="far fa-envelope"></i> Email:
                  <a href="mailto:juliusdjossou@gmail.com"
                    >juliusdjossou@gmail.com</a
                  >
                </li>
              </ul>

              <h3>Suivez-nous:</h3>
              <ul class="social">
                <li>
                  <a href="https://www.facebook.com/atypikhouse.2i"
                    ><i class="fab fa-facebook-f"></i
                  ></a>
                </li>
                <li>
                  <a href="https://twitter.com/AtypikHouse2"
                    ><svg xmlns="http://www.w3.org/2000/svg" height="14" width="14" viewBox="0 0 512 512"><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path fill="#000000" d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"/></svg></a>
                </li>
                <li>
                  <a href="https://www.instagram.com/atypikhouse.2i/"
                    ><i class="fab fa-instagram"></i
                  ></a>
                </li>
              </ul>
            </div>
          </div>

          <div class="col-lg-7 col-md-12">
            <div class="contact-form">
              <h3>Envoyez-nous un message</h3>
              <p>
                Nous serons heureux de répondre à vos questions et de vous
                fournir un devis. un devis. Il suffit de nous envoyer un message
                dans le formulaire ci-dessous avec les questions que vous
                pourriez avoir.
              </p>

              <form id="contactForm" @submit.prevent="contact">
                <p v-if="formError" class="error">
                  {{ formError }}
                </p>
                <div class="row">
                  <div class="col-lg-12 col-md-12">
                    <div class="form-group">
                      <label>Noms <span>(Requis)*</span></label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        class="form-control"
                        placeholder="Entrer votre noms"
                        v-model="mailData.name"
                      />
                    </div>
                  </div>

                  <div class="col-lg-12 col-md-12">
                    <div class="form-group">
                      <label>Email <span>(Requis)*</span></label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        class="form-control"
                        placeholder="Entrer votre email"
                        v-model="mailData.email"
                      />
                    </div>
                  </div>

                  <div class="col-lg-12 col-md-12">
                    <div class="form-group">
                      <label>Téléphone <span>(Requis)*</span></label>
                      <input
                        type="text"
                        name="phone_number"
                        id="phone_number"
                        class="form-control"
                        placeholder="Entrer votre téléphone"
                        v-model="mailData.phone"
                      />
                    </div>
                  </div>

                  <div class="col-lg-12 col-md-12">
                    <div class="form-group">
                      <label>Message <span>(Requis)*</span></label>
                      <textarea
                        name="message"
                        id="message"
                        cols="30"
                        rows="8"
                        class="form-control"
                        placeholder="Entrer votre message"
                        v-model="mailData.message"
                      ></textarea>
                    </div>
                  </div>
                  <div class="col-md-12">
                    <div class="form-group">
                      <recaptcha />
                    </div>
                  </div>
                  <div class="col-lg-12 col-md-12">
                    <button type="submit" class="btn btn-primary">
                      <span v-if="!btnLoader">Envoyer</span
                      ><BLoader v-else loaderColor="#fff" />
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TopHeader from '../layouts/TopHeader'
import Menubar from '../layouts/Menubar'
import formUtils from '../mixins/form-utils'
import users from '../mixins/users'
import BLoader from '../components/common/btnLoader.vue'
import cacheControl from '../middleware/cacheControl'

export default {
  head() {
    return {
      title: 'Découvrez l\'Originalité d\'Atypikhouse - - Contactez-nous',
      meta: [
        {
          hid: 'title',
          name: 'title',
          content: 'Atypikhouse - Contactez-nous',
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content:
            'Atypikhouse, Contact, informations sur Atypikhouse, Nous contacté, Nos contact',
        },
        {
          hid: 'description',
          name: 'description',
          content: 'Pour tout informations contactez-nous via le formulaire',
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: 'Atypikhouse - Contactez-nous',
        },
        { hid: 'og:type', property: 'og:type', content: 'website' },
        {
          hid: 'og:description',
          property: 'og:description',
          content: 'Pour tout informations contactez-nous via le formulaire',
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
          content: 'Atypikhouse - Contactez-nous',
        },
        {
          hid: 'twitter:description',
          property: 'twitter:description',
          content: 'Pour tout informations contactez-nous via le formulaire',
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
    BLoader,
  },
  middleware: cacheControl({
    'max-age': 60,
    'stale-when-revalidate': 5
  }),
  mixins: [formUtils, users],
  data() {
    return {
      mailData: {
        name: '',
        phone: '',
        email: '',
        message: '',
      },
      btnLoader: false,
      formError: null,
    }
  },
  methods: {
    async contact() {
      this.formError = null
      if (
        !this.validateRequiredField(this.mailData.name) ||
        !this.validateRequiredField(this.mailData.message)
      ) {
        this.formError = 'Veuillez renseigner tout les champs requis'
        this.scrollToTop()
        return
      }

      if (!this.validateEmail(this.mailData.email)) {
        this.formError = 'Veuillez entrer une adresse email valide!'
        this.scrollToTop()
        return
      }

      if (!this.validatePhone(this.mailData.phone)) {
        this.formError = 'Veuillez entrer un numero de téléphone valide'
        this.scrollToTop()
        return
      }
      let validcp = await this.validateCaptcha()
      if (validcp == false){
        this.formError = 'Captcha invalide'
        this.scrollToTop()
        return
      }

      this.btnLoader = true
      const { success } = await this.sendmail(
        process.env.ADMINEMAIL,
        `Message de ${this.mailData.name}`,
        ` Message envoyez depuis le formulaire de contact \n
        Noms: ${this.mailData.name}\n
        email: ${this.mailData.email}\n
        Téléphone: ${this.mailData.phone}\n
        Message:\n
        ${this.mailData.message}
        `,
        'no-reply'
      )

      if (success) {
        this.resetForm()
        this.btnLoader = false
        this.$toast.success('Message envoyé avec succès')
      } else {
        this.btnLoader = false
        this.$toast.error(
          "Une erreur s'est produite lors de l'envoie veuillez réessayer ultérieurement"
        )
      }
    },
    resetForm() {
      this.mailData = {
        name: '',
        phone: '',
        email: '',
        message: '',
      }
    },
  },
}
</script>
<style scope>
  .pl-4p { 
    padding-left: 20%; 
  }

  .pr-4p {
    padding-right: 20%;
  }

</style>