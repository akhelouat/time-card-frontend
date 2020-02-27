<template>
  <aside>
    <h1>{{ title }}</h1>
    <!-- Promotions links -->
    <ol id="promotions-container">
      <!-- New User -->
      <li>
        <a href="#" @click="emitNewUserCreator()">New User</a>
      </li>
      <!-- New  Promo -->
      <li>
        <a href="#" @click="emitNewPromoCreator()">New Promo</a>
      </li>
      <!-- Links promos -->
      <li v-for="promotion in promos" :key="promotion.name">
        <a href="#" @click="getSelectedPromo(promotion.name)">{{ promotion.name }}</a>
      </li>
    </ol>
    <!-- Users promotions links -->
    <ol id="users-container">
      <li v-for="user in users" :key="user.firstName">
        <a v-if="user.namePromo === selectedPromo" @click="getSelectedUser(user), emitSelectedUser()" href="#">{{ user.firstName + ' ' + user.lastName }}</a>
      </li>
    </ol>
  </aside>
</template>

<script>

  export default {
    props: ["promos", "users"],
    data() {
      return {
        title: "Manager",
        selectedPromo: "",
        selectedUser: "",
        booleans: [
        {
          newUser: false
        },
        {
          newPromo: false
        }
        ]
      };
    },
    methods: {
      // Get selected promo name and add to the selectedPromo data string
      getSelectedPromo(promotionName) {
        this.selectedPromo = promotionName;
      },
      // Get selected user object and add to the selectedUser data object
      getSelectedUser(userObject) {
        this.selectedUser = userObject;
      },
      // Emit selected user object to the userSelector method in Manager
      emitSelectedUser() {
        if (typeof this.selectedUser === 'string')
          this.$emit("userSelector", this.selectedUser = "");
        else
          this.$emit("userSelector", this.selectedUser); this.selectedUser = "";
      },
      emitNewUserCreator() {
        if (this.booleans[0].newUser)
          this.$emit("newUserCreator", (this.booleans[0].newUser = false));
        else
          this.$emit("newUserCreator", (this.booleans[0].newUser = true));
      },
      emitNewPromoCreator() {
        if (this.booleans[1].newPromo)
          this.$emit("newPromoCreator", (this.booleans[1].newPromo = false));
        else
          this.$emit("newPromoCreator", (this.booleans[1].newPromo = true));
      }
    }
  };
</script>

<style scoped>
  aside {
    background-color: #121212;
    width: 15%;
    position: fixed;
    top: 60px;
    left: 0;
    bottom: 0;
  }
  h1 {
    color: #fafafa;
    background-color: red;
    margin: 0;
  }
  ol {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  li {
    width: 100%;
    list-style: none;
  }
  li:hover {
    background: gray;
  }
  a {
    color: #fafafa;
    text-decoration: none;
  }
</style>