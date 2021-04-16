<template>
    <!-- ENCART VISITES-->
    <div id="Visites-liste" class="col-12 bg-white shadow rounded border border-success px-5 pt-4 pb-2">
        <div class="row border-bottom mb-1">
            <div class="col-lg-4"><h5 class="text-success">Visites effectuées</h5></div>
            <div class="col-lg-8 text-right mb-1">
                <i class="fas fa-handshake"></i> Visite
            </div>
        </div>
        <div class="row">
            <div class="col table-responsive col-fixe-1 p-0 mb-3">
                <table class="table table-striped table-hover table-sm">
                    <thead class="thead-light">
                        <tr>
                            <th scope="col">Fiche visite</th>
                            <th scope="col">Technicien</th>
                            <th scope="col">Signé</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="pointer" 
                            v-for="visite in filteredVisites"
                            :key="visite.fermeid" >
                            <td>{{ visite.rapportedite }}</td>
                            <td>{{ visite.nomtechnicien }}</td>
                            <td><i class="fas fa-circle text-danger" v-if="visite.rapportedite!='0000-00-00'"></i></td>
                        </tr>
                    </tbody>
                </table>
                <div class="col text-center my-3" v-if="loading"><i class="fas fa-spinner fa-spin fa-6x"></i></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "VisitesEffectuees",
  props: ["visites", "selectedFermeId"],
  data() {
    return{
      loading: false
    }
  },
  computed: {
    filteredVisites () {
     return this.visites.filter((visite) => {
        return visite.idferme === this.selectedFermeId;
      })
    }
  }
}
</script>