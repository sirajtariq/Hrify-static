const bezier = (t, p0, p1, p2, p3) => (
  Math.pow(1 - t, 3) * p0 +
  3 * Math.pow(1 - t, 2) * t * p1 +
  3 * (1 - t) * Math.pow(t, 2) * p2 +
  Math.pow(t, 3) * p3
);

const p0 = [90, 20];
const p1 = [-30, 150];
const p2 = [-30, 440];
const p3 = [90, 580];

const y_targets = [20, 70, 122, 174, 228, 282, 338, 392, 444, 494, 540, 580];
const points = [];

y_targets.forEach((y, i) => {
  let low = 0, high = 1;
  for (let j = 0; j < 50; j++) {
    const mid = (low + high) / 2;
    if (bezier(mid, p0[1], p1[1], p2[1], p3[1]) < y) {
      low = mid;
    } else {
      high = mid;
    }
  }
  const x = bezier(low, p0[0], p1[0], p2[0], p3[0]);
  points.push({ index: i, step: String(i + 1).padStart(2, '0'), x: Math.round(x), y });
});

console.log(points);
