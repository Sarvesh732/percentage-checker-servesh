function calculatePercentage() {
    document.getElementById('loading').innerText = "Calculating your percentage...";
    document.getElementById('result').innerText = "";
    document.getElementById('progress-bar').style.width = "0%";

    setTimeout(() => {
        let sub1 = parseFloat(document.getElementById('sub1').value) || 0;
        let sub2 = parseFloat(document.getElementById('sub2').value) || 0;
        let sub3 = parseFloat(document.getElementById('sub3').value) || 0;
        let sub4 = parseFloat(document.getElementById('sub4').value) || 0;
        let sub5 = parseFloat(document.getElementById('sub5').value) || 0;

        let totalMarks = 500; // Total marks for 5 subjects
        let obtainedMarks = sub1 + sub2 + sub3 + sub4 + sub5;
        let percentage = (obtainedMarks / totalMarks) * 100;

        document.getElementById('loading').innerText = "";

        // Display the percentage
        document.getElementById('result').innerText = `Your Percentage: ${percentage.toFixed(2)}%`;

        // Animate the progress bar
        let progress = 0;
        let interval = setInterval(() => {
            progress += 1;
            document.getElementById('progress-bar').style.width = `${progress}%`;
            if (progress >= percentage) clearInterval(interval);
        }, 20);
    }, 1000); // Simulate loading delay
}
