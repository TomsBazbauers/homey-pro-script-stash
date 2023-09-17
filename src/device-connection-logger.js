let devices = await Homey.devices.getDevices();
let disconnectedDevices;

for(const device of Object.values(devices)) {
    let sensorSettings = Object.values(device.settings);

    if(!sensorSettings[0]) {
        disconnectedDevices++;
    }

    await tag(device.name.split(' '[1] + 'is connected', sensorSettings[0] ? 1 : 0));
}

await tag('Total connected', Object.keys(devices).length - disconnectedDevices)
return true;