<template>
  <v-navigation-drawer permanent expand-on-hover dark>
    <v-list>
      <!-- Admin Avatar :) -->
      <v-list-item class="px-2">
        <v-list-item-avatar>
          <v-img src="https://randomuser.me/api/portraits/women/75.jpg"></v-img>
        </v-list-item-avatar>
      </v-list-item>
      <!-- Admin info -->
      <v-list-item link>
        <v-list-item-content>
          <v-list-item-title class="title">Admin</v-list-item-title>
          <v-list-item-subtitle>mdr@lol.com</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-list>

    <!-- New User -->
    <v-divider></v-divider>
    <v-list nav dense>
    <v-list-item-title>Manage</v-list-item-title>
      <v-divider></v-divider>
      <v-list-item link @click="emitNewUserCreator()">
        <v-list-item-icon>
          <v-icon>mdi-plus-thick</v-icon>
        </v-list-item-icon>
        <v-list-item-title>New User</v-list-item-title>
      </v-list-item>

      <!-- New promo -->
      <v-list-item link @click="emitNewPromoCreator()">
        <v-list-item-icon>
          <v-icon>mdi-plus-thick</v-icon>
        </v-list-item-icon>
        <v-list-item-title>New Promo</v-list-item-title>
      </v-list-item>

      <!-- Promos -->
      <v-divider></v-divider>
      <v-list-item-title>Promos</v-list-item-title>
      <v-divider></v-divider>
      <v-list-item link v-for="promotion in promos" :key="promotion.name" @click="getSelectedPromo(promotion.name)">
        <v-list-item-icon>
          <v-icon>mdi-account-group</v-icon>
        </v-list-item-icon>
        <v-list-item-title>{{ promotion.name }}</v-list-item-title>
      </v-list-item>

      <!-- Users -->
      <v-divider></v-divider>
      <div v-if="selectedPromo">{{ selectedPromo }} Students</div>
      <v-divider></v-divider>
      <div v-for="user in users" :key="user.firstName">
        <v-list-item link v-if="user.namePromo === selectedPromo" @click="getSelectedUser(user), emitSelectedUser()">
          <v-list-item-icon>
            <v-icon>mdi-account</v-icon>
          </v-list-item-icon>
          <v-list-item-title>{{ user.firstName + ' ' + user.lastName }}</v-list-item-title>
        </v-list-item>
      </div>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
  export default {
    props: ["promos", "users"],
    data() {
      return {
        title: "Manager",
        selectedPromo: "",
        selectedUser: "",
        booleans: [{
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
          this.$emit("userSelector", this.selectedUser);
        this.selectedUser = "";
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
    position: fixed;
  }
</style>