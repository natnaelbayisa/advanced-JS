const user = {
  id: 1,
  info: {
    name: "PC",
    address: {
      state: "Michigan",
    },
  },
};

if (user != null && user.info != null && user.info.address) {
  console.log(user.info.address.state);
}

//same with the above
console.log(user?.info?.address?.state);
