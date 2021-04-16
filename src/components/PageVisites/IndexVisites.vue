<template>
  <div class="contenu">
      <div class="container-fluid">
          <title-header :title="titleHeader" :picto="pictoHeader"/>
          <fermes :fermes="fermes" @select-ferme="setSelectedFerme" :selected-ferme-id="selectedFermeId" />
          <div class="row">
            <div class="col-xl-5 d-flex align-items-stretch mb-3">
              <visites-effectuees :visites="visitesEffectuées" :selectedFermeId="selectedFermeId" />
            </div>
            <div id="Contrats-liste" class="col-xl-7 d-flex align-items-stretch mb-3">
              <!--<contrats :contrats="contrats" /> -->
            </div>
          </div>
          <div class="row align-items-center">
            <div class="col-xl-6">
              <commentaire title="Commentaire siège :" :commentContent="commentaireSiege"/>
            </div> 
            <div class="col-xl-6">
              <commentaire title="Commentaire technicien :" :commentContent="commentaireTechnicien"/>
            </div>
          </div>
      </div>
    </div>     
</template>

<script>
import axios from 'axios'
//import orderBy from 'lodash.orderby'
import TitleHeader from '../Title/TitleHeader'
import Fermes from './Fermes'
import VisitesEffectuees from './VisitesEffectuees'
//import Contrats from './Contrats'
import Commentaire from './Commentaire'

export default {
  components: { TitleHeader, Fermes, VisitesEffectuees, Commentaire },
  name: "visites",
  data() {
      return {
        titleHeader: "Tableau de bord Visites",
        pictoHeader: "TITRE-Visites.png",
        fermes: [],
        visitesEffectuées: [],
        selectedFermeId: "",
        selectedFerme: {},
        contrats: {},
        selectedContratInfos: {tiers:{}},
        procedure: ""
      }
  },
  mounted: function() {
    document.title = 'Visites - Gestel webApp';

    axios.get("https://webapp.gestelsa.com/api/visites/listefermes")
    .then((response) => {
        this.fermes = response.data;
    })

    axios.get("https://webapp.gestelsa.com/api/visites/listevisites")
    .then((response) =>{
      this.visitesEffectuées = response.data;
    })

    axios.get(' https://webapp.gestelsa.com/api/visites/listecontrats')
    .then((response) => {
			this.contrats = response.data;
      this.setSelectedFerme(this.fermes[0])
    })
  },
  methods: {
    setSelectedFerme (ferme){
      this.selectedFermeId = ferme.idferme;
      this.selectedFerme = ferme

			this.procedure = false;
			let contrats = this.contrats.filter(function(contrat) {
        return (this.selectedFerme != "" ? (contrat.idferme === this.selectedFermeId) : false);
      });

			contrats.forEach(function(contrat){
				if (contrat.procedure) {
					this.procedure = true;
				}
				if (contrat.typecontrat=='L') {
					this.selectedContratInfos = contrat;
				}
			});
    }
	},
  computed: {
    commentaireSiege: {
			get: function () {
				return this.selectedContratInfos.tiers.prenomclient;
			},
			set: function (newValue) {
				this.selectedContratInfos.tiers.prenomclient = newValue;
			}
		},
		commentaireTechnicien: {
			get: function () {
				return this.selectedContratInfos.tiers.faxavocat;
			},
			set: function (newValue) {
				this.selectedContratInfos.tiers.faxavocat = newValue;
			}
		},
  }
}
</script>
