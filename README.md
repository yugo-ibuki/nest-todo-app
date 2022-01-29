Nest.jsのテンプレートリポジトリになります。

# テンプレートを使う前に
## Nestプロジェクトの名前を変更する
```
mv ./nest-sandbox {your prefered name} 
```

```
// Dockerfile
COPY ./{your prefered name}/package*.json /api-server/
```

```
// docker-compose.yml
source: ./{your prefered name}
```

# run
```
docker-compose up -d --build
```
# setting
```
// access
localhost:3004

db
port: 33306
ROOT_PASSWORD: password
DATABASE: develop
USER: develop
PASSWORD: password
```
