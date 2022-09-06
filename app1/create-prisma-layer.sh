echo "Clearing out old layer..."
rm -rf .prisma-layer

echo "Generating Prisma Client"
npm run prisma-generate --prefix ./../shared/ 

echo "Creating Prisma Layer..."
mkdir -p .prisma-layer/nodejs/node_modules/.prisma
mkdir -p .prisma-layer/nodejs/node_modules/@prisma

echo "Copying over @prisma and .prisma to the layer"
cp -r ./../shared/node_modules/.prisma .prisma-layer/nodejs/node_modules
cp -r ./../shared/node_modules/@prisma .prisma-layer/nodejs/node_modules

echo "Copying over the prisma folder, where our SQLite DBs are (not necessary for non-sqlite)"
cp -r ./../shared/prisma .prisma-layer/nodejs/prisma

echo "Layer Built"
