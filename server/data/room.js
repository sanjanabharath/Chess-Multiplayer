export let room_add = generateRoom();

const generateRoom = () => {
  return Math.floor(Math.random() * Date.now()).toString(36);
};
