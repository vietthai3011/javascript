const ports = [];
const data = {
    number: 0,
};

self.onconnect = (e) => {
    const port = e.ports[0];
    ports.push(port);

    console.log(ports);

    port.onmessage = (e) => {
        switch (e.data) {
            case "__disconnect__":
                const index = ports.indexOf(port);
                ports.splice(index, 1);
                break;

            case "increase":
                data.number++;
                break;

            case "decrease":
                data.number--;
                break;
        }

        ports.forEach((_port) => {
            _port.postMessage(data);
        });
    };
};
