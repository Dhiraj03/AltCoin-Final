/* The contract address generated in deploy.js is used here to create and
export an instance of tenderFactory at the given address.
*/

import web3 from "./web3";
import Charity from "./build/charity.json";

const instance = new web3.eth.Contract(
  JSON.parse(Charity.interface),
  "0x08213923b6347e6A649997f6f53590594b5Afb34"
);

export default instance;
