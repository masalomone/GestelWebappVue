<template>
  <div class="row">
    <div class="col-xl-12 mb-3">
      <!-- LISTE FERMES-->
      <div
        id="Fermes-liste"
        class="col-12 bg-white shadow rounded border border-yellow px-5 pt-4 pb-2"
      >
        <div class="row border-bottom mb-1">
          <div class="col-lg">
            <h5>Fermes</h5>
          </div>
        </div>
        <div class="row">
          <div class="col table-responsive col-fixe-1 p-0 mb-3">
            <table class="table table-striped table-hover table-sm">
              <thead class="thead-light">
                <tr>
                  <th scope="col" @click="triTable('codesecteur')">Secteur</th>
                  <th scope="col" @click="triTable('nomferme')">Ferme</th>
                  <th scope="col" @click="triTable('adresse')"></th>
                  <th scope="col" @click="triTable('departferme')">CP</th>
                  <th scope="col" @click="triTable('ville')">Ville</th>
                  <th scope="col" @click="triTable('telephone')">Téléphone</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  class="pointer"
									:class="{'selected':ferme.idferme === selectedFermeId}"
                  v-for="ferme in fermes"
                  :key="ferme.idferme"
                  @click="selectFerme(ferme)"
                >
                  <td>{{ ferme.codesecteur }}</td>
                  <td v-b-tooltip.hover :title="ferme.nomferme">
                    {{ ferme.nomferme }}
                  </td>
                  <td>{{ ferme.adresse }}</td>
                  <td>{{ ferme.departferme }}</td>
                  <td>{{ ferme.ville }}</td>
                  <td>{{ ferme.telephone }}</td>
                </tr>
              </tbody>
            </table>
            <div class="col text-center my-3" v-if="loading">
              <i class="fas fa-spinner fa-spin fa-6x"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "VisitesFermes",
  props: ["fermes", "selectedFermeId"],
  data() {
    return {
      loading: false,
    };
  },
  methods: {
    selectFerme(ferme) {
      this.$emit("select-ferme", ferme);
    }
  }
};
</script>

<style scoped>
.selected {
	color:#FFF !important; 
	background-color:#274786 !important;
}
</style>