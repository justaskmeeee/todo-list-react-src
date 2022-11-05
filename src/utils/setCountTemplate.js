const setCountTemplate = (count) => {
  return `${count} ${count > 1 ? 'items' : 'item'} left`;
}

export default setCountTemplate;