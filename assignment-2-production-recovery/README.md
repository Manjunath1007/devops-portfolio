# DevOps CI/CD Pipeline – Production Recovery & Advanced Deployment

## 🧠 Project Overview
This project simulates a real-world production failure scenario and demonstrates how to recover, stabilize, and optimize a distributed system using DevOps best practices.

---

## 🎯 Objective
- Recover a broken production system
- Build a CI/CD pipeline (Jenkins)
- Implement Canary deployment
- Add health checks and rollback
- Control traffic using Istio

---

## 🏗️ Architecture

Developer -> GitHub -> Jenkins -> Docker -> Kubernetes -> Istio -> Service -> Users

---

## 🔄 End-to-End Flow

1. Code pushed to GitHub
2. Jenkins pipeline triggers
3. Docker image built
4. Deploy v1 (stable)
5. Deploy v2 (canary)
6. Apply Istio traffic rules (90/10 split)
7. Verify deployment
8. Health check
9. Success → Promote | Failure → Rollback

---

## ⚙️ Tech Stack
- Jenkins
- Docker
- Kubernetes (k3s)
- Istio
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
    deployment-v2.yaml
    service.yaml

  istio/
    destination-rule.yaml
    virtual-service.yaml

  jenkins/
    Jenkinsfile

---

## 🔧 Jenkins Pipeline Stages

- Checkout Code
- Build Docker Image
- Deploy v1 (Stable)
- Deploy v2 (Canary)
- Deploy Istio Config
- Verify Deployment
- Health Check
- Promote Canary
- Rollback (on failure)

---

## 🐤 Canary Deployment

v1 → Stable version (90%)
v2 → New version (10%)

---

## 🌐 Istio Traffic Control

- VirtualService → Controls traffic split
- DestinationRule → Defines service versions
- Retry → 2 attempts
- Timeout → 3 seconds

---

## 🔍 Issues Encountered & Fixes

- Disk full → Docker cleanup
- Image issues → containerd import
- Multi-node image sync issues
- Node failures → node removal
- OOMKilled pods → resource limits
- Canary misrouting → label fix

---

## ✅ Final Outcome

- Fully automated CI/CD pipeline
- Kubernetes multi-node deployment
- Canary rollout implemented
- Istio-based traffic control
- Automated rollback on failure

---

## 🌐 Access Application

kubectl port-forward svc/account-service 9090:80

Open: http://localhost:9090

---

## 📈 Key Learnings

- CI/CD pipeline design
- Kubernetes debugging
- Canary deployments
- Istio traffic engineering
- Production recovery strategies

---

## 🚀 Future Improvements

- Docker Hub integration
- Monitoring (Prometheus, Grafana)
- Blue-Green deployment
- Advanced Istio (mTLS, circuit breaker)

---

## ✅ Status

✅ Assignment Completed
✅ Production Recovery Achieved
✅ Fully Automated Deployment
✅ Interview Ready
