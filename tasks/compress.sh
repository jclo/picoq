#!/usr/bin/env bash

NAME=$1
name=$(echo $1 | tr '[:upper:]' '[:lower:]')
VERSION=$2
NPM='private_repo'
DIST='_dist'

if [[ -z ${name} ]]
then
  echo 'You have to provide a name for the NPM package! Aborting ...'
  exit 1
fi

if [[ -z ${VERSION} ]]
then
  echo 'You have to provide a version for the NPM package! Aborting ...'
  exit 1
fi

mkdir -p ${NPM}/${name}/${VERSION}
cp -r ${DIST} ${NPM}/${name}/${VERSION}/${name}
cd ${NPM}/${name}/${VERSION}
tar zcvf ${name}.tgz ${name}/
rm -rf ${name}
echo 'Done!'
