export const theme = {
  primary: '#38ac36',
  secondary: '#91c81f',
  gradient: 'linear-gradient(to right, #91c81f, #38ac36)',
  black: (opacity)=>{
    return `rgba(0,0,0,${opacity})`
  },
  // get black() {
  //   return this.black(85)
  // },
  get darkgray() {
    return this.black(65)
  },
  get gray() {
    return this.black(45)
  },
  get lightgray() {
    return this.black(25)
  },
  get whitegray() {
    return this.black(12)
  },
  layout: {
    maxWidth: 960
  },
  boxShadow: `0 8px 12px rgba(0,0,0,.12)`
}