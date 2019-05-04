export default async function({store, redirect, route}){
    let auth = sessionStorage.getItem('auth');
    auth = JSON.parse(auth);
    if(auth === null && route.path !== '/'){
        //ログインしていない場合はホームページへ
        return redirect('/');
    }else if(auth !== null){
        //
        store.dispatch('setAuth',auth);
    }
}