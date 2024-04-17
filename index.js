// code your solution here
function superbowlWin(arrayOfObjects) {
    const win = arrayOfObjects.find(object => object.result === "W");
    return win ? win.year : undefined;
}

const games = [
    { year: 2020, result: "L" },
    { year: 2021, result: "W" },
    { year: 2022, result: "L" },
    { year: 2023, result: "W" }
];

console.log(superbowlWin(games));