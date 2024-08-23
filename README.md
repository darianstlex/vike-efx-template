## Vike + React + Effector + SSR

This template is based on Vike + React + Effector.

`vike-react` is not used to have better control over rendering mechanism. 

### Hooks/Events

All standard hooks can be used, plus some extra to control effector values

Data flow:
`+data`: vike hook for initial data preparation if needed
`+onBeforeInit`: hook, fires before page init event on server side, have access to the effector scope
`+pageInitiated`: effector event, fires on page init on server side.
`+onAfterInit`: hook, fires after page init event on server side, have access to the effector scope
`appStarted`: effector event, fires on app start on client side.
`+pageStarted`: effector event, fires on page start on client side.

Development:

```bash
npm i / npm ci
npm run dev
```

## Tests

To run unit tests

```bash
npm run unit
npm run unit:open
npm run unit:coverage
```

To run functional tests

```bash
npm run func
npm run func:open
npm run func:coverage

npm run test:coverage
```

To run all tests wth coverage

```bash
npm run test:coverage
```

## Learn More

To learn more about framework, take a look at the following resources:

- [Vike Documentation](https://vike.dev) - learn about Vike features and API.
