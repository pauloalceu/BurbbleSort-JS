function burbbleSort(vetorDesordenado, inicio, fim) {
	let trocado;

	do{
		trocado = false;
		for (var i = inicio; i < fim - 1; i++) {
			if(vetorDesordenado[i] > vetorDesordenado[i+1]){
				[vetorDesordenado[i], vetorDesordenado[i+1]] = [vetorDesordenado[i+1], vetorDesordenado[i]];
				trocado = true;
			}
		}
	}while(trocado);

	return vetorDesordenado;
}
