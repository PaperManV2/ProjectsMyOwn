function getOverlapArea(space, block) {
  // Calculate the horizontal overlap
  const overlapWidth = Math.max(
    0,
    Math.min(space.right, block.right) - Math.max(space.left, block.left)
  );
  // Calculate the vertical overlap
  const overlapHeight = Math.max(
    0,
    Math.min(space.bottom, block.bottom) - Math.max(space.top, block.top)
  );
  // Calculate the overlapping area
  return overlapWidth * overlapHeight;
}

function determineSpace(space1, space2, block) {
  const overlapArea1 = getOverlapArea(space1, block);
  const overlapArea2 = getOverlapArea(space2, block);

  // Compare the overlapping areas
  if (overlapArea1 > overlapArea2) {
    return "space1";
  } else if (overlapArea2 > overlapArea1) {
    return "space2";
  } else {
    return "equal overlap"; // This handles the case when overlap areas are equal
  }
}

// Define the coordinates
const space1 = { right: 835, left: 805, top: 475, bottom: 505 };
const space2 = { right: 835, left: 805, top: 505, bottom: 535 };
const block = { right: 826, left: 798, top: 480, bottom: 508 };

// Determine which space has more hovered block
const result = determineSpace(space1, space2, block);
// console.log(result); // Output the result

const arrayOfOverlaps = [
  { overlap: 105, id: "64" },
  { overlap: 91, id: "73" },
];

const MaxOverlapSpace = Math.max(...arrayOfOverlaps.map((e) => e.overlap));
console.log(MaxOverlapSpace);
