const { random: rd, floor: fr } = Math

const random = (snum, cnt) => fr( rd() * cnt ) + snum

const zp = n => (n < 10) ? '0'+n : n

const getPlayTime = s => ( fr(s/60) >= 60) ? zp( fr( s/60/60 ) ) + ':' + zp( fr( s/60%60 ) ) + ':' + zp(s%60) : zp( fr(s/60) ) + ':' + zp(s%60)

const serverInit =  (port) =>  (() => {console.log( 'Server Running http://127.0.0.1:'+port )} )

module.exports = { random, zp, getPlayTime, serverInit }