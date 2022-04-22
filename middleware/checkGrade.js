// check grade

export default function ({ store, redirect }) {
    if (store.state.authUser.grade == 'administrator') {
        redirect('/')
    }
}