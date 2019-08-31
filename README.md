# Amplify

## Steps

### Initial Setup

- `npx create-react-app my-app`
- `yarn add @aws-amplify/api`
- `amplify init`
- `amplify add hosting`
- `amplify publish`
- `amplify add auth`
  - use URL generated from last step
  - use Google oAuth ([requires manuel setup](https://stackoverflow.com/questions/51549109/how-to-create-a-oauth-client-id-for-gcp-programmatically))
- `amplify add api` (use cognito auth)
- `amplify publish`
- add authorized redirect uri to Google oAuth

### Add new env

- `amplify env add`
- manually add `googleAppIdUserPool` and `googleAppSecretUserPool` to `team-provider-info.json`
- `amplify publish`
- `amplify update auth`
  - Select `Add/Edit signin and signout redirect URIs`
  - add new redirect uri
- `amplify push`

## Demo envs

- **Staging** - [d2vym034yhrzug.cloudfront.net](https://d2vym034yhrzug.cloudfront.net)
- **Staging 2** - [d198wttxd6pjfe.cloudfront.net](https://d198wttxd6pjfe.cloudfront.net)
- **Production** - [d3l1a33zua45mp.cloudfront.net](https://d3l1a33zua45mp.cloudfront.net)
