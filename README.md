
# Setup & Test Shared

1. cd shared
2. npm install
3. npm run prisma-generate
4. npx prisma db push
5. npm run ts-node src/main.ts (should return empty result, jsut testing connection to db)

# Run Serverless funciton

1. cd app1
2. chmod +x create-prisma-layer.sh
3. sls invoke local -f functionone
4. Look at error
