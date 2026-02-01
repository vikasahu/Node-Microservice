# Multi VM Microservice Deployment

## Objective
The main aim of this project is to create multiple Virtual Machines using VirtualBox, connect them using a virtual network, and run a simple microservice application across the VMs.

---

## Project Deliverables

### 1. Document Report

#### Implementation Steps

1. **VirtualBox Setup**
   - VirtualBox was installed on the host system.
   - Two Virtual Machines were created:
     - One **Ubuntu VM** for running the Node.js microservice.
     - One **Windows VM** which is used as client to access the service.

2. **Network Configuration**
   - Both VMs are configured with two network adapters:
     - **NAT Adapter** for internet access.
     - **Host-Only Adapter** for communication between VMs.
   - Because of host-only adapter, both VMs got IP address in same network (`192.168.56.x`).
   - This allows Windows VM to communicate directly with Ubuntu VM.

3. **Microservice Deployment**
   - A simple Node.js microservice is created using Express framework.
   - The service is deployed on Ubuntu VM.
   - The microservice runs on port `3000` and can be accessed from Windows VM browser.

---

### 2. Architecture Design

The architecture contains two virtual machines connected using a private host-only network in VirtualBox.

```mermaid
graph TD
    WinVM[Windows VM<br/>Client<br/>IP: 192.168.56.102]
    UbuntuVM[Ubuntu VM<br/>Node.js Microservice<br/>IP: 192.168.56.103<br/>Port: 3000]

    WinVM -->|HTTP Request| UbuntuVM

    subgraph VirtualBox Host
        WinVM
        UbuntuVM
    end
