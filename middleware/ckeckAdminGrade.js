// check grade

export default function ({ store, redirect }) {
    if (!store.state.authUser.grade == 'administrator') {
        return redirect(404, '/el?e=rnf')
    }
}