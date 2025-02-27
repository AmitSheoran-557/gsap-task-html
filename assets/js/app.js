const tl = gsap.timeline();
const mm = gsap.matchMedia();

mm.add("(min-width:1536.98px)", () => {
    gsap.set(".right-arrow-img", {
        left: '-100%',
        top: '24%',
    });
    gsap.set(".text-1", {
        opacity: 0,
        top: "108%",
        padding: '37% 0',
        left: '-20%',
    });
    gsap.set(".text-2", {
        opacity: 0,
        top: "108%",
        padding: '37% 0',
        left: '-20%',
    });
    gsap.set(".text-3", {
        opacity: 0,
        top: "108%",
        padding: '37% 0',
        left: '-20%',
    });
    gsap.set(".corner-text", {
        bottom: '-15%',
        right: '97px',
    })
    ScrollTrigger.create({
        trigger: ".section-1",
        start: "top top",
        end: "100%",
        pin: true,
        animation: tl,
        scrub: 2,
    });


    tl.fromTo(".right-arrow-img", {
        left: "-100%"
    }, {
        left: "1%",
        duration: 5,
    }).fromTo(".corner-text", {
        bottom: '-15%',
        right: '97px',
    }, {
        bottom: '7%',
        duration: 20,
    }).fromTo(".text-1", {
        opacity: 0,
    }, {
        opacity: 1,
        duration: 5,
    }).fromTo(".right-arrow-img", {
        left: "1%"
    }, {
        left: "3%",
        duration: 30,
    }).fromTo(".corner-text", {
        bottom: '7%',
    }, {
        bottom: '35%',
        duration: 30,
    }).fromTo(".text-1", {
        opacity: 1,
    }, {
        opacity: 0,
        duration: 10,
    }).fromTo(".text-2", {
        opacity: 0,
        left: '-20%',
    }, {
        left: '-18%',
        opacity: 1,
        duration: 15,
    }).fromTo(".right-arrow-img", {
        left: "3%"
    }, {
        left: "5%",
        duration: 10,
    }).fromTo(".corner-text", {
        bottom: '35%',
    }, {
        bottom: '70%',
        duration: 20,
    }).fromTo(".text-2", {
        opacity: 1,
    }, {
        opacity: 0,
        duration: 20,
    }).fromTo(".text-3", {
        opacity: 0,
        left: '-20%',
    }, {
        left: '-12%',
        opacity: 1,
        duration: 15,
    }).fromTo(".right-arrow-img", {
        left: "5%"
    }, {
        left: "7%",
        duration: 10,
    })
});

mm.add("(min-width:1280.98px) and (max-width:1536.98px)", () => {
    gsap.set(".right-arrow-img", {
        left: '-100%',
        top: '34%',
    });
    gsap.set(".text-1", {
        opacity: 0,
        padding: '24% 0',
        left: '-25%',
    });
    gsap.set(".text-2", {
        opacity: 0,
        padding: '24% 0',
        left: '-20%',
    });
    gsap.set(".text-3", {
        opacity: 0,
        padding: '24% 0',
        left: '-20%',
    });
    gsap.set(".corner-text", {
        bottom: '-15%',
        right: '-7%',
    })
    ScrollTrigger.create({
        trigger: ".section-1",
        start: "top top",
        end: "100%",
        pin: true,
        animation: tl,
        scrub: 2,
    });


    tl.fromTo(".right-arrow-img", {
        left: "-100%"
    }, {
        left: "1%",
        duration: 20,
    }).fromTo(".corner-text", {
        bottom: '-15%',
        right: '97px',
    }, {
        bottom: '5%',
        duration: 20,
    }).fromTo(".text-1", {
        opacity: 0,
        left: '-20%',
    }, {
        left: '-18%',
        opacity: 1,
        duration: 5,
    }).fromTo(".right-arrow-img", {
        left: "1%"
    }, {
        left: "5%",
        duration: 20,
    }).fromTo(".corner-text", {
        bottom: '5%',
    }, {
        bottom: '35%',
        duration: 20,
    }).fromTo(".text-1", {
        opacity: 1,
    }, {
        opacity: 0,
        duration: 10,
    }).fromTo(".text-2", {
        opacity: 0,
        left: '-20%',
    }, {
        left: '-17%',
        opacity: 1,
        duration: 15,
    }).fromTo(".right-arrow-img", {
        left: "5%"
    }, {
        left: "9%",
        duration: 20,
    }).fromTo(".corner-text", {
        bottom: '35%',
    }, {
        bottom: '65%',
        duration: 40,
    }).fromTo(".text-2", {
        opacity: 1,
    }, {
        opacity: 0,
        duration: 20,
    }).fromTo(".text-3", {
        opacity: 0,
        left: '-20%',
    }, {
        left: '-10%',
        opacity: 1,
        duration: 15,
    }).fromTo(".right-arrow-img", {
        left: "9%"
    }, {
        left: "12%",
        duration: 20,
    })
});

