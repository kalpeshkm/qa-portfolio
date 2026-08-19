/* ============================================================
   QA PORTFOLIO
   MAIN JAVASCRIPT
============================================================ */


/* ===================================== WAIT FOR DOM ====================== */

document.addEventListener("DOMContentLoaded", function () {


    /* ============================== PAGE LOADER ============================== */

    const pageLoader =
        document.getElementById("pageLoader");


    window.addEventListener("load", function () {

        setTimeout(function () {

            pageLoader.classList.add("hidden");

        }, 800);

    });



    /* ========================================================
       HEADER SCROLL EFFECT
    ======================================================== */

    const header =
        document.getElementById("header");


    function updateHeader() {

        if (window.scrollY > 50) {

            header.classList.add("scrolled");

        } else {

            header.classList.remove("scrolled");

        }

    }


    window.addEventListener(
        "scroll",
        updateHeader
    );


    updateHeader();



    /* ============================== MOBILE MENU ============================== */

    const menuToggle =
        document.getElementById("menuToggle");


    const navLinks =
        document.getElementById("navLinks");


    menuToggle.addEventListener(
        "click",
        function () {

            menuToggle.classList.toggle("open");

            navLinks.classList.toggle("open");

        }
    );


    /* Close menu after clicking link */

    const navItems =
        document.querySelectorAll(
            ".nav-links a"
        );


    navItems.forEach(function (link) {

        link.addEventListener(
            "click",
            function () {

                menuToggle.classList.remove(
                    "open"
                );

                navLinks.classList.remove(
                    "open"
                );

            }
        );

    });



    /* ============================== SCROLL PROGRESS ============================== */

    const scrollProgress =
        document.getElementById(
            "scrollProgress"
        );


    function updateScrollProgress() {

        const scrollTop =
            window.scrollY;


        const documentHeight =
            document.documentElement
                .scrollHeight
            - window.innerHeight;


        if (documentHeight <= 0) {

            scrollProgress.style.width =
                "0%";

            return;

        }


        const progress =
            (scrollTop / documentHeight)
            * 100;


        scrollProgress.style.width =
            progress + "%";

    }


    window.addEventListener(
        "scroll",
        updateScrollProgress
    );


    updateScrollProgress();



    /* ============================== SCROLL REVEAL ============================== */

    const revealElements =
        document.querySelectorAll(
            ".reveal"
        );


    const revealObserver =
        new IntersectionObserver(
            function (entries) {

                entries.forEach(
                    function (entry) {

                        if (
                            entry.isIntersecting
                        ) {

                            entry.target
                                .classList
                                .add("visible");

                            revealObserver
                                .unobserve(
                                    entry.target
                                );

                        }

                    }
                );

            },
            {
                threshold: 0.12
            }
        );


    revealElements.forEach(
        function (element) {

            revealObserver.observe(
                element
            );

        }
    );



    /* ======================== ACTIVE NAVIGATION ========================== */

    const sections =
        document.querySelectorAll(
            "main section[id]"
        );


    const navigationLinks =
        document.querySelectorAll(
            ".nav-links a"
        );


    function updateActiveNavigation() {

        let currentSection = "";


        sections.forEach(
            function (section) {

                const sectionTop =
                    section.offsetTop - 150;


                const sectionHeight =
                    section.offsetHeight;


                if (
                    window.scrollY >=
                    sectionTop
                    &&
                    window.scrollY <
                    sectionTop + sectionHeight
                ) {

                    currentSection =
                        section.getAttribute(
                            "id"
                        );

                }

            }
        );


        navigationLinks.forEach(
            function (link) {

                link.classList.remove(
                    "active"
                );


                const href =
                    link.getAttribute(
                        "href"
                    );


                if (
                    href ===
                    "#" + currentSection
                ) {

                    link.classList.add(
                        "active"
                    );

                }

            }
        );

    }


    window.addEventListener(
        "scroll",
        updateActiveNavigation
    );


    updateActiveNavigation();



    /* ================================= BACK TO TOP ========================= */

    const backToTop =
        document.getElementById(
            "backToTop"
        );


    function updateBackToTop() {

        if (window.scrollY > 600) {

            backToTop.classList.add(
                "visible"
            );

        } else {

            backToTop.classList.remove(
                "visible"
            );

        }

    }


    window.addEventListener(
        "scroll",
        updateBackToTop
    );


    backToTop.addEventListener(
        "click",
        function () {

            window.scrollTo({

                top: 0,

                behavior: "smooth"

            });

        }
    );



    /* =============================== CURRENT YEAR ========================== */

    const currentYear =
        document.getElementById(
            "currentYear"
        );


    currentYear.textContent =
        new Date().getFullYear();



    /* ========================================================
       HERO TERMINAL TYPING EFFECT
    ======================================================== */

    const typingStatus =
        document.getElementById(
            "typingStatus"
        );


    const statuses = [

        "SYSTEM_READY",

        "TEST_SUITE_READY",

        "QUALITY_FIRST",

        "AVAILABLE_FOR_HIRE"

    ];


    let statusIndex = 0;


    function typeStatus(text) {

        typingStatus.textContent = "";


        let characterIndex = 0;


        const typeInterval =
            setInterval(
                function () {

                    if (
                        characterIndex
                        < text.length
                    ) {

                        typingStatus.textContent +=
                            text.charAt(
                                characterIndex
                            );

                        characterIndex++;

                    } else {

                        clearInterval(
                            typeInterval
                        );

                    }

                },
                60
            );

    }


    function changeStatus() {

        statusIndex++;


        if (
            statusIndex >=
            statuses.length
        ) {

            statusIndex = 0;

        }


        typeStatus(
            statuses[statusIndex]
        );

    }


    setInterval(
        changeStatus,
        4000
    );



    /* =============================== TERMINAL COMMAND EFFECT ========================== */

    const terminal =
        document.querySelector(
            ".terminal-window"
        );


    if (terminal) {

        terminal.addEventListener(
            "mouseenter",
            function () {

                terminal.style.boxShadow =
                    "0 30px 100px rgba(0,255,136,0.08)";

            }
        );


        terminal.addEventListener(
            "mouseleave",
            function () {

                terminal.style.boxShadow =
                    "0 30px 100px rgba(0,0,0,0.5)";

            }
        );

    }



    /* ============================== SMOOTH SCROLL ====================== */

    document.querySelectorAll(
        'a[href^="#"]'
    ).forEach(
        function (link) {

            link.addEventListener(
                "click",
                function (event) {

                    const targetId =
                        this.getAttribute(
                            "href"
                        );


                    if (
                        targetId === "#"
                        ||
                        targetId === ""
                    ) {

                        return;

                    }


                    const target =
                        document.querySelector(
                            targetId
                        );


                    if (target) {

                        event.preventDefault();


                        target.scrollIntoView({

                            behavior: "smooth",

                            block: "start"

                        });

                    }

                }
            );

        }
    );



    /* ======================== SKILL CARD TILT EFFECT ============================ */

    const cards =
        document.querySelectorAll(
            ".skill-card, .project-card"
        );


    cards.forEach(
        function (card) {

            card.addEventListener(
                "mousemove",
                function (event) {

                    if (
                        window.innerWidth
                        < 800
                    ) {

                        return;

                    }


                    const rect =
                        card.getBoundingClientRect();


                    const x =
                        event.clientX
                        - rect.left;


                    const y =
                        event.clientY
                        - rect.top;


                    const centerX =
                        rect.width / 2;


                    const centerY =
                        rect.height / 2;


                    const rotateX =
                        (
                            y - centerY
                        ) / 30;


                    const rotateY =
                        (
                            centerX - x
                        ) / 30;


                    card.style.transform =
                        `
                        perspective(800px)
                        rotateX(${rotateX}deg)
                        rotateY(${rotateY}deg)
                        translateY(-5px)
                        `;

                }
            );


            card.addEventListener(
                "mouseleave",
                function () {

                    card.style.transform =
                        "";

                }
            );

        }
    );



    /* ===========================  CONSOLE MESSAGE ======================== */

    console.log(
        "%c QA PORTFOLIO ",
        "background:#00ff88;color:#000;font-weight:bold;padding:5px;"
    );


    console.log(
        "Welcome to the QA portfolio."
    );


    console.log(
        "Testing status: READY"
    );

});

