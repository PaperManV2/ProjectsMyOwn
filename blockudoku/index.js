const block = document.querySelector(".block");
const gridSpaces = document.querySelectorAll(".gridSpace");
const offset = 1;

const coordinates = {
  mouseX: "",
  mouseY: "",
  elementX: "",
  elementY: "",
  dragging: false,
  source: null,
  fullSpace: null,
};

const blocksFunctionality = () => {
  block.addEventListener("mousedown", (e) => {
    startDragging(e);
  });

  document.addEventListener("mousemove", (e) => {
    if (coordinates.dragging) {
      drag(e);
    }
  });

  document.addEventListener("mouseup", () => {
    stopDragging();
  });

  const startDragging = (e) => {
    coordinates.source = e.target;
    coordinates.dragging = true;
  };

  const stopDragging = () => {
    coordinates.dragging = false;
  };

  const drag = (e) => {
    coordinates.mouseX = e.clientX;
    coordinates.mouseY = e.clientY;

    coordinates.elementX =
      coordinates.mouseX - coordinates.source.clientWidth / 2;
    coordinates.elementY =
      coordinates.mouseY - coordinates.source.clientHeight / 2;

    coordinates.source.style.left = coordinates.elementX + "px";
    coordinates.source.style.top = coordinates.elementY + "px";
  };
};
const gridFunctionality = () => {
  let nonEmptySpaces = [];

  const isOverlapping = (gridSpace) => {
    const space = gridSpace.getBoundingClientRect();
    const source = coordinates.source.getBoundingClientRect();
    let result = !(
      space.right < source.left ||
      space.left > source.right ||
      space.bottom < source.top ||
      space.top > source.bottom
    );

    let numbers = [
      space.left,
      space.top,
      space.right,
      space.bottom,
      source.left,
      source.top,
      source.right,
      source.bottom,
    ];

    return [result, numbers];
  };

  const dragOverAndLeave = (e) => {
    if (coordinates.source) {
      nonEmptySpaces = [];
      gridSpaces.forEach((space) => {
        const results = isOverlapping(space);
        if (results[0]) {
          const spaceCordinates = {
            id: space.getAttribute("nr"),
            l: results[1][0],
            t: results[1][1],
            r: results[1][2],
            b: results[1][3],
          };
          space.classList.add("tempStyle1");
          nonEmptySpaces.push(spaceCordinates);
        } else {
          space.classList.remove("tempStyle1");
        }
      });
      // console.clear();
      // console.log(nonEmptySpaces);
    }
  };

  // window.addEventListener("keyup", (e) => {
  //   e.preventDefault();
  //   if (e.key == "Control") {
  //     const tmpTest1 = () => {
  //       const test1 = document
  //         .querySelector("[nr='73']")
  //         .getBoundingClientRect();
  //       const test3 = document
  //         .querySelector("[nr='64']")
  //         .getBoundingClientRect();
  //       const test2 = document.querySelector(".block").getBoundingClientRect();
  //       console.log([test1.left, test1.top, test1.right, test1.bottom]);
  //       console.log([test2.left, test2.top, test2.right, test2.bottom]);
  //       console.log([test3.left, test3.top, test3.right, test3.bottom]);
  //     };
  //     const tmpTest2 = () => {
  //       const testSpace = document
  //         .querySelector("[nr='73']")
  //         .getBoundingClientRect();
  //       const testEl = document.querySelector(".block");

  //       coordinates.source = testEl;

  //       testEl.style.left = 798 + "px";
  //       testEl.style.top = 480 + "px";
  //       dragOverAndLeave();
  //     };
  //     const tmpTest3 = () => {
  //       const test = document.querySelector(".block").getBoundingClientRect();
  //       console.log([test.left, test.top]);
  //     };
  //     const tmpTest4 = () => {
  //       const testBlock = document
  //         .querySelector(".block")
  //         .getBoundingClientRect();
  //     };

  //     tmpTest2();
  //     tmpTest1();
  //   }
  // });

  const dropBlock = () => {
    console.log(nonEmptySpaces);
    let selectedSpace = null;

    const arrayOfOverlaps = [];

    function getOverlapArea(space, block) {
      // Calculate the horizontal overlap
      const overlapWidth = Math.max(
        0,
        Math.min(space.r, block.getBoundingClientRect().right) -
          Math.max(space.l, block.getBoundingClientRect().left)
      );
      // Calculate the vertical overlap
      const overlapHeight = Math.max(
        0,
        Math.min(space.b, block.getBoundingClientRect().bottom) -
          Math.max(space.t, block.getBoundingClientRect().top)
      );
      // Calculate the overlapping area

      const result = {
        overlap: overlapWidth * overlapHeight,
        id: space.id,
        coords: { l: space.l, t: space.t },
      };

      return result;
    }

    nonEmptySpaces.forEach((empty) => {
      arrayOfOverlaps.push(getOverlapArea(empty, coordinates.source));
    });

    const MaxOverlapSpace = arrayOfOverlaps.reduce(
      (max, obj) => (obj.overlap > max.overlap ? obj : max),
      arrayOfOverlaps[0]
    );

    if (coordinates.source && MaxOverlapSpace) {
      coordinates.source.style.left = MaxOverlapSpace.coords.l + 0.05 + "px";
      coordinates.source.style.top = MaxOverlapSpace.coords.t + 0.05 + "px";
      selectedSpace = document.querySelector(`[nr='${MaxOverlapSpace.id}']`);
    }

    console.log(MaxOverlapSpace);
    dragOverAndLeave();
    if (selectedSpace) {
      selectedSpace.classList.remove("tempStyle1");
    }
    coordinates.source = null;
    selectedSpace = null;
  };

  document.addEventListener("mouseup", () => {
    dropBlock();
  });

  document.addEventListener("mousemove", dragOverAndLeave);
};

blocksFunctionality();
gridFunctionality();