mm.add("(min-width:1023.98px) and (max-width:1280.98px)", () => {
    gsap.set(".right-arrow-img",
        {
            left: '-100%',
            top: '30%'
        });

    gsap.set(".text-1, .text-2, .text-3", {
        opacity: 0,
        padding: '24% 0',
        left: '-20%',
    });

    gsap.set(".corner-text",
        {
            bottom: '-15%',
            right: '-7%'

        });

        ScrollTrigger.create({
            trigger: ".section-1",
            start: "top top",
            end: "100%",
            pin: true,
            animation: tl,
            scrub: 2,
        });

    tl.fromTo(".right-arrow-img", { left: "-100%" }, { left: "1%", duration: 20 })
        .fromTo(".text-1", { opacity: 0, left: '-20%' }, { opacity: 1, duration: 1, left: '-18%' })
        .fromTo(".corner-text", { bottom: '-15%', right: '97px' }, { bottom: '5%', duration: 10 })
        .fromTo(".text-1", { opacity: 1 }, { opacity: 0, duration: 3 })
        .fromTo(".text-2", { opacity: 0 ,left: '-20%'}, { opacity: 1, duration: 2,left: '-14%' })
        .fromTo(".right-arrow-img", { left: "1%" }, { left: "3%", duration: 20 })
        .fromTo(".corner-text", { bottom: '5%' }, { bottom: '35%', duration: 10 })
        .fromTo(".text-2", { opacity: 1 }, { opacity: 0, duration: 3 })
        .fromTo(".text-3", { opacity: 0,left: '-20%' }, { opacity: 1, duration: 2 , left: '-10%'})
        .fromTo(".right-arrow-img", { left: "3%" }, { left: "5%", duration: 20 })
        .fromTo(".corner-text", { bottom: '35%' }, { bottom: '65%', duration: 10 })
});


mm.add("(min-width:767.98px) and (max-width:1023.98px)", () => {
    gsap.set(".right-arrow-img", {
        left: '-100%',
        top: '30%',
    });
    gsap.set(".text-1", {
        opacity: 0,
        padding: '30% 0 0 0',
        left: '30%',
    });
    gsap.set(".text-2", {
        opacity: 0,
        padding: '30% 0 0 0',
        left: '30%',
    });
    gsap.set(".text-3", {
        opacity: 0,
        padding: '30% 0 0 0',
        left: '30%',
    });
    gsap.set(".corner-text", {
        bottom: '-15%',
        right: '-7%',
    })
    ScrollTrigger.create({
        trigger: ".section-1",
        start: "top top",
        end: "100%",
        pin: true,
        animation: tl,
        scrub: 2,
    });


    tl.fromTo(".right-arrow-img", {
        left: "-100%"
    }, {
        left: "10%",
        duration: 40,
    }).fromTo(".corner-text", {
        bottom: '-15%',
        right: '97px',
    }, {
        bottom: '5%',
        duration: 20,
    }).fromTo(".text-1", {
        opacity: 0,
    }, {
        opacity: 1,
        duration: 5,
    }).fromTo(".right-arrow-img", {
        left: "10%"
    }, {
        left: "30%",
        duration: 40,
    }).fromTo(".corner-text", {
        bottom: '5%',
    }, {
        bottom: '15%',
        duration: 20,
    }).fromTo(".text-1", {
        opacity: 1,
    }, {
        opacity: 0,
        duration: 10,
    }).fromTo(".text-2", {
        opacity: 0,
    }, {
        opacity: 1,
        duration: 15,
    }).fromTo(".right-arrow-img", {
        left: "30%"
    }, {
        left: "50%",
        duration: 40,
    }).fromTo(".corner-text", {
        bottom: '15%',
    }, {
        bottom: '25%',
        duration: 20,
    }).fromTo(".text-2", {
        opacity: 1,
    }, {
        opacity: 0,
        duration: 20,
    }).fromTo(".text-3", {
        opacity: 0,
    }, {
        opacity: 1,
        duration: 15,
    })
});

mm.add(" (max-width:767.98px)", () => {
    gsap.set(".right-arrow-img", {
        left: '-100%',
        top: '40%',
    });
    gsap.set(".text-1", {
        opacity: 0,
        padding: '30% 0 0 0',
        left: '5%',
    });
    gsap.set(".text-2", {
        opacity: 0,
        padding: '30% 0 0 0',
        left: '5%',
    });
    gsap.set(".text-3", {
        opacity: 0,
        padding: '30% 0 0 0',
        left: '5%',
    });
    gsap.set(".corner-text", {
        bottom: '-15%',
        right: '-17%',
    })
    ScrollTrigger.create({
        trigger: ".section-1",
        start: "top top",
        end: "100%",
        pin: true,
        animation: tl,
        scrub: 2,
    });


    tl.fromTo(".right-arrow-img", {
        left: "-100%"
    }, {
        left: "10%",
        duration: 40,
    }).fromTo(".corner-text", {
        bottom: '-15%',
        right: '97px',
    }, {
        bottom: '5%',
        duration: 20,
    }).fromTo(".text-1", {
        opacity: 0,
    }, {
        opacity: 1,
        duration: 5,
    }).fromTo(".right-arrow-img", {
        left: "10%"
    }, {
        left: "30%",
        duration: 40,
    }).fromTo(".corner-text", {
        bottom: '5%',
    }, {
        bottom: '15%',
        duration: 20,
    }).fromTo(".text-1", {
        opacity: 1,
    }, {
        opacity: 0,
        duration: 10,
    }).fromTo(".text-2", {
        opacity: 0,
    }, {
        opacity: 1,
        duration: 15,
    }).fromTo(".right-arrow-img", {
        left: "30%"
    }, {
        left: "50%",
        duration: 40,
    }).fromTo(".corner-text", {
        bottom: '15%',
    }, {
        bottom: '25%',
        duration: 20,
    }).fromTo(".text-2", {
        opacity: 1,
    }, {
        opacity: 0,
        duration: 20,
    }).fromTo(".text-3", {
        opacity: 0,
    }, {
        opacity: 1,
        duration: 70,
    })
});