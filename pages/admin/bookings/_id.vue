<template>
  <div>
    <div class="container-fluid">
      <div class="row">
        <Sidebar />
        <main role="main" class="col-md-12 ml-sm-auto col-lg-10 px-4">
          <div
            class="
              d-md-flex d-lg-flex
              justify-content-between
              flex-wrap flex-md-nowrap
              align-items-center
              pt-3
              pb-2
              mb-3
              border-bottom
            "
          >
            <h1 class="h2">Tableau de bord</h1>
            <div class="btn-toolbar">
              <div class="btn-group mr-2">
                <!-- <button
                  v-b-tooltip.hover
                  title="Coming Soon"
                  type="button"
                  class="btn btn-sm btn-outline-secondary ml-2"
                >
                  Export
                </button> -->
              </div>
            </div>
          </div>
          <BookingDetails :provData="booking" :owner="false" />
          <div class="container p-5"></div>
        </main>
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from '../../../components/admin/Sidebar'
import auth from '../../../middleware/auth'
import checkAdminGrade from '../../../middleware/ckeckAdminGrade'
import BookingDetails from '../../../components/utils/bookingDetails'
export default {
  validate({ params }) {
    return !isNaN(+params.id)
  },
  layout: 'admin',
  components: {
    Sidebar,
    BookingDetails,
  },
  middleware: [auth, checkAdminGrade],
  async asyncData({ params, error, $axios, store }) {
    const getTokken = store.state.authUser.login_session_token
    const data = await $axios.$get(
      `${store.state.apiBaseUrl}/api/v1/booking/${params.id}`,
      {
        withCredentials: false,
        headers: {
          'Access-Control-Allow-Origin': '*',
          authorization: getTokken,
        },
      }
    )
    if (data.success) {
      return {
        booking: data.data[0],
        booking_id: params.id,
      }
    } else {
      error({ statusCode: 404, message: 'Réservation non trouvé' })
    }
  },
}
</script>

<style lang="scss">
.preloader-loading {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.66);
  z-index: 999;

  .loader {
    position: absolute;
    top: 50%;
    transform: translateX(-50%) translateY(-50%);
    left: 50%;
    color: #fff;
  }
}
.recent-orders-box {
  margin-top: 30px;

  .title {
    position: relative;

    h3 {
      margin-bottom: 15px;
      font: {
        size: 20px;
        weight: 600;
      }
    }
    ul {
      padding-left: 0;
      margin-bottom: 0;
      list-style-type: none;
      position: absolute;
      right: 0;
      top: -10px;

      li {
        display: inline-block;
        margin-left: 5px;

        a,
        button {
          display: block;
          background-color: #f2f2f2;
          color: #000000;
          padding: 5px 15px;
          border: none;
          transition: 0.5s;

          &:hover {
            background-color: #000000;
            color: #fff;
          }
        }
        &:nth-child(2) {
          a,
          button {
            &:hover {
              background-color: red;
              color: #fff;
            }
          }
        }
        &:nth-child(3) {
          a,
          button {
            &:hover {
              background-color: green;
              color: #fff;
            }
          }
        }
      }
    }
  }
  table {
    margin-bottom: 0;

    thead {
      th {
        text-align: left;
        white-space: nowrap;
        padding: 15px 15px 15px 0;
        border-bottom: 1px solid #f6f6f7;
        border-color: #f6f6f7;
        font-size: 15px;
      }
    }
    tbody {
      tr {
        td {
          padding: 15px;
          vertical-align: middle;
          white-space: nowrap;
          border-bottom: 1px solid #f6f6f7;
          border-top: none;
          font-size: 14.4px;

          &:first-child {
            padding-left: 0;
          }
          &.name {
            font-weight: 700;
          }
          img {
            width: 50px;
            margin-right: 5px;
          }
        }
      }
    }
  }
}
.sidebar {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 100; /* Behind the navbar */
  padding: 48px 0 0; /* Height of navbar */
  box-shadow: inset -1px 0 0 rgba(0, 0, 0, 0.1);
}

.sidebar-sticky {
  position: relative;
  top: 0;
  height: calc(100vh - 48px);
  padding-top: 0.5rem;
  overflow-x: hidden;
  overflow-y: auto; /* Scrollable contents if viewport is shorter than content. */
}

@supports ((position: -webkit-sticky) or (position: sticky)) {
  .sidebar-sticky {
    position: -webkit-sticky;
    position: sticky;
  }
}

.sidebar .nav-link {
  font-weight: 500;
  color: #333;
}

.sidebar .nav-link .feather {
  margin-right: 4px;
  color: #999;
}

.sidebar .nav-link.active {
  color: #007bff;
}

.sidebar .nav-link:hover .feather,
.sidebar .nav-link.active .feather {
  color: inherit;
}

.sidebar-heading {
  font-size: 0.75rem;
  text-transform: uppercase;
}

/*
 * Content
 */

[role='main'] {
  padding-top: 133px; /* Space for fixed navbar */
}

@media (min-width: 768px) {
  [role='main'] {
    padding-top: 48px; /* Space for fixed navbar */
  }
}
@media only screen and (max-width: 600px){
    .sidebar{
      position: relative !important;
    }
    .sidebar-sticky{
      height: auto !important;
    }
  }
</style>