// Input reference name
const refDeviceName = "";

let devices = await Homey.devices.getDevices();
const getAllDevices = (devices) => Object.values(devices).map(device => device.name);
const isDeviceFound = (deviceList, name) => deviceList.includes(name);

const logCapabilities = (device) => {
    for (const capability of Object.values(device.capabilitiesObj)) {
        log(`${capability.title}: ${capability.value}`);
    }
}

const logConnectionStatus = (device) => {
    log(`${device.name} is ${deviceSettings[0]
        ? "connected" : "not connected"} and ${device.available ? "available" : "unavailable"}`);
}

const logState = (isFound, device) => {
    if (isFound) {
        logConnectionStatus(device);
        logCapabilities(device);
    } else {
        log(`Device ${device.name} not found! Check name input!`)
    }
}

let allDevices = getAllDevices(devices);
let isFound = isDeviceFound(allDevices, refDeviceName);

logState(isFound, refDeviceName);