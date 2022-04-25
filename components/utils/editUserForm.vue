<template>
  <div class="container">
    <div class="">
      <div v-if="!admin" class="section-title">
        <h2><span class="dot"></span>Modifier le profile</h2>
      </div>

      <form class="signup-form" @submit.prevent="edit">
        <p v-if="formError" class="error">
          {{ formError }}
        </p>
        <div class="row">
          <div class="col-lg-6 col-md-12">
            <div class="form-group">
              <label>Nom *</label>
              <input
                type="text"
                class="form-control"
                placeholder="Entrer votre nom"
                id="lastname"
                name="lastname"
                v-model="user.lastname"
              />
            </div>
          </div>
          <div class="col-lg-6 col-md-12">
            <div class="form-group">
              <label>Prénom *</label>
              <input
                type="text"
                class="form-control"
                placeholder="Entrer votre prenom"
                id="firstname"
                name="firstname"
                v-model="user.firstname"
              />
            </div>
          </div>
          <div class="col-lg-6 col-md-12">
            <div class="form-group">
              <label>Téléphone</label>
              <input
                type="text"
                class="form-control"
                placeholder="Entrer votre Téléphone"
                id="phone"
                name="phone"
                v-model="user.phone"
              />
            </div>
          </div>
          <div class="col-lg-6 col-md-12">
            <div class="form-group">
              <label>votre adresse *</label>
              <input
                type="text"
                class="form-control"
                placeholder="Entrer votre adresse"
                id="address"
                name="address"
                v-model="user.address"
              />
            </div>
          </div>
          <div class="col-lg-6 col-md-12">
            <div class="form-group">
              <label>Profile facebook</label>
              <input
                type="text"
                class="form-control"
                placeholder="Entrer votre profile"
                id="fblink"
                name="fblink"
                v-model="user.social_link[0]"
              />
            </div>
          </div>
          <div class="col-lg-6 col-md-12">
            <div class="form-group">
              <label>Profile intagram</label>
              <input
                type="text"
                class="form-control"
                placeholder="Entrer votre profile"
                id="instalink"
                name="instalink"
                v-model="user.social_link[1]"
              />
            </div>
          </div>
          <div class="col-lg-6 col-md-12">
            <div class="form-group">
              <label>Profile linkedin</label>
              <input
                type="text"
                class="form-control"
                placeholder="Entrer votre profile"
                id="inlink"
                name="onlink"
                v-model="user.social_link[2]"
              />
            </div>
          </div>
          <div class="col-lg-6 col-md-12">
            <div class="form-group">
              <label>Profile twitter *</label>
              <input
                type="text"
                class="form-control"
                placeholder="Entrer votre profile"
                id="twlink"
                name="twlink"
                v-model="user.social_link[3]"
              />
            </div>
          </div>

          <div
            v-if="$store.state.authUser.grade == 'administrator'"
            class="col-md-12"
          >
            <div class="form-group">
              <label>Role *</label>
              <select
                name="grade"
                class="form-control"
                id="grade"
                v-model="user.grade"
              >
                <option value="customer">Client</option>
                <option value="owner">Propriétaire</option>
                <option value="administrator">Administrateur</option>
              </select>
            </div>
          </div>

          <div class="col-md-12 text-center">
            <button
              type="submit"
              class="btn btn-primary"
              style="width: 60%; display: inline-block"
              :disabled="formDisabled"
            >
              <span v-if="!btnLoader">Modifier</span>
              <BLoader v-else loaderColor="#fff" />
            </button>
          </div>
        </div>
      </form>
    </div>
    <div class="row mt-2">
      <div class="col-md-12">
        <b-button
          v-if="$store.state.authUser.grade == 'administrator'"
          v-b-tooltip.hover
          title="Appuyez pour supprimer définitivement cet utilisateur"
          class="float-left"
          variant="danger"
          @click="showConfirmation()"
          >Supprimer</b-button
        >
      </div>
    </div>
    <Confirmation v-if="$store.state.authUser.grade == 'administrator'" @confirmation="delHouse" />
  </div>
</template>
<script>
import BLoader from '../../components/common/btnLoader.vue'
import Confirmation from '../../components/modals/Confirmation'
import formUtils from '../../mixins/form-utils'
import users from '../../mixins/users'

export default {
  props: {
    provData: {
      type: Object,
      default: () => ({}),
    },
    notify: {
      type: Boolean,
      default: false,
    },
    admin: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    BLoader,
    Confirmation,
  },
  mixins: [formUtils, users],
  data() {
    return {
      formError: null,
      user: {
        lastname: this.provData.last_name ? this.provData.last_name : '',
        firstname: this.provData.first_name ? this.provData.first_name : '',
        address: this.provData.address ? this.provData.address : '',
        phone: this.provData.phone ? this.provData.phone : '',
        social_link: {
          0:
            this.provData.social_link && this.provData.social_link[0]
              ? this.provData.social_link[0]
              : '',
          1:
            this.provData.social_link && this.provData.social_link[1]
              ? this.provData.social_link[1]
              : '',
          2:
            this.provData.social_link && this.provData.social_link[2]
              ? this.provData.social_link[2]
              : '',
          3:
            this.provData.social_link && this.provData.social_link[2]
              ? this.provData.social_link[2]
              : '',
        },
        grade: this.provData.grade ? this.provData.grade : '',
      },
      disableForm: false,
      btnLoader: false,
      formDisabled: false,
    }
  },
  methods: {
    async edit() {},
    resetForm() {},
    showConfirmation() {
      this.$bvModal.show('confirmation-modal')
    },
    async delHouse(conirmation) {},
  },
}
</script>