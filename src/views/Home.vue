<template>
  <div class="home container">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <button type="button" class="close" aria-label="Close" @click="showToast">
      <span aria-hidden="true">&times;</span>
    </button> -->
    <button
      type="button"
      class="btn btn-primary"
      id="liveToastBtn"
      @click="showToast"
    >
      Show Iron Man toast
    </button>
    <!-- <HelloWorld v-if="loaded" msg="Welcome to Your Vue.js + TypeScript App" /> -->
    <div
      id="myToast"
      class="toast"
      role="alert"
      aria-live="assertive"
      aria-atomic="true"
    >
      <div class="toast-header">
        <img
          src="../assets/ironman.png"
          width="25"
          height="25"
          class="rounded mr-2"
          alt="..."
        />
        <strong class="mr-auto">Bootstrap</strong>
        <small>11 mins ago</small>
        <button
          type="button"
          class="ml-2 mb-1 close"
          data-dismiss="toast"
          aria-label="Close"
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="toast-body">I am Iron Man!</div>
    </div>
    <div v-if="!loaded">
      <div class="spinner-border" role="status">
        <span class="sr-only">Loading...</span>
      </div>
      <div>Loading...</div>
    </div>
    <!-- <button class="btn btn-primary">Click</button> -->
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import HelloWorld from '@/components/HelloWorld.vue' // @ is an alias to /src

@Component({
  components: {
    HelloWorld
  }
})
export default class Home extends Vue {
  loaded = true;

  mounted () {
    ($('.toast') as any).toast({ delay: 3000 })
    //   $('#myToast').on('show.bs.toast', function () {
    //     console.log("VISIBLE")
    // // do something...
    //   })

    // setTimeout(() => {
    //   this.loaded = true;
    //   ($('#myToast') as any).toast('show')
    // }, 3000)
  }

  showToast () {
    ($('#myToast') as any).toast('show')
  }
}
</script>
