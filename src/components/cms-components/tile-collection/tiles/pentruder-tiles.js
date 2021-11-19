import { Tile } from '../../../../utility/constructors';

export const threePEightWireSaw = new Tile(
  '3P8 HF Wire Saw', //Header
  null, //subheader
  null, //image
  'For cuts that are too deep for wall sawing, the powerful and versatile 3P8 HF Wire Saw will cut any depth your job requires. The electric, automatic feed, and high-torque high-frequency motor simplify the start of the wire while extending its life. The 3P8’s light-weight modular component design makes set-up quick and easy. The 3P8 HF Wire Saw operates using the same Pentpak, high-frequency motor, cables, and remote control as Pentruder Wall Saw systems.', //Description
  '/pdp', //Link
  '3P8 HF Wire Saw', //ctaText
  ['3P8 HF Wire Saw'], //Product List
);

export const hfChainSaw = new Tile(
  'CW630 HF Electric Power Cutter', //Header
  null, //subheader
  null, //image
  'Built to complement Pentruder wall saws, the CWF630 is the most powerful electric chainsaw on the market today with up to 9 kW (12 hp) of output power thanks to the digital 400V Pentpak power pack. It is fully compatible with hydraulic 890F4 bars and chains, and cuts up to 25 inches deep. With no emissions or heavy hydraulic hoses, the CWF630 is ideal for indoor and obstructed spaces.', //Description
  '/pdp', //Link
  'CW630 HF Electric Power Cutter', //ctaText
  ['CW630 HF Electric Power Cutter'], //Product List
);

export const pentruderPowerPack = new Tile(
  'Pentpak 427 HF Power Pack', //Header
  null, //subheader
  null, //image
  (() => {return (
    <>
      <p>Operate a full range of Pentruder HF-equipment simply by connecting the same Pentpak, remote control, motor and cables to a wallsaw, a wire saw or the CWF630 HF power cutter. It all fits together and gives unsurpassed flexibility.</p>
      <ul>
        <li>Digital Connector</li>
        <li>Versatile</li>
        <li>Built in EMC-filter</li>
        <li>Protected against short circuit & overloads</li>
        <li>No high peak loads</li>
      </ul>
    </>
  )})(), //Description
  '/pdp', //Link
  'Pentpak 427 HF Power Pack', //ctaText
  ['Pentpak 427 HF Power Pack'], //Product List
);

export const remoteControl = new Tile(
  'Cable Remote Control', //Header
  null, //subheader
  null, //image
  'Cable remote control with ergonomic layout with joystick and rocker switches for smooth operation and reduced operator hand fatigue.', //Description
  '/pdp', //Link
  'Cable Remote Control', //ctaText
  ['Cable Remote Control'], //Product List
);

export const track = new Tile(
  'Pentruder Track', //Header
  null, //subheader
  null, //image
  '', //Description
  '/pdp', //Link
  'Pentruder Track', //ctaText
  ['Pentruder Track'], //Product List
);

export const trackFeet = new Tile(
  'Pentruder Track Feet', //Header
  null, //subheader
  null, //image
  '', //Description
  '/pdp', //Link
  'Pentruder Track Feet', //ctaText
  ['Pentruder Track Feet'], //Product List
);

export const bladeGuards = new Tile(
  'Pentruder Blade Guards', //Header
  null, //subheader
  null, //image
  '', //Description
  '/pdp', //Link
  'Pentruder Blade Guards', //ctaText
  ['Pentruder Blade Guards'], //Product List
);

export const cables = new Tile(
  'Pentruder Cables', //Header
  null, //subheader
  null, //image
  '', //Description
  '/pdp', //Link
  'Pentruder Cables', //ctaText
  ['Pentruder Cables'], //Product List
);

export const bladeFlanges = new Tile(
  'Pentruder Blade Flanges', //Header
  null, //subheader
  null, //image
  '', //Description
  '/pdp', //Link
  'Pentruder Blade Flanges', //ctaText
  ['Pentruder Blade Flanges'], //Product List
);

export const wallSaws = new Tile(
  'Wall/Wire Saws',
  null,
  null,
  'Pentruder offers a high frequency drive system with reliable power and high efficiency to keep you in the cut.  Our wall saws and wire saws are built with the highest quality components: hand built copper rotors, aircraft-grade billet aluminum and precision ground gears, just to name a few. Thanks to the intelligent Pentruder autofeed system, these high frequency machines will always work at maximum power, just like you.',
  '/products/wall-wire-saws',
  'Wall/Wire Saws',
  [],
);

export const pentruderParts = new Tile(
  'Pentruder Parts',
  null,
  null,
  '',
  '/products/pentruder/parts',
  'Pentruder Parts',
  [],
);

export const pentruderAccessories = new Tile(
  'Pentruder Accessories',
  null,
  null,
  '',
  '/products/pentruder/accessories',
  'Pentruder Accessories',
  [],
);

export const eightTwentyHFWalllSaw = new Tile(
  '8-20 HF Wall Saw',
  null,
  null,
  'The Pentruder 8-20HF 4-speed saw head operates with up to a 79 in. blade capacity and 36 in. maximum cutting depth to meet your highest standards and toughest job requirements. The 8-20 HF wall saw is equipped with a 4-speed gearbox and 30HP high-frequency motor, to continuously delivers high torque at all spindle speeds. The 8-20 HP is manufactured with precision-machined, aerospace-quality billet aluminum components for maximum rigidity, lightest weight, and extended life. The patented quick-disconnect blade flange enables you to mount the blade safely and efficiently so that you can get more done faster.',
  '/pdp',
  '8-20 HF Wall Saw',
  ['8-20 HF Wall Saw']
);

export const cbkWallSaw = new Tile(
  'CBK HF Wall Saw',
  null,
  null,
  'A powerful single variable speed saw that delivers up to 30 hp at the spindle. Blade capacity is 63-inch diameter with a maximum cutting depth of 28.5 inches. Long-life low maintenance design with components machined from aerospace billet aluminum for maximum rigidity, quick disconnect blade flanges for easy blade change-outs, and high-quality precision ground gears for durability. An everyday saw that keeps your productivity ahead of the competitors.',
  '/pdp',
  'CBK HF Wall Saw',
  ['CBK HF Wall Saw']
);

export const PentruderWallSaws = [wallSaws];
export const PentruderWireSaws = [threePEightWireSaw];
export const PentruderChainSaws = [hfChainSaw];
export const PentruderParts = [pentruderPowerPack, remoteControl];
export const AllPentruderTiles = [
  cbkWallSaw,
  eightTwentyHFWalllSaw,
  threePEightWireSaw,
  pentruderPowerPack,
  remoteControl,
  hfChainSaw,
];