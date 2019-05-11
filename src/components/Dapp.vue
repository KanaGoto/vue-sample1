<template>
 <div class=”dapp”>
   <form name='mainForm'>
     <span>どこから</span>
     <input name='form1' id='1' type='text' placeholder="address"/><br>
     <span>何を</span>
     <input name='form2' id='2' type='text' placeholder="(例)みかん"/><br>
     <span>どれくらい</span>
     <input name='form3' id='3' type='text' placeholder="(例) 1"/><br>
     <br>
     <button v-on:click="register">登録する</button>
  </form>
  <br ><br>
  <form name="sub1">
      <span>transaction ID</span>
    <input name="form1" type="text"><br>
    <br>
    <button v-on:click="showTran">履歴を見る</button><br><br>
  </form>
  <img v-if="pending" id=”loader” src='https://loading.io/spinners/double-ring/lg.double-ring-spinner.gif'>
  <div v-if="showTranInfo">
    trace ID: {{ traceInfo[0].traceId }}<br>

    <div v-for="(item, index) in traceInfo" v-bind:key="index">
          どこから:{{ item.details.from }}<br>
          どこへ:{{ item.details.to }}<br>
          何を:{{ item.details.item }}<br>
          どれくらい:{{ item.details.amount }}<br>
          いつ:{{ item.details.timestamp }}
    </div>
  </div>
  <br><br>
  <hello-metamask/>
 </div>
</template>


<script>
import HelloMetamask from '@/components/metamask'
export default {
 name: 'dapp',
 data () {
   return {
      pending: false,
      showTranInfo: false,
      traceId: null,
      traceInfo: null
    }
 },
 methods: {
    register (event) {
      var form = document.forms.mainForm
      this.pending = true
      var amount = parseInt(form.form3.value, 10);
      this.$store.state.contractInstance().methods.createTraceInfo(form.form1.value, form.form2.value, amount).send({
        from: this.$store.state.web3.coinbase
      }, (err, result) => {
        if (err) {
          console.log(err)
        } else {
          console.log('書き込み結果'+result)
        }
        this.pending = false
      })
    },
    showTran (event){
      let self = this
      var form = document.forms.sub1
      var tranId = parseInt(form.form1.value, 10)
      console.log(tranId)
      this.winEvent = null
      this.pending = true
      this.$store.state.contractInstance().methods.viewTraceInfo(tranId).call({
        from: this.$store.state.web3.coinbase
      }, (err, result) => {
        if (err) {
          console.log(err)
        } else {
          console.log('TranId結果'+result)
          // ハマった
          self.traceInfo = result
          self.pending = false
          self.showTranInfo = true
        }
      })
      
    } 
  },
 beforeCreate () {
    console.log('registerWeb3 Action dispatched from casino-dapp.vue')
    this.$store.dispatch('registerWeb3')
  },
 mounted () {
 console.log('dispatching getContractInstance')
 this.$store.dispatch('getContractInstance')
 },
 components: {
 'hello-metamask': HelloMetamask
 }
}
</script>
<style scoped>
span{
  display: inline-block;
  width: 7em;
}
.casino {
 margin-top: 50px;
 text-align:center;
}
#loader {
 width:150px;
}
ul {
 margin: 25px;
 list-style-type: none;
 display: grid;
 grid-template-columns: repeat(5, 1fr);
 grid-column-gap:25px;
 grid-row-gap:25px;
}
li{
 padding: 20px;
 margin-right: 5px;
 border-radius: 50%;
 cursor: pointer;
 background-color:#fff;
 border: -2px solid #bf0d9b;
 color: #bf0d9b;
 box-shadow:3px 5px #bf0d9b;
}
li:hover{
 background-color:#bf0d9b;
 color:white;
 box-shadow:0px 0px #bf0d9b;
}
li:active{
 opacity: 0.7;
}
*{
 color: #444444;
}
</style>
