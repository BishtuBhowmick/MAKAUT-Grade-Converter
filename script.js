function convertGPAtoPercentage() {
  const gpa = parseFloat(document.getElementById("gpaInput").value);
  const result = document.getElementById("gpaToPercResult");
  if (!gpa || gpa < 0 || gpa > 10) {
    result.textContent = "Enter a valid GPA between 0 and 10.";
    return;
  }
  const percentage = (gpa * 10 - 7.5).toFixed(2);
  result.textContent = `Percentage: ${percentage}%`;
}

function convertPercentageToGPA() {
  const perc = parseFloat(document.getElementById("percInput").value);
  const result = document.getElementById("percToGPAResult");
  if (!perc || perc < 0 || perc > 100) {
    result.textContent = "Enter a valid percentage between 0 and 100.";
    return;
  }
  const gpa = ((perc + 7.5) / 10).toFixed(2);
  result.textContent = `GPA: ${gpa}`;
}

function convertMarksToPercentage() {
  const ob = parseFloat(document.getElementById("obtainedMarks").value);
  const tot = parseFloat(document.getElementById("totalMarks").value);
  const result = document.getElementById("marksToPercResult");
  if (!ob || !tot || ob > tot) {
    result.textContent = "Enter valid marks.";
    return;
  }
  const perc = ((ob / tot) * 100).toFixed(2);
  result.textContent = `Percentage: ${perc}%`;
}

function calculateSubjectwisePercentage() {
  const input = document.getElementById("subjectMarks").value.trim().split('\n');
  let totalMarks = 0, totalObtained = 0;
  input.forEach(line => {
    const parts = line.split(" ");
    if (parts.length === 3) {
      totalObtained += parseFloat(parts[1]);
      totalMarks += parseFloat(parts[2]);
    }
  });
  const result = document.getElementById("subjectwisePercResult");
  if (totalMarks === 0) {
    result.textContent = "Invalid input.";
    return;
  }
  const perc = ((totalObtained / totalMarks) * 100).toFixed(2);
  result.textContent = `Total: ${totalObtained}/${totalMarks} → ${perc}%`;
}

function calculateYGPA() {
  const input = document.getElementById("ygpaInput").value.trim().split('\n');
  let totalCreditIndex = 0, totalCredits = 0;
  input.forEach(line => {
    const [gpaStr, creditStr] = line.trim().split(" ");
    const gpa = parseFloat(gpaStr);
    const credit = parseFloat(creditStr);
    if (!isNaN(gpa) && !isNaN(credit)) {
      totalCreditIndex += gpa * credit;
      totalCredits += credit;
    }
  });
  const result = document.getElementById("ygpaResult");
  if (totalCredits === 0) {
    result.textContent = "Invalid input.";
    return;
  }
  const ygpa = (totalCreditIndex / totalCredits).toFixed(2);
  result.textContent = `YGPA: ${ygpa}`;
}
