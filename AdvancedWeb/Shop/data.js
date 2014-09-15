var Races = {
  kobold: {
    title: "Kobold",
    sPrice: 1500,
    size: 25,
    description:  "Kobold: A small, squat humanoid with large pointy ears and yellow glowing eyes."
  },

  goblin: {
    title: "Goblin",
    sPrice: 1200,
    size: 60,
    description:  "Goblin: A medium-sized humanoid driven to cruelty by its evil nature."
  },

  elf: {
    title: "Elf",
    sPrice: 1200,
    size: 60,
    description:  "Elf: A medium-sized creature dedicated to the ruthless protection of nature."
  },

  dwarf: {
    title: "Dwarf",
    sPrice: 1200,
    size: 60,
    description:  "Dwarf: A short, sturdy creature fond of drink and industry."
  },
  
  human: {
    title: "Human",
    sPrice: 1200,
    size: 70,
    description:  "Human: A medium-sized creature prone to great ambition."
  }
};

var Items = {
  // Weapons
  dagger: {
    title: "Dagger",
    price: 90,
    image: "http://i.imgur.com/UjXz4gC.png"
  },
  shortsword: {
    title: "Short Sword",
    price: 100,
    image: "http://i.imgur.com/tcOSIOc.png"
  },
  longsword: {
    title: "Long Sword",
    price: 110,
    image: "http://i.imgur.com/seMJJt2.png"
  },
  battleaxe: {
    title: "Battle Axe",
    price: 90,
    image: "http://i.imgur.com/6W51TqJ.png"
  },
  mace: {
    title: "Mace",
    price: 180,
    image: "http://i.imgur.com/g2EIOa0.png"
  },
  warhammer: {
    title: "Warhammer",
    price: 200,
    image: "http://i.imgur.com/2tGokxs.png"
  },
  spear: {
    title: "Spear",
    price: 110,
    image: "http://i.imgur.com/WBNBrCB.png"
  },

  // Armor
  cap: {
    title: "Cap",
    price: 30,
    image: "http://i.imgur.com/otjWXbd.png"
  },
  helm: {
    title: "Helm",
    price: 50,
    image: "http://i.imgur.com/FDK987j.png"
  },
  leatherarmor: {
    title: "Leather Armor",
    price: 80,
    image: "http://i.imgur.com/6zdvOGG.png"
  },
  mailshirt: {
    title: "Mail Shirt",
    price: 90,
    image: "http://i.imgur.com/4b8x5ul.png"
  },
  breastplate: {
    title: "Breastplate",
    price: 80,
    image: "http://i.imgur.com/8fWzokA.png"
  },
  gauntlets: {
    title: "Gauntlets",
    price: 40,
    image: "http://i.imgur.com/hvutqB7.png"
  },
  lowboots: {
    title: "Low Boots",
    price: 30,
    image: "http://i.imgur.com/2KJqJ8b.png"
  },
  highboots: {
    title: "High Boots",
    price: 40,
    image: "http://i.imgur.com/sI2U1ub.png"
  }
};

var Material = {
  // Materials
  leather: {
    title: "Leather",
    multi: 0.75,
    weight: "Light",
    edge: "None",
    armor: "Very Poor"
  },
  wood: {
    title: "Wood",
    multi: 0.75,
    weight: "Light",
    edge: "Very Poor",
    armor: "Very Poor"
  },
  copper: {
    title: "Copper",
    multi: 1,
    weight: "Heavy",
    edge: "Mediocre",
    armor: "Mediocre"
  },
  silver: {
    title: "Silver",
    multi: 1.5,
    weight: "Very Heavy",
    edge: "Poor",
    armor: "Poor"
  },
  iron: {
    title: "Iron",
    multi: 2,
    weight: "Medium",
    edge: "Good",
    armor: "Good"
  },
  bronze: {
    title: "Bronze",
    multi: 2,
    weight: "Heavy",
    edge: "Good",
    armor: "Good"
  },
  platinum: {
    title: "Platinum",
    multi: 2.5,
    weight: "Extremely Heavy",
    edge: "Very Poor",
    armor: "Poor"
  },
  steel: {
    title: "Steel",
    multi: 5,
    weight: "Medium",
    edge: "Very Good",
    armor: "Very Good"
  },
  adamantine: {
    title: "Adamantine",
    multi: 12,
    weight: "Extremely Light",
    edge: "Exceptional",
    armor: "Exceptional"
  }
};