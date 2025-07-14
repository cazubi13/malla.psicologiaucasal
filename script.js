document.addEventListener("DOMContentLoaded", () => {
    // Asegúrate de que tu array 'materias' completo esté aquí.
    const materias = [
        // ... (LA LISTA COMPLETA DE MATERIAS VA AQUÍ, como en la respuesta anterior)
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
        { codigo: "07 0280", nombre: "Psicología del Deporte", anio: 3, semestre: 1, esAnual: false, cursar: [{materia: "07 0260", estado: "Aprob."}, {materia: "07 0020", estado: "Aprob."}, {materia: "07 0150", estado: "Reg."}, {materia: "20 0100", estado: "Reg."}], rendir: [{materia: "20 0100", estado: "Aprob."}] },
        { codigo: "07 1310", nombre: "Psicopatología Infanto Juvenil", anio: 3, semestre: 1, esAnual: false, cursar: [{materia: "07 0260", estado: "Aprob."}, {materia: "07 0020", estado: "Aprob."}, {materia: "07 0150", estado: "Reg."}, {materia: "07 0080", estado: "Reg."}], rendir: [{materia: "07 0150", estado: "Aprob."}, {materia: "07 0080", estado: "Aprob."}] },
        { codigo: "07 0390", nombre: "Dinámica de Grupo", anio: 3, semestre: 2, esAnual: false, cursar: [{materia: "10 0700", estado: "Aprob."}, {materia: "07 0080", estado: "Reg."}, {materia: "07 0170", estado: "Reg."}], rendir: [{materia: "07 0080", estado: "Aprob."}, {materia: "07 0170", estado: "Aprob."}] },
        { codigo: "07 0410", nombre: "Técnicas Proyectivas I", anio: 3, semestre: 2, esAnual: false, cursar: [{materia: "07 0020", estado: "Aprob."}, {materia: "07 0080", estado: "Reg."}, {materia: "07 0120", estado: "Reg."}, {materia: "07 0150", estado: "Reg."}, {materia: "07 0270", estado: "Reg."}], rendir: [{materia: "07 0150", estado: "Aprob."}, {materia: "07 0080", estado: "Aprob."}, {materia: "07 0270", estado: "Aprob."}, {materia: "07 0120", estado: "Aprob."}] },
        { codigo: "07 1320", nombre: "Psicopatología del Adulto", anio: 3, semestre: 2, esAnual: false, cursar: [{materia: "07 0260", estado: "Aprob."}, {materia: "07 0020", estado: "Aprob."}, {materia: "07 1310", estado: "Reg."}], rendir: [{materia: "07 1310", estado: "Aprob."}] },
        { codigo: "09 0230", nombre: "Seminario I", anio: 3, semestre: 2, esAnual: false, cursar: [], rendir: [] },
        // 4to Año
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
        // 5to Año
        { codigo: "07 0240", nombre: "Psicología Clinica II", anio: 5, semestre: 1, esAnual: true, cursar: [{materia: "07 0270", estado: "Aprob."}, {materia: "07 1320", estado: "Aprob."}, {materia: "07 1330", estado: "Reg."}, {materia: "07 0290", estado: "Reg."}], rendir: [{materia: "07 1330", estado: "Aprob."}, {materia: "07 0290", estado: "Aprob."}] },
        { codigo: "07 0490", nombre: "Psicología de las Organizaciones", anio: 5, semestre: 1, esAnual: false, cursar: [{materia: "07 0170", estado: "Aprob."}, {materia: "07 0390", estado: "Aprob."}, {materia: "07 0210", estado: "Reg."}], rendir: [{materia: "07 0210", estado: "Aprob."}] },
        { codigo: "07 0500", nombre: "Psicoterapia de Grupo", anio: 5, semestre: 1, esAnual: false, cursar: [{materia: "07 0390", estado: "Aprob."}, {materia: "07 0590", estado: "Aprob."}, {materia: "07 0170", estado: "Aprob."}, {materia: "07 0270", estado: "Aprob."}, {materia: "07 1260", estado: "Reg."}, {materia: "07 1330", estado: "Reg."}], rendir: [{materia: "07 1330", estado: "Aprob."}, {materia: "07 1260", estado: "Aprob."}] },
        { codigo: "07 0510", nombre: "Psicología Forense", anio: 5, semestre: 1, esAnual: false, cursar: [{materia: "07 0270", estado: "Aprob."}, {materia: "07 1320", estado: "Aprob."}, {materia: "07 0390", estado: "Reg."}, {materia: "07 0210", estado: "Reg."}], rendir: [{materia: "07 0390", estado: "Aprob."}, {materia: "07 0210", estado: "Aprob."}] },
        { codigo: "09 2250", nombre: "Metodología de la Inv. en Psicología II", anio: 5, semestre: 1, esAnual: false, cursar: [{materia: "07 0120", estado: "Aprob."}, {materia: "07 0410", estado: "Aprob."}, {materia: "07 0420", estado: "Reg."}], rendir: [{materia: "07 0420", estado: "Aprob."}] },
        { codigo: "75 2450", nombre: "Salud Pública", anio: 5, semestre: 1, esAnual: false, cursar: [{materia: "07 0170", estado: "Aprob."}, {materia: "07 0390", estado: "Aprob."}, {materia: "07 1320", estado: "Aprob."}, {materia: "07 1250", estado: "Reg."}], rendir: [{materia: "07 1250", estado: "Aprob."}] },
        { codigo: "09 1520", nombre: "Trabajo Integrador Final", anio: 5, semestre: 2, esAnual: false, cursar: [], rendir: [ {materia:"07 1330", estado:"Aprob."}, {materia:"05 0010", estado:"Aprob."}, {materia:"07 0260", estado:"Aprob."}, {materia:"09 2240", estado:"Aprob."}, {materia:"10 0700", estado:"Aprob."}, {materia:"07 0020", estado:"Aprob."}, {materia:"10 1205", estado:"Aprob."}, {materia:"05 0500", estado:"Aprob."}, {materia:"15 0740", estado:"Aprob."}, {materia:"00 0010", estado:"Aprob."}, {materia:"07 0150", estado:"Aprob."}, {materia:"07 0330", estado:"Aprob."}, {materia:"47 0090", estado:"Aprob."}, {materia:"05 0020", estado:"Aprob."}, {materia:"07 0440", estado:"Aprob."}, {materia:"20 0100", estado:"Aprob."}, {materia:"05 0310", estado:"Aprob."}, {materia:"07 0040", estado:"Aprob."}, {materia:"07 0080", estado:"Aprob."}, {materia:"07 1300", estado:"Aprob."}, {materia:"07 0590", estado:"Aprob."}, {materia:"00 0020", estado:"Aprob."}, {materia:"07 0120", estado:"Aprob."}, {materia:"07 0170", estado:"Aprob."}, {materia:"07 0270", estado:"Aprob."}, {materia:"07 0280", estado:"Aprob."}, {materia:"07 1310", estado:"Aprob."}, {materia:"07 0390", estado:"Aprob."}, {materia:"07 0410", estado:"Aprob."}, {materia:"07 1320", estado:"Aprob."}, {materia:"09 0230", estado:"Aprob."}, {materia:"07 0210", estado:"Aprob."}, {materia:"00 0080", estado:"Aprob."}, {materia:"07 0300", estado:"Aprob."}, {materia:"07 0420", estado:"Aprob."}, {materia:"07 1260", estado:"Aprob."}, {materia:"09 0240", estado:"Aprob."}, {materia:"05 0250", estado:"Aprob."}, {materia:"07 0250", estado:"Aprob."}, {materia:"07 0290", estado:"Aprob."}, {materia:"07 1250", estado:"Aprob."}, {materia:"75 2460", estado:"Aprob."}, {materia:"07 0240", estado:"Aprob."}, {materia:"07 0490", estado:"Aprob."}, {materia:"07 0500", estado:"Aprob."}, {materia:"07 0510", estado:"Aprob."}, {materia:"09 2250", estado:"Aprob."}, {materia:"75 2450", estado:"Aprob."}, {materia:"97 0240", estado:"Aprob."}, {materia:"97 0180", estado:"Aprob."}, {materia:"97 0190", estado:"Aprob."}, {materia:"97 0250", estado:"Aprob."}, {materia:"97 0260", estado:"Aprob."} ] },
        { codigo: "97 0180", nombre: "Práctica Pre Profesional Jurídico Forense", anio: 5, semestre: 2, esAnual: false, cursar: [{materia: "07 0120", estado: "Aprob."}, {materia: "07 0390", estado: "Aprob."}, {materia: "07 0510", estado: "Reg."}, {materia: "07 0290", estado: "Reg."}, {materia: "05 0250", estado: "Reg."}], rendir: [{materia: "05 0250", estado: "Aprob."}, {materia: "07 0290", estado: "Aprob."}, {materia: "07 0510", estado: "Aprob."}] },
        { codigo: "97 0190", nombre: "Práctica Pre Profesional Socio Comunitaria", anio: 5, semestre: 2, esAnual: false, cursar: [{materia: "07 0170", estado: "Aprob."}, {materia: "07 0280", estado: "Aprob."}, {materia: "07 0250", estado: "Reg."}, {materia: "75 2450", estado: "Reg."}, {materia: "07 1250", estado: "Reg."}, {materia: "07 0290", estado: "Reg."}, {materia: "75 2460", estado: "Reg."}], rendir: [{materia: "07 1250", estado: "Aprob."}, {materia: "07 0250", estado: "Aprob."}, {materia: "75 2460", estado: "Aprob."}, {materia: "07 0290", estado: "Aprob."}, {materia: "75 2450", estado: "Aprob."}] },
        { codigo: "97 0240", nombre: "Práctica Pre-Profesional Educacional", anio: 5, semestre: 2, esAnual: false, cursar: [{materia: "07 0590", estado: "Aprob."}, {materia: "07 0120", estado: "Aprob."}, {materia: "07 0270", estado: "Aprob."}, {materia: "07 0410", estado: "Aprob."}, {materia: "07 0290", estado: "Reg."}, {materia: "07 0300", estado: "Reg."}, {materia: "07 0420", estado: "Reg."}], rendir: [{materia: "07 0420", estado: "Aprob."}, {materia: "07 0300", estado: "Aprob."}, {materia: "07 0290", estado: "Aprob."}] },
        { codigo: "97 0250", nombre: "Práctica Pre-Profesional Laboral", anio: 5, semestre: 2, esAnual: false, cursar: [{materia: "07 0270", estado: "Aprob."}, {materia: "07 0390", estado: "Aprob."}, {materia: "07 0170", estado: "Aprob."}, {materia: "07 0590", estado: "Aprob."}, {materia: "07 0410", estado: "Aprob."}, {materia: "07 0120", estado: "Aprob."}, {materia: "07 0290", estado: "Reg."}, {materia: "07 0420", estado: "Reg."}, {materia: "07 0210", estado: "Reg."}], rendir: [{materia: "07 0210", estado: "Aprob."}, {materia: "07 0420", estado: "Aprob."}, {materia: "07 0290", estado: "Aprob."}] },
        { codigo: "97 0260", nombre: "Práctica Pre-Profesional Clínica", anio: 5, semestre: 2, esAnual: false, cursar: [{materia: "07 0390", estado: "Aprob."}, {materia: "07 0170", estado: "Aprob."}, {materia: "07 0120", estado: "Aprob."}, {materia: "07 0270", estado: "Aprob."}, {materia: "07 0410", estado: "Aprob."}, {materia: "07 0590", estado: "Aprob."}, {materia: "75 2460", estado: "Reg."}, {materia: "07 0420", estado: "Reg."}, {materia: "07 1330", estado: "Reg."}, {materia: "07 0290", estado: "Reg."}], rendir: [{materia: "07 1330", estado: "Aprob."}, {materia: "07 0420", estado: "Aprob."}, {materia: "75 2460", estado: "Aprob."}, {materia: "07 0290", estado: "Aprob."}] }
    ];
    const mallaContenedor = document.getElementById("malla");
    const TOTAL_SEMESTRES = 10;

    // --- LÓGICA DE VERIFICACIÓN DE CORRELATIVAS ---

    function puedeRegularizar(codigo) {
        const materia = materias.find(m => m.codigo === codigo);
        if (!materia) return false;

        return materia.cursar.every(req => {
            const estadoReq = localStorage.getItem(req.materia);
            if (req.estado === 'Aprob.') {
                return estadoReq === 'final';
            }
            if (req.estado === 'Reg.') {
                return estadoReq === 'regular' || estadoReq === 'final';
            }
            return true; // Si no especifica estado, se asume que no es un requisito estricto
        });
    }

    function puedeFinalizar(codigo) {
        const materia = materias.find(m => m.codigo === codigo);
        if (!materia || localStorage.getItem(codigo) !== 'regular') {
            return false; // No se puede finalizar si no está regularizada primero
        }

        return materia.rendir.every(req => {
            const estadoReq = localStorage.getItem(req.materia);
            return estadoReq === 'final'; // Para rendir, todas las correlativas deben estar finalizadas
        });
    }

    // --- LÓGICA DE LA INTERFAZ ---

    function actualizarVisualMalla() {
        materias.forEach(materia => {
            const divMateria = document.querySelector(`.materia[data-codigo="${materia.codigo}"]`);
            if (!divMateria) return;
            
            const estadoActual = localStorage.getItem(materia.codigo);

            divMateria.classList.remove('materia-bloqueada');

            if (estadoActual === null) {
                if (!puedeRegularizar(materia.codigo)) {
                    divMateria.classList.add('materia-bloqueada');
                }
            } else if (estadoActual === 'regular') {
                if (!puedeFinalizar(materia.codigo)) {
                    // Opcional: añadir una clase visual para "listo para finalizar pero bloqueado"
                }
            }
        });
    }

    function cambiarEstadoMateria(codigo) {
        const estadoActual = localStorage.getItem(codigo);
        const divMateria = document.querySelector(`.materia[data-codigo="${codigo}"]`);

        if (estadoActual === null) {
            if (puedeRegularizar(codigo)) {
                localStorage.setItem(codigo, 'regular');
                divMateria.classList.add('estado-regular');
            } else {
                alert('No cumples las correlativas para regularizar esta materia.');
            }
        } else if (estadoActual === 'regular') {
            if (puedeFinalizar(codigo)) {
                localStorage.setItem(codigo, 'final');
                divMateria.classList.remove('estado-regular');
                divMateria.classList.add('estado-final');
            } else {
                 alert('No cumples las correlativas para rendir el final de esta materia.');
            }
        } else if (estadoActual === 'final') {
            localStorage.removeItem(codigo);
            divMateria.classList.remove('estado-final');
        }

        actualizarVisualMalla();
    }

    // --- CREACIÓN INICIAL DE LA MALLA ---
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
                if(materia.esAnual) divMateria.style.gridColumn = "span 2";
                
                divMateria.dataset.codigo = materia.codigo;
                divMateria.innerHTML = `<strong>${materia.nombre}</strong><span>${materia.codigo}</span>`;
                
                const estadoGuardado = localStorage.getItem(materia.codigo);
                if (estadoGuardado === 'regular') divMateria.classList.add('estado-regular');
                else if (estadoGuardado === 'final') divMateria.classList.add('estado-final');
                
                divMateria.addEventListener("click", () => cambiarEstadoMateria(materia.codigo));
                // Los eventos de hover se mantienen para la exploración visual
                divMateria.addEventListener("mouseover", () => resaltarCorrelativas(materia.codigo));
                divMateria.addEventListener("mouseout", limpiarResaltado);

                columna.appendChild(divMateria);
            }
        });

        actualizarVisualMalla(); // Llama a la función para establecer el estado inicial de bloqueo/desbloqueo
    }
    
    // Las funciones de hover no cambian, solo son para visualización
    function resaltarCorrelativas(codigoSeleccionado) { /* ...código sin cambios... */ }
    function limpiarResaltado() { /* ...código sin cambios... */ }

    crearMalla();
});

function limpiarProgreso() {
    if (confirm('¿Estás seguro de que quieres borrar todo tu progreso? Esta acción no se puede deshacer.')) {
        localStorage.clear();
        location.reload();
    }
}