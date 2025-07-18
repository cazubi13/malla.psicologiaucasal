// script.js
document.addEventListener("DOMContentLoaded", () => {
    // La lista COMPLETA y CORREGIDA de materias.
    const materias = [
        { codigo: "05 0010", nombre: "Filosofía I", anio: 1, semestre: 1, esAnual: true, cursar: [], rendir: [] }, { codigo: "07 0260", nombre: "Neuropsicología", anio: 1, semestre: 1, esAnual: true, cursar: [], rendir: [] }, { codigo: "09 2240", nombre: "Metodología de la Inv. en Psicología I", anio: 1, semestre: 1, esAnual: true, cursar: [], rendir: [] }, { codigo: "10 0700", nombre: "Historia de la Psicología", anio: 1, semestre: 1, esAnual: true, cursar: [], rendir: [] }, { codigo: "07 0020", nombre: "Psicología General", anio: 1, semestre: 1, esAnual: false, cursar: [], rendir: [] }, { codigo: "10 1205", nombre: "Historia del Pensamiento Sociopolítico", anio: 1, semestre: 1, esAnual: false, cursar: [], rendir: [] }, { codigo: "05 0500", nombre: "Antropología Cultural", anio: 1, semestre: 2, esAnual: false, cursar: [{materia: "10 1205", estado: "Reg."}], rendir: [{materia: "10 1205", estado: "Aprob."}] }, { codigo: "15 0740", nombre: "Linguística", anio: 1, semestre: 2, esAnual: false, cursar: [], rendir: [] }, { codigo: "00 0010", nombre: "Teología I", anio: 2, semestre: 1, esAnual: true, cursar: [{materia: "05 0010", estado: "Reg."}], rendir: [{materia: "05 0010", estado: "Aprob."}] }, { codigo: "07 0150", nombre: "Psic. Evolutiva (Niño y Adolescente)", anio: 2, semestre: 1, esAnual: true, cursar: [{materia: "07 0020", estado: "Reg."}, {materia: "07 0260", estado: "Reg."}], rendir: [{materia: "07 0260", estado: "Aprob."}, {materia: "07 0020", estado: "Aprob."}] }, { codigo: "07 0330", nombre: "Psicología Profunda", anio: 2, semestre: 1, esAnual: true, cursar: [{materia: "07 0020", estado: "Reg."}], rendir: [{materia: "07 0020", estado: "Aprob."}] }, { codigo: "47 0090", nombre: "Estadística (Descriptiva y Muestral)", anio: 2, semestre: 1, esAnual: true, cursar: [], rendir: [] }, { codigo: "05 0020", nombre: "Filosofía II", anio: 2, semestre: 1, esAnual: false, cursar: [{materia: "05 0010", estado: "Reg."}], rendir: [{materia: "05 0010", estado: "Aprob."}] }, { codigo: "07 0440", nombre: "Psicolinguística", anio: 2, semestre: 1, esAnual: false, cursar: [{materia: "15 0740", estado: "Reg."}], rendir: [{materia: "15 0740", estado: "Aprob."}] }, { codigo: "20 0100", nombre: "Sociología", anio: 2, semestre: 1, esAnual: false, cursar: [{materia: "10 0700", estado: "Reg."}], rendir: [{materia: "10 0700", estado: "Aprob."}] }, { codigo: "05 0310", nombre: "Antropología Filosófica", anio: 2, semestre: 2, esAnual: false, cursar: [{materia: "05 0020", estado: "Reg."}, {materia: "05 0010", estado: "Reg."}], rendir: [{materia: "05 0010", estado: "Aprob."}, {materia: "05 0020", estado: "Aprob."}] }, { codigo: "07 0040", nombre: "Psicología Experimental", anio: 2, semestre: 2, esAnual: false, cursar: [{materia: "07 0020", estado: "Reg."}, {materia: "09 2240", estado: "Reg."}], rendir: [{materia: "09 2240", estado: "Aprob."}, {materia: "07 0020", estado: "Aprob."}] }, { codigo: "07 0080", nombre: "Psicología de la Personalidad", anio: 2, semestre: 2, esAnual: false, cursar: [{materia: "07 0020", estado: "Reg."}], rendir: [{materia: "07 0020", estado: "Aprob."}] }, { codigo: "07 1300", nombre: "Introducción al Psicodiagnóstico", anio: 2, semestre: 2, esAnual: false, cursar: [{materia: "07 0020", estado: "Reg."}, {materia: "07 0260", estado: "Reg."}], rendir: [{materia: "07 0260", estado: "Aprob."}, {materia: "07 0020", estado: "Aprob."}] }, { codigo: "07 0590", nombre: "Psicología Educacional", anio: 3, semestre: 1, esAnual: true, cursar: [{materia: "07 0260", estado: "Aprob."}, {materia: "10 0700", estado: "Aprob."}, {materia: "07 0020", estado: "Aprob."}, {materia: "09 2240", estado: "Aprob."}, {materia: "07 0150", estado: "Reg."}], rendir: [{materia: "07 0150", estado: "Aprob."}] }, { codigo: "19 0180", nombre: "Suficiencia Idiomatica", anio: 3, semestre: 1, esAnual: false, cursar: [], rendir: [] }, { codigo: "00 0020", nombre: "Teología II", anio: 3, semestre: 1, esAnual: false, cursar: [{materia: "00 0010", estado: "Reg."}], rendir: [{materia: "00 0010", estado: "Aprob."}] },
        { codigo: "07 0120", nombre: "Psicometría", anio: 3, semestre: 1, esAnual: false, cursar: [{materia: "09 2240", estado: "Aprob."}, {materia: "07 1300", estado: "Reg."}, {materia: "47 0090", estado: "Reg."}, {materia: "07 0040", estado: "Reg."}], rendir: [{materia: "47 0090", estado: "Aprob."}, {materia: "07 0040", estado: "Aprob."}, {materia: "07 1300", estado: "Aprob."}] },
        { codigo: "07 0170", nombre: "Psicología Social", anio: 3, semestre: 1, esAnual: false, cursar: [{materia: "10 0700", estado: "Aprob."}, {materia: "05 0500", estado: "Aprob."}, {materia: "07 0150", estado: "Reg."}, {materia: "20 0100", estado: "Reg."}], rendir: [{materia: "07 0150", estado: "Aprob."}, {materia: "20 0100", estado: "Aprob."}] },
        { codigo: "07 0270", nombre: "Psic. Evolutiva (Adultez y Senectud)", anio: 3, semestre: 1, esAnual: false, cursar: [{materia: "07 0020", estado: "Aprob."}, {materia: "05 0500", estado: "Aprob."}, {materia: "07 0150", estado: "Reg."}], rendir: [{materia: "07 0150", estado: "Aprob."}] },
        { codigo: "07 0280", nombre: "Psicología del Deporte", anio: 3, semestre: 1, esAnual: false, cursar: [{materia: "07 0020", estado: "Aprob."}, {materia: "07 0150", estado: "Reg."}, {materia: "20 0100", estado: "Reg."}], rendir: [{materia: "20 0100", estado: "Aprob."}, {materia: "07 0150", estado: "Aprob."}] },
        { codigo: "07 1310", nombre: "Psicopatología Infanto Juvenil", anio: 3, semestre: 1, esAnual: false, cursar: [{materia: "07 0260", estado: "Aprob."}, {materia: "07 0020", estado: "Aprob."}, {materia: "07 0150", estado: "Aprob."}, {materia: "07 0080", estado: "Reg."}], rendir: [{materia: "07 0150", estado: "Aprob."}, {materia: "07 0080", estado: "Aprob."}] },
        { codigo: "07 0390", nombre: "Dinámica de Grupo", anio: 3, semestre: 2, esAnual: false, cursar: [{materia: "10 0700", estado: "Aprob."}, {materia: "07 0080", estado: "Reg."}, {materia: "07 0170", estado: "Reg."}], rendir: [{materia: "07 0080", estado: "Aprob."}, {materia: "07 0170", estado: "Aprob."}] },
        { codigo: "07 0410", nombre: "Técnicas Proyectivas I", anio: 3, semestre: 2, esAnual: false, cursar: [{materia: "07 0020", estado: "Aprob."}, {materia: "07 0080", estado: "Reg."}, {materia: "07 0120", estado: "Reg."}, {materia: "07 0150", estado: "Reg."}, {materia: "07 0270", estado: "Reg."}], rendir: [{materia: "07 0150", estado: "Aprob."}, {materia: "07 0080", estado: "Aprob."}, {materia: "07 0270", estado: "Aprob."}, {materia: "07 0120", estado: "Aprob."}] },
        { codigo: "07 1320", nombre: "Psicopatología del Adulto", anio: 3, semestre: 2, esAnual: false, cursar: [{materia: "07 0260", estado: "Aprob."}, {materia: "07 0020", estado: "Aprob."}, {materia: "07 1310", estado: "Reg."}], rendir: [{materia: "07 1310", estado: "Aprob."}] },
        { codigo: "09 0230", nombre: "Seminario I", anio: 3, semestre: 2, esAnual: false, cursar: [], rendir: [] },
        { codigo: "07 0210", nombre: "Psicología Laboral", anio: 4, semestre: 1, esAnual: true, cursar: [{materia: "07 0080", estado: "Aprob."}, {materia: "07 0170", estado: "Reg."}, {materia: "07 0410", estado: "Reg."}, {materia: "07 0120", estado: "Reg."}, {materia: "07 0390", estado: "Reg."}], rendir: [{materia: "07 0120", estado: "Aprob."}, {materia: "07 0170", estado: "Aprob."}, {materia: "07 0390", estado: "Aprob."}, {materia: "07 0410", estado: "Aprob."}] },
        { codigo: "00 0080", nombre: "Doctrina Social", anio: 4, semestre: 1, esAnual: false, cursar: [{materia: "00 0010", estado: "Aprob."}, {materia: "05 0310", estado: "Aprob."}, {materia: "00 0020", estado: "Reg."}], rendir: [{materia: "00 0020", estado: "Aprob."}] },
        { codigo: "07 0300", nombre: "Orientación Vocacional y Profesional", anio: 4, semestre: 1, esAnual: false, cursar: [{materia: "07 0040", estado: "Aprob."}, {materia: "07 0270", estado: "Reg."}, {materia: "07 0410", estado: "Reg."}, {materia: "07 0590", estado: "Reg."}, {materia: "07 0120", estado: "Reg."}], rendir: [{materia: "07 0590", estado: "Aprob."}, {materia: "07 0270", estado: "Aprob."}, {materia: "07 0120", estado: "Aprob."}, {materia: "07 0410", estado: "Aprob."}] },
        { codigo: "07 0420", nombre: "Técnicas Proyectivas II", anio: 4, semestre: 1, esAnual: false, cursar: [{materia: "07 0080", estado: "Aprob."}, {materia: "07 0410", estado: "Reg."}], rendir: [{materia: "07 0410", estado: "Aprob."}] },
        { codigo: "07 1260", nombre: "Psicología Especial y de la Diversidad", anio: 4, semestre: 1, esAnual: false, cursar: [{materia: "07 0150", estado: "Aprob."}, {materia: "07 0080", estado: "Aprob."}, {materia: "07 1320", estado: "Reg."}], rendir: [{materia: "07 1320", estado: "Aprob."}] },
        { codigo: "09 0240", nombre: "Seminario II", anio: 4, semestre: 1, esAnual: false, cursar: [], rendir: [] },
        { codigo: "05 0250", nombre: "Ética Profesional", anio: 4, semestre: 2, esAnual: false, cursar: [{materia: "05 0020", estado: "Aprob."}, {materia: "05 0310", estado: "Aprob."}, {materia: "00 0080", estado: "Reg."}], rendir: [{materia: "00 0080", estado: "Aprob."}] },
        { codigo: "07 0250", nombre: "Psicología de las Relaciones Humanas", anio: 4, semestre: 2, esAnual: false, cursar: [{materia: "07 0080", estado: "Aprob."}, {materia: "07 1300", estado: "Aprob."}, {materia: "07 0170", estado: "Reg."}], rendir: [{materia: "07 0170", estado: "Aprob."}] },
        { codigo: "07 0290", nombre: "Psicodiagnostico", anio: 4, semestre: 2, esAnual: false, cursar: [{materia: "07 0080", estado: "Aprob."}, {materia: "07 0330", estado: "Aprob."}, {materia: "07 0150", estado: "Aprob."}, {materia: "07 1300", estado: "Aprob."}, {materia: "07 0410", estado: "Reg."}, {materia: "07 1320", estado: "Reg."}, {materia: "07 0120", estado: "Reg."}, {materia: "07 0270", estado: "Reg."}, {materia: "07 0420", estado: "Reg."}], rendir: [{materia: "07 0270", estado: "Aprob."}, {materia: "07 0120", estado: "Aprob."}, {materia: "07 1320", estado: "Aprob."}, {materia: "07 0410", estado: "Aprob."}, {materia: "07 0420", estado: "Aprob."}] },
        { codigo: "07 1250", nombre: "Psicología Comunitaria", anio: 4, semestre: 2, esAnual: false, cursar: [{materia: "07 0080", estado: "Aprob."}, {materia: "07 1300", estado: "Aprob."}, {materia: "07 0170", estado: "Reg."}], rendir: [{materia: "07 0170", estado: "Aprob."}] },
        { codigo: "07 1330", nombre: "Psicología Clínica I (Psicoanálisis)", anio: 4, semestre: 2, esAnual: false, cursar: [{materia: "07 0150", estado: "Aprob."}, {materia: "07 0080", estado: "Aprob."}, {materia: "07 0330", estado: "Aprob."}, {materia: "07 1320", estado: "Reg."}], rendir: [{materia: "07 1320", estado: "Aprob."}] },
        { codigo: "75 2460", nombre: "Drogodependencia y Abordajes Transd.", anio: 4, semestre: 2, esAnual: false, cursar: [{materia: "07 0080", estado: "Aprob."}, {materia: "07 1320", estado: "Reg."}, {materia: "07 0170", estado: "Reg."}, {materia: "07 0590", estado: "Reg."}, {materia: "07 0270", estado: "Reg."}], rendir: [{materia: "07 0590", estado: "Aprob."}, {materia: "07 1320", estado: "Aprob."}, {materia: "07 0270", estado: "Aprob."}, {materia: "07 0170", estado: "Aprob."}] },
        { codigo: "07 0240", nombre: "Psicología Clinica II", anio: 5, semestre: 1, esAnual: true, cursar: [{materia: "07 0270", estado: "Aprob."}, {materia: "07 1320", estado: "Aprob."}, {materia: "07 1330", estado: "Reg."}, {materia: "07 0290", estado: "Reg."}], rendir: [{materia: "07 1330", estado: "Aprob."}, {materia: "07 0290", estado: "Aprob."}] },
        { codigo: "07 0490", nombre: "Psicología de las Organizaciones", anio: 5, semestre: 1, esAnual: false, cursar: [{materia: "07 0170", estado: "Aprob."}, {materia: "07 0390", estado: "Aprob."}, {materia: "07 0210", estado: "Reg."}], rendir: [{materia: "07 0210", estado: "Aprob."}] },
        { codigo: "07 0500", nombre: "Psicoterapia de Grupo", anio: 5, semestre: 1, esAnual: false, cursar: [{materia: "07 0390", estado: "Aprob."}, {materia: "07 0590", estado: "Aprob."}, {materia: "07 0170", estado: "Aprob."}, {materia: "07 0270", estado: "Aprob."}, {materia: "07 1260", estado: "Reg."}, {materia: "07 1330", estado: "Reg."}], rendir: [{materia: "07 1330", estado: "Aprob."}, {materia: "07 1260", estado: "Aprob."}] },
        { codigo: "07 0510", nombre: "Psicología Forense", anio: 5, semestre: 1, esAnual: false, cursar: [{materia: "07 0270", estado: "Aprob."}, {materia: "07 1320", estado: "Aprob."}, {materia: "07 0390", estado: "Reg."}, {materia: "07 0210", estado: "Reg."}], rendir: [{materia: "07 0390", estado: "Aprob."}, {materia: "07 0210", estado: "Aprob."}] },
        { codigo: "09 2250", nombre: "Metodología de la Inv. en Psicología II", anio: 5, semestre: 1, esAnual: false, cursar: [{materia: "07 0120", estado: "Aprob."}, {materia: "07 0410", estado: "Aprob."}, {materia: "07 0420", estado: "Reg."}], rendir: [{materia: "07 0420", estado: "Aprob."}] },
        { codigo: "75 2450", nombre: "Salud Pública", anio: 5, semestre: 1, esAnual: false, cursar: [{materia: "07 0170", estado: "Aprob."}, {materia: "07 0390", estado: "Aprob."}, {materia: "07 1320", estado: "Aprob."}, {materia: "07 1250", estado: "Reg."}], rendir: [{materia: "07 1250", estado: "Aprob."}] },
        { codigo: "09 1520", nombre: "Trabajo Integrador Final", anio: 5, semestre: 2, esAnual: false, cursar: [{materia: "09 0240", estado: "Reg."}, {materia: "09 2250", estado: "Reg."}], rendir: [ {materia:"07 1330", estado:"Aprob."}, {materia:"05 0010", estado:"Aprob."}, {materia:"07 0260", estado:"Aprob."}, {materia:"09 2240", estado:"Aprob."}, {materia:"10 0700", estado:"Aprob."}, {materia:"07 0020", estado:"Aprob."}, {materia:"10 1205", estado:"Aprob."}, {materia:"05 0500", estado:"Aprob."}, {materia:"15 0740", estado:"Aprob."}, {materia:"00 0010", estado:"Aprob."}, {materia:"07 0150", estado:"Aprob."}, {materia:"07 0330", estado:"Aprob."}, {materia:"47 0090", estado:"Aprob."}, {materia:"05 0020", estado:"Aprob."}, {materia:"07 0440", estado:"Aprob."}, {materia:"20 0100", estado:"Aprob."}, {materia:"05 0310", estado:"Aprob."}, {materia:"07 0040", estado:"Aprob."}, {materia:"07 0080", estado:"Aprob."}, {materia:"07 1300", estado:"Aprob."}, {materia:"07 0590", estado:"Aprob."}, {materia:"00 0020", estado:"Aprob."}, {materia:"07 0120", estado:"Aprob."}, {materia:"07 0170", estado:"Aprob."}, {materia:"07 0270", estado:"Aprob."}, {materia:"07 0280", estado:"Aprob."}, {materia:"07 1310", estado:"Aprob."}, {materia:"07 0390", estado:"Aprob."}, {materia:"07 0410", estado:"Aprob."}, {materia:"07 1320", estado:"Aprob."}, {materia:"09 0230", estado:"Aprob."}, {materia:"07 0210", estado:"Aprob."}, {materia:"00 0080", estado:"Aprob."}, {materia:"07 0300", estado:"Aprob."}, {materia:"07 0420", estado:"Aprob."}, {materia:"07 1260", estado:"Aprob."}, {materia:"09 0240", estado:"Aprob."}, {materia:"05 0250", estado: "Aprob."}, {materia:"07 0250", estado:"Aprob."}, {materia:"07 0290", estado:"Aprob."}, {materia:"07 1250", estado:"Aprob."}, {materia:"75 2460", estado:"Aprob."}, {materia:"07 0240", estado:"Aprob."}, {materia:"07 0490", estado:"Aprob."}, {materia:"07 0500", estado:"Aprob."}, {materia:"07 0510", estado:"Aprob."}, {materia:"09 2250", estado:"Aprob."}, {materia:"75 2450", estado:"Aprob."}, {materia:"97 0240", estado:"Aprob."}, {materia:"97 0180", estado:"Aprob."}, {materia:"97 0190", estado:"Aprob."}, {materia:"97 0250", estado:"Aprob."}, {materia:"97 0260", estado:"Aprob."} ] },
        { codigo: "97 0180", nombre: "Práctica Pre Profesional Jurídico Forense", anio: 5, semestre: 2, esAnual: false, cursar: [{materia: "07 0120", estado: "Aprob."}, {materia: "07 0390", estado: "Aprob."}, {materia: "07 0510", estado: "Reg."}, {materia: "07 0290", estado: "Reg."}, {materia: "05 0250", estado: "Reg."}], rendir: [{materia: "05 0250", estado: "Aprob."}, {materia: "07 0290", estado: "Aprob."}, {materia: "07 0510", estado: "Aprob."}] },
        { codigo: "97 0190", nombre: "Práctica Pre Profesional Socio Comunitaria", anio: 5, semestre: 2, esAnual: false, cursar: [{materia: "07 0170", estado: "Aprob."}, {materia: "07 0280", estado: "Aprob."}, {materia: "07 0250", estado: "Reg."}, {materia: "75 2450", estado: "Reg."}, {materia: "07 1250", estado: "Reg."}, {materia: "07 0290", estado: "Reg."}, {materia: "75 2460", estado: "Reg."}], rendir: [{materia: "07 1250", estado: "Aprob."}, {materia: "07 0250", estado: "Aprob."}, {materia: "75 2460", estado: "Aprob."}, {materia: "07 0290", estado: "Aprob."}, {materia: "75 2450", estado: "Aprob."}] },
        { codigo: "97 0240", nombre: "Práctica Pre-Profesional Educacional", anio: 5, semestre: 2, esAnual: false, cursar: [{materia: "07 0590", estado: "Aprob."}, {materia: "07 0120", estado: "Aprob."}, {materia: "07 0270", estado: "Aprob."}, {materia: "07 0410", estado: "Aprob."}, {materia: "07 0290", estado: "Reg."}, {materia: "07 0300", estado: "Reg."}, {materia: "07 0420", estado: "Reg."}], rendir: [{materia: "07 0420", estado: "Aprob."}, {materia: "07 0300", estado: "Aprob."}, {materia: "07 0290", estado: "Aprob."}] },
        { codigo: "97 0250", nombre: "Práctica Pre-Profesional Laboral", anio: 5, semestre: 2, esAnual: false, cursar: [{materia: "07 0270", estado: "Aprob."}, {materia: "07 0390", estado: "Aprob."}, {materia: "07 0170", estado: "Aprob."}, {materia: "07 0590", estado: "Aprob."}, {materia: "07 0410", estado: "Aprob."}, {materia: "07 0120", estado: "Aprob."}, {materia: "07 0290", estado: "Reg."}, {materia: "07 0420", estado: "Reg."}, {materia: "07 0210", estado: "Reg."}], rendir: [{materia: "07 0210", estado: "Aprob."}, {materia: "07 0420", estado: "Aprob."}, {materia: "07 0290", estado: "Aprob."}] },
        { codigo: "97 0260", nombre: "Práctica Pre-Profesional Clínica", anio: 5, semestre: 2, esAnual: false, cursar: [{materia: "07 0390", estado: "Aprob."}, {materia: "07 0170", estado: "Aprob."}, {materia: "07 0120", estado: "Aprob."}, {materia: "07 0270", estado: "Aprob."}, {materia: "07 0410", estado: "Aprob."}, {materia: "07 0590", estado: "Aprob."}, {materia: "75 2460", estado: "Reg."}, {materia: "07 0420", estado: "Reg."}, {materia: "07 1330", estado: "Reg."}, {materia: "07 0290", estado: "Reg."}], rendir: [{materia: "07 1330", estado: "Aprob."}, {materia: "07 0420", estado: "Aprob."}, {materia: "75 2460", estado: "Aprob."}, {materia: "07 0290", estado: "Aprob."}] }
    ];
    
    const mallaContenedor = document.getElementById("malla");
    const TOTAL_SEMESTRES = 10;

    // --- FUNCIONES DE LÓGICA ---

    function aplicarRequisitosInteligentemente(codigo, estadoObjetivo) {
        const materia = materias.find(m => m.codigo === codigo);
        if (!materia) return;

        const requisitos = (estadoObjetivo === 'final') ? materia.rendir : materia.cursar;

        requisitos.forEach(req => {
            const estadoRequerido = (req.estado === 'Aprob.') ? 'final' : 'regular';
            const estadoActual = localStorage.getItem(req.materia);

            if (estadoActual === 'final') {
                aplicarRequisitosInteligentemente(req.materia, estadoRequerido);
                return;
            }
            if (estadoActual === 'regular' && estadoRequerido === 'regular') {
                aplicarRequisitosInteligentemente(req.materia, estadoRequerido);
                return;
            }

            localStorage.setItem(req.materia, estadoRequerido);
            aplicarRequisitosInteligentemente(req.materia, estadoRequerido);
        });
    }

    function puedeEstarEnEstado(codigo, estado) {
        const materia = materias.find(m => m.codigo === codigo);
        if (!materia) return false;
        const requisitos = (estado === 'final') ? materia.rendir : materia.cursar;
        if (requisitos.length === 0) return true;

        return requisitos.every(req => {
            const estadoReq = localStorage.getItem(req.materia);
            if (req.estado === 'Aprob.') return estadoReq === 'final';
            return estadoReq === 'regular' || estadoReq === 'final';
        });
    }

    function validarProgresoCompleto() {
        let algoCambio;
        for (let i = 0; i < 10; i++) {
            algoCambio = false;
            materias.forEach(materia => {
                const estado = localStorage.getItem(materia.codigo);
                if (estado && !puedeEstarEnEstado(materia.codigo, estado)) {
                    localStorage.removeItem(materia.codigo);
                    algoCambio = true;
                }
            });
            if (!algoCambio) break;
        }
    }
    
    // --- GESTIÓN DE CLICS (LÓGICA PRINCIPAL) ---

    function gestionarClicIzquierdo(codigo) {
        const estadoActual = localStorage.getItem(codigo);

        if (estadoActual === null) { // 1er Clic: Vacío -> Regular con autocompletado
            aplicarRequisitosInteligentemente(codigo, 'regular');
            localStorage.setItem(codigo, 'regular');
        } else if (estadoActual === 'regular') { // 2do Clic: Regular -> Final con autocompletado
            aplicarRequisitosInteligentemente(codigo, 'final');
            localStorage.setItem(codigo, 'final');
        } else if (estadoActual === 'final') { // 3er Clic: Final -> Vacío (Borrado Individual)
            localStorage.removeItem(codigo);
        }
        
        actualizarVisualMalla();
    }

    function gestionarClicDerecho(codigo) {
        const confirmDelete = confirm(`¿Estás seguro de que quieres BORRAR esta materia y todas las que dependen de ella?\n\nEsta acción es útil si cometiste un error al autocompletar.`);
        if(confirmDelete) {
            localStorage.removeItem(codigo);
            validarProgresoCompleto();
            actualizarVisualMalla();
        }
    }

    // --- LÓGICA DE LA INTERFAZ ---

    function actualizarVisualMalla() {
        materias.forEach(materia => {
            const divMateria = document.querySelector(`.materia[data-codigo="${materia.codigo}"]`);
            if (!divMateria) return;
            
            divMateria.classList.remove('estado-regular', 'estado-final');
            
            const estadoGuardado = localStorage.getItem(materia.codigo);
            if (estadoGuardado === 'regular') {
                divMateria.classList.add('estado-regular');
            } else if (estadoGuardado === 'final') {
                divMateria.classList.add('estado-final');
            }
        });
    }

    function crearMalla() {
        mallaContenedor.innerHTML = '';
        for (let i = 1; i <= TOTAL_SEMESTRES; i++) {
            const anio = Math.ceil(i / 2);
            const semestreDelAnio = (i % 2 === 0) ? 2 : 1;
            const columna = document.createElement("div");
            columna.classList.add("semestre-columna");
            columna.id = `semestre-${i}`;
            const header = document.createElement("div");
            header.classList.add("semestre-header");
            header.innerText = `${anio}° Año - ${semestreDelAnio}°S`;
            columna.appendChild(header);
            mallaContenedor.appendChild(columna);
        }

        materias.forEach(materia => {
            const semestreIndex = (materia.anio - 1) * 2 + materia.semestre;
            const columna = document.getElementById(`semestre-${semestreIndex}`);
            if (columna) {
                const divMateria = document.createElement("div");
                divMateria.classList.add("materia");
                if (materia.esAnual) divMateria.style.gridColumn = "span 2";
                
                divMateria.dataset.codigo = materia.codigo;
                divMateria.innerHTML = `<strong>${materia.nombre}</strong><span>${materia.codigo}</span>`;
                
                divMateria.addEventListener("click", () => gestionarClicIzquierdo(materia.codigo));
                divMateria.addEventListener("contextmenu", (e) => {
                    e.preventDefault();
                    gestionarClicDerecho(materia.codigo);
                });
                
                divMateria.addEventListener("mouseover", () => {});
                divMateria.addEventListener("mouseout", () => {});
                
                columna.appendChild(divMateria); // LA LÍNEA CRÍTICA
            }
        });

        actualizarVisualMalla();
    }

    crearMalla();
});

function limpiarProgreso() {
    if (confirm('¿Estás seguro de que quieres borrar todo tu progreso? Esta acción no se puede deshacer.')) {
        localStorage.clear();
        location.reload();
    }
}