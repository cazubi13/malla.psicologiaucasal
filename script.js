document.addEventListener("DOMContentLoaded", () => {
    // Definición de todas las materias del plan de estudios
    const materias = [
        // 1er Año
        { codigo: "05 0010", nombre: "Filosofía I", anio: 1, semestre: 1, esAnual: true, cursar: [], rendir: [] },
        { codigo: "07 0260", nombre: "Neuropsicología", anio: 1, semestre: 1, esAnual: true, cursar: [], rendir: [] },
        { codigo: "09 2240", nombre: "Metodología de la Inv. en Psicología I", anio: 1, semestre: 1, esAnual: true, cursar: [], rendir: [] },
        { codigo: "10 0700", nombre: "Historia de la Psicología", anio: 1, semestre: 1, esAnual: true, cursar: [], rendir: [] },
        { codigo: "07 0020", nombre: "Psicología General", anio: 1, semestre: 1, esAnual: false, cursar: [], rendir: [] },
        { codigo: "10 1205", nombre: "Historia del Pensamiento Sociopolítico", anio: 1, semestre: 1, esAnual: false, cursar: [], rendir: [] },
        { codigo: "05 0500", nombre: "Antropología Cultural", anio: 1, semestre: 2, esAnual: false, cursar: [{materia: "10 1205", estado: "Reg."}], rendir: [{materia: "10 1205", estado: "Aprob."}] },
        { codigo: "15 0740", nombre: "Linguística", anio: 1, semestre: 2, esAnual: false, cursar: [], rendir: [] },
        // 2do Año
        { codigo: "00 0010", nombre: "Teología I", anio: 2, semestre: 1, esAnual: true, cursar: [{materia: "05 0010", estado: "Reg."}], rendir: [{materia: "05 0010", estado: "Aprob."}] },
        { codigo: "07 0150", nombre: "Psic. Evolutiva (Niño y Adolescente)", anio: 2, semestre: 1, esAnual: true, cursar: [{materia: "07 0020", estado: "Reg."}, {materia: "07 0260", estado: "Reg."}], rendir: [{materia: "07 0260", estado: "Aprob."}, {materia: "07 0020", estado: "Aprob."}] },
        { codigo: "07 0330", nombre: "Psicología Profunda", anio: 2, semestre: 1, esAnual: true, cursar: [{materia: "07 0020", estado: "Reg."}], rendir: [{materia: "07 0020", estado: "Aprob."}] },
        { codigo: "47 0090", nombre: "Estadística (Descriptiva y Muestral)", anio: 2, semestre: 1, esAnual: true, cursar: [], rendir: [] },
        { codigo: "05 0020", nombre: "Filosofía II", anio: 2, semestre: 1, esAnual: false, cursar: [{materia: "05 0010", estado: "Reg."}], rendir: [{materia: "05 0010", estado: "Aprob."}] },
        { codigo: "07 0440", nombre: "Psicolinguística", anio: 2, semestre: 1, esAnual: false, cursar: [{materia: "15 0740", estado: "Reg."}], rendir: [{materia: "15 0740", estado: "Aprob."}] },
        { codigo: "20 0100", nombre: "Sociología", anio: 2, semestre: 1, esAnual: false, cursar: [{materia: "10 0700", estado: "Reg."}], rendir: [{materia: "10 0700", estado: "Aprob."}] },
        { codigo: "05 0310", nombre: "Antropología Filosófica", anio: 2, semestre: 2, esAnual: false, cursar: [{materia: "05 0020", estado: "Reg."}, {materia: "05 0010", estado: "Reg."}], rendir: [{materia: "05 0010", estado: "Aprob."}, {materia: "05 0020", estado: "Aprob."}] },
        { codigo: "07 0040", nombre: "Psicología Experimental", anio: 2, semestre: 2, esAnual: false, cursar: [{materia: "07 0020", estado: "Reg."}, {materia: "09 2240", estado: "Reg."}], rendir: [{materia: "09 2240", estado: "Aprob."}, {materia: "07 0020", estado: "Aprob."}] },
        { codigo: "07 0080", nombre: "Psicología de la Personalidad", anio: 2, semestre: 2, esAnual: false, cursar: [{materia: "07 0020", estado: "Reg."}], rendir: [{materia: "07 0020", estado: "Aprob."}] },
        { codigo: "07 1300", nombre: "Introducción al Psicodiagnóstico", anio: 2, semestre: 2, esAnual: false, cursar: [{materia: "07 0020", estado: "Reg."}, {materia: "07 0260", estado: "Reg."}], rendir: [{materia: "07 0260", estado: "Aprob."}, {materia: "07 0020", estado: "Aprob."}] },
        // 3er Año
        { codigo: "07 0590", nombre: "Psicología Educacional", anio: 3, semestre: 1, esAnual: true, cursar: [{materia: "07 0260", estado: "Aprob."}, {materia: "10 0700", estado: "Aprob."}, {materia: "07 0020", estado: "Aprob."}, {materia: "09 2240", estado: "Aprob."}, {materia: "07 0150", estado: "Reg."}], rendir: [{materia: "07 0150", estado: "Aprob."}] },
        { codigo: "19 0180", nombre: "Suficiencia Idiomatica", anio: 3, semestre: 1, esAnual: false, cursar: [], rendir: [] },
        { codigo: "00 0020", nombre: "Teología II", anio: 3, semestre: 1, esAnual: false, cursar: [{materia: "00 0010", estado: "Reg."}], rendir: [{materia: "00 0010", estado: "Aprob."}] },
        { codigo: "07 0120", nombre: "Psicometría", anio: 3, semestre: 1, esAnual: false, cursar: [{materia: "09 2240", estado: "Aprob."}, {materia: "07 1300", estado: "Reg."}, {materia: "47 0090", estado: "Reg."}, {materia: "07 0040", estado: "Reg."}], rendir: [{materia: "47 0090", estado: "Aprob."}, {materia: "07 0040", estado: "Aprob."}, {materia: "07 1300", estado: "Aprob."}] },
        { codigo: "07 0170", nombre: "Psicología Social", anio: 3, semestre: 1, esAnual: false, cursar: [{materia: "10 0700", estado: "Aprob."}, {materia: "05 0500", estado: "Aprob."}, {materia: "07 0150", estado: "Reg."}, {materia: "20 0100", estado: "Reg."}], rendir: [{materia: "07 0150", estado: "Aprob."}, {materia: "20 0100", estado: "Aprob."}] },
        { codigo: "07 0270", nombre: "Psic. Evolutiva (Adultez y Senectud)", anio: 3, semestre: 1, esAnual: false, cursar: [{materia: "07 0020", estado: "Aprob."}, {materia: "05 0500", estado: "Aprob."}, {materia: "07 0150", estado: "Reg."}], rendir: [{materia: "07 0150", estado: "Aprob."}] },
        { codigo: "07 0280", nombre: "Psicología del Deporte", anio: 3, semestre: 1, esAnual: false, cursar: [{materia: "07 0020", estado: "Aprob."}, {materia: "07 0150", estado: "Reg."}, {materia: "20 0100", estado: "Reg."}], rendir: [{materia: "20 0100", estado: "Aprob."}] },
        { codigo: "07 1310", nombre: "Psicopatología Infanto Juvenil", anio: 3, semestre: 1, esAnual: false, cursar: [{materia: "07 0260", estado: "Aprob."}, {materia: "07 0020", estado: "Aprob."}, {materia: "07 0150", estado: "Reg."}, {materia: "07 0080", estado: "Reg."}], rendir: [{materia: "07 0150", estado: "Aprob."}, {materia: "07 0080", estado: "Aprob."}] },
        { codigo: "07 0390", nombre: "Dinámica de Grupo", anio: 3, semestre: 2, esAnual: false, cursar: [{materia: "10 0700", estado: "Aprob."}, {materia: "07 0080", estado: "Reg."}, {materia: "07 0170", estado: "Reg."}], rendir: [{materia: "07 0080", estado: "Aprob."}, {materia: "07 0170", estado: "Aprob."}] },
        { codigo: "07 0410", nombre: "Técnicas Proyectivas I", anio: 3, semestre: 2, esAnual: false, cursar: [{materia: "07 0020", estado: "Aprob."}, {materia: "07 0080", estado: "Reg."}, {materia: "07 0120", estado: "Reg."}, {materia: "07 0150", estado: "Reg."}, {materia: "07 0270", estado: "Reg."}], rendir: [{materia: "07 0150", estado: "Aprob."}, {materia: "07 0080", estado: "Aprob."}, {materia: "07 0270", estado: "Aprob."}, {materia: "07 0120", estado: "Aprob."}] },
        { codigo: "07 1320", nombre: "Psicopatología del Adulto", anio: 3, semestre: 2, esAnual: false, cursar: [{materia: "07 0260", estado: "Aprob."}, {materia: "07 0020", estado: "Aprob."}, {materia: "07 1310", estado: "Reg."}], rendir: [{materia: "07 1310", estado: "Aprob."}] },
        { codigo: "09 0230", nombre: "Seminario I", anio: 3, semestre: 2, esAnual: false, cursar: [], rendir: [] },
        // ... (Y así con el resto de materias de 4to y 5to)
    ];

    const mallaContenedor = document.getElementById("malla");
    const TOTAL_SEMESTRES = 10;

    // Crear las columnas para cada semestre
    for (let i = 1; i <= TOTAL_SEMESTRES; i++) {
        const anio = Math.ceil(i / 2);
        const semestreDelAnio = (i % 2 === 0) ? 2 : 1;
        const columna = document.createElement("div");
        columna.classList.add("semestre-columna");
        columna.id = `semestre-${i}`;
        
        const header = document.createElement("div");
        header.classList.add("semestre-header");
        header.innerText = `${anio}° Año - ${semestreDelAnio}° Sem.`;
        columna.appendChild(header);

        mallaContenedor.appendChild(columna);
    }

    // Llenar la malla con las materias
    materias.forEach(materia => {
        const semestreIndex = (materia.anio - 1) * 2 + materia.semestre;
        const columna = document.getElementById(`semestre-${semestreIndex}`);
        
        if (columna) {
            const divMateria = document.createElement("div");
            divMateria.classList.add("materia");
            if (materia.esAnual) {
                // Las materias anuales ocupan dos semestres visualmente
                const proximoSemestre = document.getElementById(`semestre-${semestreIndex + 1}`);
                if(proximoSemestre) {
                    columna.style.gridRow = "span 1"; // Se extiende sobre la fila del header
                    proximoSemestre.style.display = "none"; // Oculta la columna siguiente
                    columna.style.gridColumn = `span 2`;
                }
            }
            divMateria.dataset.codigo = materia.codigo;
            divMateria.innerHTML = `<strong>${materia.nombre}</strong><span>${materia.codigo}</span>`;

            divMateria.addEventListener("mouseover", () => resaltarCorrelativas(materia.codigo));
            divMateria.addEventListener("mouseout", limpiarResaltado);

            columna.appendChild(divMateria);
        }
    });

    function resaltarCorrelativas(codigoSeleccionado) {
        const materiaSeleccionada = materias.find(m => m.codigo === codigoSeleccionado);
        const todasLasMateriasDivs = document.querySelectorAll('.materia');

        todasLasMateriasDivs.forEach(div => div.classList.add('opaca'));

        // Resaltar la materia seleccionada
        const divSeleccionado = document.querySelector(`[data-codigo="${codigoSeleccionado}"]`);
        if (divSeleccionado) {
            divSeleccionado.classList.remove('opaca');
            divSeleccionado.classList.add('seleccionada');
        }
        
        // Resaltar correlativas para cursar y rendir
        materiaSeleccionada.cursar.forEach(corr => {
            const div = document.querySelector(`[data-codigo="${corr.materia}"]`);
            if (div) {
                div.classList.remove('opaca');
                div.classList.add('correlativa-cursar');
            }
        });
        materiaSeleccionada.rendir.forEach(corr => {
            const div = document.querySelector(`[data-codigo="${corr.materia}"]`);
            if (div) {
                div.classList.remove('opaca');
                // Si ya es para cursar, no la sobreescribimos con "rendir" para no perder info
                if (!div.classList.contains('correlativa-cursar')) {
                    div.classList.add('correlativa-rendir');
                }
            }
        });
        
        // Resaltar materias que requieren la seleccionada
        materias.forEach(materiaFutura => {
            if (materiaFutura.cursar.some(c => c.materia === codigoSeleccionado) || materiaFutura.rendir.some(r => r.materia === codigoSeleccionado)) {
                const div = document.querySelector(`[data-codigo="${materiaFutura.codigo}"]`);
                if (div) {
                    div.classList.remove('opaca');
                    div.classList.add('requerida-por');
                }
            }
        });
    }

    function limpiarResaltado() {
        document.querySelectorAll('.materia').forEach(div => {
            div.classList.remove('opaca', 'seleccionada', 'correlativa-cursar', 'correlativa-rendir', 'requerida-por');
        });
    }
});