# Handy collection of small JS utilities
This is all I use in my projects, maybe you will find something useful for yourself.

## Utility types
* Formatters for price, date, phone number and other stuff
* Russian-specific declination
* Utils for the data transformation
* Helper for creating the data structure for the pagination UI component

## Features
* Typescript support

## How to install
Install package via a package manager:
```bash
# using npm
npm install @artmizu/utils

# using yarm
yarn add @artmizu/utils

# using pnpm
pnpm add @artmizu/utils
```

## Utilities are divided into client and universal 
The client includes a browser-specific API, such as a window object, universal utilities can be used universally.
```javascript
// universal utils import
import { formatAddress } from '@artmizu/utils'

// client utils import
import { getWidthWithMargin } from '@artmizu/utils/client'
```