# TS-Poseidon

TS-Poseidon is a TypeScript implementation of a simple easy-to-use Logger.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Installation

### NPM

```bash
npm install poseidon-logger
```

### Yarn

```bash
yarn add poseidon-logger
```

## Usage

### Import

```typescript
import Logger from 'poseidon-logger';
```

### Log a message

```typescript
Logger.debug('Hello World!'); // { level: 'debug', message: 'Hello World!' }
Logger.error('Hello World!'); // { level: 'error', message: 'Hello World!' }
Logger.info('Hello World!'); // { level: 'info', message: 'Hello World!' }
Logger.warn('Hello World!'); // { level: 'warn', message: 'Hello World!' }
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details