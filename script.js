const ramos = [
  // I y II Año (ya los completamos antes)...
  // III Año – V Semestre
  { id:'calculo', desbloquea:[] },
  { id:'fisica', desbloquea:[] },
  { id:'inno2', desbloquea:['inno3'] },
  { id:'mantenibilidad', desbloquea:['int-auto3'] },
  { id:'materiales', desbloquea:['fallas-mecanicos'] },
  { id:'termofluidos', desbloquea:['int-auto3','fallas-termofluidos'] },
  // III Año – VI Semestre
  { id:'finanzas', desbloquea:['eval-proy'] },
  { id:'ingles2', desbloquea:['ingles3'] },
  { id:'confiabilidad', desbloquea:[] },
  { id:'int-auto3', desbloquea:[] },
  { id:'fallas-mecanicos', desbloquea:['soporte-auto'] },
  { id:'fallas-termofluidos', desbloquea:['soporte-auto'] },
  // IV Año – VII Semestre
  { id:'eval-proy', desbloquea:['proyecto'] },
  { id:'ingles3', desbloquea:[] },
  { id:'garantia', desbloquea:['soporte-auto'] },
  { id:'tecnico-avanzado', desbloquea:['proyecto'] },
  { id:'electivo3', desbloquea:[] },
  { id:'electivo4', desbloquea:[] },
  // IV Año – VIII Semestre
  { id:'inno3', desbloquea:[] },
  { id:'electromovilidad', desbloquea:[] },
  { id:'proyecto', desbloquea:[] },
  { id:'electivo5', desbloquea:[] },
  { id:'electivo6', desbloquea:[] },
  { id:'soporte-auto', desbloquea:[] }
];

ramos.forEach(r => {
  const div = document.getElementById(r.id);
  if (div) {
    div.addEventListener('click', () => {
      if (!div.classList.contains('aprobado')) {
        div.classList.add('aprobado');
        r.desbloquea.forEach(id => {
          const next = document.getElementById(id);
          if (next) next.classList.remove('bloqueado');
        });
      }
    });
  }
});

// Inicial: desbloquea los del I semestre
['electricidad','mecanica','org-taller','formacion','algebra'].forEach(id => {
  const d = document.getElementById(id);
  if (d) d.classList.remove('bloqueado');
});
