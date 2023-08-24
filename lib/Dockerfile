FROM quay.io/sampandey001/secktor
RUN git clone https://github.com/Saad143ss/Thor-MD /root/Saad143ss_BOt
WORKDIR /root/Saad143ss_BOt/
RUN npm install npm@latest
RUN yarn install --network-concurrency 1
EXPOSE 8000
CMD ["npm", "start"]
 
