import client from '@Services/pettake-rest-server/index.js';

const imageAPI = {
  async upload(images) {
    const response = await client.post('/image', images);

    return response.data;
  },
  async delete(image) {
    const response = await client.delete('/image', { data: image });

    return response.data;
  },
};

export default imageAPI;
