/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      spacing: {
        "5px": "5px",
        "10px": "10px",
        "14px": "14px",
        "15px": "15px",
        "20px": "20px",
      },
      boxShadow: {
        "Shadows/Blue/50%/5b": "0px 2px 5px 0px rgba(51, 97, 255, 0.50)",
        "Shadows/Blue/50%/15b": "0px 2px 15px 0px rgba(51, 97, 255, 0.50)",
        "Shadows/Bronze/50%/5b": "0px 2px 5px 0px rgba(204, 116, 41, 0.50);",
        "Shadows/Gray-Blue-30/3%/5b": "0px 2px 5px 0px rgba(38, 51, 77, 0.03)",
        "Shadows/Gray-Blue-30/5%/5b": "0px 2px 5px 0px rgba(38, 51, 77, 0.05)",
        "Shadows/Gray-Blue-30/10%/10b":
          "0px 2px 10px 0px rgba(38, 51, 77, 0.10)",
        "Shadows/Blue/15%/10b": "0px 2px 10px 0px rgba(51, 97, 255, 0.15)",
        "Shadows/Gray-Blue-10/15%/5b": "0px 2px 5px 0px rgba(38, 51, 77, 0.15)",
        "Shadows/Gray-Blue-10/15%/10b":
          "0px 2px 10px 0px rgba(13, 17, 26, 0.15)",
        "Shadows/Gray-Blue-10/15%/15b":
          "0px 2px 15px 0px rgba(13, 17, 26, 0.15)",
        "blue-50-15b": "0px 2px 15px 0px rgba(51, 97, 255, 0.50)",
        "Shadows/Red/30%/5b": "0 2px 5px 0 rgba(230, 46, 46, 0.3)",
      },
    },

    fontFamily: {
      roboto: ["Roboto", "sans-serif"],
    },
    fontSize: {
      m: [
        "0.875rem",
        {
          lineHeight: "1.875rem",
          fontWeight: "900",
        },
      ],
    },

    colors: {
      white: "#FFFFFF",
      line: "#DFE3EB",
      background: "#F7F8FA",
      black: {
        10: "rgba(0, 0, 0, 0.10)",
        20: "rgba(0, 0, 0, 0.20)",
        30: "rgba(0, 0, 0, 0.30)",
        black: {
          10: "rgba(0, 0, 0, 0.10)",
          20: "rgba(0, 0, 0, 0.20)",
        },
      },
      blue: {
        100: "rgba(51, 97, 255, 1)",
        90: "rgba(51, 97, 255, 0.9)",
        80: "rgba(51, 97, 255, 0.8)",
        70: "rgba(51, 97, 255, 0.7)",
        60: "rgba(51, 97, 255, 0.6)",
        50: "rgba(51, 97, 255, 0.5)",
        40: "rgba(51, 97, 255, 0.4)",
        30: "rgba(51, 97, 255, 0.3)",
        20: "rgba(51, 97, 255, 0.2)",
        10: "rgba(51, 97, 255, 0.1)",
        5: "rgba(51, 97, 255, 0.05)",
        blue: "#3361FF",
        "blue-10": "rgba(51, 97, 255, 0.10)",
      },
      "blue-light-1": "#4D74FF",
      "blue-light-2": "#6688FF",
      "blue-dark-1": "#194DFF",
      "blue-dark-2": "#0039FF",
      orange: {
        100: "rgba(255, 102, 51, 1)",
        90: "rgba(255, 102, 51, 0.9)",
        80: "rgba(255, 102, 51, 0.8)",
        70: "rgba(255, 102, 51, 0.7)",
        60: "rgba(255, 102, 51, 0.6)",
        50: "rgba(255, 102, 51, 0.5)",
        40: "rgba(255, 102, 51, 0.4)",
        30: "rgba(255, 102, 51, 0.3)",
        20: "rgba(255, 102, 51, 0.2)",
        10: "rgba(255, 102, 51, 0.1)",
      },
      "orange-light-1": "#FF794D",
      "orange-light-2": "#FF8D66",
      "orange-dark-1": "#E64B17",
      "orange-dark-2": "#CC4314",
      "orange-orange": "#F63",
      "orange-orange-20": "rgba(255, 102, 51, 0.20)",
      purple: {
        100: "rgba(136, 51, 255, 1)",
        90: "rgba(136, 51, 255, 0.9)",
        80: "rgba(136, 51, 255, 0.8)",
        70: "rgba(136, 51, 255, 0.7)",
        60: "rgba(136, 51, 255, 0.6)",
        50: "rgba(136, 51, 255, 0.5)",
        40: "rgba(136, 51, 255, 0.4)",
        30: "rgba(136, 51, 255, 0.3)",
        20: "rgba(136, 51, 255, 0.2)",
        10: "rgba(136, 51, 255, 0.1)",
      },
      "purple-light-1": "#974DFF",
      "purple-light-2": "#A666FF",
      "purple-dark-1": "#7919FF",
      "purple-dark-2": "#6A00FF",

      red: {
        100: "rgba(230, 46, 46, 1)",
        90: "rgba(230, 46, 46, 0.9)",
        80: "rgba(230, 46, 46, 0.8)",
        70: "rgba(230, 46, 46, 0.7)",
        60: "rgba(230, 46, 46, 0.6)",
        50: "rgba(230, 46, 46, 0.5)",
        40: "rgba(230, 46, 46, 0.4)",
        30: "rgba(230, 46, 46, 0.3)",
        20: "rgba(230, 46, 46, 0.2)",
        10: "rgba(230, 46, 46, 0.1)",
      },
      "red-light-1": "#F24949",
      "red-light-2": "#FF6666",
      "red-dark-1": "#CC1414",
      "red-dark-2": "#B20000",

      tiffany: {
        100: "rgba(46, 230, 202, 1)",
        90: "rgba(46, 230, 202, 0.9)",
        80: "rgba(46, 230, 202, 0.8)",
        70: "rgba(46, 230, 202, 0.7)",
        60: "rgba(46, 230, 202, 0.6)",
        50: "rgba(46, 230, 202, 0.5)",
        40: "rgba(46, 230, 202, 0.4)",
        30: "rgba(46, 230, 202, 0.3)",
        20: "rgba(46, 230, 202, 0.2)",
        10: "rgba(46, 230, 202, 0.1)",
      },

      yellow: {
        100: "rgba(255, 203, 51, 1)",
        90: "rgba(255, 203, 51, 0.9)",
        80: "rgba(255, 203, 51, 0.8)",
        70: "rgba(255, 203, 51, 0.7)",
        60: "rgba(255, 203, 51, 0.6)",
        50: "rgba(255, 203, 51, 0.5)",
        40: "rgba(255, 203, 51, 0.4)",
        30: "rgba(255, 203, 51, 0.3)",
        20: "rgba(255, 203, 51, 0.2)",
        10: "rgba(255, 203, 51, 0.1)",
      },

      green: {
        100: "rgba(41, 204, 57, 1)",
        90: "rgba(41, 204, 57, 0.9)",
        80: "rgba(41, 204, 57, 0.8)",
        70: "rgba(41, 204, 57, 0.7)",
        60: "rgba(41, 204, 57, 0.6)",
        50: "rgba(41, 204, 57, 0.5)",
        40: "rgba(41, 204, 57, 0.4)",
        30: "rgba(41, 204, 57, 0.3)",
        20: "rgba(41, 204, 57, 0.2)",
        10: "rgba(41, 204, 57, 0.1)",
      },
      "gray-blue": {
        100: "#FFFFFF",
        99: "#FAFBFC",
        98: "#F7F8FA",
        97: "#F5F6F7",
        96: "#F2F3F5",
        95: "#EDEFF2",
        94: "#E4E7F0",
        93: "#E1E5ED",
        92: "#DFE3EB",
        91: "#DCE0E8",
        90: "#DADEE6",
        85: "#C3CAD9",
        80: "#ADB8CC",
        75: "#99A6BF",
        70: "#7D8FB3",
        65: "#7C8AA6",
        60: "#6B7A99",
        55: "#62708C",
        50: "#4D5E80",
        45: "#3F5073",
        40: "#334466",
        35: "#2D3C59",
        30: "#26334D",
        25: "#202B40",
        20: "#1A2233",
        15: "#131926",
        10: "#0D111A",
      },
      pink: {
        pink: "#E62E7B",
      },
      "bronze-bronze": "#CC7429",
      "bronze-bronze-20": "rgba(204, 116, 41, 0.20)",
      "yellow-green-green-20": "rgba(41, 204, 57, 0.2)",
      "yellow-green-green-dark-2": "#00B211",
      "purple-purple": "#83F",
      "purple-purple-20": "rgba(136, 51, 255, 0.20)",
      "gray-blue-grey-blue-60": "#6B7A99",
    },
  },
  plugins: [],
};
