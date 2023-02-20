const button = document.getElementById('descargarPDF');
button.addEventListener('click', generatePDF);
function generatePDF() {
    const element = document.body;
    html2pdf()
        .set ({
            filename: 'Androetto-TrabajoFinal',
            image: {
                type: 'jpg',
            },
            html2canvas: {
                scale: 3, 
                letterRendering: true,
            },
            jsPDF: {
                unit: "in",
                format: "letter",
                orientation: 'portrait',
            }
        })
        .from(element)
        .save();
}
