
import jsPDF from 'jspdf';

export const generateResumePDF = () => {
  const pdf = new jsPDF();
  const lineHeight = 6;
  let yPosition = 20;

  // Helper function to add text with proper spacing
  const addText = (text: string, x: number = 20, fontSize: number = 12, isBold: boolean = false) => {
    pdf.setFontSize(fontSize);
    if (isBold) {
      pdf.setFont('helvetica', 'bold');
    } else {
      pdf.setFont('helvetica', 'normal');
    }
    pdf.text(text, x, yPosition);
    yPosition += lineHeight;
  };

  const addSection = (title: string) => {
    yPosition += 5;
    pdf.setFillColor(41, 128, 185);
    pdf.rect(20, yPosition - 4, 170, 8, 'F');
    pdf.setTextColor(255, 255, 255);
    addText(title, 22, 14, true);
    pdf.setTextColor(0, 0, 0);
    yPosition += 2;
  };

  // Header
  pdf.setFontSize(20);
  pdf.setFont('helvetica', 'bold');
  pdf.text('BHAVANAM GOWTHAM BHARGAV REDDY', 20, yPosition);
  yPosition += 8;
  
  pdf.setFontSize(14);
  pdf.text('B.Tech - CSE - Artificial Intelligence - PIET', 20, yPosition);
  yPosition += 10;

  // Contact Information
  pdf.setFontSize(10);
  pdf.text('Ph: +91-7780125919', 20, yPosition);
  pdf.text('Email: 220303124164@paruluniversity.ac.in', 20, yPosition + 4);
  pdf.text('Inkollu, Andhra Pradesh, India - 523190', 20, yPosition + 8);
  pdf.text('LinkedIn: gowtham-bhargav-562530353', 20, yPosition + 12);
  yPosition += 20;

  // Brief Summary
  addSection('BRIEF SUMMARY');
  const summary = 'Aspiring AI Engineer with a strong passion for Machine Learning, Deep Learning, and Python programming. Self-taught and highly motivated, currently focused on building practical AI projects and learning from experience with real-world datasets. Actively seeking an AI internship opportunity to apply skills, gain industry exposure, and grow under professional mentorship. Adept at quick learning, problem-solving, and working on innovative solutions.';
  const summaryLines = pdf.splitTextToSize(summary, 170);
  summaryLines.forEach((line: string) => {
    addText(line, 20, 10);
  });

  // Education
  addSection('EDUCATION');
  addText('Parul University', 20, 12, true);
  addText('B.Tech - CSE - Artificial Intelligence - PIET | CGPA: 6.05 / 10', 20, 10);
  addText('2022 - 2026', 20, 10);
  yPosition += 3;
  
  addText('Lakshyaa Jr College, Guntur', 20, 12, true);
  addText('12th - BIEAP | Percentage: 68.20 / 100', 20, 10);
  addText('2022', 20, 10);
  yPosition += 3;
  
  addText('Universal High School, Inkollu', 20, 12, true);
  addText('10th - BSEAP | Percentage: 78.67 / 100', 20, 10);
  addText('2020', 20, 10);

  // Projects
  addSection('PROJECTS');
  addText('EMAIL AI AGENT', 20, 12, true);
  addText('18 Jun, 2025 - 25 Jun, 2025 | Key Skills: AUTOMATION WITH AI', 20, 10);
  addText('Project Link: https://n8n.io/', 20, 10);
  yPosition += 3;
  
  addText('Portfolio Website', 20, 12, true);
  addText('16 Jun, 2025 | Key Skills: BUILDING WEBSITE WITH AI', 20, 10);
  addText('Project Link: https://unspoken-campus-echoes.lovable.app/', 20, 10);

  // Check if we need a new page
  if (yPosition > 250) {
    pdf.addPage();
    yPosition = 20;
  }

  // Certifications
  addSection('ASSESSMENTS / CERTIFICATIONS');
  addText('Computer Networks And Internet Protocol', 20, 12, true);
  addText('Aggregate: 61 / 100', 20, 10);
  addText('Key Skills: Computer Networking, Networking, Networking Protocol', 20, 10);
  yPosition += 3;
  
  addText('AI Mastermind', 20, 12, true);
  addText('Subjects: Generative AI (92 / 100)', 20, 10);
  addText('Key Skills: AI, Artificial Intelligence', 20, 10);

  // Personal Interests
  addSection('PERSONAL INTERESTS / HOBBIES');
  addText('• PROBLEM SOLVING WITH AI', 20, 10);
  addText('• CONTENT CREATION', 20, 10);
  addText('• EXPLORING NEW TECH', 20, 10);

  // Web Links
  addSection('WEB LINKS');
  addText('Github: https://github.com/GOWTHAMBHARGAV08', 20, 10);

  // Personal Details
  addSection('PERSONAL DETAILS');
  addText('Gender: Male', 20, 10);
  addText('Date of Birth: 08 Mar, 2005', 20, 10);
  addText('Marital Status: Single', 20, 10);
  addText('Known Languages: Telugu, Hindi, English', 20, 10);
  addText('Phone Numbers: +91-7780125919', 20, 10);
  addText('Emails: 220303124164@paruluniversity.ac.in, gowthambhargav619@gmail.com', 20, 10);
  addText('Current Address: 238, Kishan Vintage, Kamlapura, Vadodara, Gujarat,', 20, 10);
  addText('Inkollu, Andhra Pradesh, India - 523190', 20, 10);

  return pdf;
};

export const downloadResumePDF = () => {
  const pdf = generateResumePDF();
  pdf.save('Gowtham_Bhargav_Resume.pdf');
};
