Live Data Acquisition Using OPC UA (Node-RED)

This project implements a real-time machine data acquisition pipeline using Node-RED and OPC UA to collect live operational data from an industrial grinding machine.

Data Flow Description

The live data pipeline is implemented as a Node-RED flow, as shown in the figure above, and consists of the following stages:

Timestamp Trigger Node
A timestamp (inject) node is used to periodically trigger the data acquisition process. This node defines the sampling interval at which live data is requested from the machine.

Preprocessing Function Node
The triggered message is passed to a function node, which prepares the OPC UA read request. This includes defining the Node IDs of the machine parameters (e.g. axis values, currents, power, or status variables) to be read from the OPC UA server.

OPC UA Client Node
The OPC UA Client establishes a connection to the grinding machine’s OPC UA server. Upon each trigger, it reads the configured machine variables and retrieves live process data directly from the machine controller.

Post-Processing Function Node
The received OPC UA data is processed in a second function node. Here, the raw values are structured, filtered, or enriched (e.g. adding timestamps, renaming fields, or formatting data for storage or visualization).

Debug / Output Node
The processed live data is sent to a debug node for monitoring and verification. This allows real-time observation of incoming machine data within the Node-RED environment and serves as a validation step before further storage or transmission.

Key Outcome

This flow enables continuous, real-time acquisition of machine data from an OPC UA-enabled grinding machine. The modular Node-RED implementation allows easy extension of the pipeline to include database storage, server communication, dashboards, or predictive analytics, supporting Industry 4.0 and cyber-physical system applications.
