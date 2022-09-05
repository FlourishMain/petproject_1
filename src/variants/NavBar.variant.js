const LogoVariant = {
  initial: {
    x: "-100vw",
  },
  animate: {
    x: "0px",
    transition: {
      type: "spring",
      stiffness: 100,
      duration: 2,
    },
  },
};

const NavVariant = {
  initial: {
    y: "-100vh",
  },
  animate: {
    y: "0px",
    transition: {
      type: "spring",
      stiffness: 100,
      duration: 2,
    },
  },
};

export { LogoVariant, NavVariant };
