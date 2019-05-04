<template>
   <div class="app">
      <h1 class="label">ログイン</h1>
      <p>下ログインページを押してください</p>
      <v-btn color="login" @click="pushBotton">ログイン</v-btn>
   </div>
</template>
<script>
import firebase from '~/utils/firebase';
export default {
   components: {

   },
   props: {
      hoge: {
         type: Array,
         default: () => []
      }
   },
   data() {
      return {
         
      };
   },
   computed: {
      
   },
   methods: {
      pushBotton(){
         const provider = new firebase.auth.GoogleAuthProvider();
         firebase.auth().signInWithPopup(provider).then((result)=> {
            this.$store.dispatch('setAuth', { uid: result.user.uid, userName: result.user.displayName })
            sessionStorage.auth = JSON.stringify({ uid: result.user.uid, userName: result.user.displayName });
            this.$router.push('/mypage')
            this.$toasted.success('🎉🎉ログインしました！！🎉🎉');
         });
      }
   }
}
</script>

<style scoped>
.app {
   display: flex;
   flex-direction: column;
   align-items: center;
}
.label {
   margin-bottom: 50px;

}
</style>