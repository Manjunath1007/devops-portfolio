# DevOps CI/CD Pipeline Project – Production Recovery & Deployment

## 🚀 Project Overview
This project demonstrates an end-to-end CI/CD pipeline using Jenkins, Docker, and Kubernetes in a multi-node cluster. It focuses on real-world debugging and production recovery scenarios.

---

## 🎯 Objective
- Build CI/CD pipeline using Jenkins
- Deploy application to Kubernetes cluster
- Handle real production failures
- Implement health checks

---

## 🏗️ Architecture

Developer -> GitHub -> Jenkins -> Docker Build -> Kubernetes -> Service -> Health Check

---

## ⚙️ Tools Used
- Jenkins
- Docker
- Kubernetes (k3s)
- GitHub
- Node.js

---

## 📂 Project Structure
assignment-2-production-recovery/
  app.js
  Dockerfile
  package.json
  kubernetes/
    deployment.yaml
    service.yaml
  jenkins/
    Jenkinsfile

---

## 🔧 Pipeline Stages

1. Checkout Code - Pull source from GitHub
2. Debug Workspace - Validate files
3. Build Image - Docker build
4. Deploy - kubectl apply
5. Verify - rollout status
6. Health Check - internal curl via test pod

---

## 🔍 Issues Faced & Fixes

1. Disk Full → docker prune
2. ImageNotFound → containerd import
3. Multi-node issue → image on all nodes
4. Node NotReady → removed faulty node
5. Istio 503 → disabled injection
6. NodePort failure → used internal DNS

---

## ✅ Final Flow
- Build successful
- Deployment successful
- Pods running on multi-node cluster
- Health check passed

---

## 🌐 Access App
Port forward:
 kubectl port-forward svc/account-service 9090:80
Open: http://localhost:9090

---

## 📈 Learnings
- CI/CD design
- Kubernetes debugging
- Docker vs containerd
- Service networking

---

## 🚀 Future Improvements
- Use Docker Hub
- Multi-service pipeline
- Blue-Green deployment
- Monitoring tools

---

## ✅ Status
Project successfully completed and validated with health checks.
