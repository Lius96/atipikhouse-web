// check grade

export default async function ({ store, redirect }) {

    if (process.client) {
        if (store.state.authUser.grade == 'administrator') {
            await redirect('/admin')
        }
    }
}