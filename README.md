# 2025cloud Project

這個專案包含兩個不同的 Docker Container Image：

1. **Python Flask Web Server**
2. **Node.js Express Web Server**

---

## 🐳 Docker Images

本專案的 Docker Images 已推送至 Docker Hub：

* [jojointhehouse/2025cloud\:flask](https://hub.docker.com/repository/docker/jojointhehouse/2025cloud/tags?page=1&name=flask)
* [jojointhehouse/2025cloud\:node](https://hub.docker.com/repository/docker/jojointhehouse/2025cloud/tags?page=1&name=node)

---

## 🚀 快速開始

### 1. Python Flask Web Server

#### 建立 Image

```bash
docker build -t jojointhehouse/2025cloud:flask -f Dockerfile.web .
```

#### 運行 Container

```bash
docker run -d -p 5000:5000 jojointhehouse/2025cloud:flask
```

開啟瀏覽器進入：

```
http://localhost:5000
```

顯示：

```
Hello, 2025cloud!
```

---

### 2. Node.js Express Web Server

#### 建立 Image

```bash
docker build -t jojointhehouse/2025cloud:node -f Dockerfile.node .
```

#### 運行 Container

```bash
docker run -d -p 8080:8080 jojointhehouse/2025cloud:node
```

開啟瀏覽器進入：

```
http://localhost:8080
```

顯示：

```
Hello, 2025cloud from Node.js!
```

---

## 🔧 使用 GitHub Action 自動化

此專案利用 GitHub Action 實現 Docker Image 的自動化建立與推送：

* 當有程式碼推送到 GitHub 時，自動進行 Docker Build。
* Build 成功後，自動推送到 Docker Hub 的 Repository。

### GitHub Action 配置

* Docker Build 配置於 `.github/workflows/docker-build.yml`
* Docker Push 配置於 `.github/workflows/docker-push.yml`

---

## 🏷️ Image Tag 命名策略

* 使用清晰易懂的標籤（tag），如 `flask`, `node`。
* 每次主要程式變更推送至 `main` branch 後，即自動更新對應 Image。

---

## ⚠️ 注意

* 若 Dockerfile 修改有錯誤，GitHub Action 將自動失敗並通知。
* 可參考 GitHub Action 的 log 進行修正。

---

## 📌 開發相關資訊

* 若有任何問題，請至專案 Issue 留言討論。

感謝您的使用與貢獻！
