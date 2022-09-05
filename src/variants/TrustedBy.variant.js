const HeadTextVariant = {
  initial: {
    x: "-80vw",
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

const LogoGroupVariant = {
  animate: {
    transition: {
      staggerChildren: 0.4,
    },
  },
};

const LogoIntroVariant = {
  animate: {
    y: [-10, 5, 0],
    transition: {
      type: "spring",
      stiffness: 100,
      duration: 0.5,
      yoyo: 1,
    },
  },
};

export { HeadTextVariant, LogoGroupVariant, LogoIntroVariant };
