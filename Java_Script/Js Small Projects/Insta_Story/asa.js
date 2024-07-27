var arr = [
  {
    dp: "https://images.unsplash.com/photo-1579505169352-dffafc3fe7b0?auto=format&fit=crop&q=60&w=400&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGluc3RhfGVufDB8fDB8fHww",
    sty: "https://images.unsplash.com/photo-1490195117352-aa267f47f2d9?auto=format&fit=crop&q=60&w=400&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHJhbmRvbSUyMHBlb3BsZXxlbnwwfDB8MHx8fDA%3D",
  },
  {
    dp: "https://plus.unsplash.com/premium_photo-1689530775582-83b8abdb5020?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwZ3V5fGVufDB8MHwwfHx8MA%3D%3D",
    sty: "https://images.unsplash.com/photo-1484688493527-670f98f9b195?auto=format&fit=crop&q=60&w=400&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHJhbmRvbSUyMHBlb3BsZXxlbnwwfDB8MHx8fDA%3D",
  },
  {
    dp: "https://images.unsplash.com/photo-1475403614135-5f1aa0eb5015?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cmFuZG9tJTIwZ3V5fGVufDB8MHwwfHx8MA%3D%3D",
    sty: "https://images.unsplash.com/photo-1508179522353-11ba468c4a1c?auto=format&fit=crop&q=60&w=400&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHJhbmRvbSUyMHBlb3BsZXxlbnwwfDB8MHx8fDA%3D",
  },
  {
    dp: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=60&w=400&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tJTIwcGVvcGxlfGVufDB8MHwwfHx8MA%3D%3D",
    sty: "https://images.unsplash.com/photo-1484863137850-59afcfe05386?auto=format&fit=crop&q=60&w=400&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHJhbmRvbSUyMHBlb3BsZXxlbnwwfDB8MHx8fDA%3D",
  },
  {
    dp: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&q=60&w=400&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmFuZG9tJTIwcGVvcGxlfGVufDB8MHwwfHx8MA%3D%3D",
    sty: "https://images.unsplash.com/photo-1520333789090-1afc82db536a?auto=format&fit=crop&q=60&w=400&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHJhbmRvbSUyMHBlb3BsZXxlbnwwfDB8MHx8fDA%3D",
  },
];
var clutter = "";
arr.forEach(function (elem, idx) {
  clutter += `<div class="story">
          <img
          id="${idx}"
            src="${elem.dp}"
            alt=""
          />
        </div>`;
});
var stories = document.querySelector("#stories");
stories.innerHTML = clutter;
stories.addEventListener("click", function (dets) {
  document.querySelector("#fullScreen").style.display = "block";
  document.querySelector("#fullScreen").style.backgroundImage = `url(${
    arr[dets.target.id].sty
  })`;
  setTimeout(function () {
    document.querySelector("#fullScreen").style.display = "none";
  }, 3000);
});
