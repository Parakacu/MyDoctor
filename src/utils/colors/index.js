const mainColors = {
    green: "#0BCAD4",
    dark: "#112340",
    grey: "#7d8797",
    grey2: "#E9E9E9",
    dark1: "#112340",
    dark2: "#495A75",
    blue: "#0BCAD4",
    blue2: "#EDFCFD"
};

export const colors = {
    primary: mainColors.green,
    secondary: mainColors.dark1,
    white: "white",
    black: "black",
    text: {
        primary: mainColors.dark,
        secondary: mainColors.grey,
        inactive: mainColors.dark2,
        menuActive: mainColors.blue
    },
    button: {
        primary: {
            background: mainColors.green,
            text: "white"
        },
        secondary: {
            background: "white",
            text: mainColors.dark
        },
    },
    border: {
        primary: mainColors.grey2,
    },
    cardLight: mainColors.blue2
};