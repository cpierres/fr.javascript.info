function makeWorker() {
    let name = "Pete";
  
    return function() {
      console.log(name);
    };
  }
  
  let name = "John";
  
  // créons une fonction
  let work = makeWorker();
  
  // appelons-la
  work(); // que va-t-elle afficher ?