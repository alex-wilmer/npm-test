module.exports = {
  function (x){
    let y = x.split(' ').join().split('');
    for(let i=0; i < y.length; i+2){
      if(i >= y.length){
        return y.join();
      } else {
        y[i].toUpperCase();
      }
    }
  }
}