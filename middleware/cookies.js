// cookies
import Cookies from 'js-cookie'
const defaultCookieName = 'atipikhouse'

export default function ({ store }) {
    if (Cookies.get(defaultCookieName)) {
        store.commit('SET_USER', JSON.parse(Cookies.get(defaultCookieName)))
    }
}