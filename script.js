document.addEventListener('DOMContentLoaded', function() {
    const message = document.getElementById('message');
    const pdfContainer = document.getElementById('pdf-container');

    // Get the current date and time in IST
    const currentDate = new Date();
    const offset = currentDate.getTimezoneOffset() * 60000; // Get the current timezone offset in milliseconds
    const ISTOffset = 5.5 * 3600000; // IST is UTC+5:30
    const currentISTDate = new Date(currentDate.getTime() + offset + ISTOffset);

    // Set the target time to today 6:30 AM IST
    const targetISTTime = new Date(currentISTDate);
    targetISTTime.setHours(15, 0, 0, 0);

    if (currentISTDate >= targetISTTime) {
        showPDF();
    } else {
        const timeUntilOpen = targetISTTime - currentISTDate;
        setTimeout(showPDF, timeUntilOpen);
    }

    function showPDF() {
        // message.style.display = 'none';
        pdfContainer.style.display = 'block';
        pdfContainer.innerHTML = '<iframe src="java.pdf" width="600" height="500" type="application/pdf"></iframe>';
    }
});
