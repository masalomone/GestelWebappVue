<template>
	<!-- ENCART CONTRAT-->
	<div class="col-12 bg-white shadow rounded border border-warning px-5 pt-4 pb-2">
		<div class="row border-bottom mb-1">
			<div class="col-lg-3"><h5 class="text-warning">Contrats</h5></div>
			<div class="col-lg-9 text-right">
				<span class="badge badge-warning" v-if="procedure"><i class="fas fa-exclamation-triangle"></i> PROCEDURE / PLAN</span>
			</div>
		</div>
		<div class="row">
			<div class="col table-responsive col-fixe-1 p-0 mb-3">
				<table class="table table-striped table-hover table-sm">
					<thead class="thead-light">
						<tr>
							<th scope="col"></th>
							<th scope="col">S</th>
							<th scope="col">Contrat</th>
							<th scope="col">Date de début</th>
							<th scope="col">N.UC</th>
							<th scope="col"></th>
							<th scope="col"></th>
						</tr>
					</thead>
					<tbody>
						<tr class="pointer" 
								:class="{'bg-dark':contrat == selectedContratInfos}" 
								v-for="contrat in contrats"
								:key="contrat.id" 
								@click="selectedContratInfos = contrat" 
								@dblclick="window.open('/contrat/ZoomContrat/'+contrat.nocontrat)">
							<td class="align-middle">{{ contrat.typecontrat }}</td>
							<td class="align-middle">{{ contrat.societe }}</td>
							<td class="align-middle">{{ contrat.nocontrat }}</td>
							<td class="align-middle">{{ contrat.datedebut | dateFR }}</td>
							<td class="align-middle">
								<span v-if="contrat.datefin == '0000-00-00' && (contrat.transfert == 0 || !contrat.transfert)">{{ contrat.nbuc }}</span>
								<span v-if="contrat.datefin == '0000-00-00' && contrat.transfert == 1">TRANSFERT</span>
								<span class="badge badge-danger" v-if="contrat.datefin != '0000-00-00'">Résilié {{ contrat.datefin | dateFR }}</span>
							</td>
							<td class="align-middle" v-b-tooltip.hover :title="contrat.commentmemo | tooltipTruncate(20)">{{ contrat.commentmemo | truncate(20) }}</td>
							<td class="align-middle"><a :href="'/contrat/ZoomContrat/'+contrat.nocontrat" target="_blank" role="button" class="btn btn-sm btn-outline-warning"><i class="fas fa-eye"></i> Voir</a></td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	</div>

</template>

<script>
export default {
	name: "VisiteContrats",
	props: ["contrats"]
	
}
</script>