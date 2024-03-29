function assemblyLine() {

  return {
      
      hasClima: obj =>
          Object.assign(obj, {
              temp: 21,
              tempSettings: 21,
              adjustTemp: function () {
                  if (this.temp !== this.tempSettings) {
                      
                      this.temp < this.tempSettings ? (this.temp += 1) : (this.temp -= 1)
          
                  }
              },
          }),

      hasAudio: obj =>

          Object.assign(obj, {
              currentTrack: null,
              nowPlaying: function () {

                  if (this.currentTrack !== null) {

                      console.log(
                          `Now playing '${this.currentTrack.name} by ${this.currentTrack.artist} `

                      )
                  }
              },
          }),

      hasParktronic: obj =>

          Object.assign(obj, {

              checkDistance: function (d) {
                  const distances = {

                      [d < 0.1]: "Beep! Beep! Beep!",
                      [0.1 <= d && d < 0.25]: "Beep! Beep!",
                      [0.25 <= d && d < 0.5]: "Beep!",

                  }

                  console.log(

                      (Object.entries(distances).find(x => x[0] === 'true') || ['true', ""])[1]

                  )
              },
          }),
  }
}
assemblyLine.hasClima(myCar);
console.log(myCar.temp);
myCar.tempSettings = 18;
myCar.adjustTemp();
console.log(myCar.temp);

assemblyLine.hasAudio(myCar);
myCar.currentTrack = {
    name: 'Never Gonna Give You Up',
    artist: 'Rick Astley'
};
myCar.nowPlaying();

assemblyLine.hasParktronic(myCar);
myCar.checkDistance(0.4);
myCar.checkDistance(0.2);

console.log(myCar);