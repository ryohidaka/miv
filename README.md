# Misskey Illust Viewer (MIV)

## 概要

Misskey用 イラスト画像ビュワー

## 事前準備

1. インスタンス一覧に記載のMisskeyインスタンス、もしくは[MiAuth](https://misskey-hub.net/ja/docs/for-developers/api/token/miauth/)に対応したインスタンスでアカウントを作成する
   - [インスタンス一覧](https://raw.githubusercontent.com/misskey-dev/misskey-hub/main/src/instances.json5)

## 使用方法

1. ローカルで実行する

```sh
yarn install
yarn dev
```

2. [ログイン画面](http://localhost:3000/login)を開き、ログイン処理を行う

3. MIVのダッシュボードに遷移する

## 本番環境URL
- https://miv.vercel.app/