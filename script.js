




form.addEventListener('submit', function(event) {
  event.preventDefault();


  const v1 = parseInt(document.getElementById('volume_soja').value);
  const v2 = parseInt(document.getElementById('volume_avariado_12').value);
  const v3 = parseInt(document.getElementById('volume_avariado_maior_12').value);
  const v4 = parseInt(document.getElementById('cargas_pontuais').value);

  const vol_total = v1 + v2 + v3 + v4;
  const percen_v_s = (v1 / vol_total).toFixed(2);
  const percen_v_a12 = (v2 / vol_total).toFixed(2);
  const percen_v_am12 = (v3 / vol_total).toFixed(2);
  const percen_c_p = (v4 / vol_total).toFixed(2);

  document.getElementById('infos').classList.remove('hidden');
  document.getElementById('infos25').classList.remove('hidden');
  document.getElementById('infos28').classList.remove('hidden');
  document.getElementById('infos26').classList.remove('hidden');
  document.getElementById('infos26').classList.replace('0','10')
  /*como rotacionar a seta*/

});

form.addEventListener('input', (event2) => {
  function changeText() {
    let el = document.getElementsByClassName("km")[0];
    el.innerText = acidez;
    }
  
 function resetSpeedometer() {
  arrowWrapper.classList.replace('speed-10', 'speed-0');
  arrowWrapper.classList.replace('speed-20', 'speed-0');
  arrowWrapper.classList.replace('speed-30', 'speed-0');
  arrowWrapper.classList.replace('speed-40', 'speed-0');
  arrowWrapper.classList.replace('speed-50', 'speed-0');
  arrowWrapper.classList.replace('speed-60', 'speed-0');
  arrowWrapper.classList.replace('speed-70', 'speed-0');
  arrowWrapper.classList.replace('speed-80', 'speed-0');
  arrowWrapper.classList.replace('speed-90', 'speed-0');
  arrowWrapper.classList.replace('speed-100', 'speed-0');
  arrowWrapper.classList.replace('speed-110', 'speed-0');
  arrowWrapper.classList.replace('speed-120', 'speed-0');
  arrowWrapper.classList.replace('speed-130', 'speed-0');
  arrowWrapper.classList.replace('speed-140', 'speed-0');
  arrowWrapper.classList.replace('speed-150', 'speed-0');
  arrowWrapper.classList.replace('speed-160', 'speed-0');
  arrowWrapper.classList.replace('speed-170', 'speed-0');
  arrowWrapper.classList.replace('speed-180', 'speed-0');
}

  event2.preventDefault();
  const calcularButton = document.getElementById('calculate');
  const a1 =0.4227+0.05587*9;
  const a2 =0.6227+0.05587*12;
  const a3 =0.7227+0.05587*15;
  const a4 =0.8227+0.05587*35;

  const vol_total = parseInt(document.getElementById('volume_soja').value) + parseInt(document.getElementById('volume_avariado_12').value) + parseInt(document.getElementById('volume_avariado_maior_12').value) + parseInt(document.getElementById('cargas_pontuais').value);
  const v5 = parseInt(document.getElementById('volume_soja').value);
  const v6 = parseInt(document.getElementById('volume_avariado_12').value);
  const v7 = parseInt(document.getElementById('volume_avariado_maior_12').value);
  const v8 = parseInt(document.getElementById('cargas_pontuais').value);
  const per_padrape = ((v5 / vol_total) * 100).toFixed(2);
  const per_per_vol_12 = ((v6 / vol_total) * 100).toFixed(2);
  const per_vol_maior12 = ((v7 / vol_total) * 100).toFixed(2);
  const per_cargas_pontuais = ((v8 / vol_total) * 100).toFixed(2);
  const acidez=(((v5*a1)+(v6*a2)+(v7*a3)+(v8*a4))/(v5+v6+v7+v8)).toFixed(2);
  const camdia_padrao =(v5/45).toFixed(0)
  const camdia_avariado =(v6/45).toFixed(0)
  const camdia_avariado_maior =(v7/45).toFixed(0)
  const camdia_cargas_pontuais =(v8/45).toFixed(0)

  const value = document.getElementById('value');
  value.textContent = 'Porcentagem: ' + per_padrape + '%';

  const value1 = document.getElementById('value1');
  value1.textContent = 'Porcentagem: ' + per_per_vol_12 + '%';

  const value2 = document.getElementById('value2');
  value2.textContent = 'Porcentagem: ' + per_vol_maior12 + '%';

  const value3 = document.getElementById('value3');
  value3.textContent = 'Porcentagem: ' + per_cargas_pontuais + '%';

  const value4 = document.getElementById('value4');
  value4.textContent = 'Representa ' + camdia_padrao + ' caminhões';

  const value5 = document.getElementById('value5');
  value5.textContent = 'Representa ' + camdia_avariado+ ' caminhões';

  const value6 = document.getElementById('value6');
  value6.textContent = 'Representa ' + camdia_avariado_maior + ' caminhões';

  const value7 = document.getElementById('value7');
  value7.textContent = 'Representa ' + camdia_cargas_pontuais + ' caminhões';
  
 

  const arrowWrapper = document.querySelector('.arrow_wrapper');
  
  calcularButton.addEventListener('click', () => {
  resetSpeedometer();

  if ((acidez < 0.8) && (acidez>=0) ) {
    arrowWrapper.classList.replace('speed-0', 'speed-10');
  }
  else if ((acidez <= 0.8) && (acidez>0) ) {
    arrowWrapper.classList.replace('speed-0', 'speed-20');
  }
  else if ((acidez <= 0.82) && (acidez>0.8) ) {
    arrowWrapper.classList.replace('speed-0', 'speed-30');
  }
  else if ((acidez <= 0.85) && (acidez>0.82) ) {
    arrowWrapper.classList.replace('speed-0', 'speed-40');
  }
  else if ((acidez <= 0.88) && (acidez>0.85) ) {
    arrowWrapper.classList.replace('speed-0', 'speed-50');
  }
  else if ((acidez <= 0.91) && (acidez>0.88) ) {
    arrowWrapper.classList.replace('speed-0', 'speed-60');
  }
  else if ((acidez <= 0.94) && (acidez>0.91) ) {
    arrowWrapper.classList.replace('speed-0', 'speed-70');
  }
  else if ((acidez <= 0.97) && (acidez>0.94) ) {
    arrowWrapper.classList.replace('speed-0', 'speed-80');
  }
  else if ((acidez <= 1.00) && (acidez>0.97 )) {
    arrowWrapper.classList.replace('speed-0', 'speed-90');
  }
  else if ((acidez <= 1.03) && (acidez>1.0) ) {
    arrowWrapper.classList.replace('speed-0', 'speed-100');
  }
  else if ((acidez <= 1.06) && (acidez>1.03) ) {
    arrowWrapper.classList.replace('speed-0', 'speed-110');
  }
  else if ((acidez <= 1.09) && (acidez>1.06) ) {
    arrowWrapper.classList.replace('speed-0', 'speed-120');
  }
  else if ((acidez <= 1.12) && (acidez>1.09) ) {
    arrowWrapper.classList.replace('speed-0', 'speed-130');
  }
  else if ((acidez <= 1.15) && (acidez>1.12) ) {
    arrowWrapper.classList.replace('speed-0', 'speed-140');
  }
  else if ((acidez <= 1.18) && (acidez>1.15) ) {
    arrowWrapper.classList.replace('speed-0', 'speed-150');
  }
  else if ((acidez <= 1.19) && (acidez>1.18) ) {
    arrowWrapper.classList.replace('speed-0', 'speed-160');
  }
  else if ((acidez <= 1.2) && (acidez>1.19) ) {
    arrowWrapper.classList.replace('speed-0', 'speed-170');
  }
  else if ((acidez <= 1.23) && (acidez>1.2) ) {
    arrowWrapper.classList.replace('speed-0', 'speed-180');
  }
  else if (acidez>1.2 ) {
    arrowWrapper.classList.replace('speed-0', 'speed-180');
  }
  
changeText();


})


});




