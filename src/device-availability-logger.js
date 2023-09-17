let devices = await Homey.devices.getDevices();
let unavailableDevices;

for (const device in Object.values(devices)) {
  if (!device.available) {
    unavailableDevices++;
  }

  await tag('Device is runnin' + ' ' + device.name.split(' ')[1], device.available ? 1 : 0);
}

await tag('Total running', Object.keys(devices).length - unavailableDevices);
return true;