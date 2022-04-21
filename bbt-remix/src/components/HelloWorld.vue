<template>
  <div>
    <div>
      <img class="shop-logo" alt="Comebuy Logo" src="../assets/comebuy.jpg" />
    </div>
    <div class="spacer">
      <p>{{ greeting }}, ich hätte gerne ein(en)</p>
      <span class="selection">{{ bbt.milkTea.name }}</span>
      <p>mit</p>
      <span class="selection">{{ bbt.toppings.name }}</span
      >.
      <p>Und bitte</p>
      <span class="selection">{{ bbt.sugarLevel.name }}</span>
      <p>und</p>
      <span class="selection">{{ bbt.temperature.name }}</span
      >.
    </div>
    <div class="spacer">
      <button class="button is-primary" @click="somethingDifferent">
        Ähhmm, ich hätte gerne etwas anderes!
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { giveMeMyBbt } from "../comebuy-menu";
import { getRandomEntry } from "../utils";

export default defineComponent({
  name: "HelloWorld",
  data() {
    return {
      bbt: giveMeMyBbt(),
      greeting: this.getGreeting(),
    };
  },
  methods: {
    getGreeting() {
      const greetings = ["Hallo", "Naaaa", "Hello", "Guten Tag", "Moin moin"];
      return getRandomEntry(greetings);
    },
    somethingDifferent() {
      this.bbt = giveMeMyBbt();
      this.greeting = this.getGreeting();
    },
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

span.hint {
  font-size: 12px;
}

span.selection {
  font-size: 30px;
  font-weight: bold;
  text-decoration: underline;
}

.spacer {
  margin-top: 30px;
}

.shop-logo {
  height: 100px;
}
</style>
