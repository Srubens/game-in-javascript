(function (window, document){

	"use script";

	window.onload = function(){
		setInterval(executar, 1000 / 30);
	}

	//MOVIMENTACAO DA BOLA
	let posicaoBolaX = 10;
	let posicaoBolaY = 10;
	
	// VELOCIDADE DA BOLA
	let velocidadeBolaPosicaoX = 3
	let velocidadeBolaPosicaoY = 3

	function executar(){

		let $folha = document.querySelector('[data-js="folha-js"]');
		let $areaDesenho = $folha.getContext("2d");

		let larguraCampo = 600;
		let alturaCampo = 500;
		let espessuraRede = 5;

		let diametroBola = 10;

		let contador = 0;

		//CAMPO
		$areaDesenho.fillStyle = "#006600";
		$areaDesenho.fillRect(0, 0, larguraCampo, alturaCampo);

		//ESPESSURA DA REDE
		$areaDesenho.fillStyle = "#fff";
		$areaDesenho.fillRect(larguraCampo / 2 - espessuraRede / 2, 0, espessuraRede, alturaCampo);

		//BOLA
		$areaDesenho.fillStyle = "red";
		$areaDesenho.fillRect(posicaoBolaX - diametroBola / 2, posicaoBolaY - diametroBola / 2, diametroBola, diametroBola);

		posicaoBolaX = posicaoBolaX + velocidadeBolaPosicaoX;	
		posicaoBolaY = posicaoBolaY + velocidadeBolaPosicaoY;	

		// console.log($folha,$areaDesenho);

		// VERIFICA A LATERAL SUPERIOR
		if( posicaoBolaY < 0 && velocidadeBolaPosicaoY < 0 ){
			velocidadeBolaPosicaoY = -velocidadeBolaPosicaoY
		}

		// VERIFICA A LATERAL INFERIOR
		if( posicaoBolaY > alturaCampo && velocidadeBolaPosicaoY > 0 ){
			velocidadeBolaPosicaoY = -velocidadeBolaPosicaoY
		}

	}

})(window, document)