# 🚀 DevOps Portfolio — End-to-End Microservices Deployment with Istio

---

## ✅ Overview

This project demonstrates a complete end-to-end DevOps workflow for building, deploying, and managing a microservices-based application using modern industry tools:

- **Docker** → Containerization  
- **Kubernetes (K3s)** → Orchestration  
- **Istio** → Service Mesh & Advanced Traffic Management  

The system simulates a real-world production environment with features such as scaling, persistent storage, scheduling policies, and advanced deployment strategies like **canary and progressive rollout**.

---

## ✅ Architecture

---

## ✅ Tech Stack

- Docker
- Docker Compose
- Docker Swarm
- Kubernetes (K3s Multi-node cluster)
- Istio (Service Mesh)
- GCP Virtual Machines
- Node.js, Flask, Spring Boot (Microservices)

---

## ✅ Services

| Service        | Technology   | Purpose |
|---------------|-------------|--------|
| Account       | Node.js     | Core service |
| Transaction   | Spring Boot | Handles transactions |
| Notification  | Flask       | Sends notifications |

---

## ✅ Project Phases

---

### 🔹 Phase 1 — Docker (Containerization)

- Created Dockerfiles for each microservice
- Built images and ran containers

✅ **Outcome:**

---

### 🔹 Phase 2 — Docker Compose

- Defined multi-container configuration
- Managed service dependencies and networking

✅ **Outcome:**


---

### 🔹 Phase 3 — Docker Swarm

- Initialized Swarm cluster
- Deployed services with replicas
- Implemented scaling and rolling updates

✅ **Outcome:**

---

### 🔹 Phase 4 — Kubernetes Core

- Created Deployments, Pods, and Services
- Used ClusterIP and NodePort for networking
- Performed scaling and rolling updates

✅ **Outcome:**

---

### 🔹 Phase 5 — Advanced Kubernetes

- Configured **Persistent Volumes (PV)** and **PVC**
- Implemented **Taints & Tolerations**
- Used **NodeSelector** for scheduling
- Ensured data persists across pod restarts

✅ **Outcome:**

---

### 🔹 Phase 6 — Istio Service Mesh

- Installed Istio and configured control plane
- Enabled Envoy sidecar injection
- Created **Gateway, VirtualService, DestinationRule**

✅ **Outcome:**

---

## ✅ Key Achievements

---

### ✅ Service Mesh Enabled

- Envoy sidecar injected into each pod
- All incoming/outgoing traffic flows through proxy

---

### ✅ Canary Deployment (50/50)
- Implemented using Istio VirtualService

---

### ✅ Progressive Rollout (80/20)

- Simulates real production deployment strategy

---

### ✅ Traffic Management

- Used:
  - VirtualService → Traffic routing rules
  - DestinationRule → Version subsets

---

### ✅ Multi-node Kubernetes Cluster

- Configured master and worker node
- Distributed workloads across nodes

---

## ✅ Challenges Faced & Solutions

---

### ❗ 1. Istio Sidecar Injection Failure

**Problem:**
Envoy (`istio-proxy`) was not being injected into pods.

**Solution:**
- Enabled namespace injection
- Used `istioctl kube-inject`
- Recreated deployments

---

### ❗ 2. Traffic Splitting Not Working

**Problem:**
All traffic routed to a single version.

**Solution:**
- Removed conflicting VirtualService
- Ensured correct subsets in DestinationRule
- Verified service selectors

---

---

### ❗ 3. Old Deployment Interfering

**Problem:**
Traffic was hitting old deployment instead of v1/v2.

**Solution:**
- Removed obsolete deployment
- Ensured service points only to versioned pods

---

---

### ❗ 4. No External IP for Istio Gateway

**Problem:**
LoadBalancer showed `<pending>`

**Solution:**
- Used Node IP + NodePort for access

---

---

### ❗ 5. Unable to Verify Traffic Split

**Problem:**
Responses looked identical.

**Solution:**
- Checked service endpoints
- Verified pod distribution
- Confirmed traffic routing via configuration

---

## ✅ Validation Steps

---

### ✅ Verify Pods

```bash
kubectl get pods -l app=account
