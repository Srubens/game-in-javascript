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

	let posicaoJogador1 = 40;
	let posicaoJogador2 = 40;

	// PONTUACAO
	let pontuacaoJogador1 = 0; 
	let pontuacaoJogador2 = 0; 

	function executar(){

		let $folha = document.querySelector('[data-js="folha-js"]');
		let $areaDesenho = $folha.getContext("2d");

		let larguraCampo = 600;
		let alturaCampo = 500;
		let espessuraRede = 5;

		let diametroBola = 10;

		let contador = 0;

		let espessuraRaquete = 11;
		let alturaRaquete = 100;

		let efeitoRaquete = 0.3;

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

		// RAQUETE 01
		$areaDesenho.fillStyle = "#fff";
		$areaDesenho.fillRect(0, posicaoJogador1, espessuraRaquete, alturaRaquete);
		$areaDesenho.fillRect(larguraCampo - espessuraRaquete, posicaoJogador2, espessuraRaquete, alturaRaquete);

		// VERIFICA A LATERAL SUPERIOR
		if( posicaoBolaY < 0 && velocidadeBolaPosicaoY < 0 ){
			velocidadeBolaPosicaoY = -velocidadeBolaPosicaoY
		}

		// VERIFICA A LATERAL INFERIOR
		if( posicaoBolaY > alturaCampo && velocidadeBolaPosicaoY > 0 ){
			velocidadeBolaPosicaoY = -velocidadeBolaPosicaoY
		}

		// VERIFICA SE O JOGADOR 2 FEZ PONTO
		if( posicaoBolaX < 0 ){
			if( posicaoBolaY > posicaoJogador1 && posicaoBolaY < posicaoJogador1 + alturaRaquete ){
				//REBATER A BOLA
				velocidadeBolaPosicaoX = -velocidadeBolaPosicaoX;
				
				let diferencaY = posicaoBolaY - ( posicaoJogador1 + alturaRaquete / 2 );
				
				velocidadeBolaPosicaoY = diferencaY * efeitoRaquete
			}else{
				// PONTO JOGADOR 2
				pontuacaoJogador2 = pontuacaoJogador2 + 1;
				//colocar bola no centro 
			}
		}

		// VERIFICA SE O JOGADOR 1 FEZ PONTO
		if( posicaoBolaX > larguraCampo  ){
			if( posicaoBolaY > posicaoJogador2 && posicaoBolaY < posicaoJogador2 + alturaRaquete ){
				velocidadeBolaPosicaoX = -velocidadeBolaPosicaoX;
				let diferencaY = posicaoBolaY - ( posicaoJogador2 + alturaRaquete / 2 );
				velocidadeBolaPosicaoY = diferencaY * efeitoRaquete
			}else{
				pontuacaoJogador1 = pontuacaoJogador1+ 1;
				//colocar bola no centro 
			}
		}


	}

})(window, document)