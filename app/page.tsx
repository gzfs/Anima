"use client";

import { useEffect } from "react";

export default function Home() {
  return (
    <main>
      <button
        onClick={async () => {
          try {
            // Request Bluetooth device
            const device = await navigator.bluetooth.requestDevice({
              filters: [{ services: ["generic_attribute"] }],
            });

            console.log(device);

            // Connect to the device
            const server = await device.gatt!.connect();

            // Get primary services
            const services = await server.getPrimaryServices();

            // Iterate through services and log their UUIDs
            services.forEach((service) => {
              console.log("Service UUID:", service.uuid);
            });
          } catch (error) {
            console.error("Error:", error);
          }
        }}
      >
        Discover
      </button>
    </main>
  );
}