// =========================================
// CHATBOT
// =========================================


// Get Elements

const chatbotToggle = document.getElementById("chatbot-toggle");

const chatbot = document.getElementById("chatbot");

const closeChatbot = document.getElementById("close-chatbot");

const userInput = document.getElementById("user-input");

const sendButton = document.getElementById("send-button");

const chatMessages = document.getElementById("chat-messages");


// Open Chatbot

chatbotToggle.addEventListener("click", function () {

    chatbot.classList.toggle("active");

});


// Close Chatbot

closeChatbot.addEventListener("click", function () {

    chatbot.classList.remove("active");

});


// Send Button

sendButton.addEventListener("click", sendMessage);


// Enter Key

userInput.addEventListener("keypress", function (event) {

    if (event.key === "Enter") {

        sendMessage();

    }

});


// Send Message

function sendMessage() {

    const message = userInput.value.trim();

    if (message === "") {

        return;

    }


    // Add User Message

    addMessage(message, "user-message");


    // Clear Input

    userInput.value = "";


    // Bot Typing Effect

    setTimeout(function () {

        const response = getBotResponse(message);

        addMessage(response, "bot-message");

    }, 500);

}


// Add Message Function

function addMessage(message, className) {

    const messageDiv = document.createElement("div");

    messageDiv.classList.add("message");

    messageDiv.classList.add(className);

    messageDiv.innerHTML = message;

    chatMessages.appendChild(messageDiv);


    // Scroll to Latest Message

    chatMessages.scrollTop = chatMessages.scrollHeight;

}


