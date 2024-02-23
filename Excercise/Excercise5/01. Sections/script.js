function create(words) {
   const contentRef = document.getElementById("content");
   
   for(let word of words){
      let divEl = document.createElement("div");
      let pEl = document.createElement("p");
      divEl.appendChild(pEl);
      divEl.addEventListener("click", clickHandler);
      contentRef.appendChild(divEl);
      pEl.textContent=word;
      pEl.style.display = 'none';
   }

   function clickHandler(e){
      let target = e.currentTarget;
      let children = target.children;
      let p = children[0];
      p.style.display = "block";
   }
}