<style scoped>
th, td {
  min-width: 120px;
  padding: 10px 20px;
}

th.active {
  color: #fff;
}

th.active .arrow {
  opacity: 1;
}

.arrow {
  display: inline-block;
  vertical-align: middle;
  width: 0;
  height: 0;
  margin-left: 5px;
  opacity: 0.66;
}

.arrow.asc {
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-bottom: 4px solid #fff;
}

.arrow.dsc {
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-top: 4px solid #fff;
}

#search {
  margin-bottom: 10px;
}

.body {
  font-size: 90%;
}

.table {
  overflow: scroll;
}

.hidden {
  background: #f0f;
  display: none;
}
</style>

<template>
  <table class="table table-sm table-hover">
    <thead class="thead-inverse">
      <tr>
        <th v-for="(key, field) in fields"
          @click="sortBy(key)"
          :class="{active: sortKey === key, hidden: field[0] === '_'}">
          {{field}}
          <span class="arrow"
            :class="sortOrders[key] > 0 ? 'asc' : 'dsc'">
          </span>
        </th>
      </tr>
    </thead>
    <tbody class="body">
      <tr v-for="(keyEntry, entry) in data
        | filterBy filterKey
        | orderBy sortKey sortOrders[sortKey]">
        <th v-for="(keyField, field) in fields"
          @click="onClicked(keyEntry, entry)" :class="{hidden: field[0] === '_'}">{{entry[keyField]}}</th>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  props: {
    fields: {
      type: Object,
      required: true
    },
    data: {
      type: Array
    },
    onClicked: {
      type: Function,
      default: function() { }
    }
  },

  data: function() {
    let sortOrders = {}
    for (let key in this.fields) {
      sortOrders[key] = 1
    }
    return {
      sortKey: '',
      sortOrders: sortOrders
    }
  },

  methods: {
    onClick: function() {
      console.log('click')
      this.sel()
      // this.response = this.sendMessage('Yeah!')
    },
    // select: function () {
      // console.log('qwe')

      // this.sel()
    // },
    sortBy: function(key) {
      this.sortKey = key
      this.sortOrders[key] *= -1
    }
  }
}
</script>
