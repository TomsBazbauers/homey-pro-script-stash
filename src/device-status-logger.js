let devices = await Homey.devices.getDevices();
let downDevices;

for (const device in Object.values(devices)) {
  if (!device.available) {
    downDevices++;
  }

  await tag(
    "Device is running" + " " + device.name.split(" ")[1],
    device.available ? 1 : 0
  );
}

await tag("Total running", Object.keys(devices).length - downDevices);

return true;