// Suggested Question Function

function askQuestion(question) {

    userInput.value = question;

    sendMessage();

}


// BOT KNOWLEDGE BASE

function getBotResponse(message) {

    const question = message.toLowerCase();


    // ABOUT

    if (
        question.includes("about") ||
        question.includes("who is kalpesh") ||
        question.includes("tell me about kalpesh") ||
        question.includes("introduce")
    ) {

        return `
        👨‍💻 <strong>Kalpesh Mali</strong> is a QA Engineer and Software Tester with 3+ years of experience in Manual and Automation Testing.

        <br><br>

        His main expertise includes Selenium, Java, Playwright, API Testing, Functional Testing and Regression Testing.
        `;

    }


    // EXPERIENCE

    else if (
        question.includes("experience") ||
        question.includes("work experience") ||
        question.includes("career") ||
        question.includes("company")
    ) {

        return `
        💼 Kalpesh has <strong>3+ years of QA experience</strong>.

        <br><br>

        He has worked as:

        <br><br>

        🔹 Sr. QA Analyst – Direct Leadz

        <br>

        🔹 QA Engineer – Vitech Solutions

        <br>

        🔹 Jr. QA Engineer – DUIUX Infotech

        <br><br>

        His work includes Manual Testing, Automation Testing, API Testing, Regression Testing and Defect Management.
        `;

    }


    // SKILLS

    else if (
        question.includes("skill") ||
        question.includes("technology") ||
        question.includes("tools")
    ) {

        return `
        🛠️ <strong>Technical Skills:</strong>

        <br><br>

        💻 Languages:
        Java, Python, SQL, JavaScript

        <br><br>

        🤖 Automation:
        Selenium, Playwright, TestNG, JUnit, Maven

        <br><br>

        🔗 API:
        Postman, REST API, JSON

        <br><br>

        🧰 Tools:
        Jira, Git, GitHub, TestRail, Jenkins, VS Code
        `;

    }


    // SELENIUM

    else if (question.includes("selenium")) {

        return `
        🤖 Yes! Kalpesh has experience using <strong>Selenium with Java</strong> for automation testing.

        <br><br>

        He works with automation frameworks and tools such as:

        <br>

        • Selenium WebDriver

        <br>

        • Java

        <br>

        • TestNG

        <br>

        • Maven

        <br>

        • Page Object Model

        <br>

        • Git & GitHub
        `;

    }


    // PLAYWRIGHT

    else if (question.includes("playwright")) {

        return `
        🎭 Yes! Kalpesh also works with <strong>Playwright</strong> for automation testing.

        <br><br>

        Playwright is used for modern web automation, browser testing and end-to-end testing.
        `;

    }


    // API

    else if (
        question.includes("api") ||
        question.includes("postman") ||
        question.includes("rest")
    ) {

        return `
        🔗 Kalpesh has experience in <strong>API Testing</strong>.

        <br><br>

        He uses Postman for:

        <br>

        • Sending API requests

        <br>

        • Validating status codes

        <br>

        • Validating JSON responses

        <br>

        • Testing REST APIs

        <br>

        • Checking request and response data
        `;

    }


    // PROJECTS

    else if (
        question.includes("project") ||
        question.includes("portfolio work")
    ) {

        return `
        🚀 <strong>Featured Projects:</strong>

        <br><br>

        1️⃣ Djobzy

        <br>

        Online job marketplace testing involving Manual Testing, Automation Testing, Selenium, Regression and API Testing.

        <br><br>

        2️⃣ SSENSE E-Commerce Website

        <br>

        QA testing involving Manual Testing, Automation Testing, Selenium, TestNG and Maven.

        <br><br>

        3️⃣ Mobile Application Testing

        <br>

        Functional and UI testing across multiple devices and screen sizes.
        `;

    }


    // EDUCATION

    else if (
        question.includes("education") ||
        question.includes("degree") ||
        question.includes("college") ||
        question.includes("mca") ||
        question.includes("bca")
    ) {

        return `
        🎓 <strong>Education:</strong>

        <br><br>

        🎓 MCA – G T Patil College, Nandurbar

        <br>

        CGPA: 7.22/10

        <br><br>

        🎓 BCA – R C Patel ACS College, Shirpur

        <br>

        CGPA: 8.64/10
        `;

    }


    // CERTIFICATIONS

    else if (
        question.includes("certification") ||
        question.includes("certificate") ||
        question.includes("istqb") ||
        question.includes("aws")
    ) {

        return `
        🏆 <strong>Certifications:</strong>

        <br><br>

        ✔ ISTQB Foundation Level

        <br>

        ✔ AWS Solutions Architect – Associate

        <br>

        ✔ Introduction to Python Programming
        `;

    }


    // LANGUAGES

    else if (
        question.includes("language") ||
        question.includes("english") ||
        question.includes("hindi") ||
        question.includes("marathi")
    ) {

        return `
        🌍 Kalpesh can communicate in:

        <br><br>

        🇬🇧 English – Professional

        <br>

        🇮🇳 Hindi – Fluent

        <br>

        🇮🇳 Marathi – Native
        `;

    }


    // CONTACT

    else if (
        question.includes("contact") ||
        question.includes("email") ||
        question.includes("phone") ||
        question.includes("reach")
    ) {

        return `
        📩 <strong>You can contact Kalpesh here:</strong>

        <br><br>

        📧 Email: kalpeshkmali@gmail.com

        <br>

        📱 Phone: +91 7378809216

        <br><br>

        Feel free to connect regarding QA, Automation Testing or job opportunities!
        `;

    }


    // HIRE

    else if (
        question.includes("hire") ||
        question.includes("why should we hire") ||
        question.includes("why hire")
    ) {

        return `
        ⭐ Kalpesh brings a combination of:

        <br><br>

        ✔ 3+ years of QA experience

        <br>

        ✔ Manual & Automation Testing

        <br>

        ✔ Selenium & Playwright

        <br>

        ✔ Java & Python

        <br>

        ✔ API Testing

        <br>

        ✔ Jira & Defect Management

        <br>

        ✔ Strong understanding of SDLC and STLC

        <br><br>

        He focuses on identifying issues early and helping teams deliver stable, high-quality software.
        `;

    }


    // MANUAL TESTING

    else if (
        question.includes("manual testing") ||
        question.includes("functional testing") ||
        question.includes("regression")
    ) {

        return `
        🧪 Kalpesh has strong experience in Manual Testing.

        <br><br>

        His testing experience includes:

        <br>

        ✔ Functional Testing

        <br>

        ✔ Regression Testing

        <br>

        ✔ Smoke Testing

        <br>

        ✔ Sanity Testing

        <br>

        ✔ Integration Testing

        <br>

        ✔ End-to-End Testing

        <br>

        ✔ UI Testing
        `;

    }


    // GREETING

    else if (
        question.includes("hello") ||
        question.includes("hi") ||
        question.includes("hey")
    ) {

        return `
        👋 Hello!

        <br><br>

        I'm Kalpesh's Portfolio Assistant.

        You can ask me about his:

        <br><br>

        💼 Experience

        <br>

        🛠️ Skills

        <br>

        🚀 Projects

        <br>

        🎓 Education

        <br>

        🏆 Certifications

        <br>

        📩 Contact Information
        `;

    }


    // DEFAULT RESPONSE

    else {

        return `
        🤔 I don't have a specific answer for that yet.

        <br><br>

        You can ask me about:

        <br>

        • Kalpesh's Experience

        <br>

        • Technical Skills

        <br>

        • Selenium

        <br>

        • Playwright

        <br>

        • API Testing

        <br>

        • Projects

        <br>

        • Education

        <br>

        • Certifications

        <br>

        • Contact Information
        `;

    }

}

