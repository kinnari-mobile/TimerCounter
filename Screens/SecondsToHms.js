export default function SecondsToHms(d) {
    d = Number(d);
    var h = Math.floor(d / 3600);
    var m = Math.floor(d % 3600 / 60);
    var s = Math.floor(d % 3600 % 60);


      let obj = {
        "h": h,
        "m": m,
        "s": s
      };
      return obj;
}
