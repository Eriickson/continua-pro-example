This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started For Development

##### 1. Create a .env file in root project and add next variables:
* ```NEXT_PUBLIC_API_URL:xxx```
##### 2. Install the packages
``` bash
yarn install
# or
npm install
```
##### 3. Run the development server:
```bash
npm run dev
# or
yarn dev
```
##### 4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


## Getting Started For Production
##### 1. Create a .env file in root project and add next variables:
* ```NEXT_PUBLIC_API_URL:xxx```
##### 2. Run the production server
``` bash
yarn deploy
# or
npm run deploy
```
##### 3. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


## Notes
* **Change default port**
  1. Go to ```./package.json```
  2. Add a new parameter to the scripts *(```start``` or ```dev```)*: ```
-p port number```: 
**Ej:** ```"start": "next start -p 5000"```

.