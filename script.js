/* ============================================================
   QA PORTFOLIO
   MAIN JAVASCRIPT
============================================================ */


/* ============================================================
   WAIT FOR DOM
============================================================ */

document.addEventListener("DOMContentLoaded", function () {


    /* ========================================================
       PAGE LOADER
    ======================================================== */

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



    /* ========================================================
       MOBILE MENU
    ======================================================== */

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



    /* ========================================================
       SCROLL PROGRESS
    ======================================================== */

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



    /* ========================================================
       SCROLL REVEAL
    ======================================================== */

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



    /* ========================================================
       ACTIVE NAVIGATION
    ======================================================== */

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



    /* ========================================================
       BACK TO TOP
    ======================================================== */

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



    /* ========================================================
       CURRENT YEAR
    ======================================================== */

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



    /* ========================================================
       TERMINAL COMMAND EFFECT
    ======================================================== */

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



    /* ========================================================
       SMOOTH SCROLL
    ======================================================== */

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



    /* ========================================================
       SKILL CARD TILT EFFECT
    ======================================================== */

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



    /* ========================================================
       CONSOLE MESSAGE
    ======================================================== */

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