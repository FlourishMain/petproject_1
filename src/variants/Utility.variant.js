const DownwardFloat = {
  animate: {
    y: [-5, 4],
    transition: {
      type: "spring",
      stiffness: 400,
      duration: 0.6,
      yoyo: Infinity,
    },
  },
};

const ForwardFloat = {
  animate: {
    x: [-5, 4],
    transition: {
      type: "spring",
      stiffness: 400,
      duration: 0.6,
      yoyo: Infinity,
    },
  },
};

export { DownwardFloat, ForwardFloat };
