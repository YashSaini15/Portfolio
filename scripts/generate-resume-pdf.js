const fs = require("fs");
const path = require("path");

function createResumePdf() {
  // Page size: A4 (595.28 x 841.89 pt)
  const pageWidth = 595.28;
  const pageHeight = 841.89;
  const marginX = 40;
  const contentWidth = pageWidth - 2 * marginX; // 515.28 pt

  let stream = "";

  const escapePdf = (str) =>
    str.replace(/\\/g, "\\\\").replace(/\(/g, "\\(").replace(/\)/g, "\\)");

  const drawText = (text, x, y, font, size, r = 0.1, g = 0.1, b = 0.1) => {
    stream += `BT\n/${font} ${size} Tf\n${r} ${g} ${b} rg\n${x.toFixed(2)} ${y.toFixed(2)} Td\n(${escapePdf(text)}) Tj\nET\n`;
  };

  const drawCenteredText = (text, y, font, size, r = 0.1, g = 0.1, b = 0.1) => {
    // Approximate character widths for Helvetica/Helvetica-Bold
    let charWidthRatio = font === "F2" ? 0.58 : 0.52;
    let textWidth = text.length * size * charWidthRatio;
    let x = (pageWidth - textWidth) / 2;
    drawText(text, x, y, font, size, r, g, b);
  };

  const drawLine = (x1, y1, x2, y2, lineWidth = 0.6, r = 0.65, g = 0.65, b = 0.65) => {
    stream += `q\n${lineWidth} w\n${r} ${g} ${b} RG\n${x1.toFixed(2)} ${y1.toFixed(2)} m\n${x2.toFixed(2)} ${y2.toFixed(2)} l\nS\nQ\n`;
  };

  const drawBullet = (x, y, r = 0.2, g = 0.2, b = 0.2) => {
    stream += `q\n${r} ${g} ${b} rg\n${x.toFixed(2)} ${(y + 3).toFixed(2)} 2.2 2.2 re\nf\nQ\n`;
  };

  let curY = 808;

  // 1. NAME & CONTACT HEADER
  drawCenteredText("YASH SAINI", curY, "F2", 18, 0.05, 0.05, 0.08);
  curY -= 15;
  drawCenteredText("MERN Stack Developer | React / Node.js Engineer", curY, "F2", 9.5, 0.2, 0.2, 0.2);
  curY -= 13;
  drawCenteredText("+91 62612-14901  •  Indore, MP, INDIA", curY, "F1", 8.5, 0.3, 0.3, 0.3);
  curY -= 12;
  drawCenteredText("er.saini.yash@gmail.com  •  linkedin.com/in/sainiyash  •  github.com/YashSaini15", curY, "F1", 8.5, 0.2, 0.35, 0.6);
  curY -= 18;

  // Helper for Section Headers
  const drawSectionHeader = (title) => {
    drawText(title, marginX, curY, "F2", 10.5, 0.08, 0.08, 0.12);
    drawLine(marginX, curY - 3, marginX + contentWidth, curY - 3, 0.75, 0.7, 0.7, 0.7);
    curY -= 14;
  };

  // Helper for bullet wrapping
  const wrapText = (text, maxCharsPerLine = 102) => {
    const words = text.split(" ");
    const lines = [];
    let curLine = "";
    for (const w of words) {
      if ((curLine + " " + w).trim().length <= maxCharsPerLine) {
        curLine = (curLine + " " + w).trim();
      } else {
        if (curLine) lines.push(curLine);
        curLine = w;
      }
    }
    if (curLine) lines.push(curLine);
    return lines;
  };

  // 2. PROFESSIONAL SUMMARY
  drawSectionHeader("PROFESSIONAL SUMMARY");
  const summaryLines = wrapText(
    "Software developer with nearly 3 years of experience building scalable web applications. Improved application speed by 20–30% while delivering features used by 200K+ users. Experienced in API integration, secure login systems, state management, and frontend optimization. Open-source contributor to the Renovate project.",
    108
  );
  for (const line of summaryLines) {
    drawText(line, marginX, curY, "F1", 8.8, 0.15, 0.15, 0.18);
    curY -= 11.5;
  }
  curY -= 5;

  // 3. TECHNICAL SKILLS
  drawSectionHeader("TECHNICAL SKILLS");
  const skills = [
    { label: "Frontend:", text: "ReactJS, NextJS, JavaScript (ES6+), TypeScript, Redux Toolkit, Tailwind CSS, Material UI" },
    { label: "Backend & APIs:", text: "NodeJS, ExpressJS, RESTful APIs, JWT Authentication, WebSocket" },
    { label: "Databases:", text: "MongoDB, MySQL" },
    { label: "Testing & Quality:", text: "Jest, React Testing Library, Unit Testing, Code Review" },
    { label: "Tools & DevOps:", text: "Git, GitHub Actions, Docker, AWS Lambda, CI/CD, Vercel" },
  ];

  for (const s of skills) {
    drawText(s.label, marginX, curY, "F2", 8.8, 0.1, 0.1, 0.1);
    drawText(s.text, marginX + 88, curY, "F1", 8.8, 0.2, 0.2, 0.2);
    curY -= 12;
  }
  curY -= 5;

  // 4. KEY ACHIEVEMENTS
  drawSectionHeader("KEY ACHIEVEMENTS");
  const achievements = [
    "Increased UI load speed by 20% through code splitting and frontend optimization.",
    "Contributed to Renovate by improving LibYears calculation and expanding automated test coverage through maintainer-reviewed PRs.",
    "Delivered a scalable analytics dashboard supporting 200K+ users.",
    "Implemented JWT authentication and RBAC workflows, reducing unauthorized access issues by 30%.",
    "Optimized API and MongoDB data workflows, improving processing efficiency by 25%.",
  ];

  for (const ach of achievements) {
    const lines = wrapText(ach, 104);
    drawBullet(marginX + 2, curY);
    for (let i = 0; i < lines.length; i++) {
      drawText(lines[i], marginX + 12, curY, "F1", 8.8, 0.15, 0.15, 0.15);
      curY -= 11;
    }
    curY -= 1;
  }
  curY -= 5;

  // 5. WORK EXPERIENCE
  drawSectionHeader("WORK EXPERIENCE");
  
  // Row 1: Role & Date
  drawText("Software Developer", marginX, curY, "F2", 9.5, 0.08, 0.08, 0.1);
  drawText("Oct 2023 – Present", marginX + contentWidth - 88, curY, "F2", 9, 0.2, 0.2, 0.2);
  curY -= 11.5;

  // Row 2: Company & Location
  drawText("Bestpeers Infosystem Pvt Ltd", marginX, curY, "F3", 9, 0.25, 0.25, 0.25);
  drawText("Indore, INDIA", marginX + contentWidth - 66, curY, "F3", 8.5, 0.35, 0.35, 0.35);
  curY -= 13;

  const expBullets = [
    "Engineered scalable web applications using ReactJS, NextJS, NodeJS, and ExpressJS, improving application performance by 30%.",
    "Combined RESTful APIs with JWT-based authentication, Redux Toolkit state management, and MongoDB-backed modules.",
    "Implemented accessible and responsive UI systems with consistent cross-browser compatibility across production environments.",
    "Collaborated with cross-functional teams to deliver production-ready features within Agile workflows.",
  ];

  for (const b of expBullets) {
    const lines = wrapText(b, 104);
    drawBullet(marginX + 2, curY);
    for (let i = 0; i < lines.length; i++) {
      drawText(lines[i], marginX + 12, curY, "F1", 8.8, 0.15, 0.15, 0.15);
      curY -= 11;
    }
    curY -= 1.5;
  }
  curY -= 5;

  // 6. PROJECTS
  drawSectionHeader("PROJECTS");

  // Project 1
  drawText("Armory Inventory Management", marginX, curY, "F2", 9.2, 0.08, 0.08, 0.1);
  drawText("|  Armory Inventory Management", marginX + 155, curY, "F1", 8.5, 0.2, 0.35, 0.6);
  curY -= 11;
  drawText("NextJS, NodeJS, ExpressJS, MongoDB, Redux Toolkit", marginX, curY, "F3", 8.5, 0.35, 0.35, 0.35);
  curY -= 12;

  const p1Bullets = [
    "Streamlined core armory modules, increasing application performance by 30%.",
    "Added secure backend APIs with RBAC-based protected workflows.",
    "Developed reusable UI components and shared utilities, reducing development time by 25%.",
  ];
  for (const b of p1Bullets) {
    const lines = wrapText(b, 104);
    drawBullet(marginX + 2, curY);
    for (let i = 0; i < lines.length; i++) {
      drawText(lines[i], marginX + 12, curY, "F1", 8.8, 0.15, 0.15, 0.15);
      curY -= 11;
    }
    curY -= 1;
  }
  curY -= 4;

  // Project 2
  drawText("Aviation Week", marginX, curY, "F2", 9.2, 0.08, 0.08, 0.1);
  drawText("|  Aviation Week", marginX + 75, curY, "F1", 8.5, 0.2, 0.35, 0.6);
  curY -= 11;
  drawText("ReactJS, Redux Toolkit, Material UI, Highcharts", marginX, curY, "F3", 8.5, 0.35, 0.35, 0.35);
  curY -= 12;

  const p2Bullets = [
    "Designed an aviation analytics dashboard for visualizing 10K+ data points.",
    "Implemented interactive charting solutions that improved analytical efficiency by 25%.",
    "Crafted accessible UI layouts that scaled seamlessly across multiple screen sizes.",
  ];
  for (const b of p2Bullets) {
    const lines = wrapText(b, 104);
    drawBullet(marginX + 2, curY);
    for (let i = 0; i < lines.length; i++) {
      drawText(lines[i], marginX + 12, curY, "F1", 8.8, 0.15, 0.15, 0.15);
      curY -= 11;
    }
    curY -= 1;
  }
  curY -= 5;

  // 7. EDUCATION
  drawSectionHeader("EDUCATION");
  drawText("Bachelor of Technology in Computer Science Engineering", marginX, curY, "F2", 9, 0.08, 0.08, 0.1);
  drawText("2019 – 2023", marginX + contentWidth - 58, curY, "F2", 8.8, 0.2, 0.2, 0.2);
  curY -= 12;
  drawText("Rajiv Gandhi Proudyogiki Vishwavidyalaya (RGPV) University", marginX, curY, "F3", 8.8, 0.3, 0.3, 0.3);
  drawText("CGPA: 8.29", marginX + contentWidth - 58, curY, "F2", 8.8, 0.1, 0.1, 0.1);

  // BUILD COMPLETE PDF DOCUMENT
  const streamBytes = Buffer.from(stream, "utf-8");
  const streamLength = streamBytes.length;

  let body = `%PDF-1.4
%âãÏÓ
1 0 obj
<<
  /Type /Catalog
  /Pages 2 0 R
>>
endobj
2 0 obj
<<
  /Type /Pages
  /Kids [3 0 R]
  /Count 1
>>
endobj
3 0 obj
<<
  /Type /Page
  /Parent 2 0 R
  /MediaBox [0 0 ${pageWidth} ${pageHeight}]
  /Contents 4 0 R
  /Resources <<
    /Font <<
      /F1 << /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>
      /F2 << /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>
      /F3 << /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Oblique >>
    >>
  >>
>>
endobj
4 0 obj
<<
  /Length ${streamLength}
>>
stream
${stream}
endstream
endobj
`;

  // Calculate xref offsets
  const obj1Offset = body.indexOf("1 0 obj");
  const obj2Offset = body.indexOf("2 0 obj");
  const obj3Offset = body.indexOf("3 0 obj");
  const obj4Offset = body.indexOf("4 0 obj");
  const startXref = body.length;

  const padOffset = (n) => String(n).padStart(10, "0");

  const xref = `xref
0 5
0000000000 65535 f 
${padOffset(obj1Offset)} 00000 n 
${padOffset(obj2Offset)} 00000 n 
${padOffset(obj3Offset)} 00000 n 
${padOffset(obj4Offset)} 00000 n 
trailer
<<
  /Size 5
  /Root 1 0 R
>>
startxref
${startXref}
%%EOF
`;

  const finalPdf = body + xref;
  const outputPath = path.join(__dirname, "..", "public", "resume.pdf");
  fs.writeFileSync(outputPath, finalPdf, "binary");
  console.log("Created resume.pdf at:", outputPath);
}

createResumePdf();
